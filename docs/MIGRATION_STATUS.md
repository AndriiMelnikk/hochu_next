# Статус міграції на Next.js з FSD архітектурою

## Виконано

### 1. Базова структура Next.js ✅

- Створено `next.config.ts` з налаштуваннями для App Router
- Оновлено `tsconfig.json` з path aliases для FSD (@app, @pages, @widgets, @features, @entities, @shared)
- Оновлено `package.json` з Next.js 15 та необхідними залежностями
- Додано Lingui, Framer Motion, Axios

### 2. Провайдери ✅

- `app/providers/ContextProvider.tsx` - React Context для auth та theme
- `app/providers/QueryProvider.tsx` - React Query з налаштуваннями
- `app/providers/LinguiProvider.tsx` - Lingui для i18n
- `app/providers/index.tsx` - об'єднаний провайдер

### 3. Структура FSD ✅

- Створено базову структуру директорій
- Створено `app/router/routes.ts` з константами маршрутів
- Створено `shared/api/api.ts` з Axios instance

### 4. Entity Request (приклад) ✅

- `entities/request/model/types.ts` - TypeScript типи
- `entities/request/model/schemas.ts` - Zod схеми для валідації
- `entities/request/api/requestService.ts` - Service клас з API запитами
- `entities/request/hooks/useRequests.ts` - React Query hooks з Zod валідацією

### 5. Стилі ✅

- Мігровано `src/index.css` → `app/globals.css`
- Налаштовано Tailwind для Next.js

### 6. Базові сторінки ✅

- `app/layout.tsx` - корневий layout
- `app/page.tsx` - головна сторінка
- `app/browse/page.tsx` - сторінка перегляду
- `app/request/[id]/page.tsx` - динамічна сторінка запиту
- `app/login/page.tsx` - сторінка входу
- `app/register/page.tsx` - сторінка реєстрації

### 7. Оновлення компонентів ✅

- Оновлено `Navbar.tsx` для використання Next.js Link

## Потрібно зробити

### 1. Оновити всі компоненти

- Замінити `react-router-dom` на `next/link` у всіх компонентах
- Додати `"use client"` до компонентів, які використовують hooks
- Оновити `useParams`, `useNavigate` на Next.js еквіваленти

### 2. Створити всі сторінки App Router

- `/create` → `app/create/page.tsx`
- `/how-it-works` → `app/how-it-works/page.tsx`
- `/proposal/[id]` → `app/proposal/[id]/page.tsx`
- `/profile` → `app/profile/page.tsx`
- `/pricing` → `app/pricing/page.tsx`
- `/about` → `app/about/page.tsx`
- `/contact` → `app/contact/page.tsx`
- `/support` → `app/support/page.tsx`
- `/terms` → `app/terms/page.tsx`
- `/privacy` → `app/privacy/page.tsx`
- `/blog` → `app/blog/page.tsx`
- `/blog/[id]` → `app/blog/[id]/page.tsx`
- `/admin` → `app/admin/page.tsx`
- `/*` → `app/not-found.tsx`

### 3. Міграція компонентів в FSD структуру

- `components/ui/*` → `shared/ui/*` (вже частково зроблено)
- `components/Navbar.tsx` → `widgets/app/Header/`
- `components/Footer.tsx` → `widgets/app/Footer/`
- `components/Hero.tsx` → `widgets/app/Hero/`
- `components/Features.tsx` → `widgets/app/Features/`
- Інші компоненти → відповідні widgets/features

### 4. Створити інші entities

- `entities/user/` - користувач
- `entities/proposal/` - пропозиції
- `entities/blog/` - блог

### 5. Налаштувати Lingui

- Створити `.po` файли для перекладів
- Налаштувати автоматичну генерацію через `lingui extract` та `compile`

### 6. Видалити старі файли

- `vite.config.ts`
- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/vite-env.d.ts`

## Команди для запуску

```bash
# Встановити залежності
npm install

# Запустити dev сервер
npm run dev

# Збілдити для production
npm run build

# Запустити production сервер
npm start

# Витягти рядки для перекладу
npm run translations:extract

# Скомпілювати переклади
npm run translations:compile
```

## Структура проєкту

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers/    # Провайдери
│   └── router/       # Константи маршрутів
├── pages/            # Старі сторінки (будуть видалені після міграції)
├── widgets/          # Складні композитні компоненти
├── features/         # Бізнес-функціональність
├── entities/         # Бізнес-сутності
│   └── request/      # Приклад entity
│       ├── api/
│       ├── model/
│       └── hooks/
└── shared/           # Переіспользувані компоненти
    ├── api/          # Axios instance
    └── ui/           # UI компоненти
```
