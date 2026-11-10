# Graph Report - shukayu_next  (2026-11-10)

## Corpus Check
- 554 files · ~162,469 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2728 nodes · 8056 edges · 156 communities (142 shown, 14 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 61 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `34e7e4a7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- sitemap.ts
- AdminShell.tsx
- @tanstack/react-query
- lucide-react
- src_ui_v2_index_button
- CreateRequestForm.tsx
- sonner
- notificationService.ts
- proposal/layout.tsx
- UiKitContent.tsx
- routes.ts
- src_ui_v2_index_button
- blog/[id]/page.tsx
- entities/user/index.ts
- request/[id]/page.tsx
- dashboardMetadata
- cn
- entities/auth/index.ts
- discussions/index.ts
- site-header.tsx
- notificationSchema.ts
- authService.ts
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
- Heading
- useTelegramLinkStatus.ts
- Інструкція: як створити нову сторінку в стилі Shukayu
- schemas.ts
- scripts
- Card
- Детальний опис шарів
- notification/index.ts
- category/index.ts
- ProfileHeader.tsx
- package.json
- Виконано
- ReviewsList.tsx
- @lingui/react
- ModerationRequests.tsx
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
- Link
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- authService
- Інтернаціоналізація (i18n) - Інструкція для розробників
- src/auth.ts
- admin/layout.tsx
- utils.ts
- TypeScript конфігурація
- Container
- CreateReviewModal.tsx
- blogService.ts
- LinguiProvider
- Змінні оточення
- RequestSubscriptionModal.tsx
- Основні сутності
- @lingui/core
- stepper.tsx
- RequestStatus
- Пагінація в додатку
- admin-session/route.ts
- config
- lint-staged
- RequestSidebar.tsx
- ContentCollection
- proposalSchema.ts
- Опис сторінок та необхідних даних
- BlogArticleContent.tsx
- ProfileSettings.tsx
- contentStore.ts
- adminModerationService.ts
- ModerationSubscriptions
- [locale]/layout.tsx
- breadcrumbs.tsx
- Next.js FSD App
- Правила та конвенції
- adminPricingStore.ts
- chat/index.ts
- RequestInfo.tsx
- proposal/const.ts
- ItemCondition
- Документація Backend API для проєкту shukayu
- [locale]/page.tsx
- PricingContent.tsx
- Роутинг (React Router v7)
- ProposalDetailContent.tsx
- getLocaleFromParams
- Структура файлів компонента
- Форми (React Hook Form)
- envVars.ts
- api.ts
- AdminLoginForm.tsx
- ProposalRejectionReason
- pricing/layout.tsx
- privacy/layout.tsx
- proposal/layout.tsx
- Аутентифікація та авторизація
- ContactSellerModal.tsx
- tooltip.tsx
- ContentEditorModal
- LinguiProvider.tsx
- Патерни та практики
- profiles/page.tsx
- Input
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
2. `react` - 148 edges
3. `@lingui/react` - 132 edges
4. `getLocaleFromParams()` - 94 edges
5. `lucide-react` - 81 edges
6. `next` - 63 edges
7. `UiKitContent()` - 62 edges
8. `routes` - 62 edges
9. `getMetadataForRoute()` - 51 edges
10. `Link()` - 50 edges

## Surprising Connections (you probably didn't know these)
- `2.2 `layout.tsx`` --references--> `PageHero()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/components/marketing.tsx
- `9. Перевірка перед здачею` --references--> `PageHero()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/components/marketing.tsx
- `3. Токени (Tailwind-класи)` --references--> `Container()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/layout/container.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  docs/ARCHITECTURE.md → src/widgets/app/Features/Features.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  README.md → src/widgets/app/Features/Features.tsx

## Import Cycles
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`

## Communities (156 total, 14 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.21
Nodes (11): paginationResultSchema(), requestSubscriptionService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest (+3 more)

### Community 1 - "sitemap.ts"
Cohesion: 0.10
Nodes (43): CatalogLink, CatalogView(), CatalogViewProps, LinkChips(), CatalogCopy, CatalogStats, CopyInput, getCatalogCopy() (+35 more)

### Community 2 - "AdminShell.tsx"
Cohesion: 0.08
Nodes (25): clsx, tailwind-merge, ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, hasAnyPermission() (+17 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.13
Nodes (17): Статуси пропозицій (ProposalStatus), @tanstack/react-query, useCanPropose(), useCreateProposal(), useRejectProposal(), normalizeProposalItem(), proposalService, IProposal (+9 more)

### Community 4 - "lucide-react"
Cohesion: 0.11
Nodes (9): lucide-react, Audience, CARDS, CreateRequestButton(), CreateRequestButtonProps, LinkProps, ICONS, BULLET_KEYS (+1 more)

### Community 5 - "src_ui_v2_index_button"
Cohesion: 0.21
Nodes (6): ApproveRejectActionsProps, BlockUserActionsProps, DiscussionFormProps, FieldError(), PlanEditorModal(), toInput()

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.05
Nodes (31): axios, @hookform/resolvers, react-hook-form, useUpdateProposal(), ChangePasswordModal(), ChangePasswordModalProps, ForgotPasswordForm(), getForgotPasswordSchema() (+23 more)

### Community 7 - "sonner"
Cohesion: 0.10
Nodes (29): sonner, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), LoginContent(), LoginContentProps, BLOCKED_RETURN_PATHS, buildAuthHref(), buildGoogleAuthCallbackUrl() (+21 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.14
Nodes (18): useNotifications(), INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY, NEW_REQUESTS (+10 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.16
Nodes (15): CreateLayout(), messagesByLocale, DashboardShell(), DashboardLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale (+7 more)

### Community 10 - "UiKitContent.tsx"
Cohesion: 0.11
Nodes (35): metadata, UiKitPage(), Section(), UiKitContent(), Chip(), IconButton, CardHeader(), CardSection() (+27 more)

### Community 11 - "routes.ts"
Cohesion: 0.07
Nodes (21): ResetPasswordPage(), ResetPasswordContent(), ResetPasswordContentProps, CreateRequestContent(), HASH_TO_ROUTE, NOTIFICATIONS_NAV, SETTINGS_NAV, ForgotPasswordContent() (+13 more)

### Community 12 - "src_ui_v2_index_button"
Cohesion: 0.10
Nodes (26): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), REJECT_REASON_MAX, REJECT_REASON_MIN, RejectReasonDialogProps, AcceptProposalModal() (+18 more)

### Community 13 - "blog/[id]/page.tsx"
Cohesion: 0.11
Nodes (25): BlogArticleContent(), BlogArticlePage(), generateMetadata(), Props, revalidate, generateMetadata(), getDisplayName(), getProfile (+17 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.16
Nodes (20): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), accountSchema, createProfileSchema, profileSchema (+12 more)

### Community 15 - "request/[id]/page.tsx"
Cohesion: 0.18
Nodes (14): generateMetadata(), getCategoryTrail(), getRequest, Props, RequestDetailPage(), RequestLookup, revalidate, buildContentAlternates() (+6 more)

### Community 16 - "dashboardMetadata"
Cohesion: 0.17
Nodes (11): NotificationsContent(), generateMetadata(), Page(), generateMetadata(), OverviewContent(), generateMetadata(), dashboardMetadata(), Page() (+3 more)

### Community 17 - "cn"
Cohesion: 0.11
Nodes (25): @radix-ui/react-alert-dialog, @radix-ui/react-dialog, CategoryFilterButton(), CategoryFilterButtonProps, cn(), AlertDialog, AlertDialogAction, AlertDialogCancel (+17 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.17
Nodes (13): zod, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+5 more)

### Community 19 - "discussions/index.ts"
Cohesion: 0.43
Nodes (5): DiscussionForm(), DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions

### Community 20 - "site-header.tsx"
Cohesion: 0.14
Nodes (27): @radix-ui/react-dropdown-menu, @radix-ui/react-popover, Avatar, AvatarProps, avatarVariants, DropdownMenu, DropdownMenuContent, DropdownMenuGroup (+19 more)

### Community 21 - "notificationSchema.ts"
Cohesion: 0.15
Nodes (13): contactService, IContactRequest, categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw (+5 more)

### Community 22 - "authService.ts"
Cohesion: 0.18
Nodes (14): AuthContext, AuthContextType, AuthProvider(), useAuth(), AuthActions, AuthState, buildAuthStateFromResponse(), buildUserFromAuthResponse() (+6 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "StaffTable.tsx"
Cohesion: 0.09
Nodes (31): AdminAnalyticsPage(), AdminStaffPage(), STAFF_ROLES, STAFF_KEY, useAdminMe(), useAdminRole(), useAdminStaff(), useCanDo() (+23 more)

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
Cohesion: 0.12
Nodes (17): class-variance-authority, @radix-ui/react-label, @radix-ui/react-slot, BadgeProps, FormControl, FormDescription, FormFieldContext, FormFieldContextValue (+9 more)

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.10
Nodes (41): ADMIN_ME_KEY, adminBlogPosts, adminInfoPages, adminMockData, adminPricingPlans, adminRequestSubscriptions, moderationProposals, moderationReports (+33 more)

### Community 33 - "Heading"
Cohesion: 0.19
Nodes (19): 4. Каталог готових блоків (`@/ui-v2`), 8. Еталонні сторінки, Ритм сторінки, CategoryTile(), CtaBanner(), FactItem(), FeatureCard(), HeroSection() (+11 more)

### Community 34 - "useTelegramLinkStatus.ts"
Cohesion: 0.23
Nodes (7): TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken

### Community 35 - "Інструкція: як створити нову сторінку в стилі Shukayu"
Cohesion: 0.17
Nodes (11): 0. Що передати разом із цим файлом, 1. Золоті правила, 2.1 `page.tsx`, 2.2 `layout.tsx`, 2.3 Реєстрація маршруту (4 місця), 2. Файли, які треба створити, 3. Токени (Tailwind-класи), 5. Тексти й переклади (Lingui) (+3 more)

### Community 36 - "schemas.ts"
Cohesion: 0.10
Nodes (27): BlogListPage(), COPY, generateMetadata(), revalidate, CategoriesPage(), COPY, revalidate, first() (+19 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "Card"
Cohesion: 0.29
Nodes (12): NotificationPrefsContent(), Page(), Card, CardBody(), CardDescription(), CardHead(), CardProps, CardTitle() (+4 more)

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.08
Nodes (13): useCreateRequestSubscription(), useCreateTelegramLinkToken(), useDeleteRequestSubscription(), useMarkAllNotificationsRead(), useMarkNotificationRead(), useRequestSubscriptions(), useUnreadCount(), useUpdateRequestSubscription() (+5 more)

### Community 42 - "category/index.ts"
Cohesion: 0.07
Nodes (37): 0. Поточний стан (коротко), 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія (+29 more)

### Community 43 - "ProfileHeader.tsx"
Cohesion: 0.11
Nodes (16): UserRole, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level, sellerAchievements (+8 more)

### Community 44 - "package.json"
Cohesion: 0.04
Nodes (48): name, private, version, autoprefixer, cmdk, embla-carousel-react, eslint, eslint-config-next (+40 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "ReviewsList.tsx"
Cohesion: 0.20
Nodes (9): RequestDetailContent(), ReviewCard(), ReviewsList(), ReviewsListProps, Alert(), AlertDescription(), AlertProps, AlertTitle() (+1 more)

### Community 47 - "@lingui/react"
Cohesion: 0.20
Nodes (15): @lingui/react, useRequestStore, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), EditContactChannelsForm(), EditContactChannelsModal() (+7 more)

### Community 48 - "ModerationRequests.tsx"
Cohesion: 0.20
Nodes (18): AdminModerationRequestsPage(), useBulkModerate(), useModerateRequest(), useModerationRequest(), useModerationRequests(), IModerationRequest, ApproveRejectActions(), PermissionGate() (+10 more)

### Community 49 - "Нотифікації (React Toastify)"
Cohesion: 0.67
Nodes (3): Використання:, Налаштування:, Нотифікації (React Toastify)

### Community 50 - "@lingui/core"
Cohesion: 0.16
Nodes (10): @lingui/core, BlogLayout(), messagesByLocale, ContactLayout(), messagesByLocale, messages, messages, messages (+2 more)

### Community 51 - "review/index.ts"
Cohesion: 0.21
Nodes (10): useReviews(), useReviewStats(), reviewSchema, reviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse, IReviewStatsResponse (+2 more)

### Community 52 - "HomeFeed.tsx"
Cohesion: 0.16
Nodes (16): RequestContent(), RequestContentProps, CascadingSelectItem, EmptyState(), ErrorState(), LoadingState(), RowSkeleton(), Skeleton() (+8 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "notification/types/index.ts"
Cohesion: 0.28
Nodes (7): useNotificationPreferences(), useUpdateNotificationPreferences(), notificationPreferenceService, ICategoryPreference, INewRequestsPreference, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 55 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.11
Nodes (17): Tabs, TabsContent, TabsList, TabsTrigger, GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS, PROFILE_HASH (+9 more)

### Community 58 - "request/index.ts"
Cohesion: 0.15
Nodes (20): useCancelRequest(), useCreateRequest(), useRequest(), createRequestSchema, getRequestsResponseSchema, requestBuyerSchema, requestSchema, updateRequestSchema (+12 more)

### Community 59 - "Деплой"
Cohesion: 0.67
Nodes (3): Environment Variables, Netlify, Деплой

### Community 60 - "shared/utils/index.ts"
Cohesion: 0.11
Nodes (22): 5. Обробка помилок, CreateRequestForm(), createUploadFormData(), getUploadHeaders(), parseUploadResponse(), refreshAccessToken(), uploadFile(), ACCEPTED_IMAGE_ACCEPT_ATTR (+14 more)

### Community 61 - "Link"
Cohesion: 0.19
Nodes (11): 7. Чого не робити, NotFoundPage(), Link(), ImagePlaceholder(), PromoBanner(), SegmentedControl(), Hero(), Mode (+3 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.15
Nodes (12): API та HTTP запити, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Правила залежностей (Import Rules), Рекомендована структура:, Структура запитів (+4 more)

### Community 64 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "src/auth.ts"
Cohesion: 0.19
Nodes (10): next-auth, auth, handlers, signIn, signOut, IAuthResponse, JWT, next-auth (+2 more)

### Community 68 - "admin/layout.tsx"
Cohesion: 0.28
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "utils.ts"
Cohesion: 0.27
Nodes (8): CascadingSelect(), CascadingSelectProps, CityCombobox(), CityComboboxProps, Popover, PopoverContent, PopoverTrigger, TextareaProps

### Community 70 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 71 - "Container"
Cohesion: 0.25
Nodes (10): AboutContent(), AboutPage(), ContactContent(), HowItWorksContent(), HowItWorksPage(), Button, PageHero(), Container() (+2 more)

### Community 72 - "CreateReviewModal.tsx"
Cohesion: 0.21
Nodes (16): useCreateReview(), CreateReviewFormValues, CreateReviewModal(), CreateReviewModalProps, createReviewSchema, DrawerContent, DrawerDescription, Modal (+8 more)

### Community 73 - "blogService.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 74 - "LinguiProvider"
Cohesion: 0.16
Nodes (15): react, AboutLayout(), messagesByLocale, GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout() (+7 more)

### Community 75 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.12
Nodes (12): CategoryChipsSelect(), CategoryChipsSelectProps, NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, NotificationChannelsSelect(), NotificationChannelsSelectProps, NotificationFilters(), NotificationPreferencesSection() (+4 more)

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

### Community 82 - "admin-session/route.ts"
Cohesion: 0.24
Nodes (15): clearSession(), handle(), POST(), ADMIN_API_TOKEN_COOKIE, ADMIN_COOKIE, ADMIN_SESSION_MAX_AGE, adminApiBaseUrl(), adminCookieOptions (+7 more)

### Community 83 - "config"
Cohesion: 0.67
Nodes (3): path, config, commitizen

### Community 84 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}

### Community 85 - "RequestSidebar.tsx"
Cohesion: 0.27
Nodes (5): date-fns, IRequestBuyer, ReviewCardProps, RequestSidebar(), RequestSidebarProps

### Community 86 - "ContentCollection"
Cohesion: 0.27
Nodes (7): AdminContentBlogPage(), AdminContentPagesPage(), useAdminBlogStore, useAdminPagesStore, ContentBlog(), ContentCollection(), ContentPages()

### Community 87 - "proposalSchema.ts"
Cohesion: 0.13
Nodes (15): ProposalDetailPage(), ProposalDetailContent(), useProposal(), useProposals(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema (+7 more)

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 89 - "BlogArticleContent.tsx"
Cohesion: 0.26
Nodes (9): ArticleSection(), Props, Props, ArticleSectionData, createDefaultSections(), getIconComponent(), iconMap, parseContentToSections() (+1 more)

### Community 90 - "ProfileSettings.tsx"
Cohesion: 0.22
Nodes (7): generateMetadata(), Page(), Props, isSettingsSection(), SETTINGS_SECTIONS, SettingsContent(), SettingsSection

### Community 91 - "contentStore.ts"
Cohesion: 0.29
Nodes (8): AdminContentState, createContentStore(), today(), AdminInfoPageInput, AdminPageStatus, IAdminContentItem, Props, ContentCollectionProps

### Community 92 - "adminModerationService.ts"
Cohesion: 0.23
Nodes (9): KEY, AdminApiError, adminCall(), redirectToLogin(), adminModerationService, IListModerationParams, IBulkModerationResult, IModerationList (+1 more)

### Community 93 - "ModerationSubscriptions"
Cohesion: 0.32
Nodes (4): AdminModerationSubscriptionsPage(), adminNotificationService, filterMock(), ModerationSubscriptions()

### Community 94 - "[locale]/layout.tsx"
Cohesion: 0.10
Nodes (15): @next/third-parties, @vercel/analytics, generateMetadata(), messagesByLocale, onest, Props, RootLayout(), Providers() (+7 more)

### Community 96 - "breadcrumbs.tsx"
Cohesion: 0.31
Nodes (10): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator(), BreadcrumbItemData (+2 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.22
Nodes (8): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 98 - "Правила та конвенції"
Cohesion: 0.33
Nodes (6): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 6. Стан завантаження, Правила та конвенції

### Community 99 - "adminPricingStore.ts"
Cohesion: 0.27
Nodes (8): zustand, AdminContentPricingPage(), AdminPricingState, useAdminPricingStore, AdminPricingPlanInput, IAdminPricingPlan, ContentPricing(), Props

### Community 101 - "RequestInfo.tsx"
Cohesion: 0.15
Nodes (10): EditRequestForm(), EditRequestModal(), RequestCard(), RequestCardProps, RequestInfo(), RequestInfoProps, STATUS_TONE, formatBudget() (+2 more)

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "ItemCondition"
Cohesion: 0.18
Nodes (9): HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, REQUEST_URGENCY_LABELS, useLatestRequests(), useRequests(), formatChange() (+1 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 105 - "[locale]/page.tsx"
Cohesion: 0.20
Nodes (8): getLatestRequests(), HomePage(), revalidate, StatItem(), Estimate(), Quiz(), KEYS, Trust()

### Community 106 - "PricingContent.tsx"
Cohesion: 0.25
Nodes (10): PricingPage(), PricingContent(), SupportContent(), StatusGuide(), StatusItem(), Accordion, AccordionContent, AccordionItem (+2 more)

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 110 - "getLocaleFromParams"
Cohesion: 0.09
Nodes (37): generateMetadata(), generateMetadata(), generateMetadata(), PageProps, generateMetadata(), ContactPage(), generateMetadata(), CreateRequestPage() (+29 more)

### Community 111 - "Структура файлів компонента"
Cohesion: 0.67
Nodes (3): index.ts:, Структура файлів компонента, Типова структура:

### Community 112 - "Форми (React Hook Form)"
Cohesion: 0.67
Nodes (3): Валідація:, Патерн використання:, Форми (React Hook Form)

### Community 113 - "envVars.ts"
Cohesion: 0.20
Nodes (9): AI_BOTS, BLOCKED_BOTS, DISALLOW, DEFAULT_SOCIAL_PROFILES, gtmId, logoUrl, LS_KEYS, siteUrl (+1 more)

### Community 114 - "api.ts"
Cohesion: 0.22
Nodes (4): failedQueue, MUTATION_METHODS, revalidateAfterMutation(), apiBaseUrl

### Community 115 - "AdminLoginForm.tsx"
Cohesion: 0.31
Nodes (5): AdminLoginPage(), metadata, PageProps, AdminLoginForm(), safeReturnUrl()

### Community 116 - "ProposalRejectionReason"
Cohesion: 0.25
Nodes (8): ProposalRejectionReason, ALREADY_PROPOSED, NO_CONTACTS, NOT_SELLER, OWN_REQUEST, REQUEST_NOT_ACTIVE, REQUEST_NOT_FOUND, USER_BLOCKED

### Community 117 - "pricing/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PricingLayout(), messages, messages

### Community 118 - "privacy/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PrivacyLayout(), messages, messages

### Community 119 - "proposal/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, ProposalLayout(), messages, messages

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 121 - "ContactSellerModal.tsx"
Cohesion: 0.43
Nodes (5): useUserContacts(), CHANNEL_ICONS, ContactSellerModal(), ContactSellerModalProps, getHref()

### Community 122 - "tooltip.tsx"
Cohesion: 0.33
Nodes (5): @radix-ui/react-tooltip, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger

### Community 123 - "ContentEditorModal"
Cohesion: 0.40
Nodes (5): isValidSlug(), slugify(), UK_MAP, ContentEditorModal(), FieldError()

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 126 - "profiles/page.tsx"
Cohesion: 0.60
Nodes (3): generateMetadata(), Page(), ProfilesContent()

### Community 128 - "Input"
Cohesion: 0.60
Nodes (3): CopyField(), Input, InputProps

### Community 135 - "locale.ts"
Cohesion: 0.10
Nodes (24): nextConfig, SECURITY_HEADERS, next, contentType, size, AdminPage(), alt, contentType (+16 more)

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
Cohesion: 0.08
Nodes (27): AdminTrafficPage(), AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationUsersPage(), useClientPagination(), Badge(), badgeVariants, getPageNumbers() (+19 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.11
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
- **67 isolated node(s):** `COMPLETED`, `CANCELLED`, `ACTIVE`, `PENDING`, `CLOSED` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 969 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `LinguiProvider` to `Input`, `sitemap.ts`, `AdminShell.tsx`, `lucide-react`, `src_ui_v2_index_button`, `CreateRequestForm.tsx`, `sonner`, `proposal/layout.tsx`, `UiKitContent.tsx`, `routes.ts`, `src_ui_v2_index_button`, `blog/[id]/page.tsx`, `request/[id]/page.tsx`, `cn`, `site-header.tsx`, `authService.ts`, `StaffTable.tsx`, `form.tsx`, `Heading`, `schemas.ts`, `Card`, `RequestDetailContent.tsx`, `category/index.ts`, `package.json`, `ReviewsList.tsx`, `@lingui/react`, `ModerationRequests.tsx`, `@lingui/core`, `Button`, `HomeFeed.tsx`, `support/layout.tsx`, `NotificationSettingsContent.tsx`, `terms/layout.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `Link`, `admin/layout.tsx`, `utils.ts`, `Container`, `CreateReviewModal.tsx`, `RequestSubscriptionModal.tsx`, `@lingui/core`, `stepper.tsx`, `Пагінація в додатку`, `RequestSidebar.tsx`, `ProfileSettings.tsx`, `[locale]/layout.tsx`, `NotificationsTabContent.tsx`, `breadcrumbs.tsx`, `RequestInfo.tsx`, `ItemCondition`, `[locale]/page.tsx`, `PricingContent.tsx`, `ProposalDetailContent.tsx`, `AdminLoginForm.tsx`, `pricing/layout.tsx`, `privacy/layout.tsx`, `proposal/layout.tsx`, `tooltip.tsx`, `LinguiProvider.tsx`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **What connects `COMPLETED`, `CANCELLED`, `ACTIVE` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sitemap.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.103424178895877 - nodes in this community are weakly interconnected._
- **Why does `@lingui/react` connect `@lingui/react` to `AdminShell.tsx`, `lucide-react`, `src_ui_v2_index_button`, `CreateRequestForm.tsx`, `sonner`, `routes.ts`, `src_ui_v2_index_button`, `blog/[id]/page.tsx`, `dashboardMetadata`, `discussions/index.ts`, `site-header.tsx`, `StaffTable.tsx`, `Heading`, `Card`, `RequestDetailContent.tsx`, `ProfileHeader.tsx`, `package.json`, `ReviewsList.tsx`, `ModerationRequests.tsx`, `Button`, `HomeFeed.tsx`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `Link`, `Container`, `CreateReviewModal.tsx`, `RequestSubscriptionModal.tsx`, `RequestSidebar.tsx`, `BlogArticleContent.tsx`, `ProfileSettings.tsx`, `[locale]/layout.tsx`, `NotificationsTabContent.tsx`, `breadcrumbs.tsx`, `RequestInfo.tsx`, `[locale]/page.tsx`, `PricingContent.tsx`, `ProposalDetailContent.tsx`, `getLocaleFromParams`, `AdminLoginForm.tsx`, `ContactSellerModal.tsx`, `LinguiProvider.tsx`, `profiles/page.tsx`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Should `AdminShell.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Why does `next` connect `locale.ts` to `sitemap.ts`, `AdminShell.tsx`, `lucide-react`, `CreateRequestForm.tsx`, `sonner`, `UiKitContent.tsx`, `routes.ts`, `src_ui_v2_index_button`, `blog/[id]/page.tsx`, `request/[id]/page.tsx`, `site-header.tsx`, `authService.ts`, `schemas.ts`, `RequestDetailContent.tsx`, `package.json`, `Button`, `HomeFeed.tsx`, `Link`, `src/auth.ts`, `Пагінація в додатку`, `admin-session/route.ts`, `BlogArticleContent.tsx`, `ProfileSettings.tsx`, `[locale]/layout.tsx`, `breadcrumbs.tsx`, `RequestInfo.tsx`, `PricingContent.tsx`, `getLocaleFromParams`, `envVars.ts`, `api.ts`, `AdminLoginForm.tsx`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Should `@tanstack/react-query` be split into smaller, more focused modules?**
  _Cohesion score 0.12513842746400886 - nodes in this community are weakly interconnected._