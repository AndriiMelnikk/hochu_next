# Graph Report - shukayu_next  (2026-10-27)

## Corpus Check
- 491 files · ~142,011 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2318 nodes · 7287 edges · 124 communities (115 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4283243f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- features/auth/index.ts
- axios
- proposal/index.ts
- getLocaleFromHeaders
- sidebar.tsx
- CreateRequestForm.tsx
- @lingui/react
- notificationService.ts
- react
- Input
- NotificationsTabContent.tsx
- DialogContent
- SupportContent.tsx
- entities/user/index.ts
- blog/index.ts
- use-toast.ts
- ProfileSettings.tsx
- entities/auth/index.ts
- ProposalDetailContent.tsx
- Card
- universal-pagination.tsx
- ProposalItem.tsx
- compilerOptions
- compilerOptions
- UserRequestsList.tsx
- devDependencies
- components.json
- utils.ts
- compilerOptions
- chart.tsx
- dependencies
- entities/admin/index.ts
- apple-icon.tsx
- NotificationPreferences.ts
- RequestInfo.tsx
- button.tsx
- scripts
- request/[id]/page.tsx
- blog/layout.tsx
- Детальний опис шарів
- notification/index.ts
- contact/layout.tsx
- GamificationProgress.tsx
- package.json
- Виконано
- react
- Button
- Loading
- breadcrumbs.tsx
- privacy/layout.tsx
- review/index.ts
- Button
- support/layout.tsx
- request/index.ts
- @tanstack/react-query
- category/index.ts
- RequestDetailContent.tsx
- requestService.ts
- proposalSchema.ts
- profile/[id]/page.tsx
- TrafficAnalytics.tsx
- use-toast.ts
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- RequestStatus
- Інтернаціоналізація (i18n) - Інструкція для розробників
- sitemap.ts
- admin/layout.tsx
- toggle-group.tsx
- [locale]/page.tsx
- SEO Technical Backlog — Shukayu
- about/layout.tsx
- how-it-works/layout.tsx
- terms/layout.tsx
- Деплой
- RequestSubscriptionModal.tsx
- Основні сутності
- Роутинг (React Router v7)
- sonner.tsx
- [locale]/layout.tsx
- Форми (React Hook Form)
- Тестування (майбутнє)
- config
- lint-staged
- route.tsx
- BlogListContent
- Опис сторінок та необхідних даних
- Next.js FSD App
- Документація Backend API для проєкту shukayu
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
- TypeScript конфігурація
- Змінні оточення
- 8. Компоненти
- Композиція сторінок Shukayu
- UX універсальних компонентів Shukayu
- Дизайн-система Shukayu
- Header.tsx
- CardHeader
- NotificationSettingsContent.tsx
- 4. Випадаючі поверхні
- 2. Колір
- 3. Кнопки
- 5. Списки
- 7. Перемикачі та вибір
- 8. Модалки та панелі

## God Nodes (most connected - your core abstractions)
1. `cn()` - 264 edges
2. `react` - 138 edges
3. `Button` - 130 edges
4. `@lingui/react` - 104 edges
5. `lucide-react` - 86 edges
6. `getLocaleFromParams()` - 83 edges
7. `Link()` - 53 edges
8. `Card` - 49 edges
9. `CardContent` - 48 edges
10. `Input` - 47 edges

## Surprising Connections (you probably didn't know these)
- `0. Поточний стан (коротко)` --references--> `ICategory`  [INFERRED]
  docs/SEO_TECHNICAL.md → src/entities/category/types/Category.ts
- `Ключові особливості:` --references--> `RootLayout()`  [INFERRED]
  docs/ARCHITECTURE.md → src/app/[locale]/layout.tsx
- `2. Який контроль обрати` --references--> `CityCombobox()`  [INFERRED]
  docs/UX_COMPONENTS.md → src/shared/ui/city-combobox.tsx
- `Чеклист для додавання перекладів` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx
- `Як підключити словник до нової сторінки (Route Layout)` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx

## Import Cycles
- None detected.

## Communities (124 total, 9 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.24
Nodes (8): paginationResultSchema(), requestSubscriptionService, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription, IUpdateRequestSubscriptionRequest, IPaginationResult, RequestSubscriptionModalProps

### Community 1 - "features/auth/index.ts"
Cohesion: 0.25
Nodes (12): next-auth, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), BLOCKED_RETURN_PATHS, buildGoogleAuthCallbackUrl(), getSafeReturnUrl(), isBlockedAuthPath(), resolvePostAuthRedirect() (+4 more)

### Community 2 - "axios"
Cohesion: 0.10
Nodes (21): axios, contactService, IContactRequest, citySchema, searchCitiesResponseSchema, locationService, ICity, ISearchCitiesDto (+13 more)

### Community 3 - "proposal/index.ts"
Cohesion: 0.12
Nodes (22): useCreateProposal(), useProposal(), useRejectProposal(), IProposal, IProposalSeller, IProposalWithSeller, ProposalRejectionReason, ALREADY_PROPOSED (+14 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.10
Nodes (33): AboutContent(), AboutPage(), generateMetadata(), AdminPage(), generateMetadata(), generateMetadata(), PageProps, generateMetadata() (+25 more)

### Community 5 - "sidebar.tsx"
Cohesion: 0.04
Nodes (90): input-otp, @radix-ui/react-context-menu, @radix-ui/react-dropdown-menu, @radix-ui/react-menubar, @radix-ui/react-navigation-menu, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, react-resizable-panels (+82 more)

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.08
Nodes (25): ContactContent(), useUpdateProposal(), RolePreviewSelect(), CATEGORY_OPTIONS, NotificationFilters(), CreateProposalFormProps, CreateProposalFormValues, EditProposalForm() (+17 more)

### Community 7 - "@lingui/react"
Cohesion: 0.10
Nodes (25): nextConfig, @lingui/react, next, ResetPasswordContentProps, LoginContent(), LoginPage(), PricingPage(), PricingContent() (+17 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.11
Nodes (18): useUnreadCount(), notificationService, INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY (+10 more)

### Community 9 - "react"
Cohesion: 0.10
Nodes (26): @lingui/core, CreateLayout(), messagesByLocale, messagesByLocale, PricingLayout(), messagesByLocale, ProfileLayout(), messagesByLocale (+18 more)

### Community 10 - "Input"
Cohesion: 0.18
Nodes (37): @hookform/resolvers, react-hook-form, sonner, useAuthStore, ChangePasswordModal(), ChangePasswordModalProps, ForgotPasswordForm(), getForgotPasswordSchema() (+29 more)

### Community 11 - "NotificationsTabContent.tsx"
Cohesion: 0.12
Nodes (16): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+8 more)

### Community 12 - "DialogContent"
Cohesion: 0.15
Nodes (30): useCreateRequestSubscription(), useUpdateRequestSubscription(), useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), RequestSubscriptionModal(), AcceptProposalModal() (+22 more)

### Community 13 - "SupportContent.tsx"
Cohesion: 0.33
Nodes (9): @radix-ui/react-accordion, SupportPage(), SupportContent(), getFaqPageJsonLd(), AccordionContent, AccordionItem, AccordionTrigger, Faq() (+1 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.16
Nodes (18): PROFILES_QUERY_KEY, useUser(), accountSchema, createProfileSchema, profileSchema, updateContactsSchema, updateProfileSchema, UserRoleEnum (+10 more)

### Community 15 - "blog/index.ts"
Cohesion: 0.33
Nodes (7): useBlogPost(), useBlogPosts(), blogPostSchema, getBlogPostsResponseSchema, blogService, IBlogPost, IGetBlogPostsResponse

### Community 16 - "use-toast.ts"
Cohesion: 0.25
Nodes (12): @radix-ui/react-toast, Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle (+4 more)

### Community 17 - "ProfileSettings.tsx"
Cohesion: 0.11
Nodes (18): @radix-ui/react-tabs, useReviewStats(), TabsContent, TabsList, TabsTrigger, GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS (+10 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.07
Nodes (40): zod, auth, handlers, signIn, signOut, LS_KEYS, AuthContext, AuthContextType (+32 more)

### Community 19 - "ProposalDetailContent.tsx"
Cohesion: 0.18
Nodes (20): date-fns, ProposalDetailContent(), IRequestBuyer, renderStars(), ReviewCard(), DiscussionForm(), DiscussionFormProps, DiscussionItem() (+12 more)

### Community 20 - "Card"
Cohesion: 0.18
Nodes (20): ArticleSection(), Props, BlogArticleContent(), Props, ArticleSectionData, createDefaultSections(), getIconComponent(), iconMap (+12 more)

### Community 21 - "universal-pagination.tsx"
Cohesion: 0.29
Nodes (12): ButtonProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLink(), PaginationLinkProps, PaginationNext() (+4 more)

### Community 22 - "ProposalItem.tsx"
Cohesion: 0.14
Nodes (20): embla-carousel-react, PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS, EditProposalModal(), ProposalItem(), Carousel (+12 more)

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "UserRequestsList.tsx"
Cohesion: 0.39
Nodes (5): useRequestStore, RequestCard(), useDebounce(), UserRequestsList(), UserRequestsListProps

### Community 26 - "devDependencies"
Cohesion: 0.09
Nodes (23): devDependencies, autoprefixer, eslint, eslint-config-next, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier (+15 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "utils.ts"
Cohesion: 0.20
Nodes (18): lucide-react, useCities(), CategoryChipsSelectProps, CascadingSelect(), CascadingSelectProps, CityCombobox(), CityComboboxProps, Command (+10 more)

### Community 29 - "compilerOptions"
Cohesion: 0.07
Nodes (27): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleDetection (+19 more)

### Community 30 - "chart.tsx"
Cohesion: 0.27
Nodes (10): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartStyle(), ChartTooltipContent, getPayloadConfigFromPayload() (+2 more)

### Community 31 - "dependencies"
Cohesion: 0.03
Nodes (59): dependencies, axios, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers (+51 more)

### Community 32 - "entities/admin/index.ts"
Cohesion: 0.05
Nodes (71): clsx, @radix-ui/react-dialog, tailwind-merge, zustand, ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, ALL_STAFF_PERMISSIONS (+63 more)

### Community 34 - "NotificationPreferences.ts"
Cohesion: 0.39
Nodes (3): notificationPreferenceService, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 35 - "RequestInfo.tsx"
Cohesion: 0.23
Nodes (18): useCancelRequest(), ApproveRejectActions(), ApproveRejectActionsProps, BlockUserActions(), BlockUserActionsProps, RequestInfo(), RequestInfoProps, formatChange() (+10 more)

### Community 36 - "button.tsx"
Cohesion: 0.13
Nodes (13): @radix-ui/react-hover-card, @radix-ui/react-slider, @radix-ui/react-slot, react-day-picker, useMarkNotificationRead(), NotificationItem(), CategoryFilterButton(), CategoryFilterButtonProps (+5 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "request/[id]/page.tsx"
Cohesion: 0.20
Nodes (15): generateMetadata(), generateMetadata(), ProposalDetailPage(), Props, generateMetadata(), getRequest, Props, RequestDetailPage() (+7 more)

### Community 39 - "blog/layout.tsx"
Cohesion: 0.38
Nodes (4): BlogLayout(), messagesByLocale, messages, messages

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.10
Nodes (12): useMarkAllNotificationsRead(), useNotifications(), TELEGRAM_LINK_QUERY_KEY, UNLINKED, telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken, mapNotificationFilters() (+4 more)

### Community 42 - "contact/layout.tsx"
Cohesion: 0.38
Nodes (4): ContactLayout(), messagesByLocale, messages, messages

### Community 43 - "GamificationProgress.tsx"
Cohesion: 0.13
Nodes (17): UserRole, Progress, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level (+9 more)

### Community 44 - "package.json"
Cohesion: 0.05
Nodes (34): name, private, version, autoprefixer, cmdk, eslint, eslint-config-next, @eslint/js (+26 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 46 - "react"
Cohesion: 0.19
Nodes (12): react, GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout(), ForgotPasswordLayout(), messagesByLocale, LoginLayout() (+4 more)

### Community 47 - "Button"
Cohesion: 0.24
Nodes (16): react-toastify, useCreateProfile(), ProfileType, useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), CreateProfileModalProps (+8 more)

### Community 48 - "Loading"
Cohesion: 0.14
Nodes (8): first(), RequestPage(), RequestContent(), RequestContentProps, CascadingSelectItem, Error, ErrorProps, LatestRequests()

### Community 49 - "breadcrumbs.tsx"
Cohesion: 0.30
Nodes (12): getBreadcrumbListJsonLd(), Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator() (+4 more)

### Community 50 - "privacy/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, PrivacyLayout(), messages, messages

### Community 51 - "review/index.ts"
Cohesion: 0.15
Nodes (16): useCreateReview(), useReviews(), reviewSchema, reviewService, ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse, IReviewStatsResponse (+8 more)

### Community 52 - "Button"
Cohesion: 0.14
Nodes (17): ResetPasswordPage(), ResetPasswordContent(), ForgotPasswordContent(), ForgotPasswordPage(), HowItWorksContent(), HowItWorksPage(), NotFoundPage(), CreateRequestButton() (+9 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "request/index.ts"
Cohesion: 0.14
Nodes (14): HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, REQUEST_URGENCY_LABELS, useCreateRequest(), useLatestRequests(), useRequests() (+6 more)

### Community 55 - "@tanstack/react-query"
Cohesion: 0.19
Nodes (5): Статуси пропозицій (ProposalStatus), @tanstack/react-query, normalizeProposalItem(), proposalService, IUpdateProposalRequest

### Community 56 - "category/index.ts"
Cohesion: 0.22
Nodes (12): CategoryIdLike, normalizeCategories(), normalizeId(), normalizeParentId(), useCategories(), categorySchema, getCategoriesResponseSchema, objectIdSchema (+4 more)

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.16
Nodes (15): CreateRequestContent(), CreateRequestPage(), RequestDetailContent(), useCanPropose(), useProposals(), useRequest(), useMe(), useUserContacts() (+7 more)

### Community 58 - "requestService.ts"
Cohesion: 0.18
Nodes (13): requestService, RequestActions, RequestState, IRequest, IRequestWithBuyer, ItemCondition, NEW, USED (+5 more)

### Community 59 - "proposalSchema.ts"
Cohesion: 0.16
Nodes (12): createProposalSchema, getProposalsResponseSchema, proposalSchema, proposalSellerSchema, updateProposalSchema, ProposalStatus, ACCEPTED, COMPLETED (+4 more)

### Community 60 - "profile/[id]/page.tsx"
Cohesion: 0.22
Nodes (9): generateMetadata(), getDisplayName(), getProfile, ProfileIdPage(), ProfileLookup, Props, ProfileContent(), isIndexableProfile() (+1 more)

### Community 61 - "TrafficAnalytics.tsx"
Cohesion: 0.22
Nodes (8): recharts, AdminAnalyticsPage(), AdminTrafficPage(), AnalyticsOverview(), PIE_COLORS, MetricBars(), NUMBER_LOCALE, TrafficAnalytics()

### Community 62 - "use-toast.ts"
Cohesion: 0.20
Nodes (13): Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners, memoryState (+5 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.14
Nodes (13): API та HTTP запити, index.ts:, Використання:, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси, Загальна інформація, Налаштування: (+5 more)

### Community 64 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 65 - "RequestStatus"
Cohesion: 0.18
Nodes (10): Загальна логіка відгуків, Статуси запитів (RequestStatus), RequestStatus, ACTIVE, CANCELLED, CLOSED, COMPLETED, PENDING (+2 more)

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 67 - "sitemap.ts"
Cohesion: 0.40
Nodes (9): getBlogEntries(), getRequestAndProfileEntries(), localizedUrl(), parseDate(), revalidate, sitemap(), sitemapEntry(), STATIC_ROUTES (+1 more)

### Community 68 - "admin/layout.tsx"
Cohesion: 0.32
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "toggle-group.tsx"
Cohesion: 0.29
Nodes (8): class-variance-authority, @radix-ui/react-toggle, @radix-ui/react-toggle-group, ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 70 - "[locale]/page.tsx"
Cohesion: 0.22
Nodes (4): generateMetadata(), getLatestRequests(), HomePage(), revalidate

### Community 71 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.08
Nodes (24): 0. Поточний стан (коротко), 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія (+16 more)

### Community 72 - "about/layout.tsx"
Cohesion: 0.38
Nodes (4): AboutLayout(), messagesByLocale, messages, messages

### Community 73 - "how-it-works/layout.tsx"
Cohesion: 0.38
Nodes (4): HowItWorksLayout(), messagesByLocale, messages, messages

### Community 74 - "terms/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, TermsLayout(), messages, messages

### Community 75 - "Деплой"
Cohesion: 0.67
Nodes (3): Environment Variables, Netlify, Деплой

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.17
Nodes (19): NotificationChannel, EMAIL, IN_APP, TELEGRAM, ICategoryPreference, INewRequestsPreference, ALL_NOTIFICATION_CHANNELS, channelsForEnabled() (+11 more)

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 80 - "[locale]/layout.tsx"
Cohesion: 0.08
Nodes (25): @next/third-parties, @vercel/analytics, BlogArticlePage(), Props, generateMetadata(), inter, messagesByLocale, Props (+17 more)

### Community 81 - "Форми (React Hook Form)"
Cohesion: 0.67
Nodes (3): Валідація:, Патерн використання:, Форми (React Hook Form)

### Community 82 - "Тестування (майбутнє)"
Cohesion: 0.67
Nodes (3): Рекомендована структура:, Тестування (майбутнє), Інструменти:

### Community 83 - "config"
Cohesion: 0.67
Nodes (3): path, config, commitizen

### Community 84 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,yml,yaml}, *.{ts,tsx}

### Community 88 - "Опис сторінок та необхідних даних"
Cohesion: 0.18
Nodes (11): 10. Статичні сторінки, 1. Головна сторінка (`/`), 2. Перегляд запитів (`/browse`), 3. Створення запиту (`/create`), 4. Деталі запиту (`/request/[id]`), 5. Деталі пропозиції (`/proposal/[id]`), 6. Профіль користувача (`/profile`), 7. Авторизація (`/login`, `/register`) (+3 more)

### Community 97 - "Next.js FSD App"
Cohesion: 0.14
Nodes (11): Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules) (+3 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 124 - "shared/utils/index.ts"
Cohesion: 0.09
Nodes (27): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 5. Обробка помилок, 6. Стан завантаження, Правила та конвенції, createUploadFormData() (+19 more)

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 135 - "locale.ts"
Cohesion: 0.20
Nodes (17): alt, contentType, OpengraphImage(), runtime, size, defaultLocale, isLocale(), Locale (+9 more)

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

### Community 153 - "TypeScript конфігурація"
Cohesion: 0.67
Nodes (3): Path Aliases:, TypeScript конфігурація, Використання:

### Community 155 - "Змінні оточення"
Cohesion: 0.67
Nodes (3): Використання:, Змінні оточення, Конфігурація:

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

### Community 178 - "Header.tsx"
Cohesion: 0.29
Nodes (3): Header(), LOCALE_OPTIONS, LocaleSwitcher()

### Community 179 - "CardHeader"
Cohesion: 0.14
Nodes (33): AdminContentBlogPage(), AdminContentPagesPage(), AdminContentPricingPage(), AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationRequestsPage(), AdminModerationSubscriptionsPage(), AdminModerationUsersPage() (+25 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.12
Nodes (19): useCreateTelegramLinkToken(), useDeleteRequestSubscription(), useNotificationPreferences(), useRequestSubscriptions(), useTelegramLinkStatus(), useUnlinkTelegram(), useUpdateNotificationPreferences(), RequestSubscriptionCard() (+11 more)

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
- **46 isolated node(s):** `{ GET, POST }`, `ALREADY_PROPOSED`, `NO_CONTACTS`, `NOT_SELLER`, `OWN_REQUEST` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 770 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `features/auth/index.ts`, `getLocaleFromHeaders`, `sidebar.tsx`, `CreateRequestForm.tsx`, `@lingui/react`, `react`, `Input`, `NotificationsTabContent.tsx`, `DialogContent`, `SupportContent.tsx`, `use-toast.ts`, `ProfileSettings.tsx`, `entities/auth/index.ts`, `ProposalDetailContent.tsx`, `Card`, `universal-pagination.tsx`, `ProposalItem.tsx`, `UserRequestsList.tsx`, `utils.ts`, `chart.tsx`, `entities/admin/index.ts`, `RequestInfo.tsx`, `button.tsx`, `request/[id]/page.tsx`, `blog/layout.tsx`, `notification/index.ts`, `contact/layout.tsx`, `GamificationProgress.tsx`, `package.json`, `Button`, `Loading`, `breadcrumbs.tsx`, `privacy/layout.tsx`, `review/index.ts`, `Button`, `support/layout.tsx`, `request/index.ts`, `NotificationSettingsContent.tsx`, `CardHeader`, `RequestDetailContent.tsx`, `Header.tsx`, `profile/[id]/page.tsx`, `TrafficAnalytics.tsx`, `use-toast.ts`, `admin/layout.tsx`, `toggle-group.tsx`, `about/layout.tsx`, `how-it-works/layout.tsx`, `terms/layout.tsx`, `RequestSubscriptionModal.tsx`?**
  _High betweenness centrality (0.172) - this node is a cross-community bridge._
- **What connects `{ GET, POST }`, `ALREADY_PROPOSED`, `NO_CONTACTS` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `axios` be split into smaller, more focused modules?**
  _Cohesion score 0.09634146341463415 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `sidebar.tsx` to `CreateRequestForm.tsx`, `Input`, `DialogContent`, `SupportContent.tsx`, `use-toast.ts`, `ProfileSettings.tsx`, `ProposalDetailContent.tsx`, `Card`, `universal-pagination.tsx`, `ProposalItem.tsx`, `utils.ts`, `chart.tsx`, `entities/admin/index.ts`, `RequestInfo.tsx`, `button.tsx`, `GamificationProgress.tsx`, `Button`, `Loading`, `breadcrumbs.tsx`, `Header.tsx`, `review/index.ts`, `CardHeader`, `NotificationSettingsContent.tsx`, `Button`, `toggle-group.tsx`, `RequestSubscriptionModal.tsx`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Should `proposal/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12096774193548387 - nodes in this community are weakly interconnected._
- **Why does `CityCombobox()` connect `utils.ts` to `sidebar.tsx`, `CreateRequestForm.tsx`, `Input`, `RequestSubscriptionModal.tsx`, `DialogContent`, `Button`, `UX універсальних компонентів Shukayu`, `UserRequestsList.tsx`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Should `getLocaleFromHeaders` be split into smaller, more focused modules?**
  _Cohesion score 0.09579100145137881 - nodes in this community are weakly interconnected._