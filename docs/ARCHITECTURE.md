# Детальний опис архітектури проєкту MOOC Frontend

## Загальна інформація

Проєкт побудований на базі **Feature-Sliced Design (FSD)** архітектури - методології організації frontend коду, яка дозволяє створювати масштабовані та підтримувані додатки.

### Технологічний стек

- **React 19** - UI бібліотека
- **TypeScript** - типізація
- **Vite** - збірщик та dev-сервер
- **Zustand** - state management з Immer middleware
- **React Router v7** - маршрутизація
- **Axios** - HTTP клієнт
- **Lingui** - інтернаціоналізація (i18n)
- **React Hook Form** - робота з формами
- **SCSS** - стилізація
- **Tailwind CSS** - utility-first CSS фреймворк
- **React Toastify** - нотифікації
- **Framer Motion** - анімації

---

## Структура проєкту (Feature-Sliced Design)

Проєкт організований за принципами FSD з наступними шарами:

```
src/
├── app/          # Ініціалізація додатку, конфігурація, глобальні налаштування
├── pages/        # Сторінки додатку (композиція widgets та features)
├── widgets/      # Складні композитні компоненти (Header, Footer, Courses)
├── features/     # Бізнес-функціональність (OnlineCourseCard, LoginModal)
├── entities/     # Бізнес-сутності (Course, User, Auth, Review)
└── shared/       # Переіспользувані компоненти, утиліти, API
```

### Правила залежностей (Import Rules)

**Важливо:** Імпорти можуть йти тільки "вниз" по шарах:

- `app` → може імпортувати з усіх шарів
- `pages` → може імпортувати з `widgets`, `features`, `entities`, `shared`
- `widgets` → може імпортувати з `features`, `entities`, `shared`
- `features` → може імпортувати з `entities`, `shared`
- `entities` → може імпортувати з `shared`
- `shared` → не може імпортувати з інших шарів

**Заборонено:**
- `entities` → `features`
- `shared` → `entities`
- Циклічні залежності між модулями одного шару

---

## Детальний опис шарів

### 1. App Layer (`src/app/`)

**Призначення:** Ініціалізація додатку, глобальна конфігурація, провайдери.

#### Структура:
```
app/
├── config/           # Конфігураційні файли (vite-env.d.ts)
├── entrypoint/       # Точка входу додатку
│   ├── App.tsx       # Головний компонент
│   └── main.tsx      # Ініціалізація React
├── hooks/            # Глобальні хуки додатку
│   └── useGetUserData.ts  # Хук для завантаження даних користувача
├── router/           # Конфігурація роутингу
│   ├── router.tsx    # Визначення маршрутів
│   ├── routes.ts     # Константи маршрутів
│   └── rootLayout.tsx # Корневий layout
└── styles/           # Глобальні стилі
    ├── index.css
    ├── index.scss
    └── normalize.css
```

#### Ключові особливості:

**App.tsx:**
- Ініціалізує Lingui для інтернаціоналізації
- Завантажує переклади динамічно залежно від локалі
- Використовує `useGetUserData` для автоматичного завантаження даних користувача
- Налаштовує `RouterProvider` та `ToastContainer`

**Router (router.tsx):**
- Використовує `createBrowserRouter` з React Router v7
- Всі сторінки завантажуються через `lazy()` для code splitting
- Всі маршрути обгорнуті в `RootLayout`
- Реалізовано fallback на головну сторінку для невідомих маршрутів

**Routes (routes.ts):**
- Всі маршрути визначені як константи об'єкта
- Використовуються для типобезпечного навігування

**useGetUserData:**
- Автоматично завантажує дані користувача та збережені курси при автентифікації
- Використовує `setTimeout` для обходу проблеми з встановленням Authorization header

---

### 2. Pages Layer (`src/pages/`)

**Призначення:** Сторінки додатку - композиція widgets та features.

#### Структура:
```
pages/
├── app/
│   ├── Home/         # Головна сторінка
│   └── Search/       # Сторінка пошуку
├── auth/
│   ├── Login/        # Сторінка входу
│   └── Signup/       # Сторінка реєстрації
├── courses/
│   ├── Course/       # Детальна сторінка курсу
│   ├── Courses/      # Список курсів
│   ├── CategoryCourses/  # Курси за категорією
│   └── Search/       # Пошук курсів
├── blog/
│   ├── Blog/         # Список блогів
│   └── BlogItem/     # Детальна сторінка блогу
├── careers/
│   ├── Career/       # Детальна сторінка кар'єри
│   └── CategoryCareers/  # Кар'єри за категорією
└── faq/
    └── Faq/          # Сторінка FAQ
```

#### Патерн реалізації сторінок:

**Типова структура сторінки:**
```typescript
// Course.tsx
export default function CoursePage() {
  // 1. Отримання параметрів з URL
  const { uuid } = useParams();
  
  // 2. Використання хуків для отримання даних
  const { course, isLoading, error } = useCourse(uuid);
  
  // 3. Обробка помилок
  if (error) {
    return <ErrorComponent />;
  }
  
  // 4. Композиція widgets та features
  return (
    <div>
      <Header />
      <main>
        <CourseTopSection />
        <AboutCourse />
      </main>
      <Footer />
    </div>
  );
}
```

**Особливості:**
- Сторінки мінімальні - тільки композиція
- Вся бізнес-логіка винесена в widgets/features
- Використання хуків для отримання даних
- Обробка станів завантаження та помилок

---

### 3. Widgets Layer (`src/widgets/`)

**Призначення:** Складні композитні компоненти, що об'єднують кілька features.

#### Структура:
```
widgets/
├── app/
│   ├── Header/       # Шапка сайту
│   ├── Footer/       # Підвал сайту
│   ├── Hero/         # Головний банер
│   └── SearchToolbar/  # Панель пошуку
├── auth/
│   ├── LoginForm/    # Форма входу
│   └── SignupForm/    # Форма реєстрації
├── courses/
│   ├── Courses/      # Віджет списку курсів
│   ├── CourseTopSection/  # Верхня секція курсу
│   └── CourseReviews/    # Віджет відгуків
└── notifications/
    └── SuccessNotification/  # Нотифікації
```

#### Патерн реалізації widgets:

**Типова структура widget:**
```typescript
// Courses.tsx
export default function Courses() {
  // 1. Локальний стан для UI
  const [showSelectCategory, setShowSelectCategory] = useState(false);
  
  // 2. Використання кастомних хуків для даних
  const { allCourses, coursesByCategories, isLoading, error } = useCourses();
  
  // 3. Композиція features та shared компонентів
  return (
    <main>
      <section>
        <SelectCategory />
        <RedirectSearch />
      </section>
      <section>
        {isLoading ? (
          <OnlineCourseCardSkeleton />
        ) : (
          allCourses.map(course => (
            <OnlineCourseCard key={course.uuid} course={course} />
          ))
        )}
      </section>
    </main>
  );
}
```

**Особливості:**
- Widgets містять бізнес-логіку для конкретної функціональності
- Використовують кастомні хуки для роботи з даними
- Можуть містити локальний стан для UI
- Композують features та shared компоненти

**Хуки widgets:**
- Зазвичай знаходяться в `widgets/[module]/[widget]/hooks/`
- Інкапсулюють логіку отримання та обробки даних
- Можуть використовувати кілька entities одночасно

---

### 4. Features Layer (`src/features/`)

**Призначення:** Бізнес-функціональність, що може бути використана в різних місцях.

#### Структура:
```
features/
├── app/
│   ├── Logo/         # Логотип
│   └── SearchFilters/  # Фільтри пошуку
├── auth/
│   └── LoginModal/   # Модальне вікно входу
├── courses/
│   ├── OnlineCourseCard/  # Картка курсу
│   ├── CourseDetails/    # Деталі курсу
│   ├── SelectCategory/   # Вибір категорії
│   └── SaveCoursePopover/  # Поповер збереження курсу
└── universityPrograms/
    └── CardSmall/     # Мала картка програми
```

#### Патерн реалізації features:

**Типова структура feature:**
```typescript
// OnlineCourseCard.tsx
interface OnlineCourseCardProps {
  course: ICourse;
  onSaveClick?: (data: {...}) => void;
}

export default function OnlineCourseCard({
  course,
  onSaveClick,
}: OnlineCourseCardProps) {
  // 1. Використання entities для отримання даних
  const providers = useProvidersStore((state) => state.providers);
  const provider = providers.find(p => p.uuid === course.provider);
  
  // 2. Використання хуків entities для трансформації
  const transformedDuration = useTransformDuration(course.duration);
  
  // 3. Локальний стан для UI
  const [openPopover, setOpenPopover] = useState(false);
  
  // 4. Обробка подій
  function saveHandle() {
    setOpenPopover(false);
    onSaveClick?.({ courseId: course.uuid });
  }
  
  return (
    <article>
      {/* UI компонент */}
    </article>
  );
}
```

**Особливості:**
- Features - це переіспользувані UI компоненти з бізнес-логікою
- Можуть приймати колбеки для інтеграції з батьківськими компонентами
- Використовують entities для отримання даних
- Можуть мати власний локальний стан

---

### 5. Entities Layer (`src/entities/`)

**Призначення:** Бізнес-сутності та їх логіка (Course, User, Auth, Review тощо).

#### Структура entity:
```
entities/
└── [entity]/
    ├── index.ts              # Публічний API модуля
    ├── [entity]Service.ts    # API сервіс
    ├── store/
    │   └── [entity].ts        # Zustand store
    ├── types/
    │   ├── [Entity].ts        # Типи сутності
    │   ├── requests/          # Типи запитів
    │   └── responses/         # Типи відповідей
    ├── hooks/                 # Хуки для роботи з сутністю
    ├── utils/                 # Утиліти
    ├── selectors.ts           # Селектори для store
    └── const.ts               # Константи
```

#### Детальний опис компонентів entity:

**1. Service (`[entity]Service.ts`):**
```typescript
class CourseService {
  async get(
    searchParams: IGetCourseRequest = {},
    config?: AxiosRequestConfig
  ): Promise<IGetCourseResponse> {
    // Побудова query параметрів
    const urlSearchParams = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) =>
      urlSearchParams.append(key, value)
    );
    
    // Виконання запиту через shared/api
    return (
      await api.get(`/courses/courses/?${urlSearchParams.toString()}`, config)
    ).data;
  }
  
  async getOne(id: string | number): Promise<ICourse> {
    return (await api.get(`/courses/courses/${id}/`)).data;
  }
}

export const courseService = new CourseService();
```

**Особливості сервісів:**
- Класи з методами для роботи з API
- Приймають типізовані параметри запитів
- Повертають типізовані відповіді
- Можуть приймати додаткові Axios конфігурації (signal для abort)
- Використовують `api` з `@shared/api/api`

**2. Store (`store/[entity].ts`):**
```typescript
type State = {
  isLoading: boolean;
  courses: IGetCourseResponse;
  error: string;
};

type Actions = {
  getCourses: (searchParams?: IGetCourseRequest) => Promise<void>;
};

export const useCoursesStore = create<State & Actions>()(
  immer((set) => ({
    // Початковий стан
    isLoading: true,
    courses: { count: 0, next: null, previous: null, results: [] },
    error: "",
    
    // Actions
    getCourses: async (searchParams = {}) => {
      try {
        set({ isLoading: true, error: "" });
        
        const courses = await courseService.get(searchParams);
        
        set({ courses });
      } catch {
        set((state) => {
          state.courses = { count: 0, next: null, previous: null, results: [] };
          state.error = "Unexpected error occured. Please try again later";
        });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);
```

**Особливості stores:**
- Використовують Zustand з Immer middleware для імутабельних оновлень
- Розділення на State та Actions
- Обробка станів завантаження та помилок
- Асинхронні actions для роботи з API
- Використання try-catch для обробки помилок

**3. Types:**
```typescript
// types/Course.ts
export interface ICourse {
  uuid: string;
  name: string;
  description: string;
  duration: number;
  // ... інші поля
}

// types/requests/GetCourse.ts
export interface IGetCourseRequest {
  page?: number;
  page_size?: number;
  category?: string;
  // ... інші параметри
}

// types/responses/GetCourse.ts
export interface IGetCourseResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICourse[];
}
```

**Особливості типів:**
- Чітке розділення на requests, responses та основні типи
- Використання TypeScript interfaces
- Експорт констант для enum-подібних значень

**4. Hooks:**
```typescript
// hooks/useTransformDuration.tsx
export const useTransformDuration = (duration: number) => {
  const transformedDuration = useMemo(() => {
    const hours = Math.round(duration / 60);
    if (hours < 24) {
      return <Plural value={hours} one="# hour" few="# hours" other="# hours" />;
    }
    // ... логіка трансформації
  }, [duration]);
  
  return transformedDuration;
};
```

**Особливості хуків:**
- Інкапсулюють логіку трансформації даних
- Можуть використовувати інтернаціоналізацію
- Використовують useMemo для оптимізації

**5. Selectors:**
```typescript
// selectors.ts
export const selectSavedCourse =
  (savedCourseId: string) => (state: SavedCourseStore) =>
    state.savedCourses.results.find(
      (savedCourse) => savedCourse.course === savedCourseId
    );
```

**Особливості селекторів:**
- Функції для вибірки конкретних даних з store
- Можуть приймати параметри
- Повертають функцію, яка приймає state

**6. Index.ts (Public API):**
```typescript
// index.ts
export { courseService } from "./services/course";
export { useCoursesStore } from "./store/course";
export type { ICourse } from "./types/Course";
export { useTransformDuration } from "./hooks/useTransformDuration";
// ... інші експорти
```

**Особливості:**
- Експортує тільки публічний API модуля
- Дозволяє імпортувати з `@entities/course` замість конкретних файлів

---

### 6. Shared Layer (`src/shared/`)

**Призначення:** Переіспользувані компоненти, утиліти, конфігурація.

#### Структура:
```
shared/
├── api/
│   └── api.ts              # Axios instance з interceptors
├── assets/                  # Статичні ресурси
│   ├── icons/
│   └── images/
├── config/                  # Конфігурація
│   ├── envVars.ts          # Змінні оточення
│   ├── breakpoints.scss    # Брейкпоінти
│   └── colors.scss         # Кольори
├── hocs/                    # Higher-Order Components
│   └── withUnauth.tsx      # HOC для неавторизованих сторінок
├── hooks/                   # Переіспользувані хуки
│   ├── useDebounce.ts
│   └── useWindowDimensions.ts
├── lib/                     # Бібліотеки та обгортки
│   ├── AspectRatioBox/
│   └── LazyLoad/
├── ui/                      # UI компоненти
│   ├── Container/
│   ├── Button/
│   ├── Input/
│   └── Modal/
└── utils/                   # Утиліти
    ├── const.ts            # Константи
    ├── isAbortErr.ts       # Перевірка abort помилок
    └── downloadFile.ts
```

#### Ключові компоненти:

**1. API (`api/api.ts`):**
```typescript
const getAuthorizationHeader = () => {
  const accessToken = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
  return accessToken ? `Token ${accessToken}` : undefined;
};

export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Accept-Language": localStorage.getItem(LS_KEYS.LOCALE) || "uk",
    Authorization: getAuthorizationHeader(),
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      useAuthStore.getState().setAuth(false);
      localStorage.removeItem(LS_KEYS.ACCESS_TOKEN);
    }
    return Promise.reject(error);
  }
);
```

**Особливості:**
- Єдиний екземпляр Axios для всього додатку
- Автоматичне додавання Authorization header
- Автоматичне додавання Accept-Language header
- Interceptor для обробки 401 помилок (автоматичний logout)

**2. UI Components:**
- Переіспользувані компоненти без бізнес-логіки
- Використовують CSS Modules для стилізації
- Можуть приймати className для кастомізації
- Типізовані через TypeScript

**3. Utils:**
- Чисті функції без залежностей від React
- Можуть використовуватися в будь-якому місці
- Добре тестуються

---

## State Management (Zustand)

### Архітектура Store

**Використання:**
- Zustand з Immer middleware для імутабельних оновлень
- Stores знаходяться в `entities/[entity]/store/`
- Використання через хуки: `useStore((state) => state.property)`

### Патерн Store:

```typescript
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  data: DataType;
  isLoading: boolean;
  error: string;
};

type Actions = {
  fetchData: () => Promise<void>;
  updateData: (data: DataType) => void;
};

export const useStore = create<State & Actions>()(
  immer((set) => ({
    // Initial state
    data: initialData,
    isLoading: false,
    error: "",
    
    // Actions
    fetchData: async () => {
      try {
        set({ isLoading: true, error: "" });
        const data = await service.get();
        set({ data, isLoading: false });
      } catch (err) {
        set((state) => {
          state.error = "Error message";
          state.isLoading = false;
        });
      }
    },
    
    updateData: (data) => {
      set((state) => {
        state.data = data;
      });
    },
  }))
);
```

### Особливості:

1. **Immer middleware:** Дозволяє мутації в set, які автоматично конвертуються в імутабельні оновлення
2. **Розділення State та Actions:** Чітке розділення для кращої типізації
3. **Асинхронні actions:** Підтримка async/await
4. **Обробка помилок:** Try-catch в actions
5. **Селектори:** Використання селекторів для оптимізації ре-рендерів

---

## API та HTTP запити

### Структура запитів

**1. Service Layer:**
- Кожна entity має свій service клас
- Методи service повертають Promise з типізованими даними
- Використовують `api` з `@shared/api/api`

**2. Обробка помилок:**

**На рівні API interceptor:**
```typescript
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      // Автоматичний logout
      useAuthStore.getState().setAuth(false);
      localStorage.removeItem(LS_KEYS.ACCESS_TOKEN);
    }
    return Promise.reject(error);
  }
);
```

**На рівні Service/Store:**
```typescript
try {
  const data = await service.get();
  set({ data });
} catch (err) {
  set((state) => {
    state.error = "Unexpected error occured. Please try again later";
  });
}
```

**На рівні компонентів:**
```typescript
try {
  await login(data);
  // Success handling
} catch (err: any) {
  if (err.response?.status === 400) {
    setError(t`Unable to log in with provided credentials`);
  } else {
    setError(t`Unexpected error occured. Please try again later`);
  }
}
```

**3. Abort Controller:**
```typescript
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;
  
  const fetchData = async () => {
    try {
      const data = await service.get("", { signal });
      // Handle data
    } catch (err) {
      if (!isAbortErr(err)) {
        // Handle error (ignore abort errors)
      }
    }
  };
  
  fetchData();
  
  return () => {
    controller.abort();
  };
}, []);
```

**4. Query Parameters:**
```typescript
const urlSearchParams = new URLSearchParams();
Object.entries(searchParams).forEach(([key, value]) =>
  urlSearchParams.append(key, value)
);

return await api.get(`/endpoint/?${urlSearchParams.toString()}`);
```

---

## Роутинг (React Router v7)

### Конфігурація

**Маршрути визначені в `app/router/router.tsx`:**
```typescript
export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to={routes.HOME} />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: routes.HOME,
        Component: HomePage,
      },
      {
        path: `${routes.COURSE}/:uuid`,
        Component: CoursePage,
      },
      // ... інші маршрути
    ],
  },
]);
```

### Особливості:

1. **Lazy Loading:** Всі сторінки завантажуються через `lazy()`
2. **RootLayout:** Всі маршрути обгорнуті в RootLayout
3. **Параметри:** Використання `:param` для динамічних сегментів
4. **Fallback:** Невідомі маршрути перенаправляються на головну

### Навігація:

```typescript
import { useNavigate, useParams, useLocation } from "react-router-dom";

// Програмна навігація
const navigate = useNavigate();
navigate(routes.COURSE + "/" + uuid);

// Отримання параметрів
const { uuid } = useParams();

// Отримання query параметрів
const location = useLocation();
const urlSearchParams = new URLSearchParams(location.search);
const redirectUri = urlSearchParams.get("redirect_uri");
```

---

## Інтернаціоналізація (Lingui)

### Налаштування

**В App.tsx:**
```typescript
useEffect(() => {
  const loadTranslations = async () => {
    try {
      const { messages } = await import(
        `../../locales/${locale}/translations.po`
      );
      i18n.load(locale, messages);
      i18n.activate(locale);
    } catch { }
  };
  
  loadTranslations();
}, [locale]);
```

### Використання

**1. Trans компонент:**
```typescript
import { Trans } from "@lingui/react/macro";

<Trans>Hello World</Trans>
```

**2. Plural:**
```typescript
import { Plural } from "@lingui/react/macro";

<Plural value={count} one="# item" few="# items" other="# items" />
```

**3. useLingui hook:**
```typescript
import { useLingui } from "@lingui/react/macro";

const { t } = useLingui();
const message = t`Error message`;
```

### Структура локалей:

```
locales/
├── en/
│   └── translations.po
└── uk/
    └── translations.po
```

### Команди:

```bash
npm run translations:extract  # Витягти рядки для перекладу
npm run translations:compile  # Скомпілювати переклади
```

---

## Стилізація

### Підхід

1. **SCSS Modules:** Для компонентів
2. **Tailwind CSS:** Для utility класів
3. **Глобальні стилі:** В `app/styles/`

### Структура стилів компонента:

```scss
// Component.module.scss
@use "../../shared/config/breakpoints.scss";
@use "../../shared/config/colors.scss";
@use "../../shared/utils/mixins.scss";

.component {
  // Стилі компонента
  
  @media (max-width: $md) {
    // Responsive стилі
  }
}
```

### Конфігурація Vite:

```typescript
css: {
  preprocessorOptions: {
    scss: {
      additionalData:
        '@use "/src/shared/config/breakpoints.scss";' +
        '@use "/src/shared/config/colors.scss";' +
        '@use "/src/shared/utils/mixins.scss";',
    },
  },
}
```

### Breakpoints:

```scss
// shared/config/breakpoints.scss
$xl: 1536px;
$lg: 1200px;
$md: 900px;
$sm: 600px;
```

---

## Форми (React Hook Form)

### Патерн використання:

```typescript
import { useForm } from "react-hook-form";
import { useLingui } from "@lingui/react/macro";

type Inputs = {
  email: string;
  password: string;
};

export const useHandleSubmit = () => {
  const { t } = useLingui();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await login(data);
      // Success
    } catch (err) {
      // Error handling
    }
  };
  
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
```

### Валідація:

```typescript
register("email", {
  required: t`Email is required`,
  pattern: {
    value: REGEXS.EMAIL,
    message: t`Invalid email format`,
  },
});
```

---

## Нотифікації (React Toastify)

### Використання:

```typescript
import { toast as notify } from "react-toastify";
import { Bounce } from "react-toastify";

notify(SuccessNotification({
  text: "Course successfully added!",
  Icon: Success
}), {
  position: "bottom-center",
  autoClose: 5000,
  closeButton: false,
  hideProgressBar: true,
  theme: "colored",
  transition: Bounce,
});
```

### Налаштування:

```typescript
// В App.tsx
<ToastContainer />
```

---

## TypeScript конфігурація

### Path Aliases:

```typescript
// vite.config.ts
resolve: {
  alias: {
    "@app": path.resolve(__dirname, "./src/app"),
    "@shared": path.resolve(__dirname, "./src/shared"),
    "@pages": path.resolve(__dirname, "./src/pages"),
    "@widgets": path.resolve(__dirname, "./src/widgets"),
    "@features": path.resolve(__dirname, "./src/features"),
    "@entities": path.resolve(__dirname, "./src/entities"),
    "@locales": path.resolve(__dirname, "./src/locales"),
  },
}
```

### Використання:

```typescript
import { api } from "@shared/api/api";
import { useAuthStore } from "@entities/auth";
import Container from "@shared/ui/Container/Container";
```

---

## Змінні оточення

### Конфігурація:

```typescript
// shared/config/envVars.ts
export const apiBaseUrl = (() => {
  const value = import.meta.env.VITE_API_BASE_URL;
  if (typeof value !== "string") {
    return "https://backend.freecourses.com.ua/api";
  }
  return value;
})();
```

### Використання:

- Префікс `VITE_` для змінних, доступних в клієнті
- Fallback значення для production
- Типобезпечна перевірка

---

## Патерни та практики

### 1. Кастомні хуки

**Для отримання даних:**
```typescript
export const useCourses = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const data = await courseService.get();
        setCourses(data.results);
      } catch (err) {
        setError("Error message");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCourses();
  }, []);
  
  return { courses, isLoading, error };
};
```

### 2. Higher-Order Components

```typescript
// shared/hocs/withUnauth.tsx
export const withUnauth = (Component: FC) => {
  const UnauthenticatedComponent = (props: any) => {
    const { auth } = useAuthStore();
    return !auth ? <Component {...props} /> : <Navigate to={routes.HOME} />;
  };
  return UnauthenticatedComponent;
};
```

### 3. Селектори для оптимізації

```typescript
// Замість
const allCourses = useCoursesStore((state) => state.courses);

// Використовувати
const courses = useCoursesStore((state) => state.courses.results);
```

### 4. Abort Controller для cleanup

```typescript
useEffect(() => {
  const controller = new AbortController();
  
  fetchData({ signal: controller.signal });
  
  return () => {
    controller.abort();
  };
}, []);
```

### 5. Error Boundaries (майбутнє)

Для глобальної обробки помилок React компонентів.

---

## Структура файлів компонента

### Типова структура:

```
Component/
├── Component.tsx           # Основний компонент
├── Component.module.scss    # Стилі
├── index.ts                 # Експорт
├── hooks/                   # Локальні хуки (опціонально)
│   └── useComponent.ts
└── assets/                  # Локальні ресурси (опціонально)
    └── icon.svg
```

### index.ts:

```typescript
export { default } from "./Component";
export type { ComponentProps } from "./Component";
```

---

## Залежності та встановлення

### Основні залежності:

```json
{
  "dependencies": {
    "@heroui/react": "^2.8.2",        // UI компоненти
    "@lingui/core": "^5.3.1",          // i18n
    "@lingui/react": "^5.3.1",
    "axios": "^1.8.4",                 // HTTP клієнт
    "clsx": "^2.1.1",                  // Утиліта для className
    "date-fns": "^4.1.0",              // Робота з датами
    "framer-motion": "^12.23.12",       // Анімації
    "immer": "^10.1.1",                // Immer для Zustand
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.60.0",      // Форми
    "react-router-dom": "^7.3.0",      // Роутинг
    "react-toastify": "^11.0.5",       // Нотифікації
    "zustand": "^5.0.6"                // State management
  }
}
```

### Встановлення:

```bash
npm install
```

### Запуск:

```bash
npm run dev        # Development сервер
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Лінтер
npm run format     # Форматування коду
```

---

## Правила та конвенції

### 1. Найменування

- **Компоненти:** PascalCase (`OnlineCourseCard.tsx`)
- **Файли:** PascalCase для компонентів, camelCase для утиліт
- **Хуки:** camelCase з префіксом `use` (`useCourses.ts`)
- **Stores:** camelCase з префіксом `use` (`useCoursesStore`)
- **Services:** camelCase (`courseService`)
- **Types/Interfaces:** PascalCase з префіксом `I` (`ICourse`)

### 2. Імпорти

**Порядок:**
1. React та сторонні бібліотеки
2. Shared компоненти та утиліти
3. Entities
4. Features
5. Widgets
6. Локальні імпорти (стилі, типи)

**Приклад:**
```typescript
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trans } from "@lingui/react/macro";

import { useTransformDuration, type ICourse } from "@entities/course";
import Container from "@shared/ui/Container/Container";
import { routes } from "@app/router/routes";

import OnlineCourseCard from "@features/courses/OnlineCourseCard";

import s from "./Component.module.scss";
```

### 3. Експорти

- **Default export** для компонентів
- **Named exports** для утиліт, типів, констант
- **index.ts** для публічного API модуля

### 4. Типізація

- Використовувати TypeScript для всіх файлів
- Явна типізація для props компонентів
- Використання `type` для типів, `interface` для об'єктів
- Префікс `I` для interfaces (`ICourse`)

### 5. Обробка помилок

- Try-catch в async функціях
- Встановлення error state в catch блоках
- Ігнорування abort помилок через `isAbortErr`
- Показ зрозумілих повідомлень користувачу

### 6. Стан завантаження

- `isLoading` state для індикації завантаження
- Skeleton компоненти під час завантаження
- Spinner для глобальних операцій

---

## Тестування (майбутнє)

### Рекомендована структура:

```
Component/
├── Component.tsx
├── Component.test.tsx
└── Component.module.scss
```

### Інструменти:

- **Vitest** - unit тести
- **React Testing Library** - тестування компонентів
- **MSW** - мокування API

---

## Оптимізація

### 1. Code Splitting

- Lazy loading сторінок через `lazy()`
- Dynamic imports для важких компонентів

### 2. Мемоізація

- `useMemo` для дорогих обчислень
- `useCallback` для функцій, що передаються як props
- React.memo для компонентів

### 3. Селектори Zustand

- Використання селекторів для мінімізації ре-рендерів
- Розділення великих stores на менші

### 4. Abort Controller

- Скасування запитів при unmount компонентів
- Уникнення memory leaks

---

## Деплой

### Netlify

Конфігурація в `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Environment Variables

Встановлюються в налаштуваннях платформи деплою:
- `VITE_API_BASE_URL`
- `VITE_APP_ENV`
- `VITE_API_LOAN_SITE_URL`

---

## Висновок

Цей проєкт використовує сучасну архітектуру Feature-Sliced Design для створення масштабованого та підтримуваного frontend додатку. Ключові принципи:

1. **Чітке розділення відповідальності** через шари FSD
2. **Типобезпека** через TypeScript
3. **Централізований state management** через Zustand
4. **Модульність** через entities та features
5. **Переіспользуваність** через shared компоненти
6. **Інтернаціоналізація** через Lingui
7. **Обробка помилок** на всіх рівнях
8. **Оптимізація** через code splitting та мемоізацію

Дотримання цих принципів дозволяє легко додавати новий функціонал, підтримувати код та масштабувати проєкт.

---

## Додаткові ресурси

- [Feature-Sliced Design Documentation](https://feature-sliced.github.io/documentation/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [React Router Documentation](https://reactrouter.com/)
- [Lingui Documentation](https://lingui.dev/)

