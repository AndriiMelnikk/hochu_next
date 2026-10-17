# Graph Report - hochu_next  (2026-09-12)

## Corpus Check
- 435 files · ~131,655 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2044 nodes · 4932 edges · 194 communities (121 shown, 73 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `808d0655`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- AdminContent.tsx
- GamificationProgress.tsx
- proposal/index.ts
- getLocaleFromHeaders
- ProposalDetailContent.tsx
- ProfileSettings.tsx
- button.tsx
- ProposalItem.tsx
- profile/layout.tsx
- RegisterForm.tsx
- sidebar.tsx
- dialog.tsx
- breadcrumbs.tsx
- entities/user/index.ts
- ProfileTabs.tsx
- use-toast.ts
- LinguiProvider.tsx
- entities/auth/index.ts
- dropdown-menu.tsx
- AuthService
- universal-pagination.tsx
- notificationSchema.ts
- compilerOptions
- compilerOptions
- notification/index.ts
- devDependencies
- components.json
- utils.ts
- compilerOptions
- chart.tsx
- dependencies
- AuthRequired.tsx
- admin/layout.tsx
- notificationService.ts
- features/user/index.ts
- cn
- scripts
- api
- lint-staged
- Детальний опис шарів
- sheet.tsx
- SEO Technical Backlog — Shukayu
- navigation-menu.tsx
- package.json
- Виконано
- about/layout.tsx
- IUser
- RequestContent.tsx
- contact/layout.tsx
- how-it-works/layout.tsx
- pricing/layout.tsx
- [locale]/page.tsx
- support/layout.tsx
- terms/layout.tsx
- blog/layout.tsx
- embla-carousel-react
- RequestDetailContent.tsx
- request/index.ts
- chat/index.ts
- eslint.config.mjs
- category/index.ts
- sonner.tsx
- Детальний опис архітектури проєкту MOOC Frontend
- class-variance-authority
- clsx
- Інтернаціоналізація (i18n) - Інструкція для розробників
- eslint-config-prettier
- @eslint/eslintrc
- toggle-group.tsx
- @eslint/js
- blog/[id]/page.tsx
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- Пагінація в додатку
- globals
- RequestSubscriptionModal.tsx
- Основні сутності
- locationService.ts
- @lingui/core
- @hookform/resolvers
- next
- next-auth
- next.config.ts
- next-themes
- @radix-ui/react-accordion
- @radix-ui/react-alert-dialog
- @radix-ui/react-aspect-ratio
- Опис сторінок та необхідних даних
- input-otp
- cmdk
- @lingui/cli
- @lingui/react
- @radix-ui/react-avatar
- @radix-ui/react-hover-card
- date-fns
- @radix-ui/react-collapsible
- Next.js FSD App
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- ContactSellerModal.tsx
- @radix-ui/react-dropdown-menu
- @radix-ui/react-separator
- @radix-ui/react-navigation-menu
- Документація Backend API для проєкту shukayu
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group
- react-resizable-panels
- @tanstack/react-query
- next-env.d.ts
- react-toastify
- recharts
- sonner
- tailwind-merge
- tailwindcss-animate
- @radix-ui/react-popover
- vaul
- @vercel/analytics
- zod
- zustand
- Аутентифікація та авторизація
- @radix-ui/react-scroll-area
- @radix-ui/react-select
- @radix-ui/react-slot
- Правила та конвенції
- Патерни та практики
- immer
- { GET, POST }
- locale.ts
- Оптимізація
- Стилізація
- Інтернаціоналізація (Lingui)
- API Endpoints
- Чат та повідомлення
- Загальний опис проєкту
- Гейміфікація
- Додаткові функції
- postcss
- react-dom
- react-hook-form
- State Management (Zustand)
- Залежності та встановлення
- Роутинг (React Router v7)
- Файли та зображення
- Status.md
- Деплой
- TypeScript конфігурація
- Форми (React Hook Form)
- Змінні оточення
- Тестування (майбутнє)
- @radix-ui/react-label
- prettier
- @radix-ui/react-menubar
- @radix-ui/react-switch
- @radix-ui/react-toast
- @radix-ui/react-tooltip
- react-day-picker
- prettier-plugin-organize-imports
- @radix-ui/react-tabs
- @tailwindcss/typography
- @types/node
- @types/react
- typescript-eslint
- 8. Компоненти
- uploadFile.ts
- ProposalService
- proposalSchema.ts
- Композиція сторінок Shukayu
- UX універсальних компонентів Shukayu
- Дизайн-система Shukayu
- api.ts
- ReviewCard.tsx
- CreateRequestForm.tsx
- NotificationSettingsContent.tsx
- ProposalList.tsx
- 4. Випадаючі поверхні
- privacy/layout.tsx
- 2. Колір
- 3. Кнопки
- 5. Списки
- 7. Перемикачі та вибір
- 8. Модалки та панелі
- about/page.tsx
- privacy/page.tsx
- terms/page.tsx
- Features.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 258 edges
2. `getLocaleFromHeaders()` - 82 edges
3. `Button` - 57 edges
4. `routes` - 47 edges
5. `getMetadataForRoute()` - 45 edges
6. `Link()` - 30 edges
7. `useAuthStore` - 28 edges
8. `ProposalService` - 23 edges
9. `RequestService` - 23 edges
10. `useLocalizedRouter()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `AboutLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/about/layout.tsx → src/locales/locale.ts
- `AdminLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/admin/layout.tsx → src/locales/locale.ts
- `BlogLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/blog/layout.tsx → src/locales/locale.ts
- `ContactLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/contact/layout.tsx → src/locales/locale.ts
- `CreateLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/create/layout.tsx → src/locales/locale.ts

## Import Cycles
- None detected.

## Communities (194 total, 73 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.22
Nodes (10): paginationResultSchema(), RequestSubscriptionService, NotificationChannel, EMAIL, IN_APP, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription (+2 more)

### Community 1 - "AdminContent.tsx"
Cohesion: 0.15
Nodes (20): RequestInfo(), RequestInfoProps, formatChange(), FormattedChange, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription (+12 more)

### Community 2 - "GamificationProgress.tsx"
Cohesion: 0.13
Nodes (17): UserRole, Progress, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level (+9 more)

### Community 3 - "proposal/index.ts"
Cohesion: 0.14
Nodes (23): useCanPropose(), useCreateProposal(), IProposal, IProposalSeller, ProposalRejectionReason, ALREADY_PROPOSED, NO_CONTACTS, NOT_SELLER (+15 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.05
Nodes (44): AdminContent(), generateMetadata(), GoogleAuthCompleteLayout(), ResetPasswordLayout(), generateMetadata(), PageProps, ResetPasswordContent(), BlogListContent() (+36 more)

### Community 5 - "ProposalDetailContent.tsx"
Cohesion: 0.24
Nodes (12): RequestSubscriptionCardProps, Badge(), BadgeProps, badgeVariants, Card, CardContent, CardDescription, CardHeader (+4 more)

### Community 6 - "ProfileSettings.tsx"
Cohesion: 0.24
Nodes (11): GoogleAuthCompleteContent(), ProfilePage(), useAuthStore, LoginForm(), EditContactChannelsForm(), EditProfileForm(), localizeHref(), AppRouter (+3 more)

### Community 7 - "button.tsx"
Cohesion: 0.14
Nodes (17): ResetPasswordContentProps, routes, RegisterButton(), RegisterButtonProps, CategoryFilterButton(), CategoryFilterButtonProps, CreateRequestButton(), CreateRequestButtonProps (+9 more)

### Community 8 - "ProposalItem.tsx"
Cohesion: 0.17
Nodes (15): useAcceptProposal(), AcceptProposalModal(), Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem (+7 more)

### Community 9 - "profile/layout.tsx"
Cohesion: 0.13
Nodes (16): CreateLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale, ProposalLayout(), messagesByLocale, RegisterLayout() (+8 more)

### Community 10 - "RegisterForm.tsx"
Cohesion: 0.15
Nodes (26): ChangePasswordModal(), ChangePasswordModalProps, ForgotPasswordForm(), getForgotPasswordSchema(), GoogleSignInButton(), GoogleSignInButtonProps, RegisterForm(), getResetPasswordFormSchema() (+18 more)

### Community 11 - "sidebar.tsx"
Cohesion: 0.07
Nodes (30): useIsMobile(), Separator, Sidebar, SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction (+22 more)

### Community 12 - "dialog.tsx"
Cohesion: 0.11
Nodes (27): useCancelAcceptedProposal(), useCancelProposal(), useRejectProposal(), useCreateReview(), AcceptProposalModalProps, CancelAcceptedProposalModal(), CancelAcceptedProposalModalProps, CancelProposalModal() (+19 more)

### Community 13 - "breadcrumbs.tsx"
Cohesion: 0.23
Nodes (12): getBreadcrumbListJsonLd(), Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator() (+4 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.17
Nodes (18): PROFILES_QUERY_KEY, useMe(), useUser(), accountSchema, createProfileSchema, profileSchema, updateContactsSchema, updateProfileSchema (+10 more)

### Community 15 - "ProfileTabs.tsx"
Cohesion: 0.20
Nodes (11): ProfileStats(), GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS, PROFILE_HASH, PROFILE_TAB, ProfileTabId, resolveProfileTab() (+3 more)

### Community 16 - "use-toast.ts"
Cohesion: 0.12
Nodes (24): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+16 more)

### Community 17 - "LinguiProvider.tsx"
Cohesion: 0.26
Nodes (9): messagesByLocale, messagesByLocale, messagesByLocale, messagesByLocale, LinguiProvider(), LinguiProviderProps, messages, i18n (+1 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.14
Nodes (22): LS_KEYS, AuthContext, AuthContextType, AuthProvider(), useAuth(), useChangePassword(), authResponseSchema, changePasswordSchema (+14 more)

### Community 19 - "dropdown-menu.tsx"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 20 - "AuthService"
Cohesion: 0.12
Nodes (8): { handlers, signIn, signOut, auth }, AuthService, IGoogleAuthRequest, IAuthResponse, JWT, next-auth, next-auth/jwt, Session

### Community 21 - "universal-pagination.tsx"
Cohesion: 0.16
Nodes (15): ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem (+7 more)

### Community 22 - "notificationSchema.ts"
Cohesion: 0.19
Nodes (10): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, requestSubscriptionSchema, NotificationPreferenceService (+2 more)

### Community 23 - "compilerOptions"
Cohesion: 0.04
Nodes (46): esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, compilerOptions (+38 more)

### Community 24 - "compilerOptions"
Cohesion: 0.11
Nodes (17): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+9 more)

### Community 25 - "notification/index.ts"
Cohesion: 0.20
Nodes (9): useMarkAllNotificationsRead(), useMarkNotificationRead(), useNotifications(), useUnreadCount(), NotificationService, mapNotificationFilters(), ALL_NOTIFICATION_CHANNELS, NotificationItem() (+1 more)

### Community 26 - "devDependencies"
Cohesion: 0.12
Nodes (17): autoprefixer, eslint, eslint-config-next, eslint-plugin-prettier, @lingui/macro, devDependencies, autoprefixer, eslint (+9 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "utils.ts"
Cohesion: 0.18
Nodes (14): useCities(), CascadingSelectProps, CityCombobox(), CityComboboxProps, Command, CommandDialogProps, CommandEmpty, CommandGroup (+6 more)

### Community 29 - "compilerOptions"
Cohesion: 0.05
Nodes (38): ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib (+30 more)

### Community 30 - "chart.tsx"
Cohesion: 0.25
Nodes (9): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, getPayloadConfigFromPayload(), THEMES (+1 more)

### Community 31 - "dependencies"
Cohesion: 0.13
Nodes (15): axios, lucide-react, dependencies, axios, lucide-react, @radix-ui/react-checkbox, @radix-ui/react-context-menu, @radix-ui/react-dialog (+7 more)

### Community 32 - "AuthRequired.tsx"
Cohesion: 0.60
Nodes (3): AuthRequired(), AuthRequiredProps, cn()

### Community 33 - "admin/layout.tsx"
Cohesion: 0.38
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 34 - "notificationService.ts"
Cohesion: 0.14
Nodes (17): INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY, NEW_REQUESTS, REQUEST_UPDATES (+9 more)

### Community 35 - "features/user/index.ts"
Cohesion: 0.20
Nodes (15): useCreateProfile(), useProfiles(), ProfileType, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), CreateProfileModalProps (+7 more)

### Community 36 - "cn"
Cohesion: 0.06
Nodes (46): cn(), Checkbox, CommandSeparator, CommandShortcut(), ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel (+38 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "api"
Cohesion: 0.38
Nodes (4): ContactService, IContactRequest, api, ENDPOINTS

### Community 39 - "lint-staged"
Cohesion: 0.50
Nodes (5): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}, eslint --fix, prettier --write

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "sheet.tsx"
Cohesion: 0.25
Nodes (8): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants

### Community 42 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.09
Nodes (22): 0. Поточний стан (коротко), 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія (+14 more)

### Community 43 - "navigation-menu.tsx"
Cohesion: 0.29
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 44 - "package.json"
Cohesion: 0.29
Nodes (6): path, config, commitizen, name, private, version

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "about/layout.tsx"
Cohesion: 0.38
Nodes (4): AboutLayout(), messagesByLocale, messages, messages

### Community 47 - "IUser"
Cohesion: 0.33
Nodes (4): AuthState, IUser, EditContactChannelsFormProps, EditProfileFormProps

### Community 48 - "RequestContent.tsx"
Cohesion: 0.17
Nodes (8): Props, ProfileContent(), RequestContent(), useDebounce(), Error, ErrorProps, Loading, LoadingProps

### Community 49 - "contact/layout.tsx"
Cohesion: 0.38
Nodes (4): ContactLayout(), messagesByLocale, messages, messages

### Community 50 - "how-it-works/layout.tsx"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 51 - "pricing/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PricingLayout(), messages, messages

### Community 52 - "[locale]/page.tsx"
Cohesion: 0.10
Nodes (13): generateMetadata(), JsonLd(), JsonLdProps, getFaqPageJsonLd(), AccordionContent, AccordionItem, AccordionTrigger, Faq() (+5 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 55 - "blog/layout.tsx"
Cohesion: 0.38
Nodes (4): BlogLayout(), messagesByLocale, messages, messages

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.09
Nodes (26): useReviews(), useReviewStats(), reviewSchema, ReviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse, IReviewStatsResponse (+18 more)

### Community 58 - "request/index.ts"
Cohesion: 0.08
Nodes (35): generateMetadata(), getRequest, Props, RequestDetailPage(), HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, useCancelRequest(), useCreateRequest() (+27 more)

### Community 60 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): compat, __dirname, __filename

### Community 61 - "category/index.ts"
Cohesion: 0.23
Nodes (11): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), categorySchema, getCategoriesResponseSchema, objectIdSchema, CategoryService (+3 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (15): API та HTTP запити, index.ts:, Використання:, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Налаштування: (+7 more)

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 69 - "toggle-group.tsx"
Cohesion: 0.43
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 71 - "blog/[id]/page.tsx"
Cohesion: 0.10
Nodes (28): ArticleSection(), Props, BlogArticleContent(), Props, BlogArticlePage(), generateMetadata(), Props, getBlogEntries() (+20 more)

### Community 74 - "Пагінація в додатку"
Cohesion: 0.15
Nodes (12): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+4 more)

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.15
Nodes (20): useCreateRequestSubscription(), useUpdateRequestSubscription(), ICategoryPreference, INewRequestsPreference, NotificationScope, channelsForEnabled(), CategoryChipsSelect(), CategoryChipsSelectProps (+12 more)

### Community 77 - "Основні сутності"
Cohesion: 0.17
Nodes (12): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+4 more)

### Community 78 - "locationService.ts"
Cohesion: 0.33
Nodes (6): citySchema, searchCitiesResponseSchema, LocationService, ICity, ISearchCitiesDto, ISearchCitiesResponse

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.22
Nodes (8): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 100 - "ContactSellerModal.tsx"
Cohesion: 0.36
Nodes (6): RequestDetailContent(), useUserContacts(), CHANNEL_ICONS, ContactSellerModal(), ContactSellerModalProps, getHref()

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.25
Nodes (7): Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Діаграма взаємодії сутностей, Зміст, Структура бази даних, Сутності та їх взаємодії

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
Cohesion: 0.10
Nodes (28): generateMetadata(), manrope, messagesByLocale, Props, RootLayout(), alt, contentType, OpengraphImage() (+20 more)

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
Cohesion: 0.40
Nodes (5): Real-time комунікація, WebSocket Events, Структура повідомлень, Чат та повідомлення, Історія чатів

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

### Community 150 - "Файли та зображення"
Cohesion: 0.50
Nodes (4): Storage Strategy, Завантаження зображень, Обмеження, Файли та зображення

### Community 151 - "Status.md"
Cohesion: 0.50
Nodes (3): Загальна логіка відгуків, Статуси запитів (RequestStatus), Статуси пропозицій (ProposalStatus)

### Community 152 - "Деплой"
Cohesion: 0.67
Nodes (3): Environment Variables, Netlify, Деплой

### Community 153 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 154 - "Форми (React Hook Form)"
Cohesion: 0.67
Nodes (3): Валідація:, Патерн використання:, Форми (React Hook Form)

### Community 155 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 156 - "Тестування (майбутнє)"
Cohesion: 0.67
Nodes (3): Рекомендована структура:, Тестування (майбутнє), Інструменти:

### Community 171 - "8. Компоненти"
Cohesion: 0.10
Nodes (21): 8.10. Avatar, 8.11. Tooltip, Hover-card, Popover, Dropdown, Context menu, Command, Menubar, Navigation menu, 8.12. Dialog, Alert-dialog, Sheet, Drawer, 8.13. Alert, Toast / Sonner / Toaster, Error, Loading, 8.14. Table, 8.15. Pagination, Universal pagination, 8.16. Progress, Slider, Calendar, Carousel, Chart, Aspect-ratio, 8.17. Accordion, Collapsible, Resizable, Scroll-area, Separator, Breadcrumb (+13 more)

### Community 172 - "uploadFile.ts"
Cohesion: 0.18
Nodes (14): createUploadFormData(), getUploadHeaders(), parseUploadResponse(), refreshAccessToken(), uploadFile(), ACCEPTED_IMAGE_TYPES, ACCEPTED_EXTENSIONS, assertValidUploadedImageUrl() (+6 more)

### Community 173 - "ProposalService"
Cohesion: 0.13
Nodes (8): useCompleteProposal(), normalizeProposalItem(), ProposalService, IProposalWithSeller, CompleteProposalModal(), EditProposalFormProps, EditProposalModalProps, ProposalItemProps

### Community 174 - "proposalSchema.ts"
Cohesion: 0.14
Nodes (13): useProposal(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, ProposalStatus, ACCEPTED (+5 more)

### Community 175 - "Композиція сторінок Shukayu"
Cohesion: 0.12
Nodes (16): 10. Вхід і реєстрація `/login`, `/register`, 11. Сповіщення (ціль: екран IconRail, зараз таб профілю), 12. Деталі пропозиції `/proposal/[id]`, 13. Другорядні публічні, 14. Зведена карта, 15. Поза скоупом, 1. Дві оболонки, 2. Словник блоків (+8 more)

### Community 176 - "UX універсальних компонентів Shukayu"
Cohesion: 0.15
Nodes (11): 10. Мобільні винятки (`&lt; md`), 11. Доступність (мінімум), 12. Поза скоупом цього файлу, 1. Принципи взаємодії, 2. Який контроль обрати, 6.1. Accordion vs Collapsible vs «more», 6.2. Вкладені розгортання, 6.3. Читати повністю (опис джоби / профілю) (+3 more)

### Community 177 - "Дизайн-система Shukayu"
Cohesion: 0.15
Nodes (13): 10. Що свідомо не змінюємо цим файлом, 1. Принципи, 3.1. Шкала, 3. Типографіка, 4.1. Правила сусідства (як елементи стоять один до одного), 4. Відступи (spacing), 5. Радіуси, рамки, іконки, 6.1. Публічний shell (гостьовий) (+5 more)

### Community 178 - "api.ts"
Cohesion: 0.19
Nodes (6): AI_BOTS, DISALLOW, failedQueue, apiBaseUrl, LS_KEYS, siteUrl

### Community 179 - "ReviewCard.tsx"
Cohesion: 0.17
Nodes (16): IRequestBuyer, renderStars(), ReviewCard(), DiscussionForm(), DiscussionFormProps, DiscussionItem(), DiscussionItemProps, DiscussionList() (+8 more)

### Community 180 - "CreateRequestForm.tsx"
Cohesion: 0.10
Nodes (35): useCategories(), PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS, useUpdateProposal(), REQUEST_STATUS_LABELS, REQUEST_URGENCY (+27 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.24
Nodes (11): useDeleteRequestSubscription(), useNotificationPreferences(), useRequestSubscriptions(), useUpdateNotificationPreferences(), RequestSubscriptionCard(), AccountMessagesSection(), BUYER_CATEGORIES, NotificationSettingsContent() (+3 more)

### Community 182 - "ProposalList.tsx"
Cohesion: 0.25
Nodes (8): useProposals(), EditProposalModal(), ProposalItem(), ProposalList(), DEFAULT_INITIAL_FILTERS, useQueryPagination(), UseQueryPaginationOptions, UseQueryPaginationReturn

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
- **649 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+644 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **73 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `AdminContent.tsx`, `GamificationProgress.tsx`, `proposal/index.ts`, `ProposalDetailContent.tsx`, `button.tsx`, `ProposalItem.tsx`, `RegisterForm.tsx`, `sidebar.tsx`, `dialog.tsx`, `breadcrumbs.tsx`, `use-toast.ts`, `dropdown-menu.tsx`, `universal-pagination.tsx`, `notification/index.ts`, `utils.ts`, `chart.tsx`, `sheet.tsx`, `navigation-menu.tsx`, `RequestContent.tsx`, `ReviewCard.tsx`, `CreateRequestForm.tsx`, `[locale]/page.tsx`, `RequestDetailContent.tsx`, `toggle-group.tsx`, `blog/[id]/page.tsx`, `RequestSubscriptionModal.tsx`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `getLocaleFromHeaders()` connect `getLocaleFromHeaders` to `locale.ts`, `profile/layout.tsx`, `LinguiProvider.tsx`, `admin/layout.tsx`, `about/layout.tsx`, `RequestContent.tsx`, `contact/layout.tsx`, `how-it-works/layout.tsx`, `pricing/layout.tsx`, `[locale]/page.tsx`, `support/layout.tsx`, `terms/layout.tsx`, `blog/layout.tsx`, `privacy/layout.tsx`, `request/index.ts`, `about/page.tsx`, `privacy/page.tsx`, `terms/page.tsx`, `blog/[id]/page.tsx`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `Button` connect `button.tsx` to `AdminContent.tsx`, `ProposalDetailContent.tsx`, `ProfileSettings.tsx`, `ProposalItem.tsx`, `RegisterForm.tsx`, `sidebar.tsx`, `dialog.tsx`, `breadcrumbs.tsx`, `universal-pagination.tsx`, `notification/index.ts`, `utils.ts`, `AuthRequired.tsx`, `features/user/index.ts`, `cn`, `ReviewCard.tsx`, `CreateRequestForm.tsx`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `blog/[id]/page.tsx`, `RequestSubscriptionModal.tsx`, `ContactSellerModal.tsx`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _649 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `GamificationProgress.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._
- **Should `proposal/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1411764705882353 - nodes in this community are weakly interconnected._
- **Should `getLocaleFromHeaders` be split into smaller, more focused modules?**
  _Cohesion score 0.0502283105022831 - nodes in this community are weakly interconnected._