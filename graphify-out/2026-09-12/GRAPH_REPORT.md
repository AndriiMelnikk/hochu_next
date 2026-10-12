# Graph Report - hochu_next  (2026-09-07)

## Corpus Check
- 427 files · ~119,402 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1918 nodes · 4799 edges · 176 communities (106 shown, 70 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `68db7265`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- AdminContent.tsx
- GamificationProgress.tsx
- proposal/index.ts
- getLocaleFromHeaders
- card.tsx
- ProfileSettings.tsx
- routes.ts
- ProposalItem.tsx
- profile/layout.tsx
- CreateProposalForm.tsx
- sidebar.tsx
- button.tsx
- breadcrumbs.tsx
- entities/user/index.ts
- ProfileTabs.tsx
- use-toast.ts
- LinguiProvider.tsx
- entities/auth/index.ts
- dropdown-menu.tsx
- AuthService
- universal-pagination.tsx
- notification/index.ts
- compilerOptions
- compilerOptions
- NotificationService
- devDependencies
- components.json
- utils.ts
- compilerOptions
- chart.tsx
- dependencies
- RegisterForm.tsx
- admin/layout.tsx
- notificationService.ts
- IProfile
- cn
- scripts
- api
- lint-staged
- Детальний опис шарів
- sheet.tsx
- NotificationsTabContent.tsx
- navigation-menu.tsx
- package.json
- Виконано
- about/layout.tsx
- IUser
- RequestDetailContent.tsx
- contact/layout.tsx
- how-it-works/layout.tsx
- pricing/layout.tsx
- [locale]/page.tsx
- support/layout.tsx
- terms/layout.tsx
- blog/layout.tsx
- embla-carousel-react
- review/index.ts
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
- sitemap.ts
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- Пагінація в додатку
- globals
- NotificationSettingsContent.tsx
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
- BlogArticleContent.tsx
- input-otp.tsx
- useChangePassword.ts
- ProposalDetailContent.tsx
- CreateRequestForm.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 256 edges
2. `getLocaleFromHeaders()` - 82 edges
3. `Button` - 57 edges
4. `routes` - 46 edges
5. `getMetadataForRoute()` - 45 edges
6. `Link()` - 29 edges
7. `useAuthStore` - 28 edges
8. `ProposalService` - 23 edges
9. `RequestService` - 23 edges
10. `Input` - 22 edges

## Surprising Connections (you probably didn't know these)
- `AboutLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/about/layout.tsx → src/locales/locale.ts
- `AdminLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/admin/layout.tsx → src/locales/locale.ts
- `GoogleAuthCompleteLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/auth/google/complete/layout.tsx → src/locales/locale.ts
- `ResetPasswordLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/auth/reset-password/layout.tsx → src/locales/locale.ts
- `BlogLayout()` --calls--> `getLocaleFromHeaders()`  [EXTRACTED]
  src/app/[locale]/blog/layout.tsx → src/locales/locale.ts

## Import Cycles
- None detected.

## Communities (176 total, 70 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.13
Nodes (17): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, paginationResultSchema(), requestSubscriptionSchema (+9 more)

### Community 1 - "AdminContent.tsx"
Cohesion: 0.14
Nodes (22): RequestInfoProps, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay (+14 more)

### Community 2 - "GamificationProgress.tsx"
Cohesion: 0.14
Nodes (20): UserRole, Badge(), BadgeProps, badgeVariants, Achievement, buyerAchievements, buyerLevels, calculateLevel() (+12 more)

### Community 3 - "proposal/index.ts"
Cohesion: 0.07
Nodes (37): useCreateProposal(), useProposal(), useRejectProposal(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema, updateProposalSchema (+29 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.05
Nodes (43): AboutContent(), generateMetadata(), AdminContent(), generateMetadata(), generateMetadata(), PageProps, ResetPasswordContent(), BlogListContent() (+35 more)

### Community 5 - "card.tsx"
Cohesion: 0.28
Nodes (9): RequestSubscriptionCardProps, Card, CardContent, CardDescription, CardHeader, CardTitle, Chat(), Conversation (+1 more)

### Community 6 - "ProfileSettings.tsx"
Cohesion: 0.15
Nodes (19): GoogleAuthCompleteContent(), ProfilePage(), useAuthStore, useRequestStore, LoginForm(), useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired() (+11 more)

### Community 7 - "routes.ts"
Cohesion: 0.11
Nodes (18): ResetPasswordContentProps, generateMetadata(), Props, ProfileContent(), routes, useUser(), CreateRequestButton(), CreateRequestButtonProps (+10 more)

### Community 8 - "ProposalItem.tsx"
Cohesion: 0.13
Nodes (20): useCancelAcceptedProposal(), useCompleteProposal(), CancelAcceptedProposalModal(), CompleteProposalModal(), CreateReviewModal(), EditProposalModal(), RejectProposalModal(), Carousel (+12 more)

### Community 9 - "profile/layout.tsx"
Cohesion: 0.13
Nodes (16): CreateLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale, ProposalLayout(), messagesByLocale, RegisterLayout() (+8 more)

### Community 10 - "CreateProposalForm.tsx"
Cohesion: 0.14
Nodes (29): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS, useUpdateProposal(), ForgotPasswordForm(), getForgotPasswordSchema(), ResetPasswordFormData (+21 more)

### Community 11 - "sidebar.tsx"
Cohesion: 0.08
Nodes (29): useIsMobile(), Sidebar, SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent (+21 more)

### Community 12 - "button.tsx"
Cohesion: 0.16
Nodes (22): useAcceptProposal(), useCancelProposal(), ChangePasswordModalProps, AcceptProposalModal(), AcceptProposalModalProps, CancelAcceptedProposalModalProps, CancelProposalModal(), CancelProposalModalProps (+14 more)

### Community 13 - "breadcrumbs.tsx"
Cohesion: 0.09
Nodes (26): BlogArticleContent(), BlogArticlePage(), generateMetadata(), Props, generateMetadata(), inter, messagesByLocale, Props (+18 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.23
Nodes (15): PROFILES_QUERY_KEY, useCreateProfile(), accountSchema, createProfileSchema, profileSchema, updateContactsSchema, updateProfileSchema, userSchema (+7 more)

### Community 15 - "ProfileTabs.tsx"
Cohesion: 0.14
Nodes (18): useReviewStats(), TabsContent, TabsList, TabsTrigger, ProfileStats(), GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS (+10 more)

### Community 16 - "use-toast.ts"
Cohesion: 0.12
Nodes (24): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+16 more)

### Community 17 - "LinguiProvider.tsx"
Cohesion: 0.12
Nodes (18): GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout(), messagesByLocale, LoginLayout(), messagesByLocale (+10 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.16
Nodes (21): LS_KEYS, AuthContext, AuthContextType, AuthProvider(), useAuth(), authResponseSchema, changePasswordSchema, forgotPasswordSchema (+13 more)

### Community 19 - "dropdown-menu.tsx"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 20 - "AuthService"
Cohesion: 0.12
Nodes (7): { handlers, signIn, signOut, auth }, AuthService, IAuthResponse, JWT, next-auth, next-auth/jwt, Session

### Community 21 - "universal-pagination.tsx"
Cohesion: 0.24
Nodes (10): ButtonProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLink(), PaginationLinkProps, PaginationNext() (+2 more)

### Community 22 - "notification/index.ts"
Cohesion: 0.24
Nodes (8): useCreateRequestSubscription(), useUnreadCount(), useUpdateRequestSubscription(), NotificationPreferenceService, INotificationPreferences, IUpdateNotificationPreferencesRequest, ALL_NOTIFICATION_CHANNELS, RequestSubscriptionModal()

### Community 23 - "compilerOptions"
Cohesion: 0.04
Nodes (46): esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, compilerOptions (+38 more)

### Community 24 - "compilerOptions"
Cohesion: 0.11
Nodes (17): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+9 more)

### Community 25 - "NotificationService"
Cohesion: 0.22
Nodes (4): useMarkNotificationRead(), NotificationService, NotificationItem(), NotificationItemProps

### Community 26 - "devDependencies"
Cohesion: 0.12
Nodes (17): autoprefixer, eslint, eslint-config-next, eslint-plugin-prettier, @lingui/macro, devDependencies, autoprefixer, eslint (+9 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "utils.ts"
Cohesion: 0.13
Nodes (16): CascadingSelectProps, Checkbox, CityComboboxProps, Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput (+8 more)

### Community 29 - "compilerOptions"
Cohesion: 0.05
Nodes (38): ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib (+30 more)

### Community 30 - "chart.tsx"
Cohesion: 0.25
Nodes (9): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, getPayloadConfigFromPayload(), THEMES (+1 more)

### Community 31 - "dependencies"
Cohesion: 0.13
Nodes (15): axios, lucide-react, dependencies, axios, lucide-react, @radix-ui/react-checkbox, @radix-ui/react-context-menu, @radix-ui/react-dialog (+7 more)

### Community 32 - "RegisterForm.tsx"
Cohesion: 0.16
Nodes (12): useChangePassword(), AuthRequired(), AuthRequiredProps, ChangePasswordModal(), GoogleSignInButton(), GoogleSignInButtonProps, RegisterButton(), RegisterButtonProps (+4 more)

### Community 33 - "admin/layout.tsx"
Cohesion: 0.38
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 34 - "notificationService.ts"
Cohesion: 0.15
Nodes (17): INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY, NEW_REQUESTS, REQUEST_UPDATES (+9 more)

### Community 35 - "IProfile"
Cohesion: 0.24
Nodes (7): UserService, IProfile, ProfileType, CreateProfileModalProps, PROFILE_TYPE_ICONS, ProfileCardProps, ProfilesSwitcherProps

### Community 36 - "cn"
Cohesion: 0.07
Nodes (45): cn(), Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator() (+37 more)

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

### Community 42 - "NotificationsTabContent.tsx"
Cohesion: 0.26
Nodes (9): useMarkAllNotificationsRead(), useNotifications(), mapNotificationFilters(), NotificationScope, useProfiles(), CATEGORY_OPTIONS, NotificationFilters(), NotificationFiltersProps (+1 more)

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
Cohesion: 0.29
Nodes (5): AuthState, IUser, EditContactChannelsFormProps, EditContactChannelsModalProps, EditProfileFormProps

### Community 48 - "RequestDetailContent.tsx"
Cohesion: 0.08
Nodes (36): CreateRequestContent(), generateMetadata(), RequestDetailContent(), RequestContent(), useCategories(), useCanPropose(), useProposals(), useRequest() (+28 more)

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
Nodes (13): generateMetadata(), generateMetadata(), SupportContent(), getFaqPageJsonLd(), AccordionContent, AccordionItem, AccordionTrigger, Faq() (+5 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 55 - "blog/layout.tsx"
Cohesion: 0.38
Nodes (4): BlogLayout(), messagesByLocale, messages, messages

### Community 57 - "review/index.ts"
Cohesion: 0.23
Nodes (8): useCreateReview(), reviewSchema, ReviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse, IReviewStatsResponse, IReview

### Community 58 - "request/index.ts"
Cohesion: 0.07
Nodes (40): HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, useCancelRequest(), useCreateRequest(), useLatestRequests(), useRequests(), createRequestSchema (+32 more)

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

### Community 71 - "sitemap.ts"
Cohesion: 0.07
Nodes (33): AI_BOTS, DISALLOW, getBlogEntries(), getRequestEntries(), localizedUrl(), sitemap(), sitemapEntry(), STATIC_ROUTES (+25 more)

### Community 74 - "Пагінація в додатку"
Cohesion: 0.15
Nodes (12): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+4 more)

### Community 76 - "NotificationSettingsContent.tsx"
Cohesion: 0.15
Nodes (21): useDeleteRequestSubscription(), useNotificationPreferences(), useRequestSubscriptions(), useUpdateNotificationPreferences(), ICategoryPreference, INewRequestsPreference, channelsForEnabled(), CategoryChipsSelect() (+13 more)

### Community 77 - "Основні сутності"
Cohesion: 0.17
Nodes (12): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+4 more)

### Community 78 - "locationService.ts"
Cohesion: 0.29
Nodes (7): useCities(), citySchema, searchCitiesResponseSchema, LocationService, ICity, ISearchCitiesDto, ISearchCitiesResponse

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.22
Nodes (8): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 100 - "ContactSellerModal.tsx"
Cohesion: 0.43
Nodes (5): useUserContacts(), CHANNEL_ICONS, ContactSellerModal(), ContactSellerModalProps, getHref()

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

### Community 171 - "BlogArticleContent.tsx"
Cohesion: 0.29
Nodes (9): ArticleSection(), Props, Props, ArticleSectionData, createDefaultSections(), getIconComponent(), iconMap, parseContentToSections() (+1 more)

### Community 172 - "input-otp.tsx"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 179 - "ProposalDetailContent.tsx"
Cohesion: 0.17
Nodes (16): IRequestBuyer, renderStars(), ReviewCard(), ReviewCardProps, DiscussionForm(), DiscussionFormProps, DiscussionItem(), DiscussionItemProps (+8 more)

### Community 180 - "CreateRequestForm.tsx"
Cohesion: 0.12
Nodes (22): REQUEST_URGENCY, REQUEST_URGENCY_LABELS, CreateRequestForm(), urgencyOptions, EditRequestForm(), EditRequestFormValues, urgencyOptions, EditProfileForm() (+14 more)

## Knowledge Gaps
- **552 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+547 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **70 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `AdminContent.tsx`, `GamificationProgress.tsx`, `card.tsx`, `routes.ts`, `ProposalItem.tsx`, `CreateProposalForm.tsx`, `sidebar.tsx`, `button.tsx`, `breadcrumbs.tsx`, `ProfileTabs.tsx`, `use-toast.ts`, `dropdown-menu.tsx`, `universal-pagination.tsx`, `NotificationService`, `utils.ts`, `chart.tsx`, `sheet.tsx`, `BlogArticleContent.tsx`, `input-otp.tsx`, `navigation-menu.tsx`, `RequestDetailContent.tsx`, `ProposalDetailContent.tsx`, `CreateRequestForm.tsx`, `[locale]/page.tsx`, `toggle-group.tsx`, `NotificationSettingsContent.tsx`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Why does `getLocaleFromHeaders()` connect `getLocaleFromHeaders` to `admin/layout.tsx`, `routes.ts`, `locale.ts`, `profile/layout.tsx`, `breadcrumbs.tsx`, `about/layout.tsx`, `RequestDetailContent.tsx`, `LinguiProvider.tsx`, `contact/layout.tsx`, `how-it-works/layout.tsx`, `[locale]/page.tsx`, `pricing/layout.tsx`, `support/layout.tsx`, `blog/layout.tsx`, `terms/layout.tsx`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `Button` connect `button.tsx` to `AdminContent.tsx`, `card.tsx`, `ProfileSettings.tsx`, `routes.ts`, `ProposalItem.tsx`, `CreateProposalForm.tsx`, `sidebar.tsx`, `breadcrumbs.tsx`, `utils.ts`, `RegisterForm.tsx`, `cn`, `NotificationsTabContent.tsx`, `BlogArticleContent.tsx`, `RequestDetailContent.tsx`, `ProposalDetailContent.tsx`, `CreateRequestForm.tsx`, `[locale]/page.tsx`, `NotificationSettingsContent.tsx`, `ContactSellerModal.tsx`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _552 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `requestSubscriptionService.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1330049261083744 - nodes in this community are weakly interconnected._
- **Should `AdminContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13756613756613756 - nodes in this community are weakly interconnected._
- **Should `GamificationProgress.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1396011396011396 - nodes in this community are weakly interconnected._