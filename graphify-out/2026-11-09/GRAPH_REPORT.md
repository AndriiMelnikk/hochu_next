# Graph Report - shukayu_next  (2026-11-09)

## Corpus Check
- 505 files · ~146,846 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2531 nodes · 7263 edges · 142 communities (128 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1bf13d92`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- [city]/page.tsx
- category/index.ts
- @tanstack/react-query
- login/page.tsx
- RequestDetailContent
- CreateRequestForm.tsx
- Button
- notificationService.ts
- proposal/layout.tsx
- UiKitContent.tsx
- @lingui/react
- src_ui_v2_index_button
- breadcrumbs.tsx
- entities/user/index.ts
- schemas.ts
- locale.ts
- RequestInfo.tsx
- entities/auth/index.ts
- discussions/index.ts
- blog/[id]/page.tsx
- RequestSidebar.tsx
- authStore.ts
- compilerOptions
- compilerOptions
- StaffTable.tsx
- devDependencies
- components.json
- locationService.ts
- compilerOptions
- form.tsx
- dependencies
- entities/admin/index.ts
- request/[id]/page.tsx
- notification/index.ts
- ModerationSubscriptions.tsx
- JsonLd
- scripts
- Link
- LocaleRouteProps
- Детальний опис шарів
- notification/index.ts
- sitemap.ts
- GamificationProgress.tsx
- package.json
- Виконано
- ProfileReviews.tsx
- @lingui/react
- Структура файлів компонента
- Нотифікації (React Toastify)
- privacy/layout.tsx
- review/index.ts
- HomeFeed.tsx
- support/layout.tsx
- notification/types/index.ts
- @tanstack/react-query
- @lingui/cli
- request/index.ts
- proposalSchema.ts
- AdminShell.tsx
- ProfileSettings.tsx
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- ui-v2/index.ts
- Інтернаціоналізація (i18n) - Інструкція для розробників
- src/auth.ts
- @lingui/core
- react
- SEO Technical Backlog — Shukayu
- ProfileTabs.tsx
- blogService.ts
- LinguiProvider
- requests/index.ts
- RequestSubscriptionModal.tsx
- Основні сутності
- @lingui/core
- stepper.tsx
- RequestStatus
- Пагінація в додатку
- accordion.tsx
- config
- lint-staged
- api.ts
- NotificationFilters.tsx
- about/page.tsx
- Опис сторінок та необхідних даних
- Правила та конвенції
- privacy/page.tsx
- blog/layout.tsx
- contact/layout.tsx
- pricing/layout.tsx
- [locale]/layout.tsx
- terms/page.tsx
- NotificationItem.tsx
- Next.js FSD App
- notificationSchema.ts
- TelegramConnectSection.tsx
- chat/index.ts
- RequestSubscriptionCard.tsx
- proposal/const.ts
- requestSchema.ts
- Документація Backend API для проєкту shukayu
- [locale]/page.tsx
- Faq.tsx
- Роутинг (React Router v7)
- apple-icon.tsx
- route-metadata.ts
- Форми (React Hook Form)
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
- ContentBlog.tsx
- NotificationSettingsContent.tsx
- 4. Випадаючі поверхні
- 2. Колір
- 3. Кнопки
- 5. Списки
- 7. Перемикачі та вибір
- 8. Модалки та панелі

## God Nodes (most connected - your core abstractions)
1. `cn()` - 167 edges
2. `react` - 131 edges
3. `@lingui/react` - 114 edges
4. `getLocaleFromParams()` - 94 edges
5. `lucide-react` - 71 edges
6. `UiKitContent()` - 62 edges
7. `next` - 55 edges
8. `routes` - 54 edges
9. `getMetadataForRoute()` - 51 edges
10. `LocaleRouteProps` - 47 edges

## Surprising Connections (you probably didn't know these)
- `Ключові особливості:` --references--> `RootLayout()`  [INFERRED]
  docs/ARCHITECTURE.md → src/app/[locale]/layout.tsx
- `0. Поточний стан (коротко)` --references--> `ICategory`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/entities/category/types/Category.ts
- `1.2. Контент посадкової категорії (не порожній лістинг)` --references--> `getFaqPageJsonLd()`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/shared/seo/schemas.ts
- `Чеклист для додавання перекладів` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx
- `Як підключити словник до нової сторінки (Route Layout)` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx

## Import Cycles
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`

## Communities (142 total, 14 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.21
Nodes (11): paginationResultSchema(), requestSubscriptionService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest (+3 more)

### Community 1 - "[city]/page.tsx"
Cohesion: 0.15
Nodes (26): CatalogLink, CatalogStats, CopyInput, getCatalogCopy(), getCatalogStats, isIndexableCategory(), isIndexableCategoryCity(), CategoryCityPage() (+18 more)

### Community 2 - "category/index.ts"
Cohesion: 0.22
Nodes (13): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), useCategories(), CategoryIndex, categorySchema, getCategoriesResponseSchema (+5 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.12
Nodes (24): useCreateProposal(), useProposals(), useUpdateProposal(), getProposalsResponseSchema, normalizeProposalItem(), IProposal, IProposalSeller, IProposalWithSeller (+16 more)

### Community 4 - "login/page.tsx"
Cohesion: 0.21
Nodes (9): first(), generateMetadata(), LoginPage(), PageProps, first(), generateMetadata(), PageProps, RegisterPage() (+1 more)

### Community 5 - "RequestDetailContent"
Cohesion: 0.43
Nodes (7): RequestDetailContent(), ReviewsList(), Alert(), AlertDescription(), AlertProps, AlertTitle(), alertVariants

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.06
Nodes (28): axios, @hookform/resolvers, react-hook-form, react-toastify, ChangePasswordModal(), ChangePasswordModalProps, ForgotPasswordForm(), getForgotPasswordSchema() (+20 more)

### Community 7 - "Button"
Cohesion: 0.10
Nodes (29): nextConfig, SECURITY_HEADERS, next, next-auth, sonner, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), LoginContent() (+21 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.14
Nodes (18): useNotifications(), INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY, NEW_REQUESTS (+10 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.13
Nodes (16): messagesByLocale, DashboardShell(), DashboardLayout(), messagesByLocale, messagesByLocale, messagesByLocale, messagesByLocale, messagesByLocale (+8 more)

### Community 10 - "UiKitContent.tsx"
Cohesion: 0.10
Nodes (49): metadata, UiKitPage(), Section(), UiKitContent(), CreateReviewFormValues, CreateReviewModal(), CreateReviewModalProps, createReviewSchema (+41 more)

### Community 11 - "@lingui/react"
Cohesion: 0.09
Nodes (15): @lingui/react, lucide-react, ResetPasswordContentProps, Props, routes, DiscussionFormProps, CreateRequestButtonProps, RequestCardProps (+7 more)

### Community 12 - "src_ui_v2_index_button"
Cohesion: 0.08
Nodes (29): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), useUserContacts(), RequestSubscriptionModalProps, AcceptProposalModal(), AcceptProposalModalProps (+21 more)

### Community 13 - "breadcrumbs.tsx"
Cohesion: 0.29
Nodes (11): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator(), BreadcrumbItemData (+3 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.16
Nodes (20): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), accountSchema, createProfileSchema, profileSchema (+12 more)

### Community 15 - "schemas.ts"
Cohesion: 0.11
Nodes (23): generateMetadata(), getDisplayName(), getProfile, ProfileIdPage(), ProfileLookup, Props, revalidate, ProfileContent() (+15 more)

### Community 16 - "locale.ts"
Cohesion: 0.09
Nodes (26): NotificationsContent(), generateMetadata(), Page(), generateMetadata(), Page(), OverviewContent(), generateMetadata(), dashboardMetadata() (+18 more)

### Community 17 - "RequestInfo.tsx"
Cohesion: 0.09
Nodes (21): @radix-ui/react-alert-dialog, REQUEST_URGENCY_LABELS, ApproveRejectActions(), ApproveRejectActionsProps, BlockUserActions(), BlockUserActionsProps, RequestInfo(), RequestInfoProps (+13 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.16
Nodes (14): zod, LS_KEYS, useAuth(), useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema (+6 more)

### Community 19 - "discussions/index.ts"
Cohesion: 0.43
Nodes (5): DiscussionForm(), DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions

### Community 20 - "blog/[id]/page.tsx"
Cohesion: 0.14
Nodes (19): BlogArticleContent(), BlogArticlePage(), generateMetadata(), Props, revalidate, LOCAL_POSTS, LocalizedPost, LocalPost (+11 more)

### Community 21 - "RequestSidebar.tsx"
Cohesion: 0.21
Nodes (10): date-fns, IRequestBuyer, ReviewCard(), ReviewCardProps, RequestSidebar(), RequestSidebarProps, Avatar, AvatarProps (+2 more)

### Community 22 - "authStore.ts"
Cohesion: 0.13
Nodes (18): AuthContext, AuthContextType, AuthProvider(), authService, AuthActions, AuthState, buildAuthStateFromResponse(), buildUserFromAuthResponse() (+10 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "StaffTable.tsx"
Cohesion: 0.12
Nodes (9): recharts, AdminAnalyticsPage(), AdminTrafficPage(), RolePreviewSelect(), AnalyticsOverview(), PIE_COLORS, MetricBars(), NUMBER_LOCALE (+1 more)

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
Cohesion: 0.21
Nodes (10): @radix-ui/react-label, FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue (+2 more)

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.07
Nodes (53): zustand, ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, STAFF_ROLES, hasAnyPermission() (+45 more)

### Community 33 - "request/[id]/page.tsx"
Cohesion: 0.16
Nodes (16): generateMetadata(), getCategoryTrail(), getRequest, Props, RequestDetailPage(), RequestLookup, revalidate, detectContentLocale() (+8 more)

### Community 34 - "notification/index.ts"
Cohesion: 0.23
Nodes (7): TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken

### Community 35 - "ModerationSubscriptions.tsx"
Cohesion: 0.16
Nodes (19): AdminModerationSubscriptionsPage(), AdminModerationUsersPage(), AdminStaffPage(), useClientPagination(), Input, Pagination(), Select, SelectContent (+11 more)

### Community 36 - "JsonLd"
Cohesion: 0.13
Nodes (19): BlogListPage(), COPY, generateMetadata(), revalidate, CatalogView(), CatalogViewProps, LinkChips(), CatalogCopy (+11 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "Link"
Cohesion: 0.16
Nodes (25): NotFoundPage(), Link(), DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator (+17 more)

### Community 39 - "LocaleRouteProps"
Cohesion: 0.10
Nodes (24): generateMetadata(), PageProps, ResetPasswordPage(), ResetPasswordContent(), ContactContent(), ContactPage(), generateMetadata(), CreateRequestPage() (+16 more)

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.08
Nodes (13): useCreateRequestSubscription(), useCreateTelegramLinkToken(), useDeleteRequestSubscription(), useMarkAllNotificationsRead(), useMarkNotificationRead(), useRequestSubscriptions(), useUnreadCount(), useUpdateRequestSubscription() (+5 more)

### Community 42 - "sitemap.ts"
Cohesion: 0.33
Nodes (12): getBlogEntries(), getCatalogEntries(), getRequestAndProfileEntries(), localizedUrl(), parseDate(), revalidate, safeFetchRequests(), sitemap() (+4 more)

### Community 43 - "GamificationProgress.tsx"
Cohesion: 0.12
Nodes (15): UserRole, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level, sellerAchievements (+7 more)

### Community 44 - "package.json"
Cohesion: 0.04
Nodes (46): name, private, version, autoprefixer, cmdk, embla-carousel-react, eslint, eslint-config-next (+38 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "ProfileReviews.tsx"
Cohesion: 0.22
Nodes (8): Tabs, TabsContent, TabsList, TabsTrigger, syncProfileTabHash(), ProfileTabs(), ProfileReviews(), ProfileReviewsProps

### Community 47 - "@lingui/react"
Cohesion: 0.22
Nodes (13): useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), EditContactChannelsForm(), EditContactChannelsModal(), PROFILE_TYPE_ICONS, ProfileCard() (+5 more)

### Community 48 - "Структура файлів компонента"
Cohesion: 0.67
Nodes (3): index.ts:, Структура файлів компонента, Типова структура:

### Community 49 - "Нотифікації (React Toastify)"
Cohesion: 0.67
Nodes (3): Використання:, Налаштування:, Нотифікації (React Toastify)

### Community 50 - "privacy/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PrivacyLayout(), messages, messages

### Community 51 - "review/index.ts"
Cohesion: 0.20
Nodes (11): useCreateReview(), useReviews(), useReviewStats(), reviewSchema, reviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse (+3 more)

### Community 52 - "HomeFeed.tsx"
Cohesion: 0.08
Nodes (22): first(), generateMetadata(), parsePage(), Props, RequestPage(), RequestContent(), RequestContentProps, ReviewsListProps (+14 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "notification/types/index.ts"
Cohesion: 0.28
Nodes (7): useNotificationPreferences(), useUpdateNotificationPreferences(), notificationPreferenceService, ICategoryPreference, INewRequestsPreference, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 55 - "@tanstack/react-query"
Cohesion: 0.17
Nodes (5): Статуси пропозицій (ProposalStatus), @tanstack/react-query, useCanPropose(), useRejectProposal(), proposalService

### Community 58 - "request/index.ts"
Cohesion: 0.20
Nodes (12): requestService, RequestActions, RequestState, IRequest, IRequestWithBuyer, ItemCondition, NEW, USED (+4 more)

### Community 59 - "proposalSchema.ts"
Cohesion: 0.17
Nodes (10): useProposal(), createProposalSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, ProposalStatus, ACCEPTED, COMPLETED (+2 more)

### Community 60 - "AdminShell.tsx"
Cohesion: 0.05
Nodes (38): 5. Обробка помилок, clsx, @radix-ui/react-dialog, tailwind-merge, CreateProposalForm(), createUploadFormData(), getUploadHeaders(), parseUploadResponse() (+30 more)

### Community 61 - "ProfileSettings.tsx"
Cohesion: 0.12
Nodes (6): CreateRequestContent(), HASH_TO_ROUTE, NOTIFICATIONS_NAV, SETTINGS_NAV, DASHBOARD_NOTIFICATION_SETTINGS, dashboardSettingsPath()

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (16): API та HTTP запити, Environment Variables, Netlify, Path Aliases:, TypeScript конфігурація, Використання:, Використання:, Висновок (+8 more)

### Community 64 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 65 - "ui-v2/index.ts"
Cohesion: 0.15
Nodes (14): ArticleSection(), Props, NotificationPrefsContent(), Card, CardBody(), CardDescription(), CardHead(), CardProps (+6 more)

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "src/auth.ts"
Cohesion: 0.33
Nodes (4): auth, handlers, signIn, signOut

### Community 68 - "@lingui/core"
Cohesion: 0.12
Nodes (13): @lingui/core, AboutLayout(), messagesByLocale, AdminLayout(), messagesByLocale, messagesByLocale, TermsLayout(), messages (+5 more)

### Community 69 - "react"
Cohesion: 0.07
Nodes (30): class-variance-authority, @radix-ui/react-popover, @radix-ui/react-slot, @radix-ui/react-tooltip, react, CategoryFilterButton(), CategoryFilterButtonProps, BadgeProps (+22 more)

### Community 71 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.08
Nodes (24): 0. Поточний стан (коротко), 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія (+16 more)

### Community 72 - "ProfileTabs.tsx"
Cohesion: 0.23
Nodes (9): GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS, PROFILE_HASH, PROFILE_TAB, ProfileTabId, resolveProfileTab(), LEGACY_OWNER_HASH (+1 more)

### Community 73 - "blogService.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 74 - "LinguiProvider"
Cohesion: 0.17
Nodes (16): GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), CreateLayout(), ForgotPasswordLayout(), messagesByLocale, LoginLayout() (+8 more)

### Community 75 - "requests/index.ts"
Cohesion: 0.36
Nodes (6): CreateRequestButton(), CreateRequestForm(), EditRequestForm(), EditRequestModal(), EditRequestModalProps, RequestCard()

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.19
Nodes (8): CategoryChipsSelect(), NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, NotificationChannelsSelect(), NotificationChannelsSelectProps, NotificationPreferencesSection(), NotificationPreferencesSectionProps, RequestSubscriptionModal()

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "@lingui/core"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 79 - "stepper.tsx"
Cohesion: 0.38
Nodes (6): Marker(), ProgressBar(), Stepper(), StepperStep, StepStatus, WizardFooter()

### Community 80 - "RequestStatus"
Cohesion: 0.20
Nodes (9): Загальна логіка відгуків, Статуси запитів (RequestStatus), RequestStatus, ACTIVE, CANCELLED, CLOSED, COMPLETED, PENDING (+1 more)

### Community 81 - "Пагінація в додатку"
Cohesion: 0.12
Nodes (16): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+8 more)

### Community 82 - "accordion.tsx"
Cohesion: 0.33
Nodes (5): @radix-ui/react-accordion, Accordion, AccordionContent, AccordionItem, AccordionTrigger

### Community 83 - "config"
Cohesion: 0.67
Nodes (3): path, config, commitizen

### Community 84 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}

### Community 85 - "api.ts"
Cohesion: 0.22
Nodes (4): failedQueue, MUTATION_METHODS, revalidateAfterMutation(), LS_KEYS

### Community 86 - "NotificationFilters.tsx"
Cohesion: 0.33
Nodes (3): CATEGORY_OPTIONS, NotificationFilters(), NotificationFiltersProps

### Community 87 - "about/page.tsx"
Cohesion: 0.50
Nodes (3): AboutContent(), AboutPage(), generateMetadata()

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 89 - "Правила та конвенції"
Cohesion: 0.33
Nodes (6): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 6. Стан завантаження, Правила та конвенції

### Community 90 - "privacy/page.tsx"
Cohesion: 0.50
Nodes (3): generateMetadata(), PrivacyPage(), PrivacyContent()

### Community 91 - "blog/layout.tsx"
Cohesion: 0.38
Nodes (4): BlogLayout(), messagesByLocale, messages, messages

### Community 92 - "contact/layout.tsx"
Cohesion: 0.38
Nodes (4): ContactLayout(), messagesByLocale, messages, messages

### Community 93 - "pricing/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PricingLayout(), messages, messages

### Community 94 - "[locale]/layout.tsx"
Cohesion: 0.12
Nodes (14): @next/third-parties, @vercel/analytics, generateMetadata(), inter, messagesByLocale, Props, RootLayout(), Providers() (+6 more)

### Community 95 - "terms/page.tsx"
Cohesion: 0.50
Nodes (3): generateMetadata(), TermsPage(), TermsContent()

### Community 97 - "Next.js FSD App"
Cohesion: 0.17
Nodes (11): Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules) (+3 more)

### Community 98 - "notificationSchema.ts"
Cohesion: 0.15
Nodes (13): contactService, IContactRequest, categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw (+5 more)

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "requestSchema.ts"
Cohesion: 0.14
Nodes (15): HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, useCancelRequest(), useCreateRequest(), useLatestRequests(), useRequest() (+7 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 105 - "[locale]/page.tsx"
Cohesion: 0.27
Nodes (5): generateMetadata(), getLatestRequests(), HomePage(), revalidate, HomeSwitch()

### Community 106 - "Faq.tsx"
Cohesion: 0.33
Nodes (3): StatusGuide(), StatusItem(), FAQ_KEYS

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 110 - "route-metadata.ts"
Cohesion: 0.16
Nodes (16): generateMetadata(), generateMetadata(), ProposalDetailPage(), Props, ProposalDetailContent(), defaultMetadata, routeMetadata, buildAlternates() (+8 more)

### Community 111 - "Форми (React Hook Form)"
Cohesion: 0.67
Nodes (3): Валідація:, Патерн використання:, Форми (React Hook Form)

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
Cohesion: 0.16
Nodes (18): AdminPage(), alt, contentType, OpengraphImage(), runtime, size, defaultLocale, isLocale() (+10 more)

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

### Community 179 - "ContentBlog.tsx"
Cohesion: 0.11
Nodes (19): AdminContentBlogPage(), AdminContentPagesPage(), AdminContentPricingPage(), AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationRequestsPage(), Badge(), Table (+11 more)

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
- **67 isolated node(s):** `{ GET, POST }`, `NEW`, `USED`, `autoprefixer`, `cmdk` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 942 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `[city]/page.tsx`, `category/index.ts`, `RequestDetailContent`, `CreateRequestForm.tsx`, `Button`, `proposal/layout.tsx`, `UiKitContent.tsx`, `@lingui/react`, `src_ui_v2_index_button`, `breadcrumbs.tsx`, `schemas.ts`, `RequestInfo.tsx`, `RequestSidebar.tsx`, `authStore.ts`, `StaffTable.tsx`, `form.tsx`, `entities/admin/index.ts`, `request/[id]/page.tsx`, `ModerationSubscriptions.tsx`, `Link`, `package.json`, `ProfileReviews.tsx`, `@lingui/react`, `privacy/layout.tsx`, `ContentBlog.tsx`, `HomeFeed.tsx`, `support/layout.tsx`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `AdminShell.tsx`, `ProfileSettings.tsx`, `ui-v2/index.ts`, `@lingui/core`, `NotificationsTabContent.tsx`, `ProfileTabs.tsx`, `LinguiProvider`, `@lingui/core`, `stepper.tsx`, `Пагінація в додатку`, `accordion.tsx`, `blog/layout.tsx`, `contact/layout.tsx`, `pricing/layout.tsx`, `[locale]/layout.tsx`, `requestSchema.ts`, `[locale]/page.tsx`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **What connects `{ GET, POST }`, `NEW`, `USED` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `[city]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14789915966386555 - nodes in this community are weakly interconnected._
- **Why does `@lingui/react` connect `@lingui/react` to `CreateRequestForm.tsx`, `Button`, `proposal/layout.tsx`, `UiKitContent.tsx`, `src_ui_v2_index_button`, `breadcrumbs.tsx`, `locale.ts`, `RequestInfo.tsx`, `discussions/index.ts`, `RequestSidebar.tsx`, `StaffTable.tsx`, `ModerationSubscriptions.tsx`, `Link`, `package.json`, `ProfileReviews.tsx`, `@lingui/react`, `ContentBlog.tsx`, `HomeFeed.tsx`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `AdminShell.tsx`, `ProfileSettings.tsx`, `ui-v2/index.ts`, `react`, `NotificationsTabContent.tsx`, `ProfileTabs.tsx`, `requests/index.ts`, `RequestSubscriptionModal.tsx`, `NotificationFilters.tsx`, `about/page.tsx`, `privacy/page.tsx`, `terms/page.tsx`, `NotificationItem.tsx`, `TelegramConnectSection.tsx`, `RequestSubscriptionCard.tsx`, `Faq.tsx`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Should `@tanstack/react-query` be split into smaller, more focused modules?**
  _Cohesion score 0.12073170731707317 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Should `CreateRequestForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.056790123456790124 - nodes in this community are weakly interconnected._