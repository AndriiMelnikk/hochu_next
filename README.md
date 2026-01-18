# Next.js FSD App

Проєкт побудований на базі **Next.js 15** з **App Router** та **Feature-Sliced Design (FSD)** архітектури.

## Технологічний стек

- **Next.js 15** - React фреймворк з App Router
- **TypeScript** - типізація
- **React 19** - UI бібліотека
- **React Query** - кешування та управління серверним станом
- **Zod** - валідація даних
- **React Context** - state management
- **Lingui** - інтернаціоналізація (i18n)
- **React Hook Form** - робота з формами
- **Tailwind CSS** - utility-first CSS фреймворк
- **Sonner** - нотифікації
- **Framer Motion** - анімації
- **Axios** - HTTP клієнт

## Структура проєкту (Feature-Sliced Design)

```
src/
├── app/              # Ініціалізація, конфігурація, провайдери
│   ├── providers/    # React Context, React Query, Lingui
│   ├── router/       # Константи маршрутів
│   └── styles/       # Глобальні стилі
├── pages/            # Сторінки (Next.js App Router pages)
├── widgets/          # Складні композитні компоненти
├── features/         # Бізнес-функціональність
├── entities/         # Бізнес-сутності з API
└── shared/           # Переіспользувані компоненти, утиліти
    ├── api/          # Axios instance
    ├── ui/           # UI компоненти (shadcn)
    └── lib/          # Утиліти
```

## Встановлення

```bash
npm install
```

## Запуск

```bash
# Development сервер
npm run dev

# Production build
npm run build

# Запуск production build
npm start

# Лінтер
npm run lint
```

## Path Aliases

Проєкт використовує path aliases для зручності імпортів:

- `@app/*` → `src/app/*`
- `@pages/*` → `src/pages/*`
- `@widgets/*` → `src/widgets/*`
- `@features/*` → `src/features/*`
- `@entities/*` → `src/entities/*`
- `@shared/*` → `src/shared/*`
- `@/*` → `src/*`

## Правила залежностей (Import Rules)

Імпорти можуть йти тільки "вниз" по шарах:

- `app` → може імпортувати з усіх шарів
- `pages` → може імпортувати з `widgets`, `features`, `entities`, `shared`
- `widgets` → може імпортувати з `features`, `entities`, `shared`
- `features` → може імпортувати з `entities`, `shared`
- `entities` → може імпортувати з `shared`
- `shared` → не може імпортувати з інших шарів

## Додаткова інформація

Детальний опис архітектури дивіться в `docs/ARCHITECTURE.md`.
