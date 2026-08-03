# Graph Report - hochu_next  (2026-08-03)

## Corpus Check
- 415 files · ~91,635 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1841 nodes · 4383 edges · 173 communities (106 shown, 67 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c3ebe8cc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- AdminContent.tsx
- GamificationProgress.tsx
- proposal/index.ts
- getLocaleFromHeaders
- review/index.ts
- api.ts
- button.tsx
- EditRequestForm.tsx
- profile/layout.tsx
- routes.ts
- sidebar.tsx
- CreateReviewModal.tsx
- Chat.tsx
- ProfileTabs.tsx
- imageUpload.ts
- use-toast.ts
- LinguiProvider.tsx
- entities/auth/index.ts
- toggle-group.tsx
- ProposalItem.tsx
- cn
- ArticleSection.tsx
- compilerOptions
- compilerOptions
- ProposalDetailContent.tsx
- devDependencies
- components.json
- utils.ts
- compilerOptions
- chart.tsx
- dependencies
- SupportContent.tsx
- react
- notificationService.ts
- [locale]/page.tsx
- menubar.tsx
- scripts
- CreateRequestForm.tsx
- context-menu.tsx
- Детальний опис шарів
- sheet.tsx
- notificationSchema.ts
- navigation-menu.tsx
- package.json
- Виконано
- about/layout.tsx
- admin/layout.tsx
- breadcrumbs.tsx
- contact/layout.tsx
- how-it-works/layout.tsx
- pricing/layout.tsx
- privacy/layout.tsx
- support/layout.tsx
- terms/layout.tsx
- blog/layout.tsx
- locale.ts
- notificationPreferenceService.ts
- request/index.ts
- chat/index.ts
- eslint.config.mjs
- NotificationSettingsContent.tsx
- sonner.tsx
- Детальний опис архітектури проєкту MOOC Frontend
- class-variance-authority
- clsx
- Інтернаціоналізація (i18n) - Інструкція для розробників
- lint-staged
- embla-carousel-react
- autoprefixer
- axios
- sitemap.ts
- useRequest
- ProposalService
- Пагінація в додатку
- @hookform/resolvers
- RequestSubscriptionModal.tsx
- Основні сутності
- locationService.ts
- @lingui/core
- lucide-react
- next
- next-auth
- next.config.ts
- next-themes
- @radix-ui/react-accordion
- @radix-ui/react-alert-dialog
- @radix-ui/react-aspect-ratio
- Опис сторінок та необхідних даних
- @radix-ui/react-checkbox
- cmdk
- @radix-ui/react-context-menu
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-hover-card
- date-fns
- @radix-ui/react-navigation-menu
- Next.js FSD App
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- notification/index.ts
- eslint-config-prettier
- @radix-ui/react-separator
- @radix-ui/react-slider
- Документація Backend API для проєкту shukayu
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group
- @eslint/eslintrc
- @eslint/js
- react-resizable-panels
- react-toastify
- recharts
- sonner
- tailwind-merge
- tailwindcss-animate
- @tanstack/react-query
- vaul
- @vercel/analytics
- zod
- zustand
- Аутентифікація та авторизація
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- Правила та конвенції
- Патерни та практики
- immer
- { GET, POST }
- [locale]/layout.tsx
- Оптимізація
- Стилізація
- Інтернаціоналізація (Lingui)
- API Endpoints
- Чат та повідомлення
- Загальний опис проєкту
- Гейміфікація
- Додаткові функції
- @lingui/cli
- @radix-ui/react-avatar
- @radix-ui/react-collapsible
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
- @lingui/react
- @radix-ui/react-menubar
- @radix-ui/react-switch
- @radix-ui/react-toast
- @radix-ui/react-tooltip
- react-day-picker
- @radix-ui/react-tabs
- postcss
- prettier
- prettier-plugin-organize-imports
- @tailwindcss/typography
- @types/node
- @types/react

## God Nodes (most connected - your core abstractions)
1. `cn()` - 96 edges
2. `getLocaleFromHeaders()` - 82 edges
3. `Button` - 55 edges
4. `getMetadataForRoute()` - 46 edges
5. `routes` - 45 edges
6. `Link()` - 29 edges
7. `useAuthStore` - 25 edges
8. `ProposalService` - 23 edges
9. `RequestService` - 23 edges
10. `Детальний опис архітектури проєкту MOOC Frontend` - 22 edges

## Surprising Connections (you probably didn't know these)
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/shared/ui/carousel.tsx → package.json
- `CascadingSelect()` --references--> `react`  [EXTRACTED]
  src/shared/ui/cascading-select.tsx → package.json
- `useChart()` --references--> `react`  [EXTRACTED]
  src/shared/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  src/shared/ui/form.tsx → package.json
- `useSidebar()` --references--> `react`  [EXTRACTED]
  src/shared/ui/sidebar.tsx → package.json

## Import Cycles
- None detected.

## Communities (173 total, 67 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.22
Nodes (9): paginationResultSchema(), RequestSubscriptionService, NotificationChannel, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription, IUpdateRequestSubscriptionRequest, IPaginationResult (+1 more)

### Community 1 - "AdminContent.tsx"
Cohesion: 0.08
Nodes (33): REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY_LABELS, useCancelRequest(), EditRequestModal(), RequestInfo(), formatChange(), FormattedChange (+25 more)

### Community 2 - "GamificationProgress.tsx"
Cohesion: 0.11
Nodes (23): UserRole, Badge(), BadgeProps, badgeVariants, Progress, TooltipContent, Achievement, buyerAchievements (+15 more)

### Community 3 - "proposal/index.ts"
Cohesion: 0.16
Nodes (18): useCreateProposal(), useProposal(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, IProposal (+10 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.06
Nodes (35): generateMetadata(), generateMetadata(), generateMetadata(), PageProps, BlogArticlePage(), generateMetadata(), Props, generateMetadata() (+27 more)

### Community 5 - "review/index.ts"
Cohesion: 0.13
Nodes (18): useCreateReview(), useReviews(), useReviewStats(), reviewSchema, ReviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse (+10 more)

### Community 6 - "api.ts"
Cohesion: 0.16
Nodes (6): ContactService, IContactRequest, api, failedQueue, ENDPOINTS, LS_KEYS

### Community 7 - "button.tsx"
Cohesion: 0.16
Nodes (26): useCreateProfile(), ChangePasswordModalProps, GoogleSignInButton(), GoogleSignInButtonProps, ResetPasswordFormData, ResetPasswordFormProps, CreateProfileModal(), PROFILE_TYPE_LABELS (+18 more)

### Community 8 - "EditRequestForm.tsx"
Cohesion: 0.17
Nodes (17): RequestContent(), useCategories(), useRequestStore, EditRequestForm(), EditRequestFormValues, urgencyOptions, useDebounce(), DEFAULT_INITIAL_FILTERS (+9 more)

### Community 9 - "profile/layout.tsx"
Cohesion: 0.13
Nodes (16): CreateLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale, ProposalLayout(), messagesByLocale, RegisterLayout() (+8 more)

### Community 10 - "routes.ts"
Cohesion: 0.06
Nodes (38): GoogleAuthCompleteContent(), ResetPasswordContentProps, Props, Props, ProfileContent(), ProfilePage(), routes, useAuthStore (+30 more)

### Community 11 - "sidebar.tsx"
Cohesion: 0.08
Nodes (25): Sidebar, SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel (+17 more)

### Community 12 - "CreateReviewModal.tsx"
Cohesion: 0.12
Nodes (24): useCancelAcceptedProposal(), useCancelProposal(), useUserContacts(), AcceptProposalModalProps, CancelAcceptedProposalModal(), CancelAcceptedProposalModalProps, CancelProposalModal(), CancelProposalModalProps (+16 more)

### Community 13 - "Chat.tsx"
Cohesion: 0.14
Nodes (17): renderStars(), ReviewCard(), ReviewCardProps, DiscussionForm(), DiscussionFormProps, DiscussionItem(), DiscussionItemProps, DiscussionList() (+9 more)

### Community 14 - "ProfileTabs.tsx"
Cohesion: 0.18
Nodes (6): TabsContent, TabsList, TabsTrigger, ProfileReviews(), ProfileReviewsProps, renderStars()

### Community 15 - "imageUpload.ts"
Cohesion: 0.18
Nodes (13): createUploadFormData(), getUploadHeaders(), parseUploadResponse(), refreshAccessToken(), uploadFile(), ACCEPTED_EXTENSIONS, assertValidUploadedImageUrl(), EXT_TO_MIME (+5 more)

### Community 16 - "use-toast.ts"
Cohesion: 0.12
Nodes (24): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+16 more)

### Community 17 - "LinguiProvider.tsx"
Cohesion: 0.16
Nodes (15): GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout(), messagesByLocale, LoginLayout(), messagesByLocale (+7 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.06
Nodes (50): CreateRequestContent(), { handlers, signIn, signOut, auth }, LS_KEYS, AuthContext, AuthContextType, AuthProvider(), useAuth(), useChangePassword() (+42 more)

### Community 19 - "toggle-group.tsx"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 20 - "ProposalItem.tsx"
Cohesion: 0.12
Nodes (20): useProposals(), IProposalWithSeller, EditProposalFormProps, EditProposalModal(), EditProposalModalProps, ProposalItem(), ProposalItemProps, ProposalList() (+12 more)

### Community 21 - "cn"
Cohesion: 0.09
Nodes (28): CategoryFilterButton(), CategoryFilterButtonProps, cn(), ButtonProps, buttonVariants, Calendar(), CalendarProps, CommandShortcut() (+20 more)

### Community 22 - "ArticleSection.tsx"
Cohesion: 0.33
Nodes (8): ArticleSection(), Props, ArticleSectionData, createDefaultSections(), getIconComponent(), iconMap, parseContentToSections(), serializeSectionsToContent()

### Community 23 - "compilerOptions"
Cohesion: 0.04
Nodes (46): esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, compilerOptions (+38 more)

### Community 24 - "compilerOptions"
Cohesion: 0.11
Nodes (17): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+9 more)

### Community 25 - "ProposalDetailContent.tsx"
Cohesion: 0.26
Nodes (9): ChangePasswordModal(), RequestSubscriptionCardProps, Card, CardContent, CardDescription, CardHeader, CardTitle, PROFILE_TYPE_ICONS (+1 more)

### Community 26 - "devDependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, eslint-plugin-prettier, @lingui/macro, devDependencies, eslint, eslint-config-next, eslint-plugin-prettier (+9 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "utils.ts"
Cohesion: 0.10
Nodes (20): CascadingSelectProps, Checkbox, CityComboboxProps, Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput (+12 more)

### Community 29 - "compilerOptions"
Cohesion: 0.05
Nodes (38): ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib (+30 more)

### Community 30 - "chart.tsx"
Cohesion: 0.20
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 31 - "dependencies"
Cohesion: 0.13
Nodes (15): input-otp, dependencies, input-otp, @radix-ui/react-popover, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-slot, react-dom (+7 more)

### Community 32 - "SupportContent.tsx"
Cohesion: 0.32
Nodes (6): getFaqPageJsonLd(), AccordionContent, AccordionItem, AccordionTrigger, Faq(), FAQ_KEYS

### Community 33 - "react"
Cohesion: 0.25
Nodes (7): react, react, useIsMobile(), useCarousel(), useChart(), useFormField(), useSidebar()

### Community 34 - "notificationService.ts"
Cohesion: 0.17
Nodes (11): useUnreadCount(), NotificationService, INotification, NotificationCategory, IGetNotificationsRequest, MapNotificationFiltersInput, CATEGORY_VALUES, inferNotificationCategory() (+3 more)

### Community 35 - "[locale]/page.tsx"
Cohesion: 0.15
Nodes (3): generateMetadata(), features, steps

### Community 36 - "menubar.tsx"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "CreateRequestForm.tsx"
Cohesion: 0.10
Nodes (28): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS, useUpdateProposal(), REQUEST_URGENCY, CreateProposalForm(), CreateProposalFormProps (+20 more)

### Community 39 - "context-menu.tsx"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "sheet.tsx"
Cohesion: 0.22
Nodes (8): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants

### Community 42 - "notificationSchema.ts"
Cohesion: 0.25
Nodes (7): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, requestSubscriptionSchema

### Community 43 - "navigation-menu.tsx"
Cohesion: 0.25
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

### Community 47 - "admin/layout.tsx"
Cohesion: 0.38
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 48 - "breadcrumbs.tsx"
Cohesion: 0.12
Nodes (23): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), categorySchema, getCategoriesResponseSchema, objectIdSchema, CategoryService (+15 more)

### Community 49 - "contact/layout.tsx"
Cohesion: 0.38
Nodes (4): ContactLayout(), messagesByLocale, messages, messages

### Community 50 - "how-it-works/layout.tsx"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 51 - "pricing/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PricingLayout(), messages, messages

### Community 52 - "privacy/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PrivacyLayout(), messages, messages

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 55 - "blog/layout.tsx"
Cohesion: 0.38
Nodes (4): BlogLayout(), messagesByLocale, messages, messages

### Community 56 - "locale.ts"
Cohesion: 0.22
Nodes (14): OpengraphImage(), size, isLocale(), Locale, locales, localizeHref(), resolveLocale(), switchLocaleInPathname() (+6 more)

### Community 57 - "notificationPreferenceService.ts"
Cohesion: 0.47
Nodes (3): NotificationPreferenceService, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 58 - "request/index.ts"
Cohesion: 0.10
Nodes (27): generateMetadata(), getRequest, Props, RequestDetailPage(), useCreateRequest(), useLatestRequests(), useRequests(), createRequestSchema (+19 more)

### Community 60 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): compat, __dirname, __filename

### Community 61 - "NotificationSettingsContent.tsx"
Cohesion: 0.17
Nodes (19): useDeleteRequestSubscription(), useNotificationPreferences(), useRequestSubscriptions(), useUpdateNotificationPreferences(), ICategoryPreference, INewRequestsPreference, channelsForEnabled(), useProfiles() (+11 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (15): API та HTTP запити, index.ts:, Використання:, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Налаштування: (+7 more)

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "lint-staged"
Cohesion: 0.50
Nodes (5): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}, eslint --fix, prettier --write

### Community 71 - "sitemap.ts"
Cohesion: 0.22
Nodes (13): getBlogEntries(), getRequestEntries(), localizedUrl(), sitemap(), sitemapEntry(), STATIC_ROUTES, useBlogPost(), useBlogPosts() (+5 more)

### Community 72 - "useRequest"
Cohesion: 0.40
Nodes (4): ProposalDetailContent(), RequestDetailContent(), useCanPropose(), useRequest()

### Community 73 - "ProposalService"
Cohesion: 0.11
Nodes (8): useAcceptProposal(), useCompleteProposal(), useRejectProposal(), normalizeProposalItem(), ProposalService, AcceptProposalModal(), CompleteProposalModal(), RejectProposalModal()

### Community 74 - "Пагінація в додатку"
Cohesion: 0.15
Nodes (12): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+4 more)

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.27
Nodes (8): useCities(), CategoryChipsSelect(), CategoryChipsSelectProps, CATEGORY_OPTIONS, CityCombobox(), Label, labelVariants, Switch

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

### Community 100 - "notification/index.ts"
Cohesion: 0.20
Nodes (14): useCreateRequestSubscription(), useMarkAllNotificationsRead(), useMarkNotificationRead(), useNotifications(), useUpdateRequestSubscription(), mapNotificationFilters(), NotificationScope, ALL_NOTIFICATION_CHANNELS (+6 more)

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

### Community 135 - "[locale]/layout.tsx"
Cohesion: 0.14
Nodes (13): generateMetadata(), inter, messagesByLocale, Props, RootLayout(), getDefaultMetadata(), JsonLd(), JsonLdProps (+5 more)

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

## Knowledge Gaps
- **603 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+598 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **67 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `@radix-ui/react-avatar`, `@radix-ui/react-collapsible`, `@radix-ui/react-label`, `@lingui/react`, `@radix-ui/react-menubar`, `@radix-ui/react-switch`, `@radix-ui/react-toast`, `@radix-ui/react-tooltip`, `react`, `react-day-picker`, `@radix-ui/react-tabs`, `package.json`, `class-variance-authority`, `clsx`, `embla-carousel-react`, `axios`, `@hookform/resolvers`, `@lingui/core`, `lucide-react`, `next`, `next-auth`, `next-themes`, `@radix-ui/react-accordion`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-checkbox`, `cmdk`, `@radix-ui/react-context-menu`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-hover-card`, `date-fns`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-separator`, `@radix-ui/react-slider`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`, `react-resizable-panels`, `react-toastify`, `recharts`, `sonner`, `tailwind-merge`, `tailwindcss-animate`, `@tanstack/react-query`, `vaul`, `@vercel/analytics`, `zod`, `zustand`, `immer`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `EditRequestForm.tsx`, `use-toast.ts`, `cn`, `dependencies`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `AdminContent.tsx`, `GamificationProgress.tsx`, `review/index.ts`, `button.tsx`, `EditRequestForm.tsx`, `routes.ts`, `sidebar.tsx`, `CreateReviewModal.tsx`, `Chat.tsx`, `ProfileTabs.tsx`, `use-toast.ts`, `toggle-group.tsx`, `ProposalItem.tsx`, `ArticleSection.tsx`, `ProposalDetailContent.tsx`, `utils.ts`, `chart.tsx`, `SupportContent.tsx`, `menubar.tsx`, `CreateRequestForm.tsx`, `context-menu.tsx`, `sheet.tsx`, `navigation-menu.tsx`, `breadcrumbs.tsx`, `RequestSubscriptionModal.tsx`, `notification/index.ts`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _603 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `AdminContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08292682926829269 - nodes in this community are weakly interconnected._
- **Should `GamificationProgress.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11491935483870967 - nodes in this community are weakly interconnected._
- **Should `getLocaleFromHeaders` be split into smaller, more focused modules?**
  _Cohesion score 0.055135135135135134 - nodes in this community are weakly interconnected._