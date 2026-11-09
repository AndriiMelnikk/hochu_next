# Graph Report - shukayu_next  (2026-11-09)

## Corpus Check
- 486 files · ~143,294 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2309 nodes · 5975 edges · 144 communities (129 shown, 15 thin omitted)
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
- @lingui/react
- @tanstack/react-query
- breadcrumbs.tsx
- entities/user/index.ts
- schemas.ts
- alert-dialog.tsx
- [slug]/page.tsx
- entities/auth/index.ts
- discussions/index.ts
- BlogArticleContent.tsx
- alert.tsx
- ProposalList.tsx
- compilerOptions
- compilerOptions
- src_shared_ui_select_select
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
- StaffTable.tsx
- LocaleRouteProps
- Детальний опис шарів
- NotificationsTabContent.tsx
- sitemap.ts
- ProfileTabs.tsx
- package.json
- Виконано
- AdminShell.tsx
- @lingui/react
- Структура файлів компонента
- Нотифікації (React Toastify)
- privacy/layout.tsx
- review/index.ts
- lucide-react
- support/layout.tsx
- notificationSchema.ts
- proposalService
- @lingui/cli
- RequestDetailContent.tsx
- request/index.ts
- proposalSchema.ts
- uploadFile.ts
- login/page.tsx
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- card.tsx
- Інтернаціоналізація (i18n) - Інструкція для розробників
- src/auth.ts
- admin/layout.tsx
- utils.ts
- CatalogView.tsx
- SEO Technical Backlog — Shukayu
- Locale
- blogService.ts
- LinguiProvider
- site-header.tsx
- RequestSubscriptionModal.tsx
- Основні сутності
- @lingui/core
- stepper.tsx
- profile/[id]/page.tsx
- ModerationSubscriptions.tsx
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
- typography.tsx
- terms/layout.tsx
- ContentPages.tsx
- Next.js FSD App
- api
- ModerationReports.tsx
- chat/index.ts
- cn.ts
- proposal/const.ts
- CancelAcceptedProposalModal.tsx
- Документація Backend API для проєкту shukayu
- CancelProposalModal.tsx
- RejectProposalModal.tsx
- Роутинг (React Router v7)
- apple-icon.tsx
- Форми (React Hook Form)
- Тестування (майбутнє)
- next.config.ts
- route.tsx
- Аутентифікація та авторизація
- shared/utils/index.ts
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
- CardHeader
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
5. `lucide-react` - 75 edges
6. `UiKitContent()` - 62 edges
7. `getMetadataForRoute()` - 51 edges
8. `next` - 51 edges
9. `Link()` - 50 edges
10. `routes` - 49 edges

## Surprising Connections (you probably didn't know these)
- `0. Поточний стан (коротко)` --references--> `ICategory`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/entities/category/types/Category.ts
- `Ключові особливості:` --references--> `RootLayout()`  [INFERRED]
  docs/ARCHITECTURE.md → src/app/[locale]/layout.tsx
- `1.2. Контент посадкової категорії (не порожній лістинг)` --references--> `getFaqPageJsonLd()`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/shared/seo/schemas.ts
- `Чеклист для додавання перекладів` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx
- `Як підключити словник до нової сторінки (Route Layout)` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx

## Import Cycles
- None detected.

## Communities (144 total, 15 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.26
Nodes (6): requestSubscriptionService, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription, IUpdateRequestSubscriptionRequest, RequestSubscriptionModalProps

### Community 1 - "[city]/page.tsx"
Cohesion: 0.20
Nodes (16): CatalogStats, CopyInput, getCatalogCopy(), isIndexableCategoryCity(), CategoryCityPage(), generateMetadata(), loadCategoryCity(), Props (+8 more)

### Community 2 - "category/index.ts"
Cohesion: 0.23
Nodes (12): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), useCategories(), CategoryIndex, categorySchema, getCategoriesResponseSchema (+4 more)

### Community 3 - "@tanstack/react-query"
Cohesion: 0.24
Nodes (13): useCreateProposal(), IProposal, IProposalSeller, ICreateProposalRequest, IUpdateProposalRequest, ICanProposeResponse, IGetProposalsResponse, getProposalRejectionReasonFromError() (+5 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.10
Nodes (31): AboutContent(), AboutPage(), generateMetadata(), generateMetadata(), generateMetadata(), PageProps, ResetPasswordPage(), generateMetadata() (+23 more)

### Community 5 - "cn"
Cohesion: 0.11
Nodes (25): @radix-ui/react-accordion, CategoryFilterButton(), CategoryFilterButtonProps, cn(), Accordion, AccordionContent, AccordionItem, AccordionTrigger (+17 more)

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.06
Nodes (23): @hookform/resolvers, react-hook-form, CreateRequestContent(), useChangePassword(), useMe(), ChangePasswordModal(), ChangePasswordModalProps, ForgotPasswordForm() (+15 more)

### Community 7 - "Button"
Cohesion: 0.16
Nodes (27): sonner, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), PricingContent(), ProfilePage(), buildAuthStateFromResponse(), buildUserFromAuthResponse(), persistAuthTokens() (+19 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.12
Nodes (19): useUnreadCount(), paginationResultSchema(), notificationService, INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS (+11 more)

### Community 9 - "proposal/layout.tsx"
Cohesion: 0.12
Nodes (19): @lingui/core, CreateLayout(), messagesByLocale, messagesByLocale, ProfileLayout(), messagesByLocale, ProposalLayout(), messagesByLocale (+11 more)

### Community 10 - "UiKitContent.tsx"
Cohesion: 0.09
Nodes (47): metadata, UiKitPage(), Section(), UiKitContent(), CardHeader(), CardSection(), SettingsRow(), DropdownMenu (+39 more)

### Community 11 - "@lingui/react"
Cohesion: 0.08
Nodes (37): @lingui/react, next, ResetPasswordContent(), ResetPasswordContentProps, ForgotPasswordContent(), LoginContent(), LoginContentProps, NotFoundPage() (+29 more)

### Community 12 - "@tanstack/react-query"
Cohesion: 0.21
Nodes (8): @tanstack/react-query, useAcceptProposal(), useCanPropose(), useCompleteProposal(), AcceptProposalModal(), AcceptProposalModalProps, CompleteProposalModal(), CompleteProposalModalProps

### Community 13 - "breadcrumbs.tsx"
Cohesion: 0.16
Nodes (17): date-fns, AdminPage(), ProposalDetailPage(), Props, ProposalDetailContent(), getCategoryPath(), localizeHref(), Breadcrumb (+9 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.12
Nodes (25): axios, PROFILES_QUERY_KEY, useUser(), useUserContacts(), accountSchema, createProfileSchema, profileSchema, updateContactsSchema (+17 more)

### Community 15 - "schemas.ts"
Cohesion: 0.08
Nodes (24): @next/third-parties, @vercel/analytics, generateMetadata(), inter, messagesByLocale, Props, RootLayout(), AI_BOTS (+16 more)

### Community 16 - "alert-dialog.tsx"
Cohesion: 0.13
Nodes (18): @radix-ui/react-alert-dialog, @radix-ui/react-slot, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter() (+10 more)

### Community 17 - "[slug]/page.tsx"
Cohesion: 0.21
Nodes (13): getCatalogStats, isIndexableCategory(), CategoriesPage(), COPY, revalidate, CategoryPage(), generateMetadata(), loadCategory() (+5 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.10
Nodes (25): zod, zustand, LS_KEYS, AuthContext, AuthContextType, authResponseSchema, changePasswordSchema, forgotPasswordSchema (+17 more)

### Community 19 - "discussions/index.ts"
Cohesion: 0.33
Nodes (6): DiscussionForm(), DiscussionFormProps, DiscussionItem(), DiscussionItemProps, DiscussionList(), discussions

### Community 20 - "BlogArticleContent.tsx"
Cohesion: 0.27
Nodes (10): ArticleSection(), Props, BlogArticleContent(), Props, ArticleSectionData, createDefaultSections(), getIconComponent(), iconMap (+2 more)

### Community 21 - "alert.tsx"
Cohesion: 0.15
Nodes (13): class-variance-authority, Alert(), AlertDescription(), AlertProps, AlertTitle(), alertVariants, Avatar, AvatarProps (+5 more)

### Community 22 - "ProposalList.tsx"
Cohesion: 0.27
Nodes (8): useProposals(), useUpdateProposal(), IProposalWithSeller, EditProposalForm(), EditProposalModal(), EditProposalModalProps, ProposalItem(), ProposalList()

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "src_shared_ui_select_select"
Cohesion: 0.13
Nodes (11): AdminAnalyticsPage(), AdminTrafficPage(), AnalyticsRange, ApproveRejectActionsProps, BlockUserActionsProps, useCurrentLocale(), AnalyticsOverview(), PIE_COLORS (+3 more)

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
Cohesion: 0.12
Nodes (35): adminBlogPosts, adminInfoPages, adminMockData, adminPricingPlans, adminRequestSubscriptions, adminStaff, moderationProposals, moderationReports (+27 more)

### Community 33 - "request/[id]/page.tsx"
Cohesion: 0.13
Nodes (23): BlogArticlePage(), generateMetadata(), Props, revalidate, generateMetadata(), getCategoryTrail(), getRequest, Props (+15 more)

### Community 34 - "notification/index.ts"
Cohesion: 0.14
Nodes (9): useCreateTelegramLinkToken(), TELEGRAM_LINK_QUERY_KEY, UNLINKED, useTelegramLinkStatus(), useUnlinkTelegram(), telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken (+1 more)

### Community 35 - "ModerationUsers.tsx"
Cohesion: 0.48
Nodes (4): AdminModerationUsersPage(), BlockUserActions(), Filter, ModerationUsers()

### Community 36 - "JsonLd"
Cohesion: 0.12
Nodes (16): BlogListPage(), COPY, revalidate, first(), generateMetadata(), parsePage(), Props, RequestPage() (+8 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "StaffTable.tsx"
Cohesion: 0.22
Nodes (8): AdminStaffPage(), ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS, STAFF_ROLES, hasAnyPermission(), AdminPreviewState, StaffRole, StaffTable()

### Community 39 - "LocaleRouteProps"
Cohesion: 0.33
Nodes (8): ContactPage(), CreateRequestPage(), SupportPage(), LocaleRouteProps, PAGE_COPY, PageKey, SeoTextBlock, SeoTextSection()

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "NotificationsTabContent.tsx"
Cohesion: 0.18
Nodes (12): useMarkAllNotificationsRead(), useMarkNotificationRead(), useNotifications(), mapNotificationFilters(), NotificationScope, useProfiles(), CATEGORY_OPTIONS, NotificationFilters() (+4 more)

### Community 42 - "sitemap.ts"
Cohesion: 0.33
Nodes (12): getBlogEntries(), getCatalogEntries(), getRequestAndProfileEntries(), localizedUrl(), parseDate(), revalidate, safeFetchRequests(), sitemap() (+4 more)

### Community 43 - "ProfileTabs.tsx"
Cohesion: 0.06
Nodes (33): recharts, UserRole, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level (+25 more)

### Community 44 - "package.json"
Cohesion: 0.04
Nodes (46): name, private, version, autoprefixer, cmdk, embla-carousel-react, eslint, eslint-config-next (+38 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "AdminShell.tsx"
Cohesion: 0.17
Nodes (15): ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, hasPermission(), useAdminPreviewStore, StaffPermission, PermissionGateProps, RolePreviewSelect() (+7 more)

### Community 47 - "@lingui/react"
Cohesion: 0.19
Nodes (19): react-toastify, useCreateProfile(), IProfile, ProfileType, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal() (+11 more)

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
Cohesion: 0.07
Nodes (36): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+28 more)

### Community 52 - "lucide-react"
Cohesion: 0.09
Nodes (12): lucide-react, HowItWorksContent(), getLatestRequests(), HomePage(), revalidate, CreateRequestButton(), StatusGuide(), StatusItem() (+4 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "notificationSchema.ts"
Cohesion: 0.16
Nodes (12): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, requestSubscriptionSchema, telegramLinkStatusSchema (+4 more)

### Community 55 - "proposalService"
Cohesion: 0.24
Nodes (3): Статуси пропозицій (ProposalStatus), normalizeProposalItem(), proposalService

### Community 58 - "request/index.ts"
Cohesion: 0.06
Nodes (48): Загальна логіка відгуків, Статуси запитів (RequestStatus), useAuth(), HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, REQUEST_URGENCY_LABELS (+40 more)

### Community 59 - "proposalSchema.ts"
Cohesion: 0.14
Nodes (13): useProposal(), createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, ProposalStatus, ACCEPTED (+5 more)

### Community 60 - "uploadFile.ts"
Cohesion: 0.30
Nodes (8): createUploadFormData(), getUploadHeaders(), parseUploadResponse(), refreshAccessToken(), uploadFile(), assertValidUploadedImageUrl(), ImageUploadError, normalizeImageFileForUpload()

### Community 61 - "login/page.tsx"
Cohesion: 0.27
Nodes (7): first(), LoginPage(), PageProps, first(), PageProps, RegisterPage(), RegisterContent()

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.12
Nodes (16): API та HTTP запити, Environment Variables, Netlify, Path Aliases:, TypeScript конфігурація, Використання:, Використання:, Висновок (+8 more)

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
Cohesion: 0.29
Nodes (5): next-auth, auth, handlers, signIn, signOut

### Community 68 - "admin/layout.tsx"
Cohesion: 0.32
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "utils.ts"
Cohesion: 0.13
Nodes (16): @radix-ui/react-popover, CascadingSelect(), CascadingSelectItem, CascadingSelectProps, CityCombobox(), CityComboboxProps, getPageNumbers(), Pagination() (+8 more)

### Community 70 - "CatalogView.tsx"
Cohesion: 0.19
Nodes (8): CatalogLink, CatalogView(), CatalogViewProps, LinkChips(), CatalogCopy, getBreadcrumbListJsonLd(), COPY, SimilarRequestsProps

### Community 71 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.08
Nodes (24): 0. Поточний стан (коротко), 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія (+16 more)

### Community 72 - "Locale"
Cohesion: 0.39
Nodes (6): LOCAL_POSTS, LocalizedPost, LocalPost, getBlogPost(), toBlogPost(), Locale

### Community 73 - "blogService.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 74 - "LinguiProvider"
Cohesion: 0.17
Nodes (15): react, GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout(), messagesByLocale, LoginLayout() (+7 more)

### Community 75 - "site-header.tsx"
Cohesion: 0.38
Nodes (5): switchLocaleInPathname(), LS_KEYS, LOCALES, LocaleSwitcher(), SiteHeader()

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.15
Nodes (20): useCreateRequestSubscription(), useUpdateRequestSubscription(), NotificationChannel, EMAIL, IN_APP, TELEGRAM, ICategoryPreference, INewRequestsPreference (+12 more)

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
Cohesion: 0.20
Nodes (10): generateMetadata(), getDisplayName(), getProfile, ProfileIdPage(), ProfileLookup, Props, revalidate, ProfileContent() (+2 more)

### Community 81 - "ModerationSubscriptions.tsx"
Cohesion: 0.23
Nodes (6): AdminModerationSubscriptionsPage(), adminNotificationService, filterMock(), EnabledFilter, ModerationSubscriptions(), TelegramFilter

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
Cohesion: 0.22
Nodes (4): failedQueue, MUTATION_METHODS, revalidateAfterMutation(), apiBaseUrl

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
Cohesion: 0.33
Nodes (6): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 6. Стан завантаження, Правила та конвенції

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

### Community 94 - "typography.tsx"
Cohesion: 0.40
Nodes (5): DescriptionItem(), Heading(), HeadingProps, headingVariants, TextLink

### Community 95 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 97 - "Next.js FSD App"
Cohesion: 0.17
Nodes (11): Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules) (+3 more)

### Community 98 - "api"
Cohesion: 0.32
Nodes (5): ContactContent(), contactService, IContactRequest, api, ENDPOINTS

### Community 102 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 103 - "CancelAcceptedProposalModal.tsx"
Cohesion: 0.60
Nodes (3): useCancelAcceptedProposal(), CancelAcceptedProposalModal(), CancelAcceptedProposalModalProps

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 105 - "CancelProposalModal.tsx"
Cohesion: 0.60
Nodes (3): useCancelProposal(), CancelProposalModal(), CancelProposalModalProps

### Community 106 - "RejectProposalModal.tsx"
Cohesion: 0.60
Nodes (3): useRejectProposal(), RejectProposalModal(), RejectProposalModalProps

### Community 107 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 110 - "Форми (React Hook Form)"
Cohesion: 0.67
Nodes (3): Валідація:, Патерн використання:, Форми (React Hook Form)

### Community 111 - "Тестування (майбутнє)"
Cohesion: 0.67
Nodes (3): Рекомендована структура:, Тестування (майбутнє), Інструменти:

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 124 - "shared/utils/index.ts"
Cohesion: 0.16
Nodes (13): 5. Обробка помилок, ACCEPTED_IMAGE_ACCEPT_ATTR, ACCEPTED_IMAGE_TYPES, MAX_IMAGES, downloadFile(), ACCEPTED_EXTENSIONS, EXT_TO_MIME, getFileExtension() (+5 more)

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 135 - "locale.ts"
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

### Community 179 - "CardHeader"
Cohesion: 0.17
Nodes (10): AdminContentBlogPage(), AdminContentPricingPage(), AdminModerationProposalsPage(), AdminModerationRequestsPage(), ApproveRejectActions(), PermissionGate(), ContentBlog(), ContentPricing() (+2 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.13
Nodes (14): useDeleteRequestSubscription(), useNotificationPreferences(), useRequestSubscriptions(), useUpdateNotificationPreferences(), NotificationPreferencesSection(), RequestSubscriptionCard(), RequestSubscriptionCardProps, AccountMessagesSection() (+6 more)

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
- **67 isolated node(s):** `{ GET, POST }`, `@radix-ui/react-toast`, `embla-carousel-react`, `NEW`, `USED` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 833 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `LinguiProvider` to `[city]/page.tsx`, `category/index.ts`, `cn`, `CreateRequestForm.tsx`, `Button`, `proposal/layout.tsx`, `UiKitContent.tsx`, `@lingui/react`, `breadcrumbs.tsx`, `entities/user/index.ts`, `alert-dialog.tsx`, `entities/auth/index.ts`, `discussions/index.ts`, `alert.tsx`, `ProposalList.tsx`, `src_shared_ui_select_select`, `form.tsx`, `request/[id]/page.tsx`, `ModerationUsers.tsx`, `JsonLd`, `StaffTable.tsx`, `NotificationsTabContent.tsx`, `ProfileTabs.tsx`, `package.json`, `AdminShell.tsx`, `@lingui/react`, `privacy/layout.tsx`, `review/index.ts`, `CardHeader`, `support/layout.tsx`, `lucide-react`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `request/index.ts`, `card.tsx`, `admin/layout.tsx`, `utils.ts`, `site-header.tsx`, `RequestSubscriptionModal.tsx`, `@lingui/core`, `stepper.tsx`, `profile/[id]/page.tsx`, `ModerationSubscriptions.tsx`, `tooltip.tsx`, `sheet.tsx`, `about/layout.tsx`, `blog/layout.tsx`, `contact/layout.tsx`, `pricing/layout.tsx`, `typography.tsx`, `terms/layout.tsx`, `api`, `ModerationReports.tsx`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **What connects `{ GET, POST }`, `@radix-ui/react-toast`, `embla-carousel-react` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `getLocaleFromHeaders` be split into smaller, more focused modules?**
  _Cohesion score 0.09639953542392567 - nodes in this community are weakly interconnected._
- **Why does `@lingui/react` connect `@lingui/react` to `getLocaleFromHeaders`, `CreateRequestForm.tsx`, `Button`, `proposal/layout.tsx`, `@tanstack/react-query`, `breadcrumbs.tsx`, `entities/user/index.ts`, `discussions/index.ts`, `BlogArticleContent.tsx`, `ProposalList.tsx`, `src_shared_ui_select_select`, `notification/index.ts`, `ModerationUsers.tsx`, `JsonLd`, `StaffTable.tsx`, `NotificationsTabContent.tsx`, `ProfileTabs.tsx`, `package.json`, `AdminShell.tsx`, `@lingui/react`, `review/index.ts`, `lucide-react`, `NotificationSettingsContent.tsx`, `CardHeader`, `RequestDetailContent.tsx`, `request/index.ts`, `utils.ts`, `site-header.tsx`, `RequestSubscriptionModal.tsx`, `profile/[id]/page.tsx`, `ModerationSubscriptions.tsx`, `ContentPages.tsx`, `api`, `ModerationReports.tsx`, `CancelAcceptedProposalModal.tsx`, `CancelProposalModal.tsx`, `RejectProposalModal.tsx`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.10887096774193548 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `CreateRequestForm.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06352941176470588 - nodes in this community are weakly interconnected._