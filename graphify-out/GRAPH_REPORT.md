# Graph Report - shukayu_next  (2026-11-09)

## Corpus Check
- 522 files · ~151,943 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2600 nodes · 7633 edges · 138 communities (124 shown, 14 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 61 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9fc554c5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- sitemap.ts
- AdminShell.tsx
- @tanstack/react-query
- LoginContent.tsx
- BlockUserActions.tsx
- CreateRequestForm.tsx
- features/auth/index.ts
- notificationService.ts
- proposal/layout.tsx
- UiKitContent.tsx
- routes.ts
- src_ui_v2_index_button
- breadcrumbs.tsx
- entities/user/index.ts
- request/[id]/page.tsx
- dashboardMetadata
- RequestInfo.tsx
- entities/auth/index.ts
- discussions/index.ts
- site-header.tsx
- HowItWorks.tsx
- authStore.ts
- compilerOptions
- compilerOptions
- TrafficAnalytics.tsx
- devDependencies
- components.json
- locationService.ts
- compilerOptions
- form.tsx
- dependencies
- entities/admin/index.ts
- src_ui_v2_index_container
- notification/index.ts
- Інструкція: як створити нову сторінку в стилі Shukayu
- schemas.ts
- scripts
- Link
- support/page.tsx
- Детальний опис шарів
- notification/index.ts
- [section]/page.tsx
- GamificationProgress.tsx
- package.json
- Виконано
- ProposalRejectionReason
- @lingui/react
- NotificationsContent.tsx
- Нотифікації (React Toastify)
- privacy/layout.tsx
- review/index.ts
- RequestContent.tsx
- support/layout.tsx
- notification/types/index.ts
- terms/layout.tsx
- @lingui/cli
- RequestDetailContent.tsx
- request/index.ts
- Деплой
- shared/utils/index.ts
- CreateRequestContent.tsx
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- ProfileSettings.tsx
- Інтернаціоналізація (i18n) - Інструкція для розробників
- src/auth.ts
- admin/layout.tsx
- utils.ts
- TypeScript конфігурація
- SEO Technical Backlog — Shukayu
- ProfileTabs.tsx
- blogService.ts
- LinguiProvider
- Змінні оточення
- RequestSubscriptionModal.tsx
- Основні сутності
- @lingui/core
- cn
- RequestStatus
- Пагінація в додатку
- next.config.ts
- config
- lint-staged
- api.ts
- cn.ts
- HowItWorksContent.tsx
- Опис сторінок та необхідних даних
- route.tsx
- contact/layout.tsx
- pricing/layout.tsx
- [locale]/layout.tsx
- useLocalizedRouter
- Next.js FSD App
- notificationSchema.ts
- chat/index.ts
- ui-v2/index.ts
- proposal/const.ts
- ItemCondition
- Документація Backend API для проєкту shukayu
- Container
- PricingContent.tsx
- Роутинг (React Router v7)
- apple-icon.tsx
- locale.ts
- Тестування (майбутнє)
- Аутентифікація та авторизація
- Патерни та практики
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
- State Management (Zustand)
- Залежності та встановлення
- 8. Компоненти
- Композиція сторінок Shukayu
- UX універсальних компонентів Shukayu
- Дизайн-система Shukayu
- Button
- NotificationSettingsContent.tsx
- 4. Випадаючі поверхні
- 2. Колір
- 3. Кнопки
- 5. Списки
- 7. Перемикачі та вибір
- 8. Модалки та панелі

## God Nodes (most connected - your core abstractions)
1. `cn()` - 182 edges
2. `react` - 138 edges
3. `@lingui/react` - 121 edges
4. `getLocaleFromParams()` - 94 edges
5. `lucide-react` - 74 edges
6. `UiKitContent()` - 62 edges
7. `routes` - 60 edges
8. `next` - 57 edges
9. `Heading()` - 52 edges
10. `Button` - 52 edges

## Surprising Connections (you probably didn't know these)
- `2.2 `layout.tsx`` --references--> `PageHero()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/components/marketing.tsx
- `3. Токени (Tailwind-класи)` --references--> `Container()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/layout/container.tsx
- `9. Перевірка перед здачею` --references--> `PageHero()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/components/marketing.tsx
- `Ключові особливості:` --references--> `RootLayout()`  [INFERRED]
  docs/ARCHITECTURE.md → src/app/[locale]/layout.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  docs/ARCHITECTURE.md → src/widgets/app/Features/Features.tsx

## Import Cycles
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`

## Communities (138 total, 14 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.21
Nodes (11): paginationResultSchema(), requestSubscriptionService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest (+3 more)

### Community 1 - "sitemap.ts"
Cohesion: 0.07
Nodes (59): CatalogLink, CatalogView(), CatalogViewProps, LinkChips(), CatalogCopy, CatalogStats, CopyInput, getCatalogCopy() (+51 more)

### Community 2 - "AdminShell.tsx"
Cohesion: 0.10
Nodes (13): @radix-ui/react-dialog, Sheet, SheetClose, SheetContent, SheetHeader(), SheetTitle, SheetTrigger, AdminNav() (+5 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.11
Nodes (23): @tanstack/react-query, useCanPropose(), useCreateProposal(), useProposal(), useProposals(), useRejectProposal(), createProposalSchema, getProposalsResponseSchema (+15 more)

### Community 4 - "LoginContent.tsx"
Cohesion: 0.40
Nodes (5): LoginContent(), LoginContentProps, first(), LoginPage(), LoginForm()

### Community 5 - "BlockUserActions.tsx"
Cohesion: 0.21
Nodes (3): ApproveRejectActions(), ApproveRejectActionsProps, BlockUserActionsProps

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.06
Nodes (25): axios, @hookform/resolvers, next, react-hook-form, sonner, ForgotPasswordForm(), getForgotPasswordSchema(), ResetPasswordFormData (+17 more)

### Community 7 - "features/auth/index.ts"
Cohesion: 0.21
Nodes (18): BLOCKED_RETURN_PATHS, buildAuthHref(), buildGoogleAuthCallbackUrl(), getReturnUrlFromLocation(), getSafeReturnUrl(), isBlockedAuthPath(), resolvePostAuthRedirect(), RETURN_URL_PARAM (+10 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.14
Nodes (18): useNotifications(), INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY, NEW_REQUESTS (+10 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.12
Nodes (18): @lingui/core, messagesByLocale, messagesByLocale, messagesByLocale, messagesByLocale, messagesByLocale, messagesByLocale, messagesByLocale (+10 more)

### Community 10 - "UiKitContent.tsx"
Cohesion: 0.11
Nodes (38): metadata, UiKitPage(), Section(), UiKitContent(), CreateReviewModal(), Chip(), IconButton, Checkbox (+30 more)

### Community 11 - "routes.ts"
Cohesion: 0.10
Nodes (15): ResetPasswordContentProps, HASH_TO_ROUTE, NOTIFICATIONS_NAV, SETTINGS_NAV, DASHBOARD_NOTIFICATION_SETTINGS, dashboardSettingsPath(), routes, defaultLocale (+7 more)

### Community 12 - "src_ui_v2_index_button"
Cohesion: 0.08
Nodes (33): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), useUpdateProposal(), ChangePasswordModalProps, AcceptProposalModal(), AcceptProposalModalProps (+25 more)

### Community 13 - "breadcrumbs.tsx"
Cohesion: 0.29
Nodes (11): getBreadcrumbListJsonLd(), Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator() (+3 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.15
Nodes (21): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), useUserContacts(), accountSchema, createProfileSchema (+13 more)

### Community 15 - "request/[id]/page.tsx"
Cohesion: 0.06
Nodes (45): BlogArticlePage(), generateMetadata(), Props, revalidate, generateMetadata(), getDisplayName(), getProfile, ProfileIdPage() (+37 more)

### Community 16 - "dashboardMetadata"
Cohesion: 0.13
Nodes (12): generateMetadata(), Page(), OverviewContent(), generateMetadata(), dashboardMetadata(), Page(), generateMetadata(), Page() (+4 more)

### Community 17 - "RequestInfo.tsx"
Cohesion: 0.11
Nodes (23): CategoryFilterButton(), CategoryFilterButtonProps, EditRequestForm(), EditRequestModal(), RequestCard(), RequestInfo(), RequestInfoProps, STATUS_TONE (+15 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.17
Nodes (13): zod, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+5 more)

### Community 19 - "discussions/index.ts"
Cohesion: 0.43
Nodes (5): DiscussionForm(), DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions

### Community 20 - "site-header.tsx"
Cohesion: 0.30
Nodes (13): @radix-ui/react-dropdown-menu, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger (+5 more)

### Community 21 - "HowItWorks.tsx"
Cohesion: 0.21
Nodes (9): 7. Чого не робити, ImagePlaceholder(), PromoBanner(), SegmentedControl(), Hero(), Mode, HowItWorks(), LINKS (+1 more)

### Community 22 - "authStore.ts"
Cohesion: 0.11
Nodes (20): AuthContext, AuthContextType, AuthProvider(), useAuth(), authService, AuthActions, AuthState, buildAuthStateFromResponse() (+12 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "TrafficAnalytics.tsx"
Cohesion: 0.11
Nodes (11): date-fns, recharts, AdminAnalyticsPage(), AdminTrafficPage(), RequestSidebar(), AnalyticsOverview(), PIE_COLORS, MetricBars() (+3 more)

### Community 26 - "devDependencies"
Cohesion: 0.09
Nodes (23): devDependencies, autoprefixer, eslint, eslint-config-next, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier (+15 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "locationService.ts"
Cohesion: 0.29
Nodes (6): citySchema, searchCitiesResponseSchema, locationService, ICity, ISearchCitiesDto, ISearchCitiesResponse

### Community 29 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+19 more)

### Community 30 - "form.tsx"
Cohesion: 0.20
Nodes (12): @radix-ui/react-label, FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue (+4 more)

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.08
Nodes (52): ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, STAFF_ROLES, hasAnyPermission(), hasPermission() (+44 more)

### Community 33 - "src_ui_v2_index_container"
Cohesion: 0.16
Nodes (13): 4. Каталог готових блоків (`@/ui-v2`), Правила залежностей (Import Rules), CategoryTile(), FactItem(), FeatureCard(), PlanCard(), SectionHeader(), Section() (+5 more)

### Community 34 - "notification/index.ts"
Cohesion: 0.23
Nodes (7): TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken

### Community 35 - "Інструкція: як створити нову сторінку в стилі Shukayu"
Cohesion: 0.18
Nodes (10): 0. Що передати разом із цим файлом, 2.1 `page.tsx`, 2.2 `layout.tsx`, 2.3 Реєстрація маршруту (4 місця), 2. Файли, які треба створити, 3. Токени (Tailwind-класи), 5. Тексти й переклади (Lingui), 6. Каркас сторінки (скопіювати й заповнити) (+2 more)

### Community 36 - "schemas.ts"
Cohesion: 0.11
Nodes (25): BlogListPage(), COPY, generateMetadata(), revalidate, CategoriesPage(), COPY, generateMetadata(), revalidate (+17 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "Link"
Cohesion: 0.18
Nodes (17): ResetPasswordPage(), ResetPasswordContent(), ForgotPasswordContent(), ForgotPasswordPage(), NotFoundPage(), CreateRequestButton(), Link(), AppFrame() (+9 more)

### Community 39 - "support/page.tsx"
Cohesion: 0.22
Nodes (10): ContactPage(), generateMetadata(), CreateRequestPage(), generateMetadata(), generateMetadata(), SupportPage(), PAGE_COPY, PageKey (+2 more)

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.08
Nodes (13): useCreateRequestSubscription(), useCreateTelegramLinkToken(), useDeleteRequestSubscription(), useMarkAllNotificationsRead(), useMarkNotificationRead(), useRequestSubscriptions(), useUnreadCount(), useUpdateRequestSubscription() (+5 more)

### Community 42 - "[section]/page.tsx"
Cohesion: 0.31
Nodes (7): generateMetadata(), Page(), Props, isSettingsSection(), SETTINGS_SECTIONS, SettingsContent(), SettingsSection

### Community 43 - "GamificationProgress.tsx"
Cohesion: 0.11
Nodes (16): UserRole, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level, sellerAchievements (+8 more)

### Community 44 - "package.json"
Cohesion: 0.04
Nodes (49): name, private, version, autoprefixer, cmdk, embla-carousel-react, eslint, eslint-config-next (+41 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "ProposalRejectionReason"
Cohesion: 0.25
Nodes (8): ProposalRejectionReason, ALREADY_PROPOSED, NO_CONTACTS, NOT_SELLER, OWN_REQUEST, REQUEST_NOT_ACTIVE, REQUEST_NOT_FOUND, USER_BLOCKED

### Community 47 - "@lingui/react"
Cohesion: 0.14
Nodes (16): useRequestStore, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), CreateProfileModalProps, EditContactChannelsForm(), EditContactChannelsModal() (+8 more)

### Community 48 - "NotificationsContent.tsx"
Cohesion: 0.38
Nodes (3): NotificationsContent(), generateMetadata(), Page()

### Community 49 - "Нотифікації (React Toastify)"
Cohesion: 0.67
Nodes (3): Використання:, Налаштування:, Нотифікації (React Toastify)

### Community 50 - "privacy/layout.tsx"
Cohesion: 0.47
Nodes (3): messagesByLocale, messages, messages

### Community 51 - "review/index.ts"
Cohesion: 0.20
Nodes (11): useCreateReview(), useReviews(), useReviewStats(), reviewSchema, reviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse (+3 more)

### Community 52 - "RequestContent.tsx"
Cohesion: 0.10
Nodes (5): RequestContentProps, DEFAULT_INITIAL_FILTERS, UseQueryPaginationOptions, UseQueryPaginationReturn, CascadingSelectItem

### Community 53 - "support/layout.tsx"
Cohesion: 0.47
Nodes (3): messagesByLocale, messages, messages

### Community 54 - "notification/types/index.ts"
Cohesion: 0.28
Nodes (7): useNotificationPreferences(), useUpdateNotificationPreferences(), notificationPreferenceService, ICategoryPreference, INewRequestsPreference, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 55 - "terms/layout.tsx"
Cohesion: 0.47
Nodes (3): messagesByLocale, messages, messages

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.07
Nodes (19): RequestDetailContent(), ReviewCard(), ReviewCardProps, ReviewsList(), ReviewsListProps, Alert(), AlertDescription(), AlertProps (+11 more)

### Community 58 - "request/index.ts"
Cohesion: 0.14
Nodes (21): useCancelRequest(), useCreateRequest(), useLatestRequests(), useRequest(), useRequests(), createRequestSchema, getRequestsResponseSchema, requestBuyerSchema (+13 more)

### Community 59 - "Деплой"
Cohesion: 0.67
Nodes (3): Environment Variables, Netlify, Деплой

### Community 60 - "shared/utils/index.ts"
Cohesion: 0.09
Nodes (27): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 5. Обробка помилок, 6. Стан завантаження, Правила та конвенції, createUploadFormData() (+19 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (15): API та HTTP запити, index.ts:, Валідація:, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Патерн використання: (+7 more)

### Community 64 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 65 - "ProfileSettings.tsx"
Cohesion: 0.25
Nodes (10): NotificationPrefsContent(), Card, CardBody(), CardDescription(), CardHead(), CardTitle(), cardVariants, ProfileHeader() (+2 more)

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "src/auth.ts"
Cohesion: 0.33
Nodes (4): auth, handlers, signIn, signOut

### Community 68 - "admin/layout.tsx"
Cohesion: 0.38
Nodes (3): messagesByLocale, messages, messages

### Community 69 - "utils.ts"
Cohesion: 0.19
Nodes (13): @radix-ui/react-popover, @radix-ui/react-tooltip, CascadingSelect(), CascadingSelectProps, CityCombobox(), CityComboboxProps, Popover, PopoverContent (+5 more)

### Community 70 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 71 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.07
Nodes (27): 0. Поточний стан (коротко), 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія (+19 more)

### Community 72 - "ProfileTabs.tsx"
Cohesion: 0.29
Nodes (10): GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS, PROFILE_HASH, PROFILE_TAB, ProfileTabId, resolveProfileTab(), syncProfileTabHash() (+2 more)

### Community 73 - "blogService.ts"
Cohesion: 0.15
Nodes (17): ArticleSection(), Props, BlogArticleContent(), Props, useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema (+9 more)

### Community 74 - "LinguiProvider"
Cohesion: 0.10
Nodes (32): AboutLayout(), messagesByLocale, AdminLayout(), AdminPage(), GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout() (+24 more)

### Community 75 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.10
Nodes (14): CategoryChipsSelect(), CategoryChipsSelectProps, NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, NotificationChannelsSelect(), NotificationChannelsSelectProps, CATEGORY_OPTIONS, NotificationFilters() (+6 more)

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "@lingui/core"
Cohesion: 0.47
Nodes (3): messagesByLocale, messages, messages

### Community 79 - "cn"
Cohesion: 0.10
Nodes (26): class-variance-authority, @radix-ui/react-slot, cn(), Avatar, AvatarProps, avatarVariants, BadgeProps, badgeVariants (+18 more)

### Community 80 - "RequestStatus"
Cohesion: 0.11
Nodes (15): Загальна логіка відгуків, Статуси запитів (RequestStatus), Статуси пропозицій (ProposalStatus), ProposalStatus, ACCEPTED, COMPLETED, PENDING, REJECTED (+7 more)

### Community 81 - "Пагінація в додатку"
Cohesion: 0.16
Nodes (13): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+5 more)

### Community 83 - "config"
Cohesion: 0.67
Nodes (3): path, config, commitizen

### Community 84 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}

### Community 85 - "api.ts"
Cohesion: 0.22
Nodes (4): failedQueue, MUTATION_METHODS, revalidateAfterMutation(), LS_KEYS

### Community 87 - "HowItWorksContent.tsx"
Cohesion: 0.18
Nodes (14): 1. Золоті правила, 8. Еталонні сторінки, Ритм сторінки, AboutContent(), AboutPage(), ContactContent(), Audience, CARDS (+6 more)

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 92 - "contact/layout.tsx"
Cohesion: 0.47
Nodes (3): messagesByLocale, messages, messages

### Community 93 - "pricing/layout.tsx"
Cohesion: 0.47
Nodes (3): messagesByLocale, messages, messages

### Community 94 - "[locale]/layout.tsx"
Cohesion: 0.13
Nodes (12): @next/third-parties, @vercel/analytics, generateMetadata(), messagesByLocale, onest, Props, RootLayout(), Providers() (+4 more)

### Community 96 - "useLocalizedRouter"
Cohesion: 0.17
Nodes (11): next-auth, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), getResetPasswordFormSchema(), ResetPasswordForm(), NotificationItem(), NotificationItemProps, CreateRequestForm() (+3 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.25
Nodes (7): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 98 - "notificationSchema.ts"
Cohesion: 0.15
Nodes (13): contactService, IContactRequest, categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw (+5 more)

### Community 101 - "ui-v2/index.ts"
Cohesion: 0.11
Nodes (12): @lingui/react, lucide-react, react, DiscussionFormProps, RequestSubscriptionCard(), RequestSubscriptionCardProps, CreateRequestButtonProps, RequestCardProps (+4 more)

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "ItemCondition"
Cohesion: 0.16
Nodes (10): IUpdateProposalRequest, HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, REQUEST_URGENCY_LABELS, ItemCondition, NEW (+2 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 105 - "Container"
Cohesion: 0.27
Nodes (9): getLatestRequests(), HomePage(), StatItem(), Container(), Estimate(), Quiz(), Testimonials(), KEYS (+1 more)

### Community 106 - "PricingContent.tsx"
Cohesion: 0.25
Nodes (10): PricingPage(), PricingContent(), SupportContent(), StatusGuide(), StatusItem(), Accordion, AccordionContent, AccordionItem (+2 more)

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 110 - "locale.ts"
Cohesion: 0.08
Nodes (33): generateMetadata(), generateMetadata(), generateMetadata(), PageProps, generateMetadata(), generateMetadata(), generateMetadata(), PageProps (+25 more)

### Community 112 - "Тестування (майбутнє)"
Cohesion: 0.67
Nodes (3): Рекомендована структура:, Тестування (майбутнє), Інструменти:

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 135 - "locale.ts"
Cohesion: 0.20
Nodes (15): alt, contentType, OpengraphImage(), runtime, size, isLocale(), LOCALE_COOKIE, LOCALE_HEADER (+7 more)

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

### Community 171 - "8. Компоненти"
Cohesion: 0.10
Nodes (21): 8.10. Avatar, 8.11. Tooltip, Hover-card, Popover, Dropdown, Context menu, Command, Menubar, Navigation menu, 8.12. Dialog, Alert-dialog, Sheet, Drawer, 8.13. Alert, Toast / Sonner / Toaster, Error, Loading, 8.14. Table, 8.15. Pagination, Universal pagination, 8.16. Progress, Slider, Calendar, Carousel, Chart, Aspect-ratio, 8.17. Accordion, Collapsible, Resizable, Scroll-area, Separator, Breadcrumb (+13 more)

### Community 175 - "Композиція сторінок Shukayu"
Cohesion: 0.12
Nodes (16): 10. Вхід і реєстрація `/login`, `/register`, 11. Сповіщення (ціль: екран IconRail, зараз таб профілю), 12. Деталі пропозиції `/proposal/[id]`, 13. Другорядні публічні, 14. Зведена карта, 15. Поза скоупом, 1. Дві оболонки, 2. Словник блоків (+8 more)

### Community 176 - "UX універсальних компонентів Shukayu"
Cohesion: 0.15
Nodes (11): 10. Мобільні винятки (`&lt; md`), 11. Доступність (мінімум), 12. Поза скоупом цього файлу, 1. Принципи взаємодії, 2. Який контроль обрати, 6.1. Accordion vs Collapsible vs «more», 6.2. Вкладені розгортання, 6.3. Читати повністю (опис джоби / профілю) (+3 more)

### Community 177 - "Дизайн-система Shukayu"
Cohesion: 0.15
Nodes (13): 10. Що свідомо не змінюємо цим файлом, 1. Принципи, 3.1. Шкала, 3. Типографіка, 4.1. Правила сусідства (як елементи стоять один до одного), 4. Відступи (spacing), 5. Радіуси, рамки, іконки, 6.1. Публічний shell (гостьовий) (+5 more)

### Community 179 - "Button"
Cohesion: 0.06
Nodes (55): AdminContentBlogPage(), AdminContentPagesPage(), AdminContentPricingPage(), AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationRequestsPage(), AdminModerationSubscriptionsPage(), AdminModerationUsersPage() (+47 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.12
Nodes (7): AccountMessagesSection(), BUYER_CATEGORIES, NotificationSettingsContent(), PreferenceList(), ProfilePreferencesSection(), SELLER_CATEGORIES, SellerPreferencesSection()

### Community 183 - "4. Випадаючі поверхні"
Cohesion: 0.29
Nodes (7): 4.1. Dropdown menu (команди), 4.2. Select (значення форми), 4.3. Combobox (пошук + вибір), 4.4. Cascading select (дерево), 4.5. Popover, Hover card, Tooltip, 4.6. Context menu, Command palette, Menubar, Navigation menu, 4. Випадаючі поверхні

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
- **67 isolated node(s):** `EMAIL`, `IN_APP`, `TELEGRAM`, `{ GET, POST }`, `ALREADY_PROPOSED` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 955 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ui-v2/index.ts` to `sitemap.ts`, `AdminShell.tsx`, `LoginContent.tsx`, `BlockUserActions.tsx`, `CreateRequestForm.tsx`, `features/auth/index.ts`, `proposal/layout.tsx`, `UiKitContent.tsx`, `routes.ts`, `src_ui_v2_index_button`, `breadcrumbs.tsx`, `request/[id]/page.tsx`, `RequestInfo.tsx`, `site-header.tsx`, `HowItWorks.tsx`, `authStore.ts`, `TrafficAnalytics.tsx`, `form.tsx`, `entities/admin/index.ts`, `src_ui_v2_index_container`, `schemas.ts`, `Link`, `package.json`, `@lingui/react`, `privacy/layout.tsx`, `Button`, `RequestContent.tsx`, `support/layout.tsx`, `NotificationSettingsContent.tsx`, `terms/layout.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `ProfileSettings.tsx`, `admin/layout.tsx`, `utils.ts`, `ProfileTabs.tsx`, `LinguiProvider`, `RequestSubscriptionModal.tsx`, `@lingui/core`, `cn`, `HowItWorksContent.tsx`, `contact/layout.tsx`, `pricing/layout.tsx`, `[locale]/layout.tsx`, `useLocalizedRouter`, `PricingContent.tsx`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **What connects `EMAIL`, `IN_APP`, `TELEGRAM` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sitemap.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06635802469135803 - nodes in this community are weakly interconnected._
- **Why does `Message` connect `Чат та повідомлення` to `TrafficAnalytics.tsx`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `AdminShell.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10344827586206896 - nodes in this community are weakly interconnected._
- **Should `@tanstack/react-query` be split into smaller, more focused modules?**
  _Cohesion score 0.11139455782312925 - nodes in this community are weakly interconnected._
- **Should `CreateRequestForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06426332288401254 - nodes in this community are weakly interconnected._