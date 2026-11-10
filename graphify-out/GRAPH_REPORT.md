# Graph Report - shukayu_next  (2026-11-10)

## Corpus Check
- 561 files · ~165,329 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2765 nodes · 8302 edges · 145 communities (135 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 61 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f03366ca`
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
- sitemap.ts
- ProposalItem.tsx
- blog/[id]/page.tsx
- entities/user/index.ts
- request/[id]/page.tsx
- dashboardMetadata
- RequestInfo.tsx
- entities/auth/index.ts
- discussions/index.ts
- lucide-react
- notificationSchema.ts
- authService.ts
- compilerOptions
- compilerOptions
- StaffTable.tsx
- devDependencies
- components.json
- locationService.ts
- compilerOptions
- ui-v2/index.ts
- dependencies
- entities/admin/index.ts
- Button
- useTelegramLinkStatus.ts
- HowItWorksContent.tsx
- @tanstack/react-query
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
- Categories.tsx
- @lingui/cli
- RequestDetailContent.tsx
- request/index.ts
- Деплой
- shared/utils/index.ts
- useLocalizedRouter
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- authService
- Інтернаціоналізація (i18n) - Інструкція для розробників
- src/auth.ts
- admin/layout.tsx
- [section]/page.tsx
- TypeScript конфігурація
- CreateProposalForm.tsx
- request/page.tsx
- blogService.ts
- react
- Змінні оточення
- EditContactChannelsForm.tsx
- Основні сутності
- adminPricingStore.ts
- support/page.tsx
- RequestStatus
- Пагінація в додатку
- admin-session/route.ts
- config
- lint-staged
- blog/layout.tsx
- ContentCollection
- ProposalDetailContent.tsx
- Опис сторінок та необхідних даних
- AdminShell.tsx
- adminNotificationService.ts
- contentStore.ts
- contact/layout.tsx
- Hero.tsx
- [locale]/layout.tsx
- ProposalStatus
- breadcrumbs.tsx
- Next.js FSD App
- Правила та конвенції
- Тестування (майбутнє)
- chat/index.ts
- UserRequestsList.tsx
- proposal/const.ts
- request/index.ts
- Документація Backend API для проєкту shukayu
- contactService.ts
- PricingContent.tsx
- Роутинг (React Router v7)
- routes.ts
- getLocaleFromParams
- envVars.ts
- pricing/layout.tsx
- TrafficAnalytics
- Аутентифікація та авторизація
- AnalyticsOverview.tsx
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
- `3. Токени (Tailwind-класи)` --references--> `Container()`  [INFERRED]
  docs/NEW_PAGE_GUIDE.md → src/ui-v2/layout/container.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  docs/ARCHITECTURE.md → src/widgets/app/Features/Features.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  README.md → src/widgets/app/Features/Features.tsx
- `1.2. Контент посадкової категорії (не порожній лістинг)` --references--> `getFaqPageJsonLd()`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/shared/seo/schemas.ts

## Import Cycles
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RoleChoice.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RoleChoice.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`

## Communities (145 total, 10 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.23
Nodes (10): requestSubscriptionService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription (+2 more)

### Community 1 - "sitemap.ts"
Cohesion: 0.10
Nodes (27): CatalogLink, CatalogView(), CatalogViewProps, LinkChips(), CatalogCopy, CatalogStats, CopyInput, getCatalogCopy() (+19 more)

### Community 2 - "AdminShell.tsx"
Cohesion: 0.16
Nodes (16): ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, hasPermission(), MockTag(), MockZoneProps, cn(), AdminNav() (+8 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.13
Nodes (23): useCreateProposal(), useProposals(), getProposalsResponseSchema, normalizeProposalItem(), IProposal, IProposalSeller, IProposalWithSeller, ProposalRejectionReason (+15 more)

### Community 4 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.08
Nodes (24): 0. Поточний стан (коротко), 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія (+16 more)

### Community 5 - "src_ui_v2_index_button"
Cohesion: 0.13
Nodes (15): sonner, AdminContentPricingPage(), isValidSlug(), slugify(), UK_MAP, ApproveRejectActionsProps, BlockUserActionsProps, ContentEditorModal() (+7 more)

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.10
Nodes (12): @hookform/resolvers, ForgotPasswordForm(), getForgotPasswordSchema(), ResetPasswordFormData, ResetPasswordFormProps, urgencyOptions, EditRequestFormProps, EditRequestFormValues (+4 more)

### Community 7 - "sonner"
Cohesion: 0.08
Nodes (29): nextConfig, SECURITY_HEADERS, next, contentType, size, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), LoginContent() (+21 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.14
Nodes (18): useNotifications(), paginationResultSchema(), INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY (+10 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.12
Nodes (19): CreateLayout(), messagesByLocale, DashboardShell(), DashboardLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale (+11 more)

### Community 10 - "cn"
Cohesion: 0.08
Nodes (68): metadata, UiKitPage(), Section(), UiKitContent(), CreateReviewFormValues, CreateReviewModal(), CreateReviewModalProps, createReviewSchema (+60 more)

### Community 11 - "sitemap.ts"
Cohesion: 0.23
Nodes (19): getCatalogStats, isIndexableCategory(), isIndexableCategoryCity(), CategoryPage(), generateMetadata(), loadCategory(), getBlogEntries(), getCatalogEntries() (+11 more)

### Community 12 - "ProposalItem.tsx"
Cohesion: 0.07
Nodes (31): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), REJECT_REASON_MAX, REJECT_REASON_MIN, RejectReasonDialogProps, ChangePasswordModalProps (+23 more)

### Community 13 - "blog/[id]/page.tsx"
Cohesion: 0.14
Nodes (21): ArticleSection(), Props, BlogArticleContent(), Props, BlogArticlePage(), Props, revalidate, LOCAL_POSTS (+13 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.15
Nodes (21): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), useUserContacts(), accountSchema, createProfileSchema (+13 more)

### Community 15 - "request/[id]/page.tsx"
Cohesion: 0.19
Nodes (14): generateMetadata(), generateMetadata(), getCategoryTrail(), getRequest, Props, RequestDetailPage(), RequestLookup, revalidate (+6 more)

### Community 16 - "dashboardMetadata"
Cohesion: 0.16
Nodes (15): NotificationsContent(), generateMetadata(), Page(), generateMetadata(), OverviewContent(), generateMetadata(), dashboardMetadata(), Page() (+7 more)

### Community 17 - "RequestInfo.tsx"
Cohesion: 0.08
Nodes (33): class-variance-authority, ReviewsList(), ReviewsListProps, CategoryFilterButton(), CategoryFilterButtonProps, CreateRequestButton(), EditRequestForm(), EditRequestModal() (+25 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.17
Nodes (13): zod, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+5 more)

### Community 19 - "discussions/index.ts"
Cohesion: 0.31
Nodes (6): DiscussionForm(), DiscussionFormProps, DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions

### Community 20 - "lucide-react"
Cohesion: 0.17
Nodes (8): date-fns, lucide-react, AdminLoginPage(), metadata, PageProps, ReviewCardProps, AdminLoginForm(), safeReturnUrl()

### Community 21 - "notificationSchema.ts"
Cohesion: 0.12
Nodes (15): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, requestSubscriptionSchema, telegramLinkStatusSchema (+7 more)

### Community 22 - "authService.ts"
Cohesion: 0.16
Nodes (15): axios, AuthContext, AuthContextType, AuthProvider(), useAuth(), AuthActions, AuthState, buildAuthStateFromResponse() (+7 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "StaffTable.tsx"
Cohesion: 0.13
Nodes (19): AdminStaffPage(), STAFF_ROLES, useAdminMe(), useStaffMutations(), BY_CODE, getAdminErrorMessage(), T, BlockUserActions() (+11 more)

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

### Community 30 - "ui-v2/index.ts"
Cohesion: 0.08
Nodes (27): @radix-ui/react-slot, @radix-ui/react-tooltip, react, ContactContent(), ReviewCard(), RoleChoice(), Button, ButtonProps (+19 more)

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.10
Nodes (40): adminBlogPosts, adminInfoPages, adminMockData, adminPricingPlans, adminRequestSubscriptions, moderationProposals, moderationReports, moderationUsers (+32 more)

### Community 33 - "Button"
Cohesion: 0.09
Nodes (38): 4. Каталог готових блоків (`@/ui-v2`), 8. Еталонні сторінки, HowItWorksContent(), HowItWorksPage(), getLatestRequests(), HomePage(), revalidate, Link() (+30 more)

### Community 34 - "useTelegramLinkStatus.ts"
Cohesion: 0.23
Nodes (7): TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken

### Community 35 - "HowItWorksContent.tsx"
Cohesion: 0.11
Nodes (19): 0. Що передати разом із цим файлом, 1. Золоті правила, 2.1 `page.tsx`, 2.2 `layout.tsx`, 2.3 Реєстрація маршруту (4 місця), 2. Файли, які треба створити, 3. Токени (Tailwind-класи), 5. Тексти й переклади (Lingui) (+11 more)

### Community 36 - "@tanstack/react-query"
Cohesion: 0.17
Nodes (5): Статуси пропозицій (ProposalStatus), @tanstack/react-query, useCanPropose(), useRejectProposal(), proposalService

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "Card"
Cohesion: 0.16
Nodes (9): NotificationPrefsContent(), Page(), CardBody(), CardDescription(), CardHead(), CardTitle(), Conversation, ProfileSettings() (+1 more)

### Community 39 - "site-header.tsx"
Cohesion: 0.10
Nodes (34): @radix-ui/react-popover, switchLocaleInPathname(), Avatar, AvatarProps, avatarVariants, Sheet, SheetClose, SheetContent (+26 more)

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
Nodes (50): name, private, version, autoprefixer, clsx, cmdk, embla-carousel-react, eslint (+42 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "profile/[id]/page.tsx"
Cohesion: 0.29
Nodes (10): generateMetadata(), getDisplayName(), getProfile, ProfileIdPage(), ProfileLookup, Props, revalidate, ProfileContent() (+2 more)

### Community 47 - "@lingui/react"
Cohesion: 0.20
Nodes (15): react-toastify, useRequestStore, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), EditContactChannelsForm(), EditContactChannelsModal() (+7 more)

### Community 48 - "ModerationRequests.tsx"
Cohesion: 0.19
Nodes (18): AdminModerationRequestsPage(), KEY, useBulkModerate(), useModerateRequest(), useModerationRequest(), useModerationRequests(), ApproveRejectActions(), PermissionGate() (+10 more)

### Community 49 - "Нотифікації (React Toastify)"
Cohesion: 0.67
Nodes (3): Використання:, Налаштування:, Нотифікації (React Toastify)

### Community 50 - "useAdminStaff.ts"
Cohesion: 0.15
Nodes (16): ADMIN_ME_KEY, STAFF_KEY, useAdminRole(), useAdminStaff(), useCanDo(), AdminApiError, adminCall(), redirectToLogin() (+8 more)

### Community 51 - "review/index.ts"
Cohesion: 0.20
Nodes (11): useCreateReview(), useReviews(), useReviewStats(), reviewSchema, reviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse (+3 more)

### Community 52 - "RequestDetailContent.tsx"
Cohesion: 0.06
Nodes (34): CreateRequestContent(), RequestDetailContent(), RequestContent(), RequestCard(), RequestSidebar(), StatusGuide(), StatusItem(), formatBudget() (+26 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "notification/types/index.ts"
Cohesion: 0.31
Nodes (6): useUpdateNotificationPreferences(), notificationPreferenceService, ICategoryPreference, INewRequestsPreference, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 55 - "Categories.tsx"
Cohesion: 0.18
Nodes (3): ICONS, BULLET_KEYS, PlatformIntro()

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.23
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

### Community 61 - "useLocalizedRouter"
Cohesion: 0.29
Nodes (5): getResetPasswordFormSchema(), ResetPasswordForm(), NotificationItem(), NotificationItemProps, useLocalizedRouter()

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (15): API та HTTP запити, index.ts:, Валідація:, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Патерн використання: (+7 more)

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
Cohesion: 0.32
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "[section]/page.tsx"
Cohesion: 0.31
Nodes (7): generateMetadata(), Page(), Props, isSettingsSection(), SETTINGS_SECTIONS, SettingsContent(), SettingsSection

### Community 70 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 71 - "CreateProposalForm.tsx"
Cohesion: 0.14
Nodes (6): useUpdateProposal(), CreateProposalFormProps, CreateProposalFormValues, EditProposalForm(), EditProposalFormProps, EditProposalFormValues

### Community 72 - "request/page.tsx"
Cohesion: 0.17
Nodes (16): BlogListPage(), COPY, generateMetadata(), revalidate, CategoriesPage(), COPY, revalidate, first() (+8 more)

### Community 73 - "blogService.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 74 - "react"
Cohesion: 0.08
Nodes (31): @lingui/core, AboutLayout(), messagesByLocale, GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout() (+23 more)

### Community 75 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 76 - "EditContactChannelsForm.tsx"
Cohesion: 0.20
Nodes (5): BUYER_CHANNELS, CHANNEL_ICONS, ContactFormData, EditContactChannelsFormProps, SELLER_CHANNELS

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "adminPricingStore.ts"
Cohesion: 0.43
Nodes (6): zustand, AdminPricingState, useAdminPricingStore, AdminPricingPlanInput, IAdminPricingPlan, Props

### Community 79 - "support/page.tsx"
Cohesion: 0.29
Nodes (7): ContactPage(), CreateRequestPage(), SupportPage(), PAGE_COPY, PageKey, SeoTextBlock, SeoTextSection()

### Community 80 - "RequestStatus"
Cohesion: 0.20
Nodes (9): Загальна логіка відгуків, Статуси запитів (RequestStatus), RequestStatus, ACTIVE, CANCELLED, CLOSED, COMPLETED, PENDING (+1 more)

### Community 81 - "Пагінація в додатку"
Cohesion: 0.12
Nodes (16): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+8 more)

### Community 82 - "admin-session/route.ts"
Cohesion: 0.25
Nodes (14): clearSession(), handle(), POST(), ADMIN_API_TOKEN_COOKIE, ADMIN_SESSION_MAX_AGE, adminApiBaseUrl(), adminCookieOptions, createAdminToken() (+6 more)

### Community 83 - "config"
Cohesion: 0.67
Nodes (3): path, config, commitizen

### Community 84 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}

### Community 85 - "blog/layout.tsx"
Cohesion: 0.38
Nodes (4): BlogLayout(), messagesByLocale, messages, messages

### Community 86 - "ContentCollection"
Cohesion: 0.32
Nodes (5): AdminContentBlogPage(), AdminContentPagesPage(), ContentBlog(), ContentCollection(), ContentPages()

### Community 87 - "ProposalDetailContent.tsx"
Cohesion: 0.17
Nodes (9): ProposalDetailPage(), ProposalDetailContent(), useProposal(), createProposalSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, useRequest() (+1 more)

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 89 - "AdminShell.tsx"
Cohesion: 0.10
Nodes (8): ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, hasAnyPermission(), StaffPermission, PermissionGateProps, AdminShellProps, stripLocale(), ContentCollectionProps

### Community 90 - "adminNotificationService.ts"
Cohesion: 0.33
Nodes (5): adminNotificationService, adminRequestSubscriptionSchema, adminRequestSubscriptionsResultSchema, filterMock(), IGetAdminRequestSubscriptionsParams

### Community 91 - "contentStore.ts"
Cohesion: 0.39
Nodes (7): AdminContentState, createContentStore(), today(), AdminInfoPageInput, AdminPageStatus, IAdminContentItem, Props

### Community 92 - "contact/layout.tsx"
Cohesion: 0.38
Nodes (4): ContactLayout(), messagesByLocale, messages, messages

### Community 93 - "Hero.tsx"
Cohesion: 0.33
Nodes (4): Hero(), HeroVisual(), Mode, OFFERS

### Community 94 - "[locale]/layout.tsx"
Cohesion: 0.13
Nodes (11): @next/third-parties, @vercel/analytics, generateMetadata(), messagesByLocale, onest, Props, RootLayout(), Providers() (+3 more)

### Community 95 - "ProposalStatus"
Cohesion: 0.40
Nodes (5): ProposalStatus, ACCEPTED, COMPLETED, PENDING, REJECTED

### Community 96 - "breadcrumbs.tsx"
Cohesion: 0.27
Nodes (12): localizeHref(), Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator() (+4 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.22
Nodes (8): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 98 - "Правила та конвенції"
Cohesion: 0.33
Nodes (6): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 6. Стан завантаження, Правила та конвенції

### Community 99 - "Тестування (майбутнє)"
Cohesion: 0.67
Nodes (3): Рекомендована структура:, Тестування (майбутнє), Інструменти:

### Community 101 - "UserRequestsList.tsx"
Cohesion: 0.07
Nodes (16): @radix-ui/react-dialog, RequestContentProps, RequestFiltersSheet(), RequestFiltersSheetProps, BottomSheet, BottomSheetBody(), BottomSheetClose, BottomSheetContent (+8 more)

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "request/index.ts"
Cohesion: 0.15
Nodes (14): HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, REQUEST_URGENCY_LABELS, useCancelRequest(), useCreateRequest(), useLatestRequests() (+6 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 106 - "PricingContent.tsx"
Cohesion: 0.17
Nodes (11): @lingui/react, PricingPage(), PricingContent(), SupportContent(), getFaqPageJsonLd(), Accordion, AccordionContent, AccordionItem (+3 more)

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 108 - "routes.ts"
Cohesion: 0.08
Nodes (24): ResetPasswordPage(), ResetPasswordContent(), ResetPasswordContentProps, HASH_TO_ROUTE, NOTIFICATIONS_NAV, SETTINGS_NAV, ForgotPasswordContent(), ForgotPasswordPage() (+16 more)

### Community 110 - "getLocaleFromParams"
Cohesion: 0.09
Nodes (34): generateMetadata(), AdminPage(), generateMetadata(), generateMetadata(), PageProps, generateMetadata(), generateMetadata(), generateMetadata() (+26 more)

### Community 113 - "envVars.ts"
Cohesion: 0.14
Nodes (15): AI_BOTS, BLOCKED_BOTS, DISALLOW, DEFAULT_SOCIAL_PROFILES, gtmId, logoUrl, LS_KEYS, siteUrl (+7 more)

### Community 117 - "pricing/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PricingLayout(), messages, messages

### Community 119 - "TrafficAnalytics"
Cohesion: 0.60
Nodes (3): AdminTrafficPage(), MetricBars(), TrafficAnalytics()

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 122 - "AnalyticsOverview.tsx"
Cohesion: 0.31
Nodes (4): recharts, AdminAnalyticsPage(), AnalyticsOverview(), PIE_COLORS

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 128 - "RegisterForm.tsx"
Cohesion: 0.15
Nodes (17): @radix-ui/react-label, react-hook-form, RegisterContent(), RegisterForm(), FormControl, FormDescription, FormField(), FormFieldContext (+9 more)

### Community 135 - "config.ts"
Cohesion: 0.17
Nodes (16): alt, contentType, OpengraphImage(), runtime, size, ADMIN_COOKIE, defaultLocale, isLocale() (+8 more)

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
Cohesion: 0.09
Nodes (24): AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationSubscriptionsPage(), AdminModerationUsersPage(), MockZone(), useClientPagination(), getPageNumbers(), Pagination() (+16 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.06
Nodes (19): CategoryChipsSelect(), CategoryChipsSelectProps, NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, NotificationChannelsSelect(), NotificationChannelsSelectProps, NotificationPreferencesSection(), NotificationPreferencesSectionProps (+11 more)

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 973 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ui-v2/index.ts` to `RegisterForm.tsx`, `sitemap.ts`, `AdminShell.tsx`, `src_ui_v2_index_button`, `CreateRequestForm.tsx`, `sonner`, `proposal/layout.tsx`, `cn`, `ProposalItem.tsx`, `request/[id]/page.tsx`, `RequestInfo.tsx`, `discussions/index.ts`, `lucide-react`, `authService.ts`, `StaffTable.tsx`, `Button`, `HowItWorksContent.tsx`, `Card`, `site-header.tsx`, `category/index.ts`, `package.json`, `profile/[id]/page.tsx`, `@lingui/react`, `ModerationRequests.tsx`, `Button`, `RequestDetailContent.tsx`, `support/layout.tsx`, `NotificationSettingsContent.tsx`, `Categories.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `admin/layout.tsx`, `CreateProposalForm.tsx`, `request/page.tsx`, `react`, `EditContactChannelsForm.tsx`, `Пагінація в додатку`, `blog/layout.tsx`, `AdminShell.tsx`, `contact/layout.tsx`, `Hero.tsx`, `breadcrumbs.tsx`, `UserRequestsList.tsx`, `request/index.ts`, `PricingContent.tsx`, `routes.ts`, `pricing/layout.tsx`, `AnalyticsOverview.tsx`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **What connects `EMAIL`, `IN_APP`, `TELEGRAM` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sitemap.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0951219512195122 - nodes in this community are weakly interconnected._
- **Why does `@lingui/react` connect `PricingContent.tsx` to `RegisterForm.tsx`, `AdminShell.tsx`, `src_ui_v2_index_button`, `CreateRequestForm.tsx`, `sonner`, `cn`, `ProposalItem.tsx`, `blog/[id]/page.tsx`, `dashboardMetadata`, `RequestInfo.tsx`, `discussions/index.ts`, `lucide-react`, `authService.ts`, `StaffTable.tsx`, `ui-v2/index.ts`, `Button`, `HowItWorksContent.tsx`, `Card`, `site-header.tsx`, `package.json`, `@lingui/react`, `ModerationRequests.tsx`, `Button`, `RequestDetailContent.tsx`, `NotificationSettingsContent.tsx`, `Categories.tsx`, `RequestDetailContent.tsx`, `useLocalizedRouter`, `[section]/page.tsx`, `CreateProposalForm.tsx`, `react`, `EditContactChannelsForm.tsx`, `ProposalDetailContent.tsx`, `AdminShell.tsx`, `Hero.tsx`, `breadcrumbs.tsx`, `UserRequestsList.tsx`, `routes.ts`, `getLocaleFromParams`, `AnalyticsOverview.tsx`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `@tanstack/react-query` be split into smaller, more focused modules?**
  _Cohesion score 0.1282051282051282 - nodes in this community are weakly interconnected._
- **Why does `next` connect `sonner` to `RegisterForm.tsx`, `sitemap.ts`, `AdminShell.tsx`, `CreateRequestForm.tsx`, `config.ts`, `cn`, `sitemap.ts`, `ProposalItem.tsx`, `blog/[id]/page.tsx`, `request/[id]/page.tsx`, `dashboardMetadata`, `RequestInfo.tsx`, `lucide-react`, `notificationSchema.ts`, `authService.ts`, `ui-v2/index.ts`, `Button`, `site-header.tsx`, `package.json`, `profile/[id]/page.tsx`, `RequestDetailContent.tsx`, `Categories.tsx`, `src/auth.ts`, `[section]/page.tsx`, `CreateProposalForm.tsx`, `request/page.tsx`, `Пагінація в додатку`, `admin-session/route.ts`, `AdminShell.tsx`, `Hero.tsx`, `[locale]/layout.tsx`, `breadcrumbs.tsx`, `UserRequestsList.tsx`, `PricingContent.tsx`, `routes.ts`, `getLocaleFromParams`, `envVars.ts`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Should `SEO Technical Backlog — Shukayu` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._