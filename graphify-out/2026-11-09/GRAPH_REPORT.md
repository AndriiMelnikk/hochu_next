# Graph Report - shukayu_next  (2026-11-09)

## Corpus Check
- 486 files · ~143,294 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2467 nodes · 6494 edges · 153 communities (133 shown, 20 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1d2d3314`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- [city]/page.tsx
- category/index.ts
- @tanstack/react-query
- getLocaleFromHeaders
- cn
- CreateRequestForm.tsx
- Button
- notificationService.ts
- proposal/layout.tsx
- UiKitContent.tsx
- routes.ts
- src_ui_v2_index_button
- breadcrumbs.tsx
- entities/user/index.ts
- schemas.ts
- alert-dialog.tsx
- RequestInfo.tsx
- entities/auth/index.ts
- discussions/index.ts
- blog/[id]/page.tsx
- alert.tsx
- authStore.ts
- compilerOptions
- compilerOptions
- TrafficAnalytics
- devDependencies
- components.json
- locationService.ts
- compilerOptions
- form.tsx
- dependencies
- entities/admin/index.ts
- request/[id]/page.tsx
- notification/index.ts
- ModerationUsers.tsx
- JsonLd
- scripts
- StaffTable
- LocaleRouteProps
- Детальний опис шарів
- notification/index.ts
- sitemap.ts
- GamificationProgress.tsx
- package.json
- Виконано
- AdminShell.tsx
- @lingui/react
- Структура файлів компонента
- Нотифікації (React Toastify)
- privacy/layout.tsx
- review/index.ts
- ui-v2/index.ts
- support/layout.tsx
- notification/types/index.ts
- @tanstack/react-query
- @lingui/cli
- RequestDetailContent.tsx
- request/index.ts
- proposalSchema.ts
- uploadFile.ts
- ProfileSettings.tsx
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- card.tsx
- Інтернаціоналізація (i18n) - Інструкція для розробників
- src/auth.ts
- admin/layout.tsx
- utils.ts
- NotificationsTabContent.tsx
- SEO Technical Backlog — Shukayu
- ProfileTabs.tsx
- blogService.ts
- LinguiProvider
- Link
- RequestSubscriptionModal.tsx
- Основні сутності
- @lingui/core
- stepper.tsx
- profile/[id]/page.tsx
- Пагінація в додатку
- tooltip.tsx
- config
- lint-staged
- api.ts
- sheet.tsx
- ProposalRejectionReason
- Опис сторінок та необхідних даних
- Правила та конвенції
- about/layout.tsx
- blog/layout.tsx
- contact/layout.tsx
- pricing/layout.tsx
- [locale]/layout.tsx
- terms/layout.tsx
- ContentPages.tsx
- Next.js FSD App
- api
- ModerationReports.tsx
- chat/index.ts
- cn.ts
- proposal/const.ts
- requestSchema.ts
- Документація Backend API для проєкту shukayu
- [locale]/page.tsx
- Faq.tsx
- Роутинг (React Router v7)
- next
- route-metadata.ts
- notificationSchema.ts
- 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»)
- 2. Пріоритет P0 — Картки виконавців (E-E-A-T)
- 3. Пріоритет P1 — Запити як long-tail контент
- AnalyticsOverview
- ContentBlog
- ContentPricing
- ModerationProposals
- ModerationRequests
- Аутентифікація та авторизація
- TypeScript конфігурація
- Змінні оточення
- checkbox.tsx
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
- ModerationSubscriptions.tsx
- NotificationSettingsContent.tsx
- 4. Випадаючі поверхні
- 2. Колір
- 3. Кнопки
- 5. Списки
- 7. Перемикачі та вибір
- 8. Модалки та панелі

## God Nodes (most connected - your core abstractions)
1. `cn()` - 158 edges
2. `react` - 125 edges
3. `@lingui/react` - 103 edges
4. `getLocaleFromParams()` - 92 edges
5. `lucide-react` - 72 edges
6. `UiKitContent()` - 62 edges
7. `getMetadataForRoute()` - 51 edges
8. `next` - 51 edges
9. `routes` - 49 edges
10. `@tanstack/react-query` - 46 edges

## Surprising Connections (you probably didn't know these)
- `Ключові особливості:` --references--> `RootLayout()`  [INFERRED]
  docs/ARCHITECTURE.md → src/app/[locale]/layout.tsx
- `0. Поточний стан (коротко)` --references--> `ICategory`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/entities/category/types/Category.ts
- `Статуси запитів (RequestStatus)` --references--> `RequestStatus`  [INFERRED]
  docs/Status.md → src/entities/request/types/Request.ts
- `1.2. Контент посадкової категорії (не порожній лістинг)` --references--> `getFaqPageJsonLd()`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/shared/seo/schemas.ts
- `Чеклист для додавання перекладів` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx

## Import Cycles
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/AuthRequired.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ChangePasswordModal.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ForgotPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 4-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/ResetPasswordForm.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`
- 5-file cycle: `src/features/auth/index.ts -> src/features/auth/ui/RegisterForm.tsx -> src/features/auth/ui/GoogleSignInButton.tsx -> src/ui-v2/index.ts -> src/ui-v2/layout/site-header.tsx -> src/features/auth/index.ts`

## Communities (153 total, 20 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.19
Nodes (10): useCreateRequestSubscription(), useRequestSubscriptions(), useUpdateRequestSubscription(), paginationResultSchema(), requestSubscriptionService, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription (+2 more)

### Community 1 - "[city]/page.tsx"
Cohesion: 0.14
Nodes (31): CatalogLink, CatalogView(), CatalogViewProps, LinkChips(), CatalogCopy, CatalogStats, CopyInput, getCatalogCopy() (+23 more)

### Community 2 - "category/index.ts"
Cohesion: 0.22
Nodes (13): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), useCategories(), CategoryIndex, categorySchema, getCategoriesResponseSchema (+5 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.19
Nodes (15): useCreateProposal(), useRejectProposal(), IProposal, IProposalSeller, IProposalWithSeller, ICreateProposalRequest, IUpdateProposalRequest, ICanProposeResponse (+7 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.10
Nodes (33): AboutContent(), AboutPage(), generateMetadata(), AdminPage(), generateMetadata(), generateMetadata(), PageProps, generateMetadata() (+25 more)

### Community 5 - "cn"
Cohesion: 0.08
Nodes (32): @radix-ui/react-accordion, CategoryFilterButton(), CategoryFilterButtonProps, cn(), Accordion, AccordionContent, AccordionItem, AccordionTrigger (+24 more)

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.05
Nodes (30): axios, @hookform/resolvers, react-hook-form, useUpdateProposal(), ChangePasswordModalProps, ForgotPasswordForm(), getForgotPasswordSchema(), ResetPasswordFormData (+22 more)

### Community 7 - "Button"
Cohesion: 0.17
Nodes (21): next-auth, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), BLOCKED_RETURN_PATHS, buildAuthHref(), buildGoogleAuthCallbackUrl(), getReturnUrlFromLocation(), getSafeReturnUrl() (+13 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.13
Nodes (17): useNotifications(), NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY, NEW_REQUESTS, REQUEST_UPDATES (+9 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.11
Nodes (21): @lingui/core, react, CreateLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale, ProposalLayout() (+13 more)

### Community 10 - "UiKitContent.tsx"
Cohesion: 0.09
Nodes (47): metadata, UiKitPage(), Section(), UiKitContent(), CardHeader(), CardSection(), SettingsRow(), DropdownMenu (+39 more)

### Community 11 - "routes.ts"
Cohesion: 0.13
Nodes (10): ResetPasswordContentProps, LoginContentProps, routes, CreateRequestButtonProps, RequestCardProps, breadcrumbLabels, LinkProps, Column() (+2 more)

### Community 12 - "src_ui_v2_index_button"
Cohesion: 0.09
Nodes (30): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), AcceptProposalModal(), AcceptProposalModalProps, CancelAcceptedProposalModal(), CancelAcceptedProposalModalProps (+22 more)

### Community 13 - "breadcrumbs.tsx"
Cohesion: 0.27
Nodes (11): @radix-ui/react-slot, Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator() (+3 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.15
Nodes (21): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), useUserContacts(), accountSchema, createProfileSchema (+13 more)

### Community 15 - "schemas.ts"
Cohesion: 0.15
Nodes (14): AI_BOTS, BLOCKED_BOTS, DISALLOW, DEFAULT_SOCIAL_PROFILES, gtmId, logoUrl, siteUrl, socialProfiles (+6 more)

### Community 16 - "alert-dialog.tsx"
Cohesion: 0.14
Nodes (17): @radix-ui/react-alert-dialog, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader() (+9 more)

### Community 17 - "RequestInfo.tsx"
Cohesion: 0.11
Nodes (10): sonner, REQUEST_URGENCY_LABELS, ApproveRejectActions(), ApproveRejectActionsProps, BlockUserActions(), BlockUserActionsProps, RequestInfoProps, STATUS_TONE (+2 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.17
Nodes (14): zod, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+6 more)

### Community 19 - "discussions/index.ts"
Cohesion: 0.43
Nodes (5): DiscussionForm(), DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions

### Community 20 - "blog/[id]/page.tsx"
Cohesion: 0.15
Nodes (19): ArticleSection(), Props, BlogArticleContent(), BlogArticlePage(), Props, revalidate, LOCAL_POSTS, LocalizedPost (+11 more)

### Community 21 - "alert.tsx"
Cohesion: 0.15
Nodes (13): class-variance-authority, Avatar, AvatarProps, avatarVariants, Badge(), BadgeProps, badgeVariants, Chip() (+5 more)

### Community 22 - "authStore.ts"
Cohesion: 0.12
Nodes (18): AuthContext, AuthContextType, AuthProvider(), useAuth(), authService, AuthActions, AuthState, buildAuthStateFromResponse() (+10 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "TrafficAnalytics"
Cohesion: 0.60
Nodes (3): AdminTrafficPage(), MetricBars(), TrafficAnalytics()

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
Cohesion: 0.07
Nodes (54): AdminModerationSubscriptionsPage(), ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, STAFF_ROLES, hasAnyPermission() (+46 more)

### Community 33 - "request/[id]/page.tsx"
Cohesion: 0.11
Nodes (23): generateMetadata(), ProposalDetailPage(), Props, ProposalDetailContent(), generateMetadata(), getCategoryTrail(), getRequest, Props (+15 more)

### Community 34 - "notification/index.ts"
Cohesion: 0.19
Nodes (10): useCreateTelegramLinkToken(), TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), telegramLinkStatusSchema, telegramLinkTokenSchema, telegramLinkService (+2 more)

### Community 36 - "JsonLd"
Cohesion: 0.15
Nodes (17): BlogListPage(), COPY, revalidate, CategoriesPage(), COPY, revalidate, first(), generateMetadata() (+9 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 39 - "LocaleRouteProps"
Cohesion: 0.19
Nodes (12): ContactContent(), ContactPage(), generateMetadata(), CreateRequestPage(), generateMetadata(), generateMetadata(), SupportPage(), SupportContent() (+4 more)

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.10
Nodes (9): useDeleteRequestSubscription(), useMarkAllNotificationsRead(), useMarkNotificationRead(), useUnreadCount(), notificationService, ALL_NOTIFICATION_CHANNELS, channelsForEnabled(), DEFAULT_NOTIFICATION_CHANNELS (+1 more)

### Community 42 - "sitemap.ts"
Cohesion: 0.32
Nodes (12): getBlogEntries(), getCatalogEntries(), getRequestAndProfileEntries(), localizedUrl(), parseDate(), revalidate, safeFetchRequests(), sitemap() (+4 more)

### Community 43 - "GamificationProgress.tsx"
Cohesion: 0.12
Nodes (15): UserRole, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level, sellerAchievements (+7 more)

### Community 44 - "package.json"
Cohesion: 0.04
Nodes (48): name, private, version, autoprefixer, cmdk, embla-carousel-react, eslint, eslint-config-next (+40 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "AdminShell.tsx"
Cohesion: 0.12
Nodes (7): cn(), AdminNav(), AdminNavProps, stripLocale(), AdminShell(), AdminShellProps, stripLocale()

### Community 47 - "@lingui/react"
Cohesion: 0.22
Nodes (13): useRequestStore, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), EditProfileForm(), PROFILE_TYPE_ICONS, ProfileCard() (+5 more)

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

### Community 52 - "ui-v2/index.ts"
Cohesion: 0.07
Nodes (16): date-fns, @lingui/react, lucide-react, Props, RequestContentProps, IRequestBuyer, ReviewCardProps, DiscussionFormProps (+8 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "notification/types/index.ts"
Cohesion: 0.20
Nodes (12): useNotificationPreferences(), useUpdateNotificationPreferences(), notificationPreferenceService, INotification, NotificationChannel, EMAIL, IN_APP, TELEGRAM (+4 more)

### Community 55 - "@tanstack/react-query"
Cohesion: 0.13
Nodes (7): Загальна логіка відгуків, Статуси запитів (RequestStatus), Статуси пропозицій (ProposalStatus), @tanstack/react-query, useCanPropose(), normalizeProposalItem(), proposalService

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.09
Nodes (3): ProfileReviews(), ProfileReviewsProps, renderStars()

### Community 58 - "request/index.ts"
Cohesion: 0.14
Nodes (20): useCancelRequest(), useCreateRequest(), useRequest(), requestSchema, requestService, RequestActions, RequestState, IRequest (+12 more)

### Community 59 - "proposalSchema.ts"
Cohesion: 0.14
Nodes (13): useProposal(), useProposals(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, ProposalStatus (+5 more)

### Community 60 - "uploadFile.ts"
Cohesion: 0.12
Nodes (20): CreateProposalForm(), CreateRequestForm(), createUploadFormData(), getUploadHeaders(), parseUploadResponse(), refreshAccessToken(), uploadFile(), ACCEPTED_IMAGE_ACCEPT_ATTR (+12 more)

### Community 61 - "ProfileSettings.tsx"
Cohesion: 0.10
Nodes (10): CreateRequestContent(), ProfilePage(), getResetPasswordFormSchema(), ResetPasswordForm(), NotificationItem(), NotificationItemProps, localizeHref(), AppRouter (+2 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (16): API та HTTP запити, Environment Variables, Netlify, Валідація:, Висновок, Деплой, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси (+8 more)

### Community 64 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 65 - "card.tsx"
Cohesion: 0.28
Nodes (8): Card, CardBody(), CardDescription(), CardHead(), CardProps, CardTitle(), cardVariants, StatCard()

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "src/auth.ts"
Cohesion: 0.33
Nodes (4): auth, handlers, signIn, signOut

### Community 68 - "admin/layout.tsx"
Cohesion: 0.32
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "utils.ts"
Cohesion: 0.21
Nodes (12): @radix-ui/react-popover, CascadingSelect(), CascadingSelectItem, CascadingSelectProps, CityCombobox(), CityComboboxProps, getPageNumbers(), Pagination() (+4 more)

### Community 70 - "NotificationsTabContent.tsx"
Cohesion: 0.09
Nodes (4): renderStars(), ReviewCard(), ReviewsList(), ReviewsListProps

### Community 71 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.18
Nodes (10): 0. Поточний стан (коротко), 4. Пріоритет P1 — Технічний SEO (інфраструктура), 5. Пріоритет P2 — Контент і семантика (не лише код), 6. Рекомендований порядок впровадження, 7. Критерії успіху (вимірювані), 8.1. Де відповіді варто тримати «з обережністю» (не помилки), 8. Продуктові рішення — статус, 9. Зв’язок із існуючими файлами (+2 more)

### Community 72 - "ProfileTabs.tsx"
Cohesion: 0.18
Nodes (11): GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS, PROFILE_HASH, PROFILE_TAB, ProfileTabId, resolveProfileTab(), syncProfileTabHash() (+3 more)

### Community 73 - "blogService.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 74 - "LinguiProvider"
Cohesion: 0.25
Nodes (11): GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout(), messagesByLocale, LoginLayout(), messagesByLocale (+3 more)

### Community 75 - "Link"
Cohesion: 0.12
Nodes (19): ResetPasswordPage(), ResetPasswordContent(), ForgotPasswordContent(), ForgotPasswordPage(), HowItWorksContent(), HowItWorksPage(), NotFoundPage(), PricingPage() (+11 more)

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.11
Nodes (13): CategoryChipsSelect(), NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, NotificationChannelsSelect(), NotificationChannelsSelectProps, CATEGORY_OPTIONS, NotificationFilters(), NotificationFiltersProps (+5 more)

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "@lingui/core"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 79 - "stepper.tsx"
Cohesion: 0.38
Nodes (6): Marker(), ProgressBar(), Stepper(), StepperStep, StepStatus, WizardFooter()

### Community 80 - "profile/[id]/page.tsx"
Cohesion: 0.21
Nodes (10): generateMetadata(), getDisplayName(), getProfile, ProfileIdPage(), ProfileLookup, Props, revalidate, ProfileContent() (+2 more)

### Community 81 - "Пагінація в додатку"
Cohesion: 0.12
Nodes (16): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+8 more)

### Community 82 - "tooltip.tsx"
Cohesion: 0.33
Nodes (5): @radix-ui/react-tooltip, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger

### Community 83 - "config"
Cohesion: 0.67
Nodes (3): path, config, commitizen

### Community 84 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}

### Community 85 - "api.ts"
Cohesion: 0.20
Nodes (5): failedQueue, MUTATION_METHODS, revalidateAfterMutation(), apiBaseUrl, LS_KEYS

### Community 86 - "sheet.tsx"
Cohesion: 0.25
Nodes (7): @radix-ui/react-dialog, Sheet, SheetClose, SheetContent, SheetHeader(), SheetTitle, SheetTrigger

### Community 87 - "ProposalRejectionReason"
Cohesion: 0.25
Nodes (8): ProposalRejectionReason, ALREADY_PROPOSED, NO_CONTACTS, NOT_SELLER, OWN_REQUEST, REQUEST_NOT_ACTIVE, REQUEST_NOT_FOUND, USER_BLOCKED

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 89 - "Правила та конвенції"
Cohesion: 0.29
Nodes (7): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 5. Обробка помилок, 6. Стан завантаження, Правила та конвенції

### Community 90 - "about/layout.tsx"
Cohesion: 0.38
Nodes (4): AboutLayout(), messagesByLocale, messages, messages

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
Cohesion: 0.14
Nodes (11): @next/third-parties, @vercel/analytics, generateMetadata(), inter, messagesByLocale, Props, RootLayout(), Providers() (+3 more)

### Community 95 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 97 - "Next.js FSD App"
Cohesion: 0.17
Nodes (11): Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules) (+3 more)

### Community 98 - "api"
Cohesion: 0.38
Nodes (4): contactService, IContactRequest, api, ENDPOINTS

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "requestSchema.ts"
Cohesion: 0.19
Nodes (10): HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, useLatestRequests(), useRequests(), createRequestSchema, getRequestsResponseSchema (+2 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 105 - "[locale]/page.tsx"
Cohesion: 0.18
Nodes (4): generateMetadata(), getLatestRequests(), HomePage(), revalidate

### Community 106 - "Faq.tsx"
Cohesion: 0.29
Nodes (5): StatusGuide(), StatusItem(), getFaqPageJsonLd(), Faq(), FAQ_KEYS

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 108 - "next"
Cohesion: 0.15
Nodes (6): nextConfig, SECURITY_HEADERS, next, contentType, size, dynamic

### Community 110 - "route-metadata.ts"
Cohesion: 0.25
Nodes (8): defaultMetadata, routeMetadata, localizedUrl(), metadataByLocale, NOINDEX_ROUTES, OG_LOCALE, defaultMetadata, routeMetadata

### Community 111 - "notificationSchema.ts"
Cohesion: 0.25
Nodes (7): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, requestSubscriptionSchema

### Community 112 - "1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»)"
Cohesion: 0.40
Nodes (5): 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), generateStaticParams()

### Community 113 - "2. Пріоритет P0 — Картки виконавців (E-E-A-T)"
Cohesion: 0.40
Nodes (5): 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія, 2. Пріоритет P0 — Картки виконавців (E-E-A-T), robots()

### Community 114 - "3. Пріоритет P1 — Запити як long-tail контент"
Cohesion: 0.50
Nodes (4): 3.1. Теги та кластеризація, 3.2. Архівування замість видалення, 3.3. Мікророзмітка сторінки запиту, 3. Пріоритет P1 — Запити як long-tail контент

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 121 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 122 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 135 - "locale.ts"
Cohesion: 0.14
Nodes (19): alt, contentType, OpengraphImage(), runtime, size, defaultLocale, isLocale(), LOCALE_COOKIE (+11 more)

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

### Community 179 - "ModerationSubscriptions.tsx"
Cohesion: 0.10
Nodes (8): recharts, RolePreviewSelect(), PIE_COLORS, EnabledFilter, TelegramFilter, Filter, NUMBER_LOCALE, Conversation

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 944 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `proposal/layout.tsx` to `[city]/page.tsx`, `category/index.ts`, `cn`, `CreateRequestForm.tsx`, `Button`, `locale.ts`, `UiKitContent.tsx`, `routes.ts`, `src_ui_v2_index_button`, `breadcrumbs.tsx`, `alert-dialog.tsx`, `RequestInfo.tsx`, `alert.tsx`, `authStore.ts`, `form.tsx`, `entities/admin/index.ts`, `request/[id]/page.tsx`, `JsonLd`, `package.json`, `AdminShell.tsx`, `@lingui/react`, `privacy/layout.tsx`, `ModerationSubscriptions.tsx`, `ui-v2/index.ts`, `support/layout.tsx`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `ProfileSettings.tsx`, `card.tsx`, `admin/layout.tsx`, `utils.ts`, `NotificationsTabContent.tsx`, `ProfileTabs.tsx`, `LinguiProvider`, `RequestSubscriptionModal.tsx`, `@lingui/core`, `stepper.tsx`, `profile/[id]/page.tsx`, `Пагінація в додатку`, `tooltip.tsx`, `sheet.tsx`, `about/layout.tsx`, `blog/layout.tsx`, `contact/layout.tsx`, `pricing/layout.tsx`, `terms/layout.tsx`, `requestSchema.ts`, `checkbox.tsx`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **What connects `{ GET, POST }`, `NEW`, `USED` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `[city]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13765182186234817 - nodes in this community are weakly interconnected._
- **Why does `Message` connect `Чат та повідомлення` to `ModerationSubscriptions.tsx`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `getLocaleFromHeaders` be split into smaller, more focused modules?**
  _Cohesion score 0.09840425531914894 - nodes in this community are weakly interconnected._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.07897793263646923 - nodes in this community are weakly interconnected._
- **Should `CreateRequestForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05231724796942188 - nodes in this community are weakly interconnected._