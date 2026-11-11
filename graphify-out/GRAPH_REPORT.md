# Graph Report - shukayu_next  (2026-11-10)

## Corpus Check
- 589 files · ~218,288 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 3236 nodes · 8647 edges · 168 communities (159 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 61 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5c9e7df4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- sitemap.ts
- AdminShell.tsx
- @tanstack/react-query
- SEO Technical Backlog — Shukayu
- RequestInfo.tsx
- CreateRequestForm.tsx
- features/auth/index.ts
- notificationService.ts
- proposal/layout.tsx
- cn
- Expo Animation Recipes
- ProposalItem.tsx
- blog/[id]/page.tsx
- entities/user/index.ts
- request/[id]/page.tsx
- dashboardMetadata
- requests/index.ts
- Choreographing Motion
- StaffPermission
- next
- notificationSchema.ts
- Animation Recipes
- compilerOptions
- compilerOptions
- ProposalDetailContent.tsx
- devDependencies
- components.json
- locationService.ts
- compilerOptions
- RequestSidebar.tsx
- dependencies
- entities/admin/index.ts
- Link
- useTelegramLinkStatus.ts
- api.ts
- @tanstack/react-query
- scripts
- Card
- site-header.tsx
- Детальний опис шарів
- notification/index.ts
- Worst-Case Catalog
- ProfileHeader.tsx
- package.json
- Виконано
- Animation Standards Reference
- @lingui/react
- ModerationRequests.tsx
- ui-v2/index.ts
- useAdminStaff.ts
- review/index.ts
- HomeFeed.tsx
- support/layout.tsx
- notification/types/index.ts
- contentStore.ts
- @lingui/cli
- ProfileTabs.tsx
- request/index.ts
- Деплой
- how-it-works/layout.tsx
- RequestSubscriptionModal.tsx
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- RequestDetailContent.tsx
- Інтернаціоналізація (i18n) - Інструкція для розробників
- Animation Audit Playbook
- admin/layout.tsx
- [section]/page.tsx
- TypeScript конфігурація
- Write Swift
- profile/[id]/page.tsx
- Apple Design
- ContactSellerModal.tsx
- Змінні оточення
- The Fixes
- Основні сутності
- entities/auth/index.ts
- Prototyping Variants
- RequestStatus
- Пагінація в додатку
- admin-session/route.ts
- config
- lint-staged
- blog/layout.tsx
- ContentCollection
- tooltip.tsx
- Опис сторінок та необхідних даних
- Glossary
- Нотифікації (React Toastify)
- [locale]/layout.tsx
- Animation Performance
- Next.js FSD App
- Finding Animation Opportunities
- Removing Animations
- proposal/const.ts
- proposal/index.ts
- Документація Backend API для проєкту shukayu
- Gesture-Driven UI
- adminModerationService.ts
- Роутинг (React Router v7)
- routes.ts
- getLocaleFromParams
- Working With Sonner
- Button
- The list
- city-combobox.tsx
- ResetPasswordContent.tsx
- Design Engineering
- pricing/layout.tsx
- RequestDetailContent
- Component Building Principles
- Аутентифікація та авторизація
- DashboardShell.tsx
- RegisterForm.tsx
- about/layout.tsx
- privacy/layout.tsx
- Патерни та практики
- terms/layout.tsx
- RequestFiltersSheet.tsx
- { GET, POST }
- The Animation Decision Framework
- clip-path for Animation
- Performance Rules
- config.ts
- Оптимізація
- Стилізація
- Інтернаціоналізація (Lingui)
- API Endpoints
- Чат та повідомлення
- Загальний опис проєкту
- Гейміфікація
- Додаткові функції
- Gesture and Drag Interactions
- CSS Transform Mastery
- The Sonner Principles (Building Loved Components)
- State Management (Zustand)
- Залежності та встановлення
- Spring Animations
- Web Interface Guidelines
- Core Philosophy
- Debugging Animations
- category/index.ts
- authStore.ts
- form.tsx
- sitemap.ts
- src/auth.ts
- adminNotificationService.ts
- chat/index.ts
- 8. Компоненти
- Композиція сторінок Shukayu
- UX універсальних компонентів Shukayu
- Дизайн-система Shukayu
- Тестування (майбутнє)
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
3. `@lingui/react` - 134 edges
4. `getLocaleFromParams()` - 94 edges
5. `lucide-react` - 85 edges
6. `next` - 63 edges
7. `UiKitContent()` - 62 edges
8. `routes` - 62 edges
9. `Link()` - 52 edges
10. `getMetadataForRoute()` - 51 edges

## Surprising Connections (you probably didn't know these)
- `0. Поточний стан (коротко)` --references--> `ICategory`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/entities/category/types/Category.ts
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  docs/ARCHITECTURE.md → src/widgets/app/Features/Features.tsx
- `Правила залежностей (Import Rules)` --references--> `features`  [INFERRED]
  README.md → src/widgets/app/Features/Features.tsx
- `Чеклист для додавання перекладів` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx
- `Як підключити словник до нової сторінки (Route Layout)` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx

## Import Cycles
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RoleChoice.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RoleChoice.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/side-rail.tsx -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`

## Communities (168 total, 9 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.21
Nodes (11): paginationResultSchema(), requestSubscriptionService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest (+3 more)

### Community 1 - "sitemap.ts"
Cohesion: 0.10
Nodes (39): CatalogLink, CatalogView(), CatalogViewProps, LinkChips(), CatalogCopy, CatalogStats, CopyInput, getCatalogCopy() (+31 more)

### Community 2 - "AdminShell.tsx"
Cohesion: 0.10
Nodes (21): clsx, tailwind-merge, ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, useAdminRole(), useCanDo(), hasPermission(), MockTag() (+13 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.20
Nodes (9): ProposalRejectionReason, ALREADY_PROPOSED, NO_CONTACTS, NOT_SELLER, OWN_REQUEST, REQUEST_NOT_ACTIVE, REQUEST_NOT_FOUND, USER_BLOCKED (+1 more)

### Community 4 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.08
Nodes (24): 0. Поточний стан (коротко), 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія (+16 more)

### Community 5 - "RequestInfo.tsx"
Cohesion: 0.07
Nodes (23): recharts, AdminTrafficPage(), AdminContentPricingPage(), isValidSlug(), slugify(), UK_MAP, BlockUserActions(), BlockUserActionsProps (+15 more)

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.05
Nodes (29): axios, @hookform/resolvers, react-hook-form, RETURN_URL_PARAM, ChangePasswordModalProps, ForgotPasswordForm(), getForgotPasswordSchema(), getResetPasswordFormSchema() (+21 more)

### Community 7 - "features/auth/index.ts"
Cohesion: 0.19
Nodes (18): GoogleAuthCompleteContent(), GoogleAuthCompletePage(), RegisterContent(), BLOCKED_RETURN_PATHS, buildAuthHref(), buildGoogleAuthCallbackUrl(), getReturnUrlFromLocation(), getSafeReturnUrl() (+10 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.14
Nodes (18): useNotifications(), INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY, NEW_REQUESTS (+10 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.08
Nodes (37): @lingui/core, react, GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ContactLayout(), messagesByLocale (+29 more)

### Community 10 - "cn"
Cohesion: 0.10
Nodes (50): metadata, UiKitPage(), Section(), UiKitContent(), CreateReviewModal(), cn(), Chip(), IconButton (+42 more)

### Community 11 - "Expo Animation Recipes"
Cohesion: 0.06
Nodes (33): Bottom sheet you can drag to dismiss, Collapsing header on scroll, Expo Animation Recipes, Firing something once at a threshold, Keyboard-synced UI, List entrances, Press feedback, Screen transitions (Expo Router) (+25 more)

### Community 12 - "ProposalItem.tsx"
Cohesion: 0.05
Nodes (52): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 5. Обробка помилок, 6. Стан завантаження, Правила та конвенції, useAcceptProposal() (+44 more)

### Community 13 - "blog/[id]/page.tsx"
Cohesion: 0.11
Nodes (26): ArticleSection(), Props, BlogArticleContent(), Props, BlogArticlePage(), generateMetadata(), Props, revalidate (+18 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.15
Nodes (20): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), accountSchema, createProfileSchema, profileSchema (+12 more)

### Community 15 - "request/[id]/page.tsx"
Cohesion: 0.15
Nodes (17): generateMetadata(), Props, generateMetadata(), getCategoryTrail(), getRequest, Props, RequestDetailPage(), RequestLookup (+9 more)

### Community 16 - "dashboardMetadata"
Cohesion: 0.15
Nodes (14): NotificationsContent(), generateMetadata(), Page(), generateMetadata(), Page(), OverviewContent(), generateMetadata(), dashboardMetadata() (+6 more)

### Community 17 - "requests/index.ts"
Cohesion: 0.23
Nodes (9): CategoryFilterButton(), CategoryFilterButtonProps, CreateRequestButton(), CreateRequestButtonProps, CreateRequestForm(), EditRequestForm(), EditRequestModal(), EditRequestModalProps (+1 more)

### Community 18 - "Choreographing Motion"
Cohesion: 0.06
Nodes (32): Carry: steer a shared layout animation through its parent, Choreography Recipes, Direction-aware steps, Imperative orchestration (`useAnimate`), Overlap: CSS stagger with an index variable, Overlap: Motion variants with a non-uniform stagger, Sequence: morph between two rich states with a crossfade, Sequence: one draw after another (+24 more)

### Community 19 - "StaffPermission"
Cohesion: 0.27
Nodes (7): IAdminNavItem, ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, hasAnyPermission(), StaffPermission, PermissionGateProps, ContentCollectionProps

### Community 20 - "next"
Cohesion: 0.11
Nodes (11): nextConfig, SECURITY_HEADERS, next, contentType, size, AdminLoginPage(), metadata, PageProps (+3 more)

### Community 21 - "notificationSchema.ts"
Cohesion: 0.15
Nodes (13): contactService, IContactRequest, categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw (+5 more)

### Community 22 - "Animation Recipes"
Cohesion: 0.06
Nodes (31): Accordion / collapse, Animation Recipes, Button press, Drag to dismiss, Drawer / sheet, Dropdown, popover, menu, select, Hold to confirm, Masking a crossfade that won't settle (+23 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "ProposalDetailContent.tsx"
Cohesion: 0.11
Nodes (9): DiscussionForm(), DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions, getInitials(), Conversation, ProfileHeader() (+1 more)

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

### Community 30 - "RequestSidebar.tsx"
Cohesion: 0.20
Nodes (8): date-fns, IRequestBuyer, ReviewCardProps, RequestSidebar(), RequestSidebarProps, formatBudget(), nf(), T

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.11
Nodes (36): adminBlogPosts, adminInfoPages, adminMockData, adminPricingPlans, adminRequestSubscriptions, moderationProposals, moderationReports, moderationUsers (+28 more)

### Community 33 - "Link"
Cohesion: 0.07
Nodes (56): 0. Що передати разом із цим файлом, 1. Золоті правила, 2.1 `page.tsx`, 2.2 `layout.tsx`, 2.3 Реєстрація маршруту (4 місця), 2. Файли, які треба створити, 3. Токени (Tailwind-класи), 4. Каталог готових блоків (`@/ui-v2`) (+48 more)

### Community 34 - "useTelegramLinkStatus.ts"
Cohesion: 0.23
Nodes (7): TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken

### Community 35 - "api.ts"
Cohesion: 0.22
Nodes (4): failedQueue, MUTATION_METHODS, revalidateAfterMutation(), apiBaseUrl

### Community 36 - "@tanstack/react-query"
Cohesion: 0.20
Nodes (6): @tanstack/react-query, normalizeProposalItem(), proposalService, IProposalWithSeller, IGetProposalsRequest, IUpdateProposalRequest

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "Card"
Cohesion: 0.18
Nodes (13): NotificationPrefsContent(), generateMetadata(), Page(), ProfilesContent(), Card, CardBody(), CardDescription(), CardHead() (+5 more)

### Community 39 - "site-header.tsx"
Cohesion: 0.09
Nodes (44): @radix-ui/react-avatar, @radix-ui/react-dropdown-menu, useAuthStore, Avatar, AvatarProps, avatarVariants, DropdownMenu, DropdownMenuContent (+36 more)

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.08
Nodes (13): useCreateRequestSubscription(), useCreateTelegramLinkToken(), useDeleteRequestSubscription(), useMarkAllNotificationsRead(), useMarkNotificationRead(), useRequestSubscriptions(), useUnreadCount(), useUpdateRequestSubscription() (+5 more)

### Community 42 - "Worst-Case Catalog"
Cohesion: 0.06
Nodes (29): Collections, Emails, URLs, identifiers, Environment, Images and media, Labels, titles, and copy from data, Numbers and money, People and names, States (+21 more)

### Community 43 - "ProfileHeader.tsx"
Cohesion: 0.13
Nodes (15): UserRole, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level, sellerAchievements (+7 more)

### Community 44 - "package.json"
Cohesion: 0.04
Nodes (47): name, private, version, autoprefixer, cmdk, embla-carousel-react, eslint, eslint-config-next (+39 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "Animation Standards Reference"
Cohesion: 0.07
Nodes (26): Aggressive Escalation Triggers, Guidelines, Initial Response, Operating Posture, Part 1 — Findings table (REQUIRED), Part 2 — Verdict (REQUIRED), Remedial Preference Hierarchy, Required Output Format (+18 more)

### Community 47 - "@lingui/react"
Cohesion: 0.15
Nodes (18): @lingui/react, lucide-react, useRequestStore, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), CreateProfileModalProps (+10 more)

### Community 48 - "ModerationRequests.tsx"
Cohesion: 0.16
Nodes (18): AdminModerationRequestsPage(), AdminModerationSubscriptionsPage(), useBulkModerate(), useModerateRequest(), useModerationRequest(), useModerationRequests(), ApproveRejectActions(), PermissionGate() (+10 more)

### Community 49 - "ui-v2/index.ts"
Cohesion: 0.12
Nodes (22): sonner, BY_CODE, getAdminErrorMessage(), T, ApproveRejectActionsProps, ChangePasswordModal(), PASSWORD_MIN, PasswordFormModal() (+14 more)

### Community 50 - "useAdminStaff.ts"
Cohesion: 0.21
Nodes (11): zustand, ADMIN_ME_KEY, STAFF_KEY, adminAuthService, adminStaffService, AdminPreviewState, useAdminPreviewStore, AdminStaffInput (+3 more)

### Community 51 - "review/index.ts"
Cohesion: 0.20
Nodes (11): useCreateReview(), useReviews(), useReviewStats(), reviewSchema, reviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse (+3 more)

### Community 52 - "HomeFeed.tsx"
Cohesion: 0.10
Nodes (20): RequestContent(), RequestContentProps, CategoryChipsSelectProps, RequestCard(), CascadingSelectItem, DetailRow(), ListRow(), ListRowGroup() (+12 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "notification/types/index.ts"
Cohesion: 0.28
Nodes (7): useNotificationPreferences(), useUpdateNotificationPreferences(), notificationPreferenceService, ICategoryPreference, INewRequestsPreference, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 55 - "contentStore.ts"
Cohesion: 0.36
Nodes (7): AdminContentState, createContentStore(), today(), AdminInfoPageInput, AdminPageStatus, IAdminContentItem, Props

### Community 57 - "ProfileTabs.tsx"
Cohesion: 0.13
Nodes (18): @radix-ui/react-tabs, Tabs, TabsContent, TabsList, TabsTrigger, GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS (+10 more)

### Community 58 - "request/index.ts"
Cohesion: 0.12
Nodes (24): HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, REQUEST_URGENCY_LABELS, useCancelRequest(), useCreateRequest(), useLatestRequests() (+16 more)

### Community 59 - "Деплой"
Cohesion: 0.67
Nodes (3): Environment Variables, Netlify, Деплой

### Community 60 - "how-it-works/layout.tsx"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 61 - "RequestSubscriptionModal.tsx"
Cohesion: 0.10
Nodes (12): CategoryChipsSelect(), NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, NotificationChannelsSelect(), NotificationChannelsSelectProps, NotificationPreferencesSection(), NotificationPreferencesSectionProps, RequestSubscriptionCard() (+4 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (15): API та HTTP запити, index.ts:, Валідація:, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Патерн використання: (+7 more)

### Community 64 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 65 - "RequestDetailContent.tsx"
Cohesion: 0.08
Nodes (3): LoginContent(), LoginContentProps, LoginForm()

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "Animation Audit Playbook"
Cohesion: 0.08
Nodes (22): 1. Purpose & frequency, 2. Easing & duration, 3. Physicality & origin, 4. Interruptibility, 5. Performance, 6. Accessibility, 7. Cohesion & tokens, 8. Missed opportunities (+14 more)

### Community 68 - "admin/layout.tsx"
Cohesion: 0.28
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "[section]/page.tsx"
Cohesion: 0.36
Nodes (6): Page(), Props, isSettingsSection(), SETTINGS_SECTIONS, SettingsContent(), SettingsSection

### Community 70 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 71 - "Write Swift"
Cohesion: 0.09
Nodes (22): 10. ARC and object lifetime, 11. Testing — Swift Testing by default, 12. Macros, 13. Logging and debugging, 14. Unsafe code and interop, 15. Modern syntax you should be using, 16. Migrating an existing codebase to Swift 6, 1. Model data with value types (+14 more)

### Community 72 - "profile/[id]/page.tsx"
Cohesion: 0.07
Nodes (41): BlogListPage(), COPY, generateMetadata(), revalidate, generateMetadata(), getDisplayName(), getProfile, ProfileIdPage() (+33 more)

### Community 73 - "Apple Design"
Cohesion: 0.09
Nodes (21): 10. Gesture design details (the "feel" checklist), 11. Frame-level smoothness, 12. Materials & depth — translucency conveys hierarchy, 13. Multimodal feedback — motion + sound + haptics, 14. Reduced motion & accessibility, 15. Typography — optical sizing, tracking, leading, 16. Design foundations — the eight principles, 17. Process (+13 more)

### Community 74 - "ContactSellerModal.tsx"
Cohesion: 0.43
Nodes (5): useUserContacts(), CHANNEL_ICONS, ContactSellerModal(), ContactSellerModalProps, getHref()

### Community 75 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 76 - "The Fixes"
Cohesion: 0.09
Nodes (21): 10. Status bar color doesn't match, 11. Right in Chrome, wrong on phone, 1. Hover state stuck after tap, 2. Gray/blue flash on tap, 3. Layout has the wrong height, 4. Page zooms into the input, 5. Tap feels laggy, 6. Pull-to-refresh hijacks scroll (+13 more)

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "entities/auth/index.ts"
Cohesion: 0.17
Nodes (13): zod, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+5 more)

### Community 79 - "Prototyping Variants"
Cohesion: 0.10
Nodes (19): Behavior contract, Markup, Reference wiring, Rules, Styles, The Picker, Hard Rules, Initial Response (+11 more)

### Community 80 - "RequestStatus"
Cohesion: 0.11
Nodes (15): Загальна логіка відгуків, Статуси запитів (RequestStatus), Статуси пропозицій (ProposalStatus), ProposalStatus, ACCEPTED, COMPLETED, PENDING, REJECTED (+7 more)

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

### Community 85 - "blog/layout.tsx"
Cohesion: 0.38
Nodes (4): BlogLayout(), messagesByLocale, messages, messages

### Community 86 - "ContentCollection"
Cohesion: 0.29
Nodes (6): AdminContentBlogPage(), AdminContentPagesPage(), useAdminPagesStore, ContentBlog(), ContentCollection(), ContentPages()

### Community 87 - "tooltip.tsx"
Cohesion: 0.33
Nodes (5): @radix-ui/react-tooltip, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 89 - "Glossary"
Cohesion: 0.11
Nodes (18): Animation Vocabulary, Easing — how speed changes over an animation, Entrances & Exits — how elements appear and disappear, Examples, Feedback & Interaction — responding to the user's actions, Glossary, Initial Response, Instructions (+10 more)

### Community 90 - "Нотифікації (React Toastify)"
Cohesion: 0.67
Nodes (3): Використання:, Налаштування:, Нотифікації (React Toastify)

### Community 94 - "[locale]/layout.tsx"
Cohesion: 0.11
Nodes (15): @next/third-parties, @vercel/analytics, generateMetadata(), messagesByLocale, onest, Props, RootLayout(), SKIP_LABEL (+7 more)

### Community 95 - "Animation Performance"
Cohesion: 0.11
Nodes (17): Animation Performance, Hard Rules, Initial Response, Operating Posture, Phase 1: Find what animates, Phase 2: Diagnose, Phase 3: Report, React: Don't Animate Through State (+9 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.22
Nodes (8): Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Технологічний стек

### Community 99 - "Finding Animation Opportunities"
Cohesion: 0.12
Nodes (16): 1. Frequency — how often will a user see this?, 2. Purpose — why does this animate?, 3. Speed — can it stay inside budget?, 4. Function — does motion help or hinder here?, Finding Animation Opportunities, Hard Rules, Initial Response, Operating Posture (+8 more)

### Community 100 - "Removing Animations"
Cohesion: 0.12
Nodes (15): Cleanup, Hard Rules, Initial Response, Operating Posture, Part 1 — Removed and reduced, Part 2 — Kept (REQUIRED), Part 3 — Cleanup and verdict, Reducing (+7 more)

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "proposal/index.ts"
Cohesion: 0.13
Nodes (22): ProposalDetailPage(), ProposalDetailContent(), useCanPropose(), useCreateProposal(), useProposal(), useProposals(), useRejectProposal(), createProposalSchema (+14 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 105 - "Gesture-Driven UI"
Cohesion: 0.13
Nodes (14): First decision: build it, or use a solution that exists?, Gesture-Driven UI, Hold gestures are asymmetric, Interruptibility is non-negotiable, Linked values, Motion drag props, Reduced motion, Release phase rules (+6 more)

### Community 106 - "adminModerationService.ts"
Cohesion: 0.21
Nodes (10): KEY, AdminApiError, adminCall(), redirectToLogin(), adminModerationService, IListModerationParams, IBulkModerationResult, IModerationList (+2 more)

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 108 - "routes.ts"
Cohesion: 0.05
Nodes (24): ForgotPasswordContent(), ForgotPasswordPage(), getLatestRequests(), HomePage(), revalidate, routes, RequestCardProps, defaultMetadata (+16 more)

### Community 110 - "getLocaleFromParams"
Cohesion: 0.08
Nodes (41): generateMetadata(), AdminPage(), generateMetadata(), generateMetadata(), PageProps, generateMetadata(), ContactPage(), generateMetadata() (+33 more)

### Community 111 - "Working With Sonner"
Cohesion: 0.15
Nodes (11): Functions, Sonner API Reference, `toast()` options, `<Toaster />`, Initial Response, Picking the right call, Recipes, Setup (+3 more)

### Community 112 - "Button"
Cohesion: 0.12
Nodes (18): @radix-ui/react-alert-dialog, ContactContent(), AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter() (+10 more)

### Community 113 - "The list"
Cohesion: 0.18
Nodes (10): Charts, Common mismatches to catch, How to use this, Initial Response, Interaction & performance, Motion & visuals, Picking The Right Library, State & styling (+2 more)

### Community 114 - "city-combobox.tsx"
Cohesion: 0.30
Nodes (8): CascadingSelect(), CascadingSelectProps, CityCombobox(), CityComboboxProps, Popover, PopoverContent, PopoverTrigger, TextareaProps

### Community 115 - "ResetPasswordContent.tsx"
Cohesion: 0.40
Nodes (3): ResetPasswordPage(), ResetPasswordContent(), ResetPasswordContentProps

### Community 116 - "Design Engineering"
Cohesion: 0.22
Nodes (8): Accessibility, Design Engineering, Initial Response, prefers-reduced-motion, Review Checklist, Review Format (Required), Stagger Animations, Touch device hover states

### Community 117 - "pricing/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PricingLayout(), messages, messages

### Community 118 - "RequestDetailContent"
Cohesion: 0.09
Nodes (11): class-variance-authority, ReviewCard(), ReviewsList(), ReviewsListProps, Alert(), AlertDescription(), AlertProps, AlertTitle() (+3 more)

### Community 119 - "Component Building Principles"
Cohesion: 0.25
Nodes (8): Animate enter states with @starting-style, Buttons must feel responsive, Component Building Principles, Make popovers origin-aware, Never animate from scale(0), Tooltips: skip delay on subsequent hovers, Use blur to mask imperfect transitions, Use CSS transitions over keyframes for interruptible UI

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 121 - "DashboardShell.tsx"
Cohesion: 0.14
Nodes (6): CreateRequestContent(), HASH_TO_ROUTE, NOTIFICATIONS_NAV, SETTINGS_NAV, DASHBOARD_NOTIFICATION_SETTINGS, dashboardSettingsPath()

### Community 122 - "RegisterForm.tsx"
Cohesion: 0.10
Nodes (18): AdminAnalyticsPage(), AdminStaffPage(), STAFF_ROLES, useAdminMe(), useAdminStaff(), useStaffMutations(), MockZone(), RolePreviewSelect() (+10 more)

### Community 123 - "about/layout.tsx"
Cohesion: 0.38
Nodes (4): AboutLayout(), messagesByLocale, messages, messages

### Community 124 - "privacy/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PrivacyLayout(), messages, messages

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 126 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 128 - "RequestFiltersSheet.tsx"
Cohesion: 0.19
Nodes (16): RequestFiltersSheet(), RequestFiltersSheetProps, BottomSheet, BottomSheetBody(), BottomSheetClose, BottomSheetContent, BottomSheetDescription, BottomSheetFooter() (+8 more)

### Community 131 - "The Animation Decision Framework"
Cohesion: 0.33
Nodes (6): 1. Should this animate at all?, 2. What is the purpose?, 3. What easing should it use?, 4. How fast should it be?, Perceived performance, The Animation Decision Framework

### Community 132 - "clip-path for Animation"
Cohesion: 0.33
Nodes (6): clip-path for Animation, Comparison sliders, Hold-to-delete pattern, Image reveals on scroll, Tabs with perfect color transitions, The inset shape

### Community 134 - "Performance Rules"
Cohesion: 0.33
Nodes (6): CSS animations beat JS under load, CSS variables are inheritable, Motion hardware acceleration caveat, Only animate transform and opacity, Performance Rules, Use WAAPI for programmatic CSS animations

### Community 135 - "config.ts"
Cohesion: 0.11
Nodes (31): alt, contentType, OpengraphImage(), runtime, size, defaultLocale, isLocale(), LOCALE_COOKIE (+23 more)

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

### Community 144 - "Gesture and Drag Interactions"
Cohesion: 0.33
Nodes (6): Damping at boundaries, Friction instead of hard stops, Gesture and Drag Interactions, Momentum-based dismissal, Multi-touch protection, Pointer capture for drag

### Community 145 - "CSS Transform Mastery"
Cohesion: 0.40
Nodes (5): 3D transforms for depth, CSS Transform Mastery, scale() scales children too, transform-origin, translateY with percentages

### Community 146 - "The Sonner Principles (Building Loved Components)"
Cohesion: 0.40
Nodes (5): Asymmetric enter/exit timing, Cohesion matters, Review your work the next day, The opacity + height combination, The Sonner Principles (Building Loved Components)

### Community 147 - "State Management (Zustand)"
Cohesion: 0.50
Nodes (4): State Management (Zustand), Архітектура Store, Особливості:, Патерн Store:

### Community 148 - "Залежності та встановлення"
Cohesion: 0.50
Nodes (4): Встановлення:, Залежності та встановлення, Запуск:, Основні залежності:

### Community 149 - "Spring Animations"
Cohesion: 0.40
Nodes (5): Interruptibility advantage, Spring Animations, Spring-based mouse interactions, Spring configuration, When to use springs

### Community 150 - "Web Interface Guidelines"
Cohesion: 0.40
Nodes (4): Guidelines Source, How It Works, Usage, Web Interface Guidelines

### Community 151 - "Core Philosophy"
Cohesion: 0.50
Nodes (4): Beauty is leverage, Core Philosophy, Taste is trained, not innate, Unseen details compound

### Community 152 - "Debugging Animations"
Cohesion: 0.50
Nodes (4): Debugging Animations, Frame-by-frame inspection, Slow motion testing, Test on real devices

### Community 153 - "category/index.ts"
Cohesion: 0.22
Nodes (13): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), useCategories(), CategoryIndex, categorySchema, getCategoriesResponseSchema (+5 more)

### Community 157 - "authStore.ts"
Cohesion: 0.14
Nodes (12): AuthContext, AuthContextType, useAuth(), authService, AuthActions, AuthState, buildAuthStateFromResponse(), buildUserFromAuthResponse() (+4 more)

### Community 160 - "form.tsx"
Cohesion: 0.18
Nodes (15): @radix-ui/react-label, RegisterForm(), FormControl, FormDescription, FormField(), FormFieldContext, FormFieldContextValue, FormItem (+7 more)

### Community 161 - "sitemap.ts"
Cohesion: 0.36
Nodes (11): getBlogEntries(), getCatalogEntries(), getRequestAndProfileEntries(), localizedUrl(), parseDate(), revalidate, safeFetchRequests(), sitemap() (+3 more)

### Community 163 - "src/auth.ts"
Cohesion: 0.19
Nodes (10): next-auth, auth, handlers, signIn, signOut, IAuthResponse, JWT, next-auth (+2 more)

### Community 165 - "adminNotificationService.ts"
Cohesion: 0.28
Nodes (7): adminNotificationService, adminRequestSubscriptionSchema, adminRequestSubscriptionsResultSchema, filterMock(), IAdminRequestSubscriptionsResult, IGetAdminRequestSubscriptionsParams, IAdminRequestSubscription

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

### Community 178 - "Тестування (майбутнє)"
Cohesion: 0.67
Nodes (3): Рекомендована структура:, Тестування (майбутнє), Інструменти:

### Community 179 - "Button"
Cohesion: 0.10
Nodes (27): AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationUsersPage(), useClientPagination(), Badge(), getPageNumbers(), Pagination(), PaginationProps (+19 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.09
Nodes (17): PricingPage(), PricingContent(), SupportContent(), StatusGuide(), StatusItem(), Accordion, AccordionContent, AccordionItem (+9 more)

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1360 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `proposal/layout.tsx` to `RequestFiltersSheet.tsx`, `sitemap.ts`, `AdminShell.tsx`, `RequestInfo.tsx`, `CreateRequestForm.tsx`, `features/auth/index.ts`, `config.ts`, `cn`, `ProposalItem.tsx`, `request/[id]/page.tsx`, `category/index.ts`, `ProposalDetailContent.tsx`, `authStore.ts`, `RequestSidebar.tsx`, `form.tsx`, `Link`, `Card`, `site-header.tsx`, `package.json`, `@lingui/react`, `ModerationRequests.tsx`, `ui-v2/index.ts`, `Button`, `HomeFeed.tsx`, `support/layout.tsx`, `NotificationSettingsContent.tsx`, `ProfileTabs.tsx`, `request/index.ts`, `how-it-works/layout.tsx`, `RequestSubscriptionModal.tsx`, `RequestDetailContent.tsx`, `admin/layout.tsx`, `profile/[id]/page.tsx`, `Пагінація в додатку`, `blog/layout.tsx`, `tooltip.tsx`, `[locale]/layout.tsx`, `routes.ts`, `Button`, `city-combobox.tsx`, `pricing/layout.tsx`, `RequestDetailContent`, `DashboardShell.tsx`, `RegisterForm.tsx`, `about/layout.tsx`, `privacy/layout.tsx`, `terms/layout.tsx`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **What connects `EMAIL`, `IN_APP`, `TELEGRAM` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `sitemap.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0965166908563135 - nodes in this community are weakly interconnected._
- **Why does `@lingui/react` connect `@lingui/react` to `RequestFiltersSheet.tsx`, `AdminShell.tsx`, `RequestInfo.tsx`, `CreateRequestForm.tsx`, `features/auth/index.ts`, `config.ts`, `proposal/layout.tsx`, `ProposalItem.tsx`, `blog/[id]/page.tsx`, `dashboardMetadata`, `requests/index.ts`, `ProposalDetailContent.tsx`, `RequestSidebar.tsx`, `Link`, `Card`, `site-header.tsx`, `package.json`, `ModerationRequests.tsx`, `ui-v2/index.ts`, `Button`, `HomeFeed.tsx`, `NotificationSettingsContent.tsx`, `ProfileTabs.tsx`, `RequestSubscriptionModal.tsx`, `RequestDetailContent.tsx`, `[section]/page.tsx`, `ContactSellerModal.tsx`, `routes.ts`, `getLocaleFromParams`, `Button`, `ResetPasswordContent.tsx`, `RequestDetailContent`, `DashboardShell.tsx`, `RegisterForm.tsx`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Should `AdminShell.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09856035437430787 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `sitemap.ts`, `AdminShell.tsx`, `RequestInfo.tsx`, `CreateRequestForm.tsx`, `features/auth/index.ts`, `config.ts`, `cn`, `ProposalItem.tsx`, `blog/[id]/page.tsx`, `request/[id]/page.tsx`, `sitemap.ts`, `src/auth.ts`, `api.ts`, `site-header.tsx`, `package.json`, `ui-v2/index.ts`, `Button`, `HomeFeed.tsx`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `[section]/page.tsx`, `profile/[id]/page.tsx`, `Пагінація в додатку`, `admin-session/route.ts`, `[locale]/layout.tsx`, `routes.ts`, `getLocaleFromParams`, `DashboardShell.tsx`, `RegisterForm.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Should `SEO Technical Backlog — Shukayu` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._