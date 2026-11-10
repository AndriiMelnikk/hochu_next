# Graph Report - shukayu_next  (2026-11-10)

## Corpus Check
- 561 files · ~164,753 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2761 nodes · 8308 edges · 152 communities (135 shown, 17 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 61 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6876421a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- sitemap.ts
- AdminShell.tsx
- @tanstack/react-query
- SEO Technical Backlog — Shukayu
- src_ui_v2_index_button
- CreateRequestForm.tsx
- sonner
- notificationService.ts
- proposal/layout.tsx
- cn
- CreateRequestContent.tsx
- src_ui_v2_index_button
- blog/[id]/page.tsx
- entities/user/index.ts
- request/[id]/page.tsx
- dashboardMetadata
- RequestInfo.tsx
- entities/auth/index.ts
- discussions/index.ts
- next
- notificationSchema.ts
- authService.ts
- compilerOptions
- compilerOptions
- ModerationUsers.tsx
- devDependencies
- components.json
- locationService.ts
- compilerOptions
- utils.ts
- dependencies
- entities/admin/index.ts
- Button
- useTelegramLinkStatus.ts
- Link
- schemas.ts
- scripts
- Card
- site-header.tsx
- Детальний опис шарів
- notification/index.ts
- category/index.ts
- ProfileHeader.tsx
- package.json
- Виконано
- profile/[id]/page.tsx
- @lingui/react
- ModerationRequests.tsx
- Нотифікації (React Toastify)
- useAdminStaff.ts
- review/index.ts
- RequestDetailContent.tsx
- support/layout.tsx
- notification/types/index.ts
- terms/layout.tsx
- @lingui/cli
- RequestDetailContent.tsx
- request/index.ts
- Деплой
- shared/utils/index.ts
- notifications/index.ts
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- authService
- Інтернаціоналізація (i18n) - Інструкція для розробників
- src/auth.ts
- admin/layout.tsx
- utils.ts
- TypeScript конфігурація
- ProposalList.tsx
- request/page.tsx
- blogService.ts
- react
- Змінні оточення
- RequestSubscriptionModal.tsx
- Основні сутності
- @lingui/core
- support/page.tsx
- RequestStatus
- Пагінація в додатку
- admin-session/route.ts
- config
- lint-staged
- RejectReasonDialog.tsx
- ContentCollection
- proposalSchema.ts
- Опис сторінок та необхідних даних
- hasPermission
- adminNotificationService.ts
- contentStore.ts
- adminModerationService.ts
- ModerationSubscriptions
- [locale]/layout.tsx
- breadcrumbs.tsx
- Next.js FSD App
- Правила та конвенції
- ContentPricing
- chat/index.ts
- requests/index.ts
- proposal/const.ts
- request/index.ts
- Документація Backend API для проєкту shukayu
- contactService.ts
- PricingContent.tsx
- Роутинг (React Router v7)
- ui-v2/index.ts
- getLocaleFromParams
- Структура файлів компонента
- Форми (React Hook Form)
- envVars.ts
- NotificationFilters.tsx
- src_ui_v2_index_loadingstate
- ProposalRejectionReason
- pricing/layout.tsx
- privacy/layout.tsx
- TrafficAnalytics
- Аутентифікація та авторизація
- apple-icon.tsx
- AnalyticsOverview
- Патерни та практики
- RegisterForm.tsx
- { GET, POST }
- config.ts
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
1. `cn()` - 199 edges
2. `react` - 154 edges
3. `@lingui/react` - 135 edges
4. `getLocaleFromParams()` - 94 edges
5. `lucide-react` - 86 edges
6. `next` - 64 edges
7. `routes` - 63 edges
8. `UiKitContent()` - 62 edges
9. `Link()` - 52 edges
10. `getMetadataForRoute()` - 51 edges

## Surprising Connections (you probably didn't know these)
- `0. Поточний стан (коротко)` --references--> `ICategory`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/entities/category/types/Category.ts
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  docs/ARCHITECTURE.md → src/widgets/app/Features/Features.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  README.md → src/widgets/app/Features/Features.tsx
- `1.2. Контент посадкової категорії (не порожній лістинг)` --references--> `getFaqPageJsonLd()`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/shared/seo/schemas.ts
- `2.2 `layout.tsx`` --references--> `PageHero()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/components/marketing.tsx

## Import Cycles
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RoleChoice.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RoleChoice.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`

## Communities (152 total, 17 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.23
Nodes (10): requestSubscriptionService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription (+2 more)

### Community 1 - "sitemap.ts"
Cohesion: 0.11
Nodes (38): CatalogLink, CatalogCopy, CatalogStats, CopyInput, getCatalogCopy(), getCatalogStats, isIndexableCategory(), isIndexableCategoryCity() (+30 more)

### Community 2 - "AdminShell.tsx"
Cohesion: 0.10
Nodes (21): clsx, tailwind-merge, ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, useAdminRole(), MockTag(), MockZone() (+13 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.13
Nodes (19): @tanstack/react-query, useCanPropose(), useCreateProposal(), useProposals(), useRejectProposal(), getProposalsResponseSchema, normalizeProposalItem(), proposalService (+11 more)

### Community 4 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.10
Nodes (19): 0. Поточний стан (коротко), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія, 2. Пріоритет P0 — Картки виконавців (E-E-A-T), 3.1. Теги та кластеризація, 3.2. Архівування замість видалення, 3.3. Мікророзмітка сторінки запиту (+11 more)

### Community 5 - "src_ui_v2_index_button"
Cohesion: 0.12
Nodes (14): isValidSlug(), slugify(), UK_MAP, AdminPricingPeriod, BlockUserActions(), BlockUserActionsProps, ContentEditorModal(), FieldError() (+6 more)

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.06
Nodes (26): axios, @hookform/resolvers, react-hook-form, sonner, ChangePasswordModal(), ChangePasswordModalProps, ForgotPasswordForm(), getForgotPasswordSchema() (+18 more)

### Community 7 - "sonner"
Cohesion: 0.13
Nodes (24): next-auth, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), LoginContent(), LoginContentProps, RegisterContent(), BLOCKED_RETURN_PATHS, buildAuthHref() (+16 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.14
Nodes (18): useNotifications(), paginationResultSchema(), INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY (+10 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.12
Nodes (18): CreateLayout(), messagesByLocale, DashboardLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale, ProposalLayout() (+10 more)

### Community 10 - "cn"
Cohesion: 0.08
Nodes (64): metadata, UiKitPage(), Section(), UiKitContent(), CreateReviewFormValues, CreateReviewModal(), CreateReviewModalProps, createReviewSchema (+56 more)

### Community 12 - "src_ui_v2_index_button"
Cohesion: 0.14
Nodes (17): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), AcceptProposalModal(), AcceptProposalModalProps, CancelAcceptedProposalModal(), CancelAcceptedProposalModalProps (+9 more)

### Community 13 - "blog/[id]/page.tsx"
Cohesion: 0.14
Nodes (21): ArticleSection(), Props, BlogArticleContent(), BlogArticlePage(), generateMetadata(), Props, revalidate, LOCAL_POSTS (+13 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.16
Nodes (20): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), accountSchema, createProfileSchema, profileSchema (+12 more)

### Community 15 - "request/[id]/page.tsx"
Cohesion: 0.14
Nodes (13): generateMetadata(), getCategoryTrail(), getRequest, Props, RequestDetailPage(), RequestLookup, revalidate, buildContentAlternates() (+5 more)

### Community 16 - "dashboardMetadata"
Cohesion: 0.12
Nodes (21): NotificationsContent(), generateMetadata(), Page(), generateMetadata(), OverviewContent(), generateMetadata(), dashboardMetadata(), Page() (+13 more)

### Community 17 - "RequestInfo.tsx"
Cohesion: 0.13
Nodes (22): ReviewsList(), ReviewsListProps, RequestInfo(), RequestInfoProps, STATUS_TONE, formatChange(), Alert(), AlertDescription() (+14 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.17
Nodes (13): zod, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+5 more)

### Community 19 - "discussions/index.ts"
Cohesion: 0.43
Nodes (5): DiscussionForm(), DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions

### Community 20 - "next"
Cohesion: 0.07
Nodes (31): nextConfig, SECURITY_HEADERS, next, AdminLoginPage(), metadata, PageProps, DashboardShell(), HASH_TO_ROUTE (+23 more)

### Community 21 - "notificationSchema.ts"
Cohesion: 0.12
Nodes (15): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, requestSubscriptionSchema, telegramLinkStatusSchema (+7 more)

### Community 22 - "authService.ts"
Cohesion: 0.18
Nodes (14): AuthContext, AuthContextType, AuthProvider(), useAuth(), AuthActions, AuthState, buildAuthStateFromResponse(), buildUserFromAuthResponse() (+6 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "ModerationUsers.tsx"
Cohesion: 0.12
Nodes (14): recharts, AdminStaffPage(), STAFF_ROLES, useAdminMe(), useAdminStaff(), useStaffMutations(), RolePreviewSelect(), PIE_COLORS (+6 more)

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

### Community 30 - "utils.ts"
Cohesion: 0.07
Nodes (25): class-variance-authority, @radix-ui/react-label, @radix-ui/react-slot, @radix-ui/react-tooltip, Badge(), BadgeProps, badgeVariants, ButtonProps (+17 more)

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.13
Nodes (33): adminBlogPosts, adminInfoPages, adminMockData, adminPricingPlans, adminRequestSubscriptions, moderationProposals, moderationReports, moderationUsers (+25 more)

### Community 33 - "Button"
Cohesion: 0.07
Nodes (46): 4. Каталог готових блоків (`@/ui-v2`), 8. Еталонні сторінки, Ритм сторінки, AboutContent(), ContactContent(), Audience, CARDS, HowItWorksContent() (+38 more)

### Community 34 - "useTelegramLinkStatus.ts"
Cohesion: 0.23
Nodes (7): TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken

### Community 35 - "Link"
Cohesion: 0.07
Nodes (20): 0. Що передати разом із цим файлом, 1. Золоті правила, 2.1 `page.tsx`, 2.2 `layout.tsx`, 2.3 Реєстрація маршруту (4 місця), 2. Файли, які треба створити, 3. Токени (Tailwind-класи), 5. Тексти й переклади (Lingui) (+12 more)

### Community 36 - "schemas.ts"
Cohesion: 0.14
Nodes (17): CatalogView(), CatalogViewProps, LinkChips(), CategoriesPage(), COPY, revalidate, JsonLd(), JsonLdProps (+9 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "Card"
Cohesion: 0.19
Nodes (13): NotificationPrefsContent(), Page(), Card, CardBody(), CardDescription(), CardHead(), CardProps, CardTitle() (+5 more)

### Community 39 - "site-header.tsx"
Cohesion: 0.14
Nodes (24): @radix-ui/react-avatar, switchLocaleInPathname(), Avatar, AvatarProps, avatarVariants, Sheet, SheetClose, SheetContent (+16 more)

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.08
Nodes (15): useCreateRequestSubscription(), useCreateTelegramLinkToken(), useDeleteRequestSubscription(), useMarkAllNotificationsRead(), useMarkNotificationRead(), useNotificationPreferences(), useRequestSubscriptions(), useUnreadCount() (+7 more)

### Community 42 - "category/index.ts"
Cohesion: 0.20
Nodes (15): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), useCategories(), CategoryIndex, getCategoryAncestors(), isServiceCategory() (+7 more)

### Community 43 - "ProfileHeader.tsx"
Cohesion: 0.12
Nodes (15): UserRole, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level, sellerAchievements (+7 more)

### Community 44 - "package.json"
Cohesion: 0.04
Nodes (45): name, private, version, autoprefixer, cmdk, embla-carousel-react, eslint, eslint-config-next (+37 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "profile/[id]/page.tsx"
Cohesion: 0.22
Nodes (13): generateMetadata(), getDisplayName(), getProfile, ProfileIdPage(), ProfileLookup, Props, revalidate, ProfileContent() (+5 more)

### Community 47 - "@lingui/react"
Cohesion: 0.18
Nodes (14): react-toastify, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), CreateProfileModalProps, EditProfileForm(), PROFILE_TYPE_ICONS (+6 more)

### Community 48 - "ModerationRequests.tsx"
Cohesion: 0.16
Nodes (22): AdminModerationRequestsPage(), KEY, useBulkModerate(), useModerateRequest(), useModerationRequest(), useModerationRequests(), BY_CODE, getAdminErrorMessage() (+14 more)

### Community 49 - "Нотифікації (React Toastify)"
Cohesion: 0.67
Nodes (3): Використання:, Налаштування:, Нотифікації (React Toastify)

### Community 50 - "useAdminStaff.ts"
Cohesion: 0.19
Nodes (12): zustand, ADMIN_ME_KEY, STAFF_KEY, useCanDo(), adminAuthService, adminStaffService, AdminPreviewState, useAdminPreviewStore (+4 more)

### Community 51 - "review/index.ts"
Cohesion: 0.20
Nodes (11): useCreateReview(), useReviews(), useReviewStats(), reviewSchema, reviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse (+3 more)

### Community 52 - "RequestDetailContent.tsx"
Cohesion: 0.07
Nodes (34): @radix-ui/react-tabs, RequestDetailContent(), RequestContent(), RequestContentProps, RequestCard(), RequestSidebar(), formatBudget(), nf() (+26 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "notification/types/index.ts"
Cohesion: 0.31
Nodes (6): useUpdateNotificationPreferences(), notificationPreferenceService, ICategoryPreference, INewRequestsPreference, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 55 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.18
Nodes (10): GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS, PROFILE_HASH, PROFILE_TAB, ProfileTabId, resolveProfileTab(), syncProfileTabHash() (+2 more)

### Community 58 - "request/index.ts"
Cohesion: 0.17
Nodes (14): requestService, RequestActions, RequestState, IRequest, IRequestBuyer, IRequestWithBuyer, ItemCondition, NEW (+6 more)

### Community 59 - "Деплой"
Cohesion: 0.67
Nodes (3): Environment Variables, Netlify, Деплой

### Community 60 - "shared/utils/index.ts"
Cohesion: 0.11
Nodes (23): 5. Обробка помилок, CreateProposalForm(), CreateRequestForm(), createUploadFormData(), getUploadHeaders(), parseUploadResponse(), refreshAccessToken(), uploadFile() (+15 more)

### Community 61 - "notifications/index.ts"
Cohesion: 0.21
Nodes (7): CategoryChipsSelect(), CategoryChipsSelectProps, NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, NotificationItem(), NotificationItemProps, RequestSubscriptionCard()

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
Nodes (9): auth, handlers, signIn, signOut, IAuthResponse, JWT, next-auth, next-auth/jwt (+1 more)

### Community 68 - "admin/layout.tsx"
Cohesion: 0.32
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "utils.ts"
Cohesion: 0.25
Nodes (8): @radix-ui/react-popover, CascadingSelect(), CascadingSelectProps, CityCombobox(), CityComboboxProps, Popover, PopoverContent, PopoverTrigger

### Community 70 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 71 - "ProposalList.tsx"
Cohesion: 0.22
Nodes (8): useUpdateProposal(), EditProposalForm(), EditProposalModal(), EditProposalModalProps, ProposalItem(), ProposalList(), ProposalListProps, RejectProposalModal()

### Community 72 - "request/page.tsx"
Cohesion: 0.26
Nodes (11): BlogListPage(), COPY, generateMetadata(), revalidate, first(), generateMetadata(), parsePage(), Props (+3 more)

### Community 73 - "blogService.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 74 - "react"
Cohesion: 0.08
Nodes (29): @lingui/core, react, AboutLayout(), messagesByLocale, GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout() (+21 more)

### Community 75 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.14
Nodes (6): NotificationChannelsSelect(), NotificationChannelsSelectProps, NotificationPreferencesSection(), NotificationPreferencesSectionProps, RequestSubscriptionModal(), RequestSubscriptionModalProps

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "@lingui/core"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 79 - "support/page.tsx"
Cohesion: 0.29
Nodes (7): ContactPage(), CreateRequestPage(), SupportPage(), PAGE_COPY, PageKey, SeoTextBlock, SeoTextSection()

### Community 80 - "RequestStatus"
Cohesion: 0.14
Nodes (10): Загальна логіка відгуків, Статуси запитів (RequestStatus), Статуси пропозицій (ProposalStatus), RequestStatus, ACTIVE, CANCELLED, CLOSED, COMPLETED (+2 more)

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

### Community 85 - "RejectReasonDialog.tsx"
Cohesion: 0.21
Nodes (7): ChangePasswordModal(), PASSWORD_MIN, PasswordFormModal(), PasswordFormModalProps, REJECT_REASON_MAX, REJECT_REASON_MIN, RejectReasonDialogProps

### Community 86 - "ContentCollection"
Cohesion: 0.27
Nodes (7): AdminContentBlogPage(), AdminContentPagesPage(), useAdminBlogStore, useAdminPagesStore, ContentBlog(), ContentCollection(), ContentPages()

### Community 87 - "proposalSchema.ts"
Cohesion: 0.17
Nodes (10): useProposal(), createProposalSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, ProposalStatus, ACCEPTED, COMPLETED (+2 more)

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 89 - "hasPermission"
Cohesion: 0.31
Nodes (6): ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, hasAnyPermission(), hasPermission(), StaffPermission, PermissionGateProps

### Community 90 - "adminNotificationService.ts"
Cohesion: 0.28
Nodes (7): adminNotificationService, adminRequestSubscriptionSchema, adminRequestSubscriptionsResultSchema, filterMock(), IAdminRequestSubscriptionsResult, IGetAdminRequestSubscriptionsParams, IAdminRequestSubscription

### Community 91 - "contentStore.ts"
Cohesion: 0.29
Nodes (8): AdminContentState, createContentStore(), today(), AdminInfoPageInput, AdminPageStatus, IAdminContentItem, Props, ContentCollectionProps

### Community 92 - "adminModerationService.ts"
Cohesion: 0.23
Nodes (9): AdminApiError, adminCall(), redirectToLogin(), adminModerationService, IListModerationParams, IBulkModerationResult, IModerationList, IModerationRequest (+1 more)

### Community 94 - "[locale]/layout.tsx"
Cohesion: 0.10
Nodes (15): 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), @next/third-parties, @vercel/analytics, generateMetadata(), generateStaticParams() (+7 more)

### Community 96 - "breadcrumbs.tsx"
Cohesion: 0.31
Nodes (10): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator(), BreadcrumbItemData (+2 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.22
Nodes (8): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 98 - "Правила та конвенції"
Cohesion: 0.33
Nodes (6): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 6. Стан завантаження, Правила та конвенції

### Community 101 - "requests/index.ts"
Cohesion: 0.18
Nodes (17): @radix-ui/react-dialog, CategoryFilterButton(), CategoryFilterButtonProps, EditRequestForm(), EditRequestModal(), RequestFiltersSheet(), RequestFiltersSheetProps, BottomSheet (+9 more)

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "request/index.ts"
Cohesion: 0.13
Nodes (17): HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, REQUEST_URGENCY_LABELS, useCancelRequest(), useCreateRequest(), useLatestRequests() (+9 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 106 - "PricingContent.tsx"
Cohesion: 0.23
Nodes (11): @radix-ui/react-accordion, PricingPage(), PricingContent(), SupportContent(), StatusGuide(), StatusItem(), Accordion, AccordionContent (+3 more)

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 108 - "ui-v2/index.ts"
Cohesion: 0.08
Nodes (25): date-fns, @lingui/react, lucide-react, Props, routes, ReviewCard(), ReviewCardProps, useUserContacts() (+17 more)

### Community 110 - "getLocaleFromParams"
Cohesion: 0.07
Nodes (45): AboutPage(), generateMetadata(), AdminPage(), generateMetadata(), generateMetadata(), PageProps, ResetPasswordPage(), generateMetadata() (+37 more)

### Community 111 - "Структура файлів компонента"
Cohesion: 0.67
Nodes (3): index.ts:, Структура файлів компонента, Типова структура:

### Community 112 - "Форми (React Hook Form)"
Cohesion: 0.67
Nodes (3): Валідація:, Патерн використання:, Форми (React Hook Form)

### Community 113 - "envVars.ts"
Cohesion: 0.20
Nodes (9): AI_BOTS, BLOCKED_BOTS, DISALLOW, apiBaseUrl, DEFAULT_SOCIAL_PROFILES, gtmId, logoUrl, siteUrl (+1 more)

### Community 114 - "NotificationFilters.tsx"
Cohesion: 0.33
Nodes (3): CATEGORY_OPTIONS, NotificationFilters(), NotificationFiltersProps

### Community 116 - "ProposalRejectionReason"
Cohesion: 0.25
Nodes (8): ProposalRejectionReason, ALREADY_PROPOSED, NO_CONTACTS, NOT_SELLER, OWN_REQUEST, REQUEST_NOT_ACTIVE, REQUEST_NOT_FOUND, USER_BLOCKED

### Community 117 - "pricing/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PricingLayout(), messages, messages

### Community 118 - "privacy/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PrivacyLayout(), messages, messages

### Community 119 - "TrafficAnalytics"
Cohesion: 0.60
Nodes (3): AdminTrafficPage(), MetricBars(), TrafficAnalytics()

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 128 - "RegisterForm.tsx"
Cohesion: 0.19
Nodes (13): RegisterForm(), FormControl, FormField(), FormItem, Input, Select, SelectContent, SelectItem (+5 more)

### Community 135 - "config.ts"
Cohesion: 0.18
Nodes (15): alt, contentType, OpengraphImage(), runtime, size, defaultLocale, isLocale(), LOCALE_COOKIE (+7 more)

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
Cohesion: 0.16
Nodes (15): AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationUsersPage(), useClientPagination(), getPageNumbers(), Pagination(), Table, TableBody (+7 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.13
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
- **67 isolated node(s):** `EMAIL`, `IN_APP`, `TELEGRAM`, `ALREADY_PROPOSED`, `NO_CONTACTS` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 970 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `RegisterForm.tsx`, `sitemap.ts`, `AdminShell.tsx`, `src_ui_v2_index_button`, `CreateRequestForm.tsx`, `sonner`, `proposal/layout.tsx`, `cn`, `request/[id]/page.tsx`, `RequestInfo.tsx`, `next`, `authService.ts`, `ModerationUsers.tsx`, `utils.ts`, `Button`, `Card`, `site-header.tsx`, `category/index.ts`, `package.json`, `profile/[id]/page.tsx`, `@lingui/react`, `ModerationRequests.tsx`, `Button`, `RequestDetailContent.tsx`, `support/layout.tsx`, `NotificationSettingsContent.tsx`, `terms/layout.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `notifications/index.ts`, `admin/layout.tsx`, `utils.ts`, `ProposalList.tsx`, `request/page.tsx`, `RequestSubscriptionModal.tsx`, `@lingui/core`, `Пагінація в додатку`, `RejectReasonDialog.tsx`, `hasPermission`, `NotificationsTabContent.tsx`, `breadcrumbs.tsx`, `requests/index.ts`, `request/index.ts`, `PricingContent.tsx`, `ui-v2/index.ts`, `pricing/layout.tsx`, `privacy/layout.tsx`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **What connects `EMAIL`, `IN_APP`, `TELEGRAM` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sitemap.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11313131313131314 - nodes in this community are weakly interconnected._
- **Why does `@lingui/react` connect `ui-v2/index.ts` to `RegisterForm.tsx`, `AdminShell.tsx`, `src_ui_v2_index_button`, `CreateRequestForm.tsx`, `sonner`, `cn`, `CreateRequestContent.tsx`, `src_ui_v2_index_button`, `dashboardMetadata`, `RequestInfo.tsx`, `discussions/index.ts`, `next`, `ModerationUsers.tsx`, `Button`, `Link`, `Card`, `site-header.tsx`, `package.json`, `@lingui/react`, `ModerationRequests.tsx`, `Button`, `RequestDetailContent.tsx`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `notifications/index.ts`, `ProposalList.tsx`, `react`, `RequestSubscriptionModal.tsx`, `RejectReasonDialog.tsx`, `NotificationsTabContent.tsx`, `breadcrumbs.tsx`, `requests/index.ts`, `PricingContent.tsx`, `getLocaleFromParams`, `NotificationFilters.tsx`, `src_ui_v2_index_loadingstate`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `AdminShell.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09716599190283401 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `RegisterForm.tsx`, `CreateRequestForm.tsx`, `blog/[id]/page.tsx`, `RequestInfo.tsx`, `next`, `utils.ts`, `Button`, `Card`, `site-header.tsx`, `Button`, `RequestDetailContent.tsx`, `shared/utils/index.ts`, `notifications/index.ts`, `utils.ts`, `ProposalList.tsx`, `RequestSubscriptionModal.tsx`, `breadcrumbs.tsx`, `requests/index.ts`, `PricingContent.tsx`, `ui-v2/index.ts`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Should `@tanstack/react-query` be split into smaller, more focused modules?**
  _Cohesion score 0.12626262626262627 - nodes in this community are weakly interconnected._