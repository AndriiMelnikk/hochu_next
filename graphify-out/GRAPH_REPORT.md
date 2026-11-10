# Graph Report - shukayu_next  (2026-11-09)

## Corpus Check
- 539 files · ~157,513 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2672 nodes · 7860 edges · 142 communities (131 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 61 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `52771247`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- sitemap.ts
- AdminShell.tsx
- @tanstack/react-query
- [locale]/login/page.tsx
- RequestInfo.tsx
- CreateRequestForm.tsx
- features/auth/index.ts
- notificationService.ts
- proposal/layout.tsx
- UiKitContent.tsx
- routes.ts
- src_ui_v2_index_button
- blog/[id]/page.tsx
- entities/user/index.ts
- request/[id]/page.tsx
- dashboardMetadata
- Button
- entities/auth/index.ts
- discussions/index.ts
- site-header.tsx
- sitemap.ts
- authService.ts
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
- Container
- notificationSchema.ts
- Link
- breadcrumbs.tsx
- scripts
- Link
- support/page.tsx
- Детальний опис шарів
- notification/index.ts
- category/index.ts
- ProfileSettings.tsx
- package.json
- Виконано
- @tanstack/react-query
- @lingui/react
- hasPermission
- Нотифікації (React Toastify)
- @lingui/core
- review/index.ts
- HomeFeed.tsx
- support/layout.tsx
- notification/types/index.ts
- terms/layout.tsx
- @lingui/cli
- RequestDetailContent.tsx
- request/index.ts
- Деплой
- shared/utils/index.ts
- DashboardShell.tsx
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- authService
- Інтернаціоналізація (i18n) - Інструкція для розробників
- src/auth.ts
- admin/layout.tsx
- utils.ts
- TypeScript конфігурація
- SEO Technical Backlog — Shukayu
- CreateReviewModal.tsx
- blogService.ts
- LinguiProvider
- Змінні оточення
- RequestSubscriptionModal.tsx
- Основні сутності
- @lingui/core
- cn
- RequestStatus
- Пагінація в додатку
- admin-session/route.ts
- config
- lint-staged
- RequestSidebar.tsx
- ContentCollection
- ProposalDetailContent.tsx
- Опис сторінок та необхідних даних
- route.tsx
- userSchema.ts
- contentStore.ts
- contact/layout.tsx
- adminNotificationService.ts
- [locale]/layout.tsx
- about/layout.tsx
- Next.js FSD App
- Правила та конвенції
- ContentPricing
- chat/index.ts
- requests/index.ts
- proposal/const.ts
- ItemCondition
- Документація Backend API для проєкту shukayu
- [locale]/page.tsx
- PricingContent.tsx
- Роутинг (React Router v7)
- apple-icon.tsx
- getLocaleFromParams
- Структура файлів компонента
- Форми (React Hook Form)
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
2. `react` - 143 edges
3. `@lingui/react` - 125 edges
4. `getLocaleFromParams()` - 94 edges
5. `lucide-react` - 78 edges
6. `UiKitContent()` - 62 edges
7. `routes` - 62 edges
8. `next` - 62 edges
9. `getMetadataForRoute()` - 51 edges
10. `Link()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `0. Поточний стан (коротко)` --references--> `ICategory`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/entities/category/types/Category.ts
- `3. Токени (Tailwind-класи)` --references--> `Container()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/layout/container.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  docs/ARCHITECTURE.md → src/widgets/app/Features/Features.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  README.md → src/widgets/app/Features/Features.tsx
- `Чеклист для додавання перекладів` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx

## Import Cycles
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`

## Communities (142 total, 11 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.25
Nodes (7): useRequestSubscriptions(), requestSubscriptionService, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription, IUpdateRequestSubscriptionRequest, IPaginationResult

### Community 1 - "sitemap.ts"
Cohesion: 0.13
Nodes (33): CatalogLink, CatalogView(), CatalogViewProps, LinkChips(), CatalogCopy, CatalogStats, CopyInput, getCatalogCopy() (+25 more)

### Community 2 - "AdminShell.tsx"
Cohesion: 0.11
Nodes (15): ADMIN_NAV_ITEMS, RolePreviewSelect(), cn(), AdminNav(), AdminNavProps, stripLocale(), AdminRail(), GROUP_ICONS (+7 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.11
Nodes (30): useCreateProposal(), useProposals(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, IProposal (+22 more)

### Community 4 - "[locale]/login/page.tsx"
Cohesion: 0.25
Nodes (8): LoginContent(), first(), LoginPage(), PageProps, first(), PageProps, RegisterPage(), RegisterContent()

### Community 5 - "RequestInfo.tsx"
Cohesion: 0.10
Nodes (16): isValidSlug(), slugify(), UK_MAP, ApproveRejectActions(), ApproveRejectActionsProps, BlockUserActions(), BlockUserActionsProps, ContentEditorModal() (+8 more)

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.07
Nodes (27): axios, @hookform/resolvers, react-hook-form, sonner, ForgotPasswordForm(), getForgotPasswordSchema(), GoogleSignInButton(), LoginForm() (+19 more)

### Community 7 - "features/auth/index.ts"
Cohesion: 0.22
Nodes (16): GoogleAuthCompleteContent(), GoogleAuthCompletePage(), BLOCKED_RETURN_PATHS, buildAuthHref(), buildGoogleAuthCallbackUrl(), getReturnUrlFromLocation(), getSafeReturnUrl(), isBlockedAuthPath() (+8 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.14
Nodes (18): paginationResultSchema(), INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY, NEW_REQUESTS (+10 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.11
Nodes (19): react, CreateLayout(), messagesByLocale, DashboardLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale (+11 more)

### Community 10 - "UiKitContent.tsx"
Cohesion: 0.11
Nodes (32): metadata, UiKitPage(), Section(), UiKitContent(), Chip(), Card, CardHeader(), CardProps (+24 more)

### Community 11 - "routes.ts"
Cohesion: 0.07
Nodes (23): nextConfig, SECURITY_HEADERS, next, ResetPasswordContentProps, COPY, revalidate, LoginContentProps, routes (+15 more)

### Community 12 - "src_ui_v2_index_button"
Cohesion: 0.08
Nodes (32): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), ChangePasswordModalProps, GoogleSignInButtonProps, AcceptProposalModal(), AcceptProposalModalProps (+24 more)

### Community 13 - "blog/[id]/page.tsx"
Cohesion: 0.13
Nodes (23): ArticleSection(), Props, BlogArticleContent(), Props, BlogArticlePage(), generateMetadata(), Props, revalidate (+15 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.18
Nodes (16): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), useUserContacts(), profileSchema, userSchema (+8 more)

### Community 15 - "request/[id]/page.tsx"
Cohesion: 0.13
Nodes (17): generateMetadata(), ProposalDetailPage(), Props, generateMetadata(), getRequest, Props, RequestDetailPage(), RequestLookup (+9 more)

### Community 16 - "dashboardMetadata"
Cohesion: 0.18
Nodes (15): NotificationsContent(), generateMetadata(), Page(), generateMetadata(), OverviewContent(), generateMetadata(), dashboardMetadata(), Page() (+7 more)

### Community 17 - "Button"
Cohesion: 0.17
Nodes (18): @radix-ui/react-alert-dialog, ContactContent(), RequestInfo(), AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription (+10 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.16
Nodes (12): zod, useAuth(), useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+4 more)

### Community 19 - "discussions/index.ts"
Cohesion: 0.31
Nodes (6): DiscussionForm(), DiscussionFormProps, DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions

### Community 20 - "site-header.tsx"
Cohesion: 0.30
Nodes (13): @radix-ui/react-dropdown-menu, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger (+5 more)

### Community 21 - "sitemap.ts"
Cohesion: 0.14
Nodes (23): generateMetadata(), getDisplayName(), getProfile, ProfileIdPage(), ProfileLookup, Props, revalidate, ProfileContent() (+15 more)

### Community 22 - "authService.ts"
Cohesion: 0.25
Nodes (14): LS_KEYS, AuthContext, AuthContextType, AuthProvider(), AuthActions, AuthState, buildAuthStateFromResponse(), buildUserFromAuthResponse() (+6 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "TrafficAnalytics.tsx"
Cohesion: 0.13
Nodes (10): recharts, AdminAnalyticsPage(), AdminTrafficPage(), CATEGORY_OPTIONS, NotificationFiltersProps, AnalyticsOverview(), PIE_COLORS, MetricBars() (+2 more)

### Community 26 - "devDependencies"
Cohesion: 0.09
Nodes (23): devDependencies, autoprefixer, eslint, eslint-config-next, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier (+15 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "locationService.ts"
Cohesion: 0.17
Nodes (10): contactService, IContactRequest, citySchema, searchCitiesResponseSchema, locationService, ICity, ISearchCitiesDto, ISearchCitiesResponse (+2 more)

### Community 29 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+19 more)

### Community 30 - "form.tsx"
Cohesion: 0.11
Nodes (17): class-variance-authority, @radix-ui/react-label, @radix-ui/react-slot, BadgeProps, badgeVariants, FormControl, FormDescription, FormFieldContext (+9 more)

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.12
Nodes (36): adminBlogPosts, adminInfoPages, adminMockData, adminPricingPlans, adminRequestSubscriptions, adminStaff, moderationProposals, moderationReports (+28 more)

### Community 33 - "Container"
Cohesion: 0.10
Nodes (33): 4. Каталог готових блоків (`@/ui-v2`), 8. Еталонні сторінки, Ритм сторінки, AboutContent(), AboutPage(), Audience, CARDS, HowItWorksContent() (+25 more)

### Community 34 - "notificationSchema.ts"
Cohesion: 0.12
Nodes (17): useCreateTelegramLinkToken(), TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema (+9 more)

### Community 35 - "Link"
Cohesion: 0.09
Nodes (22): 0. Що передати разом із цим файлом, 1. Золоті правила, 2.1 `page.tsx`, 2.2 `layout.tsx`, 2.3 Реєстрація маршруту (4 місця), 2. Файли, які треба створити, 3. Токени (Tailwind-класи), 5. Тексти й переклади (Lingui) (+14 more)

### Community 36 - "breadcrumbs.tsx"
Cohesion: 0.12
Nodes (23): BlogListPage(), CategoriesPage(), COPY, revalidate, first(), generateMetadata(), parsePage(), Props (+15 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "Link"
Cohesion: 0.25
Nodes (12): @radix-ui/react-popover, AppFrame(), ClickFlyout(), FlyoutHeading(), flyoutItemClass, FlyoutLink, FlyoutLinks(), ITEMS (+4 more)

### Community 39 - "support/page.tsx"
Cohesion: 0.29
Nodes (7): ContactPage(), CreateRequestPage(), SupportPage(), PAGE_COPY, PageKey, SeoTextBlock, SeoTextSection()

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.08
Nodes (13): useCreateRequestSubscription(), useDeleteRequestSubscription(), useMarkAllNotificationsRead(), useMarkNotificationRead(), useNotificationPreferences(), useNotifications(), useUnreadCount(), useUpdateRequestSubscription() (+5 more)

### Community 42 - "category/index.ts"
Cohesion: 0.22
Nodes (13): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), useCategories(), CategoryIndex, categorySchema, getCategoriesResponseSchema (+5 more)

### Community 43 - "ProfileSettings.tsx"
Cohesion: 0.05
Nodes (37): AdminLoginPage(), metadata, PageProps, NotificationPrefsContent(), Page(), generateMetadata(), Page(), Props (+29 more)

### Community 44 - "package.json"
Cohesion: 0.04
Nodes (48): name, private, version, autoprefixer, clsx, cmdk, embla-carousel-react, eslint (+40 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "@tanstack/react-query"
Cohesion: 0.14
Nodes (6): Статуси пропозицій (ProposalStatus), @tanstack/react-query, useCanPropose(), useRejectProposal(), normalizeProposalItem(), proposalService

### Community 47 - "@lingui/react"
Cohesion: 0.15
Nodes (18): @lingui/react, lucide-react, react-toastify, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), CreateProfileModalProps (+10 more)

### Community 48 - "hasPermission"
Cohesion: 0.17
Nodes (14): zustand, ADMIN_NAV_GROUP_KEYS, IAdminNavItem, ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, STAFF_ROLES, hasAnyPermission(), hasPermission() (+6 more)

### Community 49 - "Нотифікації (React Toastify)"
Cohesion: 0.67
Nodes (3): Використання:, Налаштування:, Нотифікації (React Toastify)

### Community 50 - "@lingui/core"
Cohesion: 0.11
Nodes (15): @lingui/core, BlogLayout(), messagesByLocale, messagesByLocale, PricingLayout(), messagesByLocale, PrivacyLayout(), LinguiProviderProps (+7 more)

### Community 51 - "review/index.ts"
Cohesion: 0.20
Nodes (11): useCreateReview(), useReviews(), useReviewStats(), reviewSchema, reviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse (+3 more)

### Community 52 - "HomeFeed.tsx"
Cohesion: 0.11
Nodes (15): RequestContent(), RequestContentProps, CascadingSelectItem, EmptyState(), ErrorState(), LoadingState(), RowSkeleton(), Skeleton() (+7 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "notification/types/index.ts"
Cohesion: 0.24
Nodes (10): useUpdateNotificationPreferences(), notificationPreferenceService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, ICategoryPreference, INewRequestsPreference (+2 more)

### Community 55 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.06
Nodes (26): RequestDetailContent(), ReviewsList(), ReviewsListProps, Alert(), AlertDescription(), AlertProps, AlertTitle(), alertVariants (+18 more)

### Community 58 - "request/index.ts"
Cohesion: 0.16
Nodes (16): useCancelRequest(), useCreateRequest(), useLatestRequests(), useRequests(), requestService, RequestActions, RequestState, useRequestStore (+8 more)

### Community 59 - "Деплой"
Cohesion: 0.67
Nodes (3): Environment Variables, Netlify, Деплой

### Community 60 - "shared/utils/index.ts"
Cohesion: 0.11
Nodes (23): 5. Обробка помилок, CreateProposalForm(), CreateRequestForm(), createUploadFormData(), getUploadHeaders(), parseUploadResponse(), refreshAccessToken(), uploadFile() (+15 more)

### Community 61 - "DashboardShell.tsx"
Cohesion: 0.16
Nodes (7): CreateRequestContent(), DashboardShell(), HASH_TO_ROUTE, NOTIFICATIONS_NAV, SETTINGS_NAV, DASHBOARD_NOTIFICATION_SETTINGS, dashboardSettingsPath()

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.15
Nodes (12): API та HTTP запити, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Правила залежностей (Import Rules), Рекомендована структура:, Структура запитів (+4 more)

### Community 64 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 65 - "authService"
Cohesion: 0.15
Nodes (7): authService, IGoogleAuthRequest, IAuthResponse, JWT, next-auth, next-auth/jwt, Session

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "src/auth.ts"
Cohesion: 0.29
Nodes (5): next-auth, auth, handlers, signIn, signOut

### Community 68 - "admin/layout.tsx"
Cohesion: 0.32
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "utils.ts"
Cohesion: 0.24
Nodes (9): CascadingSelect(), CascadingSelectProps, CityCombobox(), CityComboboxProps, InputProps, Popover, PopoverContent, PopoverTrigger (+1 more)

### Community 70 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 71 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.10
Nodes (19): 0. Поточний стан (коротко), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія, 2. Пріоритет P0 — Картки виконавців (E-E-A-T), 3.1. Теги та кластеризація, 3.2. Архівування замість видалення, 3.3. Мікророзмітка сторінки запиту (+11 more)

### Community 72 - "CreateReviewModal.tsx"
Cohesion: 0.21
Nodes (16): CreateReviewFormValues, CreateReviewModal(), CreateReviewModalProps, createReviewSchema, Label, DrawerContent, DrawerDescription, Modal (+8 more)

### Community 73 - "blogService.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 74 - "LinguiProvider"
Cohesion: 0.20
Nodes (13): GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout(), messagesByLocale, LoginLayout(), messagesByLocale (+5 more)

### Community 75 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.10
Nodes (14): CategoryChipsSelect(), CategoryChipsSelectProps, NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, NotificationChannelsSelect(), NotificationChannelsSelectProps, NotificationFilters(), NotificationPreferencesSection() (+6 more)

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "@lingui/core"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 79 - "cn"
Cohesion: 0.10
Nodes (24): @radix-ui/react-dialog, @radix-ui/react-tooltip, CategoryFilterButton(), CategoryFilterButtonProps, cn(), Separator(), Sheet, SheetClose (+16 more)

### Community 80 - "RequestStatus"
Cohesion: 0.20
Nodes (9): Загальна логіка відгуків, Статуси запитів (RequestStatus), RequestStatus, ACTIVE, CANCELLED, CLOSED, COMPLETED, PENDING (+1 more)

### Community 81 - "Пагінація в додатку"
Cohesion: 0.12
Nodes (16): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+8 more)

### Community 82 - "admin-session/route.ts"
Cohesion: 0.24
Nodes (14): attempts, POST(), registerFailure(), tooMany(), ADMIN_COOKIE, ADMIN_SESSION_MAX_AGE, adminCookieOptions, createAdminToken() (+6 more)

### Community 83 - "config"
Cohesion: 0.67
Nodes (3): path, config, commitizen

### Community 84 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}

### Community 85 - "RequestSidebar.tsx"
Cohesion: 0.23
Nodes (8): date-fns, ReviewCard(), ReviewCardProps, RequestSidebar(), Avatar, AvatarProps, avatarVariants, Rating()

### Community 86 - "ContentCollection"
Cohesion: 0.27
Nodes (7): AdminContentBlogPage(), AdminContentPagesPage(), useAdminBlogStore, useAdminPagesStore, ContentBlog(), ContentCollection(), ContentPages()

### Community 87 - "ProposalDetailContent.tsx"
Cohesion: 0.23
Nodes (8): ProposalDetailContent(), useProposal(), useRequest(), createRequestSchema, getRequestsResponseSchema, requestBuyerSchema, requestSchema, updateRequestSchema

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 90 - "userSchema.ts"
Cohesion: 0.18
Nodes (10): accountSchema, createProfileSchema, updateContactsSchema, updateProfileSchema, UserRole, UserRoleEnum, Achievement, buyerLevels (+2 more)

### Community 91 - "contentStore.ts"
Cohesion: 0.29
Nodes (8): AdminContentState, createContentStore(), today(), AdminInfoPageInput, AdminPageStatus, IAdminContentItem, Props, ContentCollectionProps

### Community 92 - "contact/layout.tsx"
Cohesion: 0.38
Nodes (4): ContactLayout(), messagesByLocale, messages, messages

### Community 93 - "adminNotificationService.ts"
Cohesion: 0.24
Nodes (7): adminNotificationService, adminRequestSubscriptionSchema, adminRequestSubscriptionsResultSchema, filterMock(), IAdminRequestSubscriptionsResult, IGetAdminRequestSubscriptionsParams, IAdminRequestSubscription

### Community 94 - "[locale]/layout.tsx"
Cohesion: 0.05
Nodes (35): 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), @next/third-parties, @vercel/analytics, generateMetadata(), generateStaticParams() (+27 more)

### Community 96 - "about/layout.tsx"
Cohesion: 0.38
Nodes (4): AboutLayout(), messagesByLocale, messages, messages

### Community 97 - "Next.js FSD App"
Cohesion: 0.22
Nodes (8): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 98 - "Правила та конвенції"
Cohesion: 0.33
Nodes (6): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 6. Стан завантаження, Правила та конвенції

### Community 99 - "ContentPricing"
Cohesion: 0.60
Nodes (3): AdminContentPricingPage(), useAdminPricingStore, ContentPricing()

### Community 101 - "requests/index.ts"
Cohesion: 0.27
Nodes (8): CreateRequestButton(), EditRequestForm(), EditRequestModal(), RequestCard(), RequestCardProps, formatBudget(), nf(), T

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "ItemCondition"
Cohesion: 0.14
Nodes (12): useUpdateProposal(), IUpdateProposalRequest, HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, REQUEST_URGENCY_LABELS, ItemCondition (+4 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 105 - "[locale]/page.tsx"
Cohesion: 0.14
Nodes (8): getLatestRequests(), HomePage(), revalidate, StatItem(), Estimate(), Quiz(), KEYS, Trust()

### Community 106 - "PricingContent.tsx"
Cohesion: 0.25
Nodes (11): PricingPage(), PricingContent(), SupportContent(), StatusGuide(), StatusItem(), Accordion, AccordionContent, AccordionItem (+3 more)

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 110 - "getLocaleFromParams"
Cohesion: 0.13
Nodes (24): generateMetadata(), AdminPage(), generateMetadata(), generateMetadata(), PageProps, generateMetadata(), generateMetadata(), generateMetadata() (+16 more)

### Community 111 - "Структура файлів компонента"
Cohesion: 0.67
Nodes (3): index.ts:, Структура файлів компонента, Типова структура:

### Community 112 - "Форми (React Hook Form)"
Cohesion: 0.67
Nodes (3): Валідація:, Патерн використання:, Форми (React Hook Form)

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 135 - "locale.ts"
Cohesion: 0.17
Nodes (17): alt, contentType, OpengraphImage(), runtime, size, defaultLocale, isLocale(), LOCALE_COOKIE (+9 more)

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
Cohesion: 0.11
Nodes (32): AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationRequestsPage(), AdminModerationSubscriptionsPage(), AdminModerationUsersPage(), AdminStaffPage(), useClientPagination(), Badge() (+24 more)

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
- **67 isolated node(s):** `EMAIL`, `IN_APP`, `TELEGRAM`, `NEW`, `USED` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 958 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `proposal/layout.tsx` to `sitemap.ts`, `AdminShell.tsx`, `RequestInfo.tsx`, `CreateRequestForm.tsx`, `features/auth/index.ts`, `UiKitContent.tsx`, `routes.ts`, `src_ui_v2_index_button`, `request/[id]/page.tsx`, `Button`, `discussions/index.ts`, `site-header.tsx`, `sitemap.ts`, `authService.ts`, `TrafficAnalytics.tsx`, `form.tsx`, `Container`, `Link`, `breadcrumbs.tsx`, `Link`, `category/index.ts`, `ProfileSettings.tsx`, `package.json`, `@lingui/react`, `hasPermission`, `@lingui/core`, `Button`, `HomeFeed.tsx`, `support/layout.tsx`, `NotificationSettingsContent.tsx`, `terms/layout.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `DashboardShell.tsx`, `admin/layout.tsx`, `utils.ts`, `CreateReviewModal.tsx`, `LinguiProvider`, `RequestSubscriptionModal.tsx`, `@lingui/core`, `cn`, `Пагінація в додатку`, `RequestSidebar.tsx`, `contact/layout.tsx`, `NotificationsTabContent.tsx`, `about/layout.tsx`, `[locale]/page.tsx`, `PricingContent.tsx`?**
  _High betweenness centrality (0.149) - this node is a cross-community bridge._
- **What connects `EMAIL`, `IN_APP`, `TELEGRAM` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sitemap.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1289198606271777 - nodes in this community are weakly interconnected._
- **Why does `@lingui/react` connect `@lingui/react` to `AdminShell.tsx`, `RequestInfo.tsx`, `CreateRequestForm.tsx`, `features/auth/index.ts`, `routes.ts`, `src_ui_v2_index_button`, `blog/[id]/page.tsx`, `dashboardMetadata`, `discussions/index.ts`, `site-header.tsx`, `TrafficAnalytics.tsx`, `Container`, `Link`, `breadcrumbs.tsx`, `Link`, `ProfileSettings.tsx`, `package.json`, `@lingui/core`, `Button`, `HomeFeed.tsx`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `DashboardShell.tsx`, `CreateReviewModal.tsx`, `RequestSubscriptionModal.tsx`, `RequestSidebar.tsx`, `ProposalDetailContent.tsx`, `NotificationsTabContent.tsx`, `requests/index.ts`, `[locale]/page.tsx`, `PricingContent.tsx`, `getLocaleFromParams`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `AdminShell.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `Детальний опис архітектури проєкту MOOC Frontend` connect `Детальний опис архітектури проєкту MOOC Frontend` to `Правила та конвенції`, `TypeScript конфігурація`, `Детальний опис шарів`, `Оптимізація`, `Стилізація`, `Змінні оточення`, `Роутинг (React Router v7)`, `Інтернаціоналізація (Lingui)`, `Структура файлів компонента`, `Форми (React Hook Form)`, `Нотифікації (React Toastify)`, `State Management (Zustand)`, `Залежності та встановлення`, `Деплой`, `Патерни та практики`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Should `@tanstack/react-query` be split into smaller, more focused modules?**
  _Cohesion score 0.10606060606060606 - nodes in this community are weakly interconnected._