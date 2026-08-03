# Graph Report - hochu_next  (2026-08-03)

## Corpus Check
- 416 files · ~91,884 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1849 nodes · 4394 edges · 166 communities (117 shown, 49 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `898c2e91`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- AdminContent.tsx
- ProposalDetailContent.tsx
- proposal/index.ts
- getLocaleFromHeaders
- RequestDetailContent.tsx
- api.ts
- CreateRequestForm.tsx
- UserRequestsList.tsx
- profile/layout.tsx
- routes.ts
- sidebar.tsx
- ChangePasswordModal.tsx
- entities/user/index.ts
- EditRequestForm.tsx
- shared/utils/index.ts
- use-toast.ts
- LinguiProvider.tsx
- entities/auth/index.ts
- toggle-group.tsx
- button.tsx
- cn
- authStore.ts
- compilerOptions
- compilerOptions
- ProfilesTabContent.tsx
- devDependencies
- components.json
- utils.ts
- compilerOptions
- chart.tsx
- dependencies
- blog/[id]/page.tsx
- breadcrumbs.tsx
- notificationService.ts
- [locale]/page.tsx
- menubar.tsx
- scripts
- CreateProposalForm.tsx
- context-menu.tsx
- Детальний опис шарів
- sheet.tsx
- drawer.tsx
- navigation-menu.tsx
- package.json
- Виконано
- about/layout.tsx
- admin/layout.tsx
- category/index.ts
- contact/layout.tsx
- how-it-works/layout.tsx
- pricing/layout.tsx
- privacy/layout.tsx
- support/layout.tsx
- terms/layout.tsx
- ContactSellerModal.tsx
- Header.tsx
- notification/index.ts
- requestService.ts
- chat/index.ts
- eslint.config.mjs
- NotificationSettingsContent.tsx
- sonner.tsx
- Детальний опис архітектури проєкту MOOC Frontend
- class-variance-authority
- clsx
- Інтернаціоналізація (i18n) - Інструкція для розробників
- RequestService
- embla-carousel-react
- requests/index.ts
- features/auth/index.ts
- blog/index.ts
- request/index.ts
- ProposalService
- Пагінація в додатку
- @hookform/resolvers
- notifications/index.ts
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
- NotificationService
- @radix-ui/react-context-menu
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-hover-card
- dropdown-menu.tsx
- @radix-ui/react-navigation-menu
- Next.js FSD App
- @radix-ui/react-progress
- @radix-ui/react-radio-group
- NotificationsTabContent.tsx
- @radix-ui/react-select
- @radix-ui/react-separator
- @radix-ui/react-slider
- Документація Backend API для проєкту shukayu
- @radix-ui/react-toggle
- @radix-ui/react-toggle-group
- react-dom
- react-hook-form
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
- middleware.ts
- HowItWorksContent.tsx
- sitemap.ts
- Правила та конвенції
- Патерни та практики
- RequestInfo
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
- AcceptProposalModal.tsx
- CancelProposalModal.tsx
- input-otp.tsx
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
- radio-group.tsx
- @lingui/react
- @radix-ui/react-menubar
- @radix-ui/react-switch
- @radix-ui/react-toast
- @radix-ui/react-tooltip
- react-day-picker

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
- `useIsMobile()` --references--> `react`  [EXTRACTED]
  src/hooks/use-mobile.tsx → package.json
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/shared/ui/carousel.tsx → package.json
- `CascadingSelect()` --references--> `react`  [EXTRACTED]
  src/shared/ui/cascading-select.tsx → package.json
- `useChart()` --references--> `react`  [EXTRACTED]
  src/shared/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  src/shared/ui/form.tsx → package.json

## Import Cycles
- None detected.

## Communities (166 total, 49 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.21
Nodes (10): paginationResultSchema(), RequestSubscriptionService, NotificationChannel, ICategoryPreference, INewRequestsPreference, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription (+2 more)

### Community 1 - "AdminContent.tsx"
Cohesion: 0.19
Nodes (16): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+8 more)

### Community 2 - "ProposalDetailContent.tsx"
Cohesion: 0.05
Nodes (56): ArticleSection(), Props, Props, ArticleSectionData, createDefaultSections(), getIconComponent(), iconMap, parseContentToSections() (+48 more)

### Community 3 - "proposal/index.ts"
Cohesion: 0.14
Nodes (19): ProposalDetailContent(), useCanPropose(), useCreateProposal(), useProposal(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema (+11 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.06
Nodes (31): generateMetadata(), generateMetadata(), generateMetadata(), PageProps, generateMetadata(), generateMetadata(), generateMetadata(), generateMetadata() (+23 more)

### Community 5 - "RequestDetailContent.tsx"
Cohesion: 0.07
Nodes (27): generateMetadata(), useCreateReview(), useReviews(), useReviewStats(), reviewSchema, ReviewService, ICreateReviewRequest, IGetReviewsRequest (+19 more)

### Community 6 - "api.ts"
Cohesion: 0.16
Nodes (6): ContactService, IContactRequest, api, failedQueue, ENDPOINTS, LS_KEYS

### Community 7 - "CreateRequestForm.tsx"
Cohesion: 0.16
Nodes (24): useUpdateProposal(), GoogleSignInButton(), GoogleSignInButtonProps, ResetPasswordFormData, ResetPasswordFormProps, EditProposalForm(), EditProposalFormValues, urgencyOptions (+16 more)

### Community 8 - "UserRequestsList.tsx"
Cohesion: 0.19
Nodes (15): RequestContent(), useCategories(), useRequestStore, EditRequestForm(), useDebounce(), DEFAULT_INITIAL_FILTERS, useQueryPagination(), UseQueryPaginationOptions (+7 more)

### Community 9 - "profile/layout.tsx"
Cohesion: 0.13
Nodes (16): CreateLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale, ProposalLayout(), messagesByLocale, RegisterLayout() (+8 more)

### Community 10 - "routes.ts"
Cohesion: 0.15
Nodes (7): ResetPasswordContentProps, CreateRequestContent(), routes, CreateRequestButtonProps, breadcrumbLabels, Link(), LinkProps

### Community 11 - "sidebar.tsx"
Cohesion: 0.07
Nodes (27): useIsMobile(), Sidebar, SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent (+19 more)

### Community 12 - "ChangePasswordModal.tsx"
Cohesion: 0.17
Nodes (17): useCompleteProposal(), useRejectProposal(), ChangePasswordModalProps, CancelAcceptedProposalModalProps, CompleteProposalModal(), CompleteProposalModalProps, CreateReviewFormValues, CreateReviewModalProps (+9 more)

### Community 13 - "entities/user/index.ts"
Cohesion: 0.14
Nodes (22): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), accountSchema, createProfileSchema, profileSchema, updateContactsSchema, updateProfileSchema (+14 more)

### Community 14 - "EditRequestForm.tsx"
Cohesion: 0.19
Nodes (12): REQUEST_URGENCY, REQUEST_URGENCY_LABELS, CATEGORY_OPTIONS, EditRequestFormValues, urgencyOptions, SelectContent, SelectItem, SelectLabel (+4 more)

### Community 15 - "shared/utils/index.ts"
Cohesion: 0.13
Nodes (20): CreateProposalForm(), CreateRequestForm(), createUploadFormData(), getUploadHeaders(), parseUploadResponse(), refreshAccessToken(), uploadFile(), ACCEPTED_IMAGE_TYPES (+12 more)

### Community 16 - "use-toast.ts"
Cohesion: 0.12
Nodes (24): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+16 more)

### Community 17 - "LinguiProvider.tsx"
Cohesion: 0.16
Nodes (15): GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout(), messagesByLocale, LoginLayout(), messagesByLocale (+7 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.14
Nodes (14): { handlers, signIn, signOut, auth }, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+6 more)

### Community 19 - "toggle-group.tsx"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 20 - "button.tsx"
Cohesion: 0.11
Nodes (24): RequestDetailContent(), useProposals(), IProposalWithSeller, CreateReviewModal(), EditProposalFormProps, EditProposalModal(), EditProposalModalProps, ProposalItem() (+16 more)

### Community 21 - "cn"
Cohesion: 0.12
Nodes (21): cn(), ButtonProps, buttonVariants, Calendar(), CalendarProps, Checkbox, HoverCardContent, Pagination() (+13 more)

### Community 22 - "authStore.ts"
Cohesion: 0.11
Nodes (16): AuthContext, AuthContextType, AuthProvider(), useAuth(), AuthService, AuthActions, AuthState, buildAuthStateFromResponse() (+8 more)

### Community 23 - "compilerOptions"
Cohesion: 0.04
Nodes (46): esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, compilerOptions (+38 more)

### Community 24 - "compilerOptions"
Cohesion: 0.11
Nodes (17): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+9 more)

### Community 25 - "ProfilesTabContent.tsx"
Cohesion: 0.15
Nodes (16): GoogleAuthCompleteContent(), ProfileContent(), useAuthStore, useMe(), useUser(), ProfileType, LoginForm(), RegisterForm() (+8 more)

### Community 26 - "devDependencies"
Cohesion: 0.04
Nodes (45): autoprefixer, eslint, eslint-config-next, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks (+37 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "utils.ts"
Cohesion: 0.19
Nodes (14): useCities(), CascadingSelectProps, CityCombobox(), CityComboboxProps, Command, CommandDialogProps, CommandEmpty, CommandGroup (+6 more)

### Community 29 - "compilerOptions"
Cohesion: 0.05
Nodes (38): ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib (+30 more)

### Community 30 - "chart.tsx"
Cohesion: 0.12
Nodes (13): react, react, useCarousel(), ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent (+5 more)

### Community 31 - "dependencies"
Cohesion: 0.08
Nodes (25): axios, cmdk, date-fns, immer, input-otp, dependencies, axios, cmdk (+17 more)

### Community 32 - "blog/[id]/page.tsx"
Cohesion: 0.15
Nodes (15): BlogArticlePage(), generateMetadata(), Props, JsonLd(), JsonLdProps, BlogPostingJsonLdInput, BreadcrumbJsonLdItem, FaqJsonLdItem (+7 more)

### Community 33 - "breadcrumbs.tsx"
Cohesion: 0.23
Nodes (12): getBreadcrumbListJsonLd(), Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator() (+4 more)

### Community 34 - "notificationService.ts"
Cohesion: 0.18
Nodes (14): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, requestSubscriptionSchema, NotificationCategory (+6 more)

### Community 35 - "[locale]/page.tsx"
Cohesion: 0.15
Nodes (3): generateMetadata(), features, steps

### Community 36 - "menubar.tsx"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "CreateProposalForm.tsx"
Cohesion: 0.22
Nodes (8): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS, CreateProposalFormProps, CreateProposalFormValues, Textarea, TextareaProps

### Community 39 - "context-menu.tsx"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "sheet.tsx"
Cohesion: 0.22
Nodes (8): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants

### Community 42 - "drawer.tsx"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 43 - "navigation-menu.tsx"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 44 - "package.json"
Cohesion: 0.18
Nodes (11): path, config, commitizen, lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}, name, private (+3 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "about/layout.tsx"
Cohesion: 0.18
Nodes (8): AboutLayout(), messagesByLocale, BlogLayout(), messagesByLocale, messages, messages, messages, messages

### Community 47 - "admin/layout.tsx"
Cohesion: 0.38
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 48 - "category/index.ts"
Cohesion: 0.23
Nodes (11): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), categorySchema, getCategoriesResponseSchema, objectIdSchema, CategoryService (+3 more)

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

### Community 55 - "ContactSellerModal.tsx"
Cohesion: 0.47
Nodes (5): useUserContacts(), CHANNEL_ICONS, ContactSellerModal(), ContactSellerModalProps, getHref()

### Community 56 - "Header.tsx"
Cohesion: 0.24
Nodes (13): OpengraphImage(), size, isLocale(), Locale, localizeHref(), resolveLocale(), switchLocaleInPathname(), config (+5 more)

### Community 57 - "notification/index.ts"
Cohesion: 0.23
Nodes (9): useCreateRequestSubscription(), useUnreadCount(), useUpdateRequestSubscription(), NotificationPreferenceService, INotificationPreferences, IUpdateNotificationPreferencesRequest, ALL_NOTIFICATION_CHANNELS, RequestSubscriptionModal() (+1 more)

### Community 58 - "requestService.ts"
Cohesion: 0.28
Nodes (9): RequestActions, IRequest, IRequestWithBuyer, ItemCondition, ICreateRequestRequest, IUpdateRequestRequest, EditRequestFormProps, EditRequestModalProps (+1 more)

### Community 60 - "eslint.config.mjs"
Cohesion: 0.50
Nodes (3): compat, __dirname, __filename

### Community 61 - "NotificationSettingsContent.tsx"
Cohesion: 0.19
Nodes (14): useDeleteRequestSubscription(), useNotificationPreferences(), useRequestSubscriptions(), useUpdateNotificationPreferences(), channelsForEnabled(), NotificationPreferencesSection(), NotificationPreferencesSectionProps, AccountMessagesSection() (+6 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (15): API та HTTP запити, index.ts:, Використання:, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Налаштування: (+7 more)

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "RequestService"
Cohesion: 0.21
Nodes (8): generateMetadata(), getRequest, Props, RequestDetailPage(), RequestService, RequestState, IGetRequestsRequest, IGetRequestsResponse

### Community 69 - "requests/index.ts"
Cohesion: 0.17
Nodes (11): REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, RequestStatus, CategoryFilterButton(), CategoryFilterButtonProps, EditRequestModal(), RequestCard(), RequestCardProps (+3 more)

### Community 70 - "features/auth/index.ts"
Cohesion: 0.18
Nodes (10): ProfilePage(), AuthRequired(), AuthRequiredProps, ForgotPasswordForm(), getForgotPasswordSchema(), RegisterButton(), RegisterButtonProps, getResetPasswordFormSchema() (+2 more)

### Community 71 - "blog/index.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, BlogService, IBlogPost, IGetBlogPostsResponse

### Community 72 - "request/index.ts"
Cohesion: 0.24
Nodes (9): useCreateRequest(), useLatestRequests(), useRequest(), useRequests(), createRequestSchema, getRequestsResponseSchema, requestBuyerSchema, requestSchema (+1 more)

### Community 73 - "ProposalService"
Cohesion: 0.15
Nodes (4): useCancelAcceptedProposal(), normalizeProposalItem(), ProposalService, CancelAcceptedProposalModal()

### Community 74 - "Пагінація в додатку"
Cohesion: 0.15
Nodes (12): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+4 more)

### Community 76 - "notifications/index.ts"
Cohesion: 0.23
Nodes (8): CategoryChipsSelect(), CategoryChipsSelectProps, NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, RequestSubscriptionCard(), Label, labelVariants, Switch

### Community 77 - "Основні сутності"
Cohesion: 0.17
Nodes (12): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+4 more)

### Community 78 - "locationService.ts"
Cohesion: 0.33
Nodes (6): citySchema, searchCitiesResponseSchema, LocationService, ICity, ISearchCitiesDto, ISearchCitiesResponse

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 90 - "NotificationService"
Cohesion: 0.22
Nodes (5): useMarkNotificationRead(), NotificationService, INotification, NotificationItem(), NotificationItemProps

### Community 95 - "dropdown-menu.tsx"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.22
Nodes (8): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 100 - "NotificationsTabContent.tsx"
Cohesion: 0.31
Nodes (7): useMarkAllNotificationsRead(), useNotifications(), mapNotificationFilters(), NotificationScope, NotificationFilters(), NotificationFiltersProps, NotificationsTabContent()

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.25
Nodes (7): Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Діаграма взаємодії сутностей, Зміст, Структура бази даних, Сутності та їх взаємодії

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 121 - "middleware.ts"
Cohesion: 0.39
Nodes (7): config, detectPreferredLocale(), isLocale(), Locale, LOCALES, middleware(), resolveLocaleFromAcceptLanguage()

### Community 122 - "HowItWorksContent.tsx"
Cohesion: 0.36
Nodes (3): CreateRequestButton(), HeroBadge, HeroBadgeProps

### Community 123 - "sitemap.ts"
Cohesion: 0.50
Nodes (7): getBlogEntries(), getRequestEntries(), localizedUrl(), sitemap(), sitemapEntry(), STATIC_ROUTES, locales

### Community 124 - "Правила та конвенції"
Cohesion: 0.29
Nodes (7): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 5. Обробка помилок, 6. Стан завантаження, Правила та конвенції

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 126 - "RequestInfo"
Cohesion: 0.33
Nodes (4): useCancelRequest(), RequestInfo(), formatChange(), FormattedChange

### Community 135 - "[locale]/layout.tsx"
Cohesion: 0.24
Nodes (8): generateMetadata(), inter, messagesByLocale, Props, RootLayout(), getDefaultMetadata(), getOrganizationJsonLd(), getWebSiteJsonLd()

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

### Community 144 - "AcceptProposalModal.tsx"
Cohesion: 0.60
Nodes (3): useAcceptProposal(), AcceptProposalModal(), AcceptProposalModalProps

### Community 145 - "CancelProposalModal.tsx"
Cohesion: 0.60
Nodes (3): useCancelProposal(), CancelProposalModal(), CancelProposalModalProps

### Community 146 - "input-otp.tsx"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

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
- **606 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+601 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **49 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `@lingui/react`, `@radix-ui/react-menubar`, `@radix-ui/react-switch`, `@radix-ui/react-toast`, `@radix-ui/react-tooltip`, `chart.tsx`, `react-day-picker`, `package.json`, `class-variance-authority`, `clsx`, `embla-carousel-react`, `@hookform/resolvers`, `@lingui/core`, `lucide-react`, `next`, `next-auth`, `next-themes`, `@radix-ui/react-accordion`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-checkbox`, `@radix-ui/react-context-menu`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-hover-card`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-select`, `@radix-ui/react-separator`, `@radix-ui/react-slider`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`, `react-dom`, `react-hook-form`, `react-resizable-panels`, `react-toastify`, `recharts`, `sonner`, `tailwind-merge`, `tailwindcss-animate`, `@tanstack/react-query`, `vaul`, `@vercel/analytics`, `zod`, `zustand`?**
  _High betweenness centrality (0.191) - this node is a cross-community bridge._
- **Why does `react` connect `chart.tsx` to `UserRequestsList.tsx`, `sidebar.tsx`, `use-toast.ts`, `cn`, `dependencies`?**
  _High betweenness centrality (0.179) - this node is a cross-community bridge._
- **Why does `cn()` connect `cn` to `AdminContent.tsx`, `ProposalDetailContent.tsx`, `RequestDetailContent.tsx`, `CreateRequestForm.tsx`, `UserRequestsList.tsx`, `sidebar.tsx`, `ChangePasswordModal.tsx`, `EditRequestForm.tsx`, `shared/utils/index.ts`, `use-toast.ts`, `input-otp.tsx`, `toggle-group.tsx`, `button.tsx`, `utils.ts`, `radio-group.tsx`, `chart.tsx`, `blog/[id]/page.tsx`, `breadcrumbs.tsx`, `menubar.tsx`, `CreateProposalForm.tsx`, `context-menu.tsx`, `sheet.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `requests/index.ts`, `notifications/index.ts`, `NotificationService`, `dropdown-menu.tsx`, `HowItWorksContent.tsx`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _606 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ProposalDetailContent.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05337078651685393 - nodes in this community are weakly interconnected._
- **Should `proposal/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `getLocaleFromHeaders` be split into smaller, more focused modules?**
  _Cohesion score 0.0624048706240487 - nodes in this community are weakly interconnected._