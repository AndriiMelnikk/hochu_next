# Graph Report - shukayu_next  (2026-10-17)

## Corpus Check
- 488 files · ~139,924 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2215 nodes · 7212 edges · 118 communities (104 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 29 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `401b8871`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- BlockUserActions.tsx
- notificationSchema.ts
- proposal/index.ts
- getLocaleFromHeaders
- SupportContent.tsx
- drawer.tsx
- button.tsx
- ProposalItem.tsx
- react
- CreateRequestForm.tsx
- sidebar.tsx
- dialog.tsx
- src/auth.ts
- entities/user/index.ts
- sitemap.ts
- use-toast.ts
- authService
- entities/auth/index.ts
- input-otp.tsx
- authStore.ts
- universal-pagination.tsx
- api.ts
- compilerOptions
- compilerOptions
- ItemCondition
- devDependencies
- components.json
- utils.ts
- compilerOptions
- chart.tsx
- dependencies
- entities/admin/index.ts
- admin/layout.tsx
- notification/index.ts
- features/user/index.ts
- cn
- scripts
- reset-password/page.tsx
- lint-staged
- Детальний опис шарів
- sheet.tsx
- breadcrumbs.tsx
- navigation-menu.tsx
- package.json
- Виконано
- about/layout.tsx
- scroll-area.tsx
- UserRequestsList.tsx
- contact/layout.tsx
- how-it-works/layout.tsx
- pricing/layout.tsx
- Button
- support/layout.tsx
- terms/layout.tsx
- blog/layout.tsx
- Структура файлів компонента
- RequestDetailContent.tsx
- request/index.ts
- chat/index.ts
- eslint.config.mjs
- Нотифікації (React Toastify)
- sonner.tsx
- Детальний опис архітектури проєкту MOOC Frontend
- config
- cn.ts
- Інтернаціоналізація (i18n) - Інструкція для розробників
- toggle-group.tsx
- blog/index.ts
- RequestSubscriptionModal.tsx
- Основні сутності
- locationService.ts
- Опис сторінок та необхідних даних
- Next.js FSD App
- Документація Backend API для проєкту shukayu
- Аутентифікація та авторизація
- Правила та конвенції
- Патерни та практики
- @lingui/cli
- { GET, POST }
- @radix-ui/react-aspect-ratio
- @radix-ui/react-collapsible
- tailwindcss
- locale.ts
- Оптимізація
- Стилізація
- Інтернаціоналізація (Lingui)
- API Endpoints
- Чат та повідомлення
- Загальний опис проєкту
- Гейміфікація
- Додаткові функції
- State Management (Zustand)
- Залежності та встановлення
- Роутинг (React Router v7)
- TypeScript конфігурація
- Змінні оточення
- 8. Компоненти
- @tanstack/react-query
- RequestStatus
- Композиція сторінок Shukayu
- UX універсальних компонентів Shukayu
- Дизайн-система Shukayu
- [locale]/layout.tsx
- Card
- RequestInfo.tsx
- NotificationSettingsContent.tsx
- 4. Випадаючі поверхні
- privacy/layout.tsx
- 2. Колір
- 3. Кнопки
- 5. Списки
- 7. Перемикачі та вибір
- 8. Модалки та панелі

## God Nodes (most connected - your core abstractions)
1. `cn()` - 262 edges
2. `react` - 138 edges
3. `Button` - 130 edges
4. `@lingui/react` - 104 edges
5. `lucide-react` - 86 edges
6. `getLocaleFromHeaders()` - 83 edges
7. `Link()` - 56 edges
8. `Card` - 49 edges
9. `CardContent` - 48 edges
10. `Input` - 47 edges

## Surprising Connections (you probably didn't know these)
- `Ключові особливості:` --references--> `RootLayout()`  [INFERRED]
  docs/ARCHITECTURE.md → src/app/[locale]/layout.tsx
- `Чеклист для додавання перекладів` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx
- `Як підключити словник до нової сторінки (Route Layout)` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx
- `2. Який контроль обрати` --references--> `CityCombobox()`  [INFERRED]
  docs/UX_COMPONENTS.md → src/shared/ui/city-combobox.tsx
- `3.2. Архівування замість видалення` --references--> `getRequestEntries()`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/app/sitemap.ts

## Import Cycles
- None detected.

## Communities (118 total, 14 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.16
Nodes (14): paginationResultSchema(), requestSubscriptionService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest (+6 more)

### Community 1 - "BlockUserActions.tsx"
Cohesion: 0.25
Nodes (17): react-day-picker, ApproveRejectActions(), ApproveRejectActionsProps, BlockUserActions(), BlockUserActionsProps, RequestInfo(), AlertDialogAction, AlertDialogCancel (+9 more)

### Community 2 - "notificationSchema.ts"
Cohesion: 0.14
Nodes (14): TELEGRAM_LINK_QUERY_KEY, UNLINKED, categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw (+6 more)

### Community 3 - "proposal/index.ts"
Cohesion: 0.11
Nodes (24): useCreateProposal(), useProposal(), useRejectProposal(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema, updateProposalSchema (+16 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.06
Nodes (51): AboutContent(), AboutPage(), generateMetadata(), AdminPage(), generateMetadata(), BlogListContent(), BlogArticlePage(), generateMetadata() (+43 more)

### Community 5 - "SupportContent.tsx"
Cohesion: 0.32
Nodes (9): @radix-ui/react-accordion, SupportPage(), SupportContent(), getFaqPageJsonLd(), AccordionContent, AccordionItem, AccordionTrigger, Faq() (+1 more)

### Community 6 - "drawer.tsx"
Cohesion: 0.25
Nodes (7): vaul, DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 7 - "button.tsx"
Cohesion: 0.12
Nodes (29): nextConfig, @lingui/react, next, ResetPasswordContentProps, LoginContent(), LoginPage(), NotFoundPage(), PricingContent() (+21 more)

### Community 8 - "ProposalItem.tsx"
Cohesion: 0.19
Nodes (16): embla-carousel-react, EditProposalModal(), ProposalItem(), Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps (+8 more)

### Community 9 - "react"
Cohesion: 0.09
Nodes (33): @lingui/core, react, GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), CreateLayout(), messagesByLocale (+25 more)

### Community 10 - "CreateRequestForm.tsx"
Cohesion: 0.06
Nodes (91): axios, @hookform/resolvers, next-auth, react-hook-form, sonner, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), ContactContent() (+83 more)

### Community 11 - "sidebar.tsx"
Cohesion: 0.08
Nodes (28): useIsMobile(), SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel (+20 more)

### Community 12 - "dialog.tsx"
Cohesion: 0.16
Nodes (31): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), AcceptProposalModal(), AcceptProposalModalProps, CancelAcceptedProposalModal(), CancelAcceptedProposalModalProps (+23 more)

### Community 13 - "src/auth.ts"
Cohesion: 0.33
Nodes (4): auth, handlers, signIn, signOut

### Community 14 - "entities/user/index.ts"
Cohesion: 0.17
Nodes (18): PROFILES_QUERY_KEY, useCreateProfile(), accountSchema, createProfileSchema, profileSchema, updateContactsSchema, updateProfileSchema, UserRoleEnum (+10 more)

### Community 15 - "sitemap.ts"
Cohesion: 0.57
Nodes (6): getBlogEntries(), getRequestEntries(), localizedUrl(), sitemap(), sitemapEntry(), STATIC_ROUTES

### Community 16 - "use-toast.ts"
Cohesion: 0.12
Nodes (25): @radix-ui/react-toast, Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle (+17 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.17
Nodes (13): zod, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+5 more)

### Community 19 - "input-otp.tsx"
Cohesion: 0.33
Nodes (5): input-otp, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 20 - "authStore.ts"
Cohesion: 0.12
Nodes (20): AuthContext, AuthContextType, AuthProvider(), useAuth(), AuthActions, AuthState, buildAuthStateFromResponse(), buildUserFromAuthResponse() (+12 more)

### Community 21 - "universal-pagination.tsx"
Cohesion: 0.12
Nodes (24): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+16 more)

### Community 22 - "api.ts"
Cohesion: 0.14
Nodes (9): contactService, IContactRequest, notificationPreferenceService, INotificationPreferences, IUpdateNotificationPreferencesRequest, failedQueue, ENDPOINTS, apiBaseUrl (+1 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "ItemCondition"
Cohesion: 0.33
Nodes (5): ItemCondition, NEW, USED, formatChange(), FormattedChange

### Community 26 - "devDependencies"
Cohesion: 0.09
Nodes (23): devDependencies, autoprefixer, eslint, eslint-config-next, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier (+15 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "utils.ts"
Cohesion: 0.23
Nodes (16): useCities(), CascadingSelect(), CascadingSelectProps, CityCombobox(), CityComboboxProps, Command, CommandDialog(), CommandDialogProps (+8 more)

### Community 29 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+19 more)

### Community 30 - "chart.tsx"
Cohesion: 0.27
Nodes (10): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartStyle(), ChartTooltipContent, getPayloadConfigFromPayload() (+2 more)

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.06
Nodes (60): zustand, ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, hasAnyPermission(), hasPermission() (+52 more)

### Community 33 - "admin/layout.tsx"
Cohesion: 0.38
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 34 - "notification/index.ts"
Cohesion: 0.09
Nodes (30): useMarkAllNotificationsRead(), useMarkNotificationRead(), useNotifications(), useUnreadCount(), notificationService, INotification, NotificationCategory, ACHIEVEMENTS (+22 more)

### Community 35 - "features/user/index.ts"
Cohesion: 0.16
Nodes (18): lucide-react, CreateRequestContent(), CreateRequestPage(), generateMetadata(), useMe(), ProfileType, useProfileSwitch(), UseProfileSwitchOptions (+10 more)

### Community 36 - "cn"
Cohesion: 0.06
Nodes (47): @radix-ui/react-context-menu, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-menubar, @radix-ui/react-radio-group, @radix-ui/react-slider, react-resizable-panels, cn() (+39 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "reset-password/page.tsx"
Cohesion: 0.50
Nodes (4): generateMetadata(), PageProps, ResetPasswordPage(), ResetPasswordContent()

### Community 39 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "sheet.tsx"
Cohesion: 0.28
Nodes (8): @radix-ui/react-dialog, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetOverlay, sheetVariants, Sidebar

### Community 42 - "breadcrumbs.tsx"
Cohesion: 0.05
Nodes (49): 0. Поточний стан (коротко), 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія, 2. Пріоритет P0 — Картки виконавців (E-E-A-T) (+41 more)

### Community 43 - "navigation-menu.tsx"
Cohesion: 0.28
Nodes (8): @radix-ui/react-navigation-menu, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 44 - "package.json"
Cohesion: 0.06
Nodes (31): name, private, version, autoprefixer, cmdk, eslint, eslint-config-next, @eslint/js (+23 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "about/layout.tsx"
Cohesion: 0.38
Nodes (4): AboutLayout(), messagesByLocale, messages, messages

### Community 47 - "scroll-area.tsx"
Cohesion: 0.67
Nodes (3): @radix-ui/react-scroll-area, ScrollArea, ScrollBar

### Community 48 - "UserRequestsList.tsx"
Cohesion: 0.21
Nodes (13): RequestContent(), useCategories(), RequestCard(), useDebounce(), DEFAULT_INITIAL_FILTERS, useQueryPagination(), UseQueryPaginationOptions, UseQueryPaginationReturn (+5 more)

### Community 49 - "contact/layout.tsx"
Cohesion: 0.38
Nodes (4): ContactLayout(), messagesByLocale, messages, messages

### Community 50 - "how-it-works/layout.tsx"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 51 - "pricing/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PricingLayout(), messages, messages

### Community 52 - "Button"
Cohesion: 0.12
Nodes (16): HowItWorksContent(), generateMetadata(), HomePage(), CategoryFilterButton(), CategoryFilterButtonProps, CreateRequestButton(), Button, HeroBadge (+8 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 55 - "blog/layout.tsx"
Cohesion: 0.38
Nodes (4): BlogLayout(), messagesByLocale, messages, messages

### Community 56 - "Структура файлів компонента"
Cohesion: 0.67
Nodes (3): index.ts:, Структура файлів компонента, Типова структура:

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.08
Nodes (37): RequestDetailContent(), useCanPropose(), useProposals(), useRequest(), useCreateReview(), useReviews(), useReviewStats(), reviewSchema (+29 more)

### Community 58 - "request/index.ts"
Cohesion: 0.12
Nodes (23): HOME_LATEST_REQUESTS_LIMIT, useCancelRequest(), useCreateRequest(), useLatestRequests(), useRequests(), createRequestSchema, getRequestsResponseSchema, requestBuyerSchema (+15 more)

### Community 60 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 61 - "Нотифікації (React Toastify)"
Cohesion: 0.67
Nodes (3): Використання:, Налаштування:, Нотифікації (React Toastify)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (16): API та HTTP запити, Environment Variables, Netlify, Валідація:, Висновок, Деплой, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси (+8 more)

### Community 64 - "config"
Cohesion: 0.67
Nodes (3): path, config, commitizen

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 69 - "toggle-group.tsx"
Cohesion: 0.29
Nodes (8): class-variance-authority, @radix-ui/react-toggle, @radix-ui/react-toggle-group, ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 71 - "blog/index.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.20
Nodes (19): useCreateRequestSubscription(), useUpdateRequestSubscription(), ICategoryPreference, INewRequestsPreference, channelsForEnabled(), CategoryChipsSelect(), CategoryChipsSelectProps, NewRequestsPreferenceForm() (+11 more)

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "locationService.ts"
Cohesion: 0.33
Nodes (6): citySchema, searchCitiesResponseSchema, locationService, ICity, ISearchCitiesDto, ISearchCitiesResponse

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.17
Nodes (11): Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules) (+3 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 124 - "Правила та конвенції"
Cohesion: 0.29
Nodes (7): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 5. Обробка помилок, 6. Стан завантаження, Правила та конвенції

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 135 - "locale.ts"
Cohesion: 0.20
Nodes (17): alt, contentType, OpengraphImage(), runtime, size, defaultLocale, isLocale(), Locale (+9 more)

### Community 136 - "Оптимізація"
Cohesion: 0.40
Nodes (5): 1. Code Splitting, 2. Мемоізація, 3. Селектори Zustand, 4. Abort Controller, Оптимізація

### Community 137 - "Стилізація"
Cohesion: 0.40
Nodes (5): Breakpoints:, Конфігурація Vite:, Підхід, Стилізація, Структура стилів компонента:

### Community 138 - "Інтернаціоналізація (Lingui)"
Cohesion: 0.40
Nodes (5): Використання, Команди:, Налаштування, Структура локалей:, Інтернаціоналізація (Lingui)

### Community 139 - "API Endpoints"
Cohesion: 0.40
Nodes (5): API Endpoints, Базовий URL, Загальні принципи, Коди відповідей, Формат помилок

### Community 140 - "Чат та повідомлення"
Cohesion: 0.33
Nodes (6): Real-time комунікація, WebSocket Events, Структура повідомлень, Чат та повідомлення, Історія чатів, Message

### Community 141 - "Загальний опис проєкту"
Cohesion: 0.40
Nodes (5): Архітектура фронтенду, Загальний опис проєкту, Назва та призначення, Основна ідея, Технології фронтенду

### Community 142 - "Гейміфікація"
Cohesion: 0.40
Nodes (5): Гейміфікація, Досягнення, Логіка нарахування XP, Рівні, Система XP (Досвід)

### Community 143 - "Додаткові функції"
Cohesion: 0.40
Nodes (5): Додаткові функції, Нотифікації, Пагінація, Пошук та фільтрація, Сортування

### Community 147 - "State Management (Zustand)"
Cohesion: 0.50
Nodes (4): State Management (Zustand), Архітектура Store, Особливості:, Патерн Store:

### Community 148 - "Залежності та встановлення"
Cohesion: 0.50
Nodes (4): Встановлення:, Залежності та встановлення, Запуск:, Основні залежності:

### Community 149 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 153 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 155 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 171 - "8. Компоненти"
Cohesion: 0.10
Nodes (21): 8.10. Avatar, 8.11. Tooltip, Hover-card, Popover, Dropdown, Context menu, Command, Menubar, Navigation menu, 8.12. Dialog, Alert-dialog, Sheet, Drawer, 8.13. Alert, Toast / Sonner / Toaster, Error, Loading, 8.14. Table, 8.15. Pagination, Universal pagination, 8.16. Progress, Slider, Calendar, Carousel, Chart, Aspect-ratio, 8.17. Accordion, Collapsible, Resizable, Scroll-area, Separator, Breadcrumb (+13 more)

### Community 173 - "@tanstack/react-query"
Cohesion: 0.16
Nodes (9): @tanstack/react-query, normalizeProposalItem(), proposalService, IProposalWithSeller, IGetProposalsRequest, IUpdateProposalRequest, EditProposalFormProps, EditProposalModalProps (+1 more)

### Community 174 - "RequestStatus"
Cohesion: 0.11
Nodes (16): Загальна логіка відгуків, Статуси запитів (RequestStatus), Статуси пропозицій (ProposalStatus), ProposalStatus, ACCEPTED, COMPLETED, PENDING, REJECTED (+8 more)

### Community 175 - "Композиція сторінок Shukayu"
Cohesion: 0.12
Nodes (16): 10. Вхід і реєстрація `/login`, `/register`, 11. Сповіщення (ціль: екран IconRail, зараз таб профілю), 12. Деталі пропозиції `/proposal/[id]`, 13. Другорядні публічні, 14. Зведена карта, 15. Поза скоупом, 1. Дві оболонки, 2. Словник блоків (+8 more)

### Community 176 - "UX універсальних компонентів Shukayu"
Cohesion: 0.15
Nodes (11): 10. Мобільні винятки (`&lt; md`), 11. Доступність (мінімум), 12. Поза скоупом цього файлу, 1. Принципи взаємодії, 2. Який контроль обрати, 6.1. Accordion vs Collapsible vs «more», 6.2. Вкладені розгортання, 6.3. Читати повністю (опис джоби / профілю) (+3 more)

### Community 177 - "Дизайн-система Shukayu"
Cohesion: 0.15
Nodes (13): 10. Що свідомо не змінюємо цим файлом, 1. Принципи, 3.1. Шкала, 3. Типографіка, 4.1. Правила сусідства (як елементи стоять один до одного), 4. Відступи (spacing), 5. Радіуси, рамки, іконки, 6.1. Публічний shell (гостьовий) (+5 more)

### Community 178 - "[locale]/layout.tsx"
Cohesion: 0.10
Nodes (19): 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, @next/third-parties, @vercel/analytics, generateMetadata(), generateStaticParams(), inter, messagesByLocale, Props (+11 more)

### Community 179 - "Card"
Cohesion: 0.05
Nodes (105): date-fns, @radix-ui/react-avatar, recharts, AdminAnalyticsPage(), AdminTrafficPage(), AdminContentBlogPage(), AdminContentPagesPage(), AdminContentPricingPage() (+97 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.22
Nodes (18): RequestPage(), useCreateTelegramLinkToken(), useDeleteRequestSubscription(), useNotificationPreferences(), useRequestSubscriptions(), useTelegramLinkStatus(), useUnlinkTelegram(), useUpdateNotificationPreferences() (+10 more)

### Community 183 - "4. Випадаючі поверхні"
Cohesion: 0.29
Nodes (7): 4.1. Dropdown menu (команди), 4.2. Select (значення форми), 4.3. Combobox (пошук + вибір), 4.4. Cascading select (дерево), 4.5. Popover, Hover card, Tooltip, 4.6. Context menu, Command palette, Menubar, Navigation menu, 4. Випадаючі поверхні

### Community 184 - "privacy/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PrivacyLayout(), messages, messages

### Community 185 - "2. Колір"
Cohesion: 0.40
Nodes (5): 2.1. Бренд (primary), 2.2. Нейтралі, 2.3. Семантика (не бренд), 2.4. Градієнти й тіні, 2. Колір

### Community 186 - "3. Кнопки"
Cohesion: 0.40
Nodes (5): 3.1. Ієрархія, 3.2. Групи, 3.3. Стани, 3.4. Кнопка vs посилання, 3. Кнопки

### Community 187 - "5. Списки"
Cohesion: 0.40
Nodes (5): 5.1. Меню-список (пункти overlay), 5.2. Лістинг сутностей (запити, пропозиції), 5.3. Таблиця (адмінка, щільні дані), 5.4. Віртуальні / довгі списки в overlay, 5. Списки

### Community 188 - "7. Перемикачі та вибір"
Cohesion: 0.40
Nodes (5): 7.1. Switch, 7.2. Checkbox і Radio, 7.3. Toggle і Toggle group, 7.4. Tabs, 7. Перемикачі та вибір

### Community 189 - "8. Модалки та панелі"
Cohesion: 0.40
Nodes (5): 8.1. Dialog, 8.2. Alert dialog, 8.3. Sheet і Drawer, 8.4. Toast vs Alert vs Empty vs Dialog помилки, 8. Модалки та панелі

## Knowledge Gaps
- **46 isolated node(s):** `immer`, `react-dom`, `tailwindcss-animate`, `@eslint/js`, `@lingui/macro` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 697 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `BlockUserActions.tsx`, `getLocaleFromHeaders`, `SupportContent.tsx`, `drawer.tsx`, `button.tsx`, `ProposalItem.tsx`, `CreateRequestForm.tsx`, `sidebar.tsx`, `dialog.tsx`, `use-toast.ts`, `input-otp.tsx`, `authStore.ts`, `universal-pagination.tsx`, `utils.ts`, `chart.tsx`, `entities/admin/index.ts`, `admin/layout.tsx`, `notification/index.ts`, `features/user/index.ts`, `cn`, `sheet.tsx`, `breadcrumbs.tsx`, `navigation-menu.tsx`, `package.json`, `about/layout.tsx`, `scroll-area.tsx`, `UserRequestsList.tsx`, `contact/layout.tsx`, `how-it-works/layout.tsx`, `pricing/layout.tsx`, `Card`, `support/layout.tsx`, `terms/layout.tsx`, `blog/layout.tsx`, `privacy/layout.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `RequestInfo.tsx`, `Button`, `NotificationSettingsContent.tsx`, `toggle-group.tsx`, `RequestSubscriptionModal.tsx`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **What connects `immer`, `react-dom`, `tailwindcss-animate` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `notificationSchema.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1422924901185771 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `BlockUserActions.tsx`, `SupportContent.tsx`, `drawer.tsx`, `ProposalItem.tsx`, `CreateRequestForm.tsx`, `sidebar.tsx`, `dialog.tsx`, `use-toast.ts`, `input-otp.tsx`, `universal-pagination.tsx`, `utils.ts`, `chart.tsx`, `entities/admin/index.ts`, `notification/index.ts`, `features/user/index.ts`, `sheet.tsx`, `breadcrumbs.tsx`, `navigation-menu.tsx`, `scroll-area.tsx`, `UserRequestsList.tsx`, `Card`, `Button`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `toggle-group.tsx`, `RequestSubscriptionModal.tsx`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Should `proposal/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1126984126984127 - nodes in this community are weakly interconnected._
- **Why does `@lingui/react` connect `button.tsx` to `BlockUserActions.tsx`, `getLocaleFromHeaders`, `SupportContent.tsx`, `ProposalItem.tsx`, `react`, `CreateRequestForm.tsx`, `dialog.tsx`, `universal-pagination.tsx`, `entities/admin/index.ts`, `notification/index.ts`, `features/user/index.ts`, `breadcrumbs.tsx`, `package.json`, `UserRequestsList.tsx`, `Card`, `Button`, `NotificationSettingsContent.tsx`, `RequestInfo.tsx`, `RequestDetailContent.tsx`, `RequestSubscriptionModal.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `getLocaleFromHeaders` be split into smaller, more focused modules?**
  _Cohesion score 0.058496853017400964 - nodes in this community are weakly interconnected._