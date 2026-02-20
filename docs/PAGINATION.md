# Пагінація в додатку

Цей документ описує уніфікований підхід до пагінації, який використовується в проєкті. Всі агенти та розробники мають слідувати цій інструкції при додаванні пагінації до нових списків.

---

## Архітектура пагінації

Пагінація побудована на:
- **URL-based state** — `page` і `pageSize` зберігаються в query params (наприклад, `?page=2&pageSize=20`)
- **`useQueryPagination`** — хук для синхронізації стану з URL
- **`UniversalPagination`** — UI-компонент для навігації між сторінками

---

## Ключові файли

| Шар | Файл | Призначення |
|-----|------|-------------|
| shared | `src/shared/hooks/useQueryPagination.ts` | Хук для page/filters з URL |
| shared | `src/shared/ui/universal-pagination.tsx` | UI-компонент пагінації |

**Референсні реалізації:**
- Список заявок: `src/app/request/RequestContent.tsx` (пагінація + фільтри)
- Список пропозицій: `src/features/proposals/ui/ProposalList.tsx` (пагінація без фільтрів)

---

## Інструкція: додати пагінацію до нового списку

### Крок 1. Типи запиту та відповіді (entities)

Створіть або розширте інтерфейси в `entities/<entity>/types/`:

**Request:**
```typescript
// entities/<entity>/types/requests/Get<Entity>s.ts
export interface IGet<Entity>sRequest {
  page?: number;
  pageSize?: number;
  // ... інші фільтри (search, category тощо)
}
```

**Response:**
```typescript
// entities/<entity>/types/responses/Get<Entity>s.ts
export interface IGet<Entity>sResponse {
  results: <Entity>[];
  count: number;        // загальна кількість записів
  page?: number;
  pageSize?: number;
  totalPages?: number;  // опційно, якщо повертає бекенд
}
```

---

### Крок 2. Сервіс (entities)

Метод API має приймати `searchParams` і передавати їх як query params:

```typescript
// entities/<entity>/services/<entity>Service.ts
async get(
  searchParams: IGet<Entity>sRequest = {},
  config?: AxiosRequestConfig,
): Promise<IGet<Entity>sResponse> {
  return (await api.get(ENDPOINTS.<ENTITY>.BASE, { params: searchParams, ...config })).data;
}
```

Якщо бекенд повертає тільки масив, нормалізуйте відповідь:

```typescript
const items = Array.isArray(data) ? data : (data?.results ?? []);
const count = typeof data?.count === 'number' ? data.count : items.length;
return {
  results: items.map(normalize),
  count,
  page: data?.page ?? searchParams.page ?? 1,
  pageSize: data?.pageSize ?? searchParams.pageSize,
  totalPages: data?.totalPages ?? (searchParams.pageSize ? Math.ceil(count / searchParams.pageSize) : undefined),
};
```

---

### Крок 3. Хук або store (entities)

**Варіант A — React Query хук:**
```typescript
// entities/<entity>/hooks/use<Entity>s.ts
export const use<Entity>s = (
  parentId?: string,  // якщо список за parent (наприклад requestId)
  params?: IGet<Entity>sRequest,
) => {
  return useQuery({
    queryKey: ['<entity>s', 'list', parentId, params?.page, params?.pageSize],
    queryFn: async () => {
      const data = await entityService.get(parentId, params ?? {});
      return schema.parse(data);
    },
    enabled: !!parentId,
  });
};
```

**Варіант B — Zustand store:**
```typescript
// entities/<entity>/store/<entity>Store.ts
fetch<Entity>s: async (params?: IGet<Entity>sRequest) => {
  const data = await entityService.get(params ?? {});
  set((state) => { state.items = data; });
}
```

---

### Крок 4. UI-компонент списку (features або app)

Підключіть `useQueryPagination` і `UniversalPagination`:

```typescript
import { useQueryPagination } from '@shared/hooks';
import { UniversalPagination } from '@shared/ui/universal-pagination';
import { useMemo } from 'react';

// Без фільтрів (тільки page/pageSize):
const paginationOptions = useMemo(() => ({ pageSize: 10 }), []);
const { page, pageSize, setPage } = useQueryPagination<Record<string, never>>(paginationOptions);

const { data } = use<Entity>s(parentId, { page, pageSize });

const items = data?.results ?? [];
const totalCount = data?.count ?? items.length;
const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

const handlePageChange = (newPage: number) => {
  setPage(newPage);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

return (
  <>
    {items.map((item) => <ItemCard key={item._id} item={item} />)}
    {totalPages > 1 && (
      <UniversalPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="mt-6"
      />
    )}
  </>
);
```

**З фільтрами** (наприклад, search, category):

```typescript
const { page, pageSize, setPage, filters, setFilter } = useQueryPagination<{
  category: string;
  search: string;
}>({ pageSize: 20 });

useEffect(() => {
  fetchItems({ page, pageSize, ...filters });
}, [page, pageSize, filters]);
```

---

## API useQueryPagination

```typescript
const {
  page,           // поточна сторінка (з URL)
  pageSize,       // розмір сторінки
  filters,        // фільтри з URL
  setPage,        // (page: number) => void
  setFilters,     // (filters) => void — скидає page на 1
  setFilter,      // (key, value) => void
  resetFilters,   // () => void
  queryParams,    // { ...filters, page, pageSize }
} = useQueryPagination<T>(options);
```

**Опції:**
- `pageSize` — розмір сторінки (default: 20)
- `pageParam` — назва query param для сторінки (default: `'page'`)
- `pageSizeParam` — назва query param для pageSize (default: `'pageSize'`)
- `initialFilters` — початкові значення фільтрів
- `serialize` / `deserialize` — для складних фільтрів

---

## API UniversalPagination

```tsx
<UniversalPagination
  currentPage={page}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  className="mt-6"
  variant="default" | "mini"   // опційно
  previousLabel="Попередня"    // опційно
  nextLabel="Наступна"        // опційно
/>
```

Компонент не рендериться, якщо `totalPages <= 1`.

---

## Конвенції

1. **Query params:** завжди `page` (1-based) і `pageSize`. Не використовувати `offset`/`limit` в URL.
2. **pageSize:** 20 для довгих списків, 10 для вкладених (наприклад, пропозиції на сторінці заявки).
3. **Scroll:** при зміні сторінки викликати `window.scrollTo({ top: 0, behavior: 'smooth' })`.
4. **Бекенд:** очікує `page` та `pageSize` як query params. Відповідь має містити `results` і `count` (мінімум).
5. **Fallback:** якщо бекенд не повертає `count`, використовувати `results.length` (тоді totalPages = 1 при пагінації на беку).

---

## Checklist для нової пагінації

- [ ] Створено `IGet<Entity>sRequest` з `page`, `pageSize` (та інші фільтри)
- [ ] Розширено `IGet<Entity>sResponse` полями `count`, `results`
- [ ] Сервіс приймає `searchParams` і передає в `api.get(..., { params })`
- [ ] Хук/store приймає params і передає в сервіс
- [ ] Використано `useQueryPagination` у компоненті списку
- [ ] Передано `{ page, pageSize }` у хук завантаження даних
- [ ] Додано `UniversalPagination` при `totalPages > 1`
- [ ] При зміні сторінки викликано `setPage` + `scrollTo`
