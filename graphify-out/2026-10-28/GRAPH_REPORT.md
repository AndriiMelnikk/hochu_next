# Graph Report - shukayu_next  (2026-10-27)

## Corpus Check
- 491 files · ~142,061 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: (none) 8, .css 3, .ico 2)

## Summary
- 2320 nodes · 7293 edges · 117 communities (103 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `645e6b42`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- requestSubscriptionService.ts
- IAuthResponse
- breadcrumbs.tsx
- proposal/index.ts
- getLocaleFromHeaders
- cn
- CreateRequestForm.tsx
- Button
- notificationService.ts
- react
- Input
- sidebar.tsx
- DialogContent
- SupportContent.tsx
- entities/user/index.ts
- [locale]/layout.tsx
- use-toast.ts
- ProfileSettings.tsx
- entities/auth/index.ts
- ProposalDetailContent.tsx
- Card
- universal-pagination.tsx
- proposal/const.ts
- compilerOptions
- compilerOptions
- authStore.ts
- devDependencies
- components.json
- lucide-react
- compilerOptions
- chart.tsx
- dependencies
- entities/admin/index.ts
- apple-icon.tsx
- notificationSchema.ts
- RequestInfo.tsx
- NotificationsTabContent.tsx
- scripts
- navigation-menu.tsx
- drawer.tsx
- Детальний опис шарів
- notification/index.ts
- input-otp.tsx
- GamificationProgress.tsx
- package.json
- Виконано
- chat/index.ts
- ProfilesSwitcher.tsx
- Структура файлів компонента
- Нотифікації (React Toastify)
- privacy/layout.tsx
- review/index.ts
- Link
- support/layout.tsx
- ItemCondition
- @tanstack/react-query
- @lingui/cli
- RequestDetailContent.tsx
- requestService.ts
- proposalSchema.ts
- @radix-ui/react-aspect-ratio
- @radix-ui/react-collapsible
- tailwindcss
- Детальний опис архітектури проєкту MOOC Frontend
- eslint.config.mjs
- RequestStatus
- Інтернаціоналізація (i18n) - Інструкція для розробників
- admin/layout.tsx
- toggle-group.tsx
- [locale]/page.tsx
- SEO Technical Backlog — Shukayu
- Деплой
- RequestSubscriptionModal.tsx
- Основні сутності
- Роутинг (React Router v7)
- sonner.tsx
- profile/[id]/page.tsx
- Форми (React Hook Form)
- Тестування (майбутнє)
- config
- lint-staged
- route.tsx
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
- `2. Який контроль обрати` --references--> `CityCombobox()`  [INFERRED]
  docs/UX_COMPONENTS.md → src/shared/ui/city-combobox.tsx
- `Ключові особливості:` --references--> `RootLayout()`  [INFERRED]
  docs/ARCHITECTURE.md → src/app/[locale]/layout.tsx
- `Чеклист для додавання перекладів` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx
- `Як підключити словник до нової сторінки (Route Layout)` --references--> `LinguiProvider()`  [INFERRED]
  docs/I18N.md → src/app/providers/LinguiProvider.tsx

## Import Cycles
- None detected.

## Communities (117 total, 14 thin omitted)

### Community 0 - "requestSubscriptionService.ts"
Cohesion: 0.19
Nodes (11): requestSubscriptionService, NotificationChannel, EMAIL, IN_APP, TELEGRAM, IGetRequestSubscriptionsRequest, ICreateRequestSubscriptionRequest, IRequestSubscription (+3 more)

### Community 1 - "IAuthResponse"
Cohesion: 0.19
Nodes (10): next-auth, auth, handlers, signIn, signOut, IAuthResponse, JWT, next-auth (+2 more)

### Community 2 - "breadcrumbs.tsx"
Cohesion: 0.05
Nodes (49): axios, @radix-ui/react-slot, adminNotificationService, adminRequestSubscriptionSchema, adminRequestSubscriptionsResultSchema, filterMock(), IGetAdminRequestSubscriptionsParams, useBlogPost() (+41 more)

### Community 3 - "proposal/index.ts"
Cohesion: 0.15
Nodes (20): useCreateProposal(), useProposal(), useRejectProposal(), proposalSchema, IProposal, IProposalSeller, ProposalRejectionReason, ALREADY_PROPOSED (+12 more)

### Community 4 - "getLocaleFromHeaders"
Cohesion: 0.07
Nodes (48): 1.1. Дерево посадкових сторінок: локаль → місто → категорія → підкатегорія, AboutContent(), AboutPage(), generateMetadata(), AdminPage(), generateMetadata(), generateMetadata(), PageProps (+40 more)

### Community 5 - "cn"
Cohesion: 0.06
Nodes (50): @radix-ui/react-context-menu, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-menubar, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-slider, react-resizable-panels (+42 more)

### Community 6 - "CreateRequestForm.tsx"
Cohesion: 0.08
Nodes (23): ContactContent(), useUpdateProposal(), RolePreviewSelect(), CreateProposalFormProps, CreateProposalFormValues, EditProposalFormProps, EditProposalFormValues, CategoryFilterButton() (+15 more)

### Community 7 - "Button"
Cohesion: 0.10
Nodes (39): nextConfig, next, sonner, GoogleAuthCompleteContent(), GoogleAuthCompletePage(), LoginContent(), LoginPage(), PricingPage() (+31 more)

### Community 8 - "notificationService.ts"
Cohesion: 0.13
Nodes (18): paginationResultSchema(), notificationService, INotification, NotificationCategory, ACHIEVEMENTS, MESSAGES, MY_PROPOSAL_STATUS, MY_REQUEST_ACTIVITY (+10 more)

### Community 9 - "react"
Cohesion: 0.05
Nodes (56): @lingui/core, react, AboutLayout(), messagesByLocale, GoogleAuthCompleteLayout(), messagesByLocale, messagesByLocale, ResetPasswordLayout() (+48 more)

### Community 10 - "Input"
Cohesion: 0.19
Nodes (33): @hookform/resolvers, react-hook-form, ChangePasswordModal(), ChangePasswordModalProps, ForgotPasswordForm(), getForgotPasswordSchema(), getResetPasswordFormSchema(), ResetPasswordForm() (+25 more)

### Community 11 - "sidebar.tsx"
Cohesion: 0.08
Nodes (29): useIsMobile(), Separator, SidebarContent, SidebarContext, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent (+21 more)

### Community 12 - "DialogContent"
Cohesion: 0.10
Nodes (50): embla-carousel-react, @lingui/react, useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCompleteProposal(), AcceptProposalModal(), AcceptProposalModalProps (+42 more)

### Community 13 - "SupportContent.tsx"
Cohesion: 0.27
Nodes (12): @radix-ui/react-accordion, SupportContent(), StatusGuide(), StatusItem(), JsonLd(), JsonLdProps, getFaqPageJsonLd(), AccordionContent (+4 more)

### Community 14 - "entities/user/index.ts"
Cohesion: 0.14
Nodes (22): PROFILES_QUERY_KEY, useCreateProfile(), useUser(), accountSchema, createProfileSchema, profileSchema, updateContactsSchema, updateProfileSchema (+14 more)

### Community 15 - "[locale]/layout.tsx"
Cohesion: 0.13
Nodes (13): @next/third-parties, @vercel/analytics, generateMetadata(), inter, messagesByLocale, Props, RootLayout(), Providers() (+5 more)

### Community 16 - "use-toast.ts"
Cohesion: 0.12
Nodes (25): @radix-ui/react-toast, Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle (+17 more)

### Community 17 - "ProfileSettings.tsx"
Cohesion: 0.11
Nodes (18): @radix-ui/react-tabs, useReviewStats(), TabsContent, TabsList, TabsTrigger, ProfileSettings(), GUEST_PROFILE_TABS, HASH_TO_TAB (+10 more)

### Community 18 - "entities/auth/index.ts"
Cohesion: 0.13
Nodes (15): zod, LS_KEYS, useChangePassword(), authResponseSchema, changePasswordSchema, forgotPasswordSchema, loginSchema, registerSchema (+7 more)

### Community 19 - "ProposalDetailContent.tsx"
Cohesion: 0.16
Nodes (23): date-fns, ProposalDetailContent(), IRequestBuyer, renderStars(), ReviewCard(), DiscussionForm(), DiscussionFormProps, DiscussionItem() (+15 more)

### Community 20 - "Card"
Cohesion: 0.16
Nodes (19): recharts, AdminAnalyticsPage(), ArticleSection(), Props, BlogArticleContent(), Props, ArticleSectionData, createDefaultSections() (+11 more)

### Community 21 - "universal-pagination.tsx"
Cohesion: 0.19
Nodes (16): react-day-picker, ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis() (+8 more)

### Community 22 - "proposal/const.ts"
Cohesion: 0.40
Nodes (4): PROPOSAL_DELIVERY_TIME, PROPOSAL_DELIVERY_TIME_LABELS, PROPOSAL_WARRANTY, PROPOSAL_WARRANTY_LABELS

### Community 23 - "compilerOptions"
Cohesion: 0.06
Nodes (30): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+22 more)

### Community 24 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection, moduleResolution, noEmit (+7 more)

### Community 25 - "authStore.ts"
Cohesion: 0.16
Nodes (14): AuthContext, AuthContextType, useAuth(), AuthActions, AuthState, buildAuthStateFromResponse(), buildUserFromAuthResponse(), persistAuthTokens() (+6 more)

### Community 26 - "devDependencies"
Cohesion: 0.09
Nodes (23): devDependencies, autoprefixer, eslint, eslint-config-next, eslint-config-prettier, @eslint/eslintrc, @eslint/js, eslint-plugin-prettier (+15 more)

### Community 27 - "components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 28 - "lucide-react"
Cohesion: 0.09
Nodes (24): lucide-react, @radix-ui/react-dialog, RequestContent(), RequestContentProps, useCities(), useDebounce(), CascadingSelect(), CascadingSelectItem (+16 more)

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
Cohesion: 0.06
Nodes (58): clsx, tailwind-merge, zustand, ADMIN_NAV_GROUP_KEYS, ADMIN_NAV_ITEMS, IAdminNavItem, ALL_STAFF_PERMISSIONS, ROLE_PERMISSIONS (+50 more)

### Community 34 - "notificationSchema.ts"
Cohesion: 0.16
Nodes (12): categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationPreferencesSchema, notificationSchemaRaw, requestSubscriptionSchema, telegramLinkStatusSchema (+4 more)

### Community 35 - "RequestInfo.tsx"
Cohesion: 0.23
Nodes (18): useCancelRequest(), ApproveRejectActions(), ApproveRejectActionsProps, BlockUserActions(), BlockUserActionsProps, RequestInfo(), RequestInfoProps, formatChange() (+10 more)

### Community 36 - "NotificationsTabContent.tsx"
Cohesion: 0.21
Nodes (10): useMarkAllNotificationsRead(), useMarkNotificationRead(), useNotifications(), mapNotificationFilters(), NotificationScope, useProfiles(), NotificationFiltersProps, NotificationItem() (+2 more)

### Community 37 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, commit, commit:retry, lint, prepare, start, start:dev (+3 more)

### Community 38 - "navigation-menu.tsx"
Cohesion: 0.28
Nodes (8): @radix-ui/react-navigation-menu, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 39 - "drawer.tsx"
Cohesion: 0.25
Nodes (7): vaul, DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 40 - "Детальний опис шарів"
Cohesion: 0.11
Nodes (19): 1. App Layer (`src/app/`), 2. Pages Layer (`src/pages/`), 3. Widgets Layer (`src/widgets/`), 4. Features Layer (`src/features/`), 5. Entities Layer (`src/entities/`), 6. Shared Layer (`src/shared/`), Детальний опис компонентів entity:, Детальний опис шарів (+11 more)

### Community 41 - "notification/index.ts"
Cohesion: 0.11
Nodes (8): TELEGRAM_LINK_QUERY_KEY, UNLINKED, useUnreadCount(), telegramLinkService, ITelegramLinkStatus, ITelegramLinkToken, ALL_NOTIFICATION_CHANNELS, DEFAULT_NOTIFICATION_CHANNELS

### Community 42 - "input-otp.tsx"
Cohesion: 0.33
Nodes (5): input-otp, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 43 - "GamificationProgress.tsx"
Cohesion: 0.13
Nodes (17): UserRole, Progress, Achievement, buyerAchievements, buyerLevels, calculateLevel(), getProgressToNextLevel(), Level (+9 more)

### Community 44 - "package.json"
Cohesion: 0.06
Nodes (31): name, private, version, autoprefixer, cmdk, eslint, eslint-config-next, @eslint/js (+23 more)

### Community 45 - "Виконано"
Cohesion: 0.11
Nodes (18): 1. Базова структура Next.js ✅, 1. Оновити всі компоненти, 2. Провайдери ✅, 2. Створити всі сторінки App Router, 3. Міграція компонентів в FSD структуру, 3. Структура FSD ✅, 4. Entity Request (приклад) ✅, 4. Створити інші entities (+10 more)

### Community 47 - "ProfilesSwitcher.tsx"
Cohesion: 0.36
Nodes (6): CreateRequestContent(), CreateRequestPage(), BuyerProfileRequired(), ProfileCard(), ProfilesSwitcher(), ProfilesSwitcherProps

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
Cohesion: 0.08
Nodes (32): API UniversalPagination, API useQueryPagination, Checklist для нової пагінації, Архітектура пагінації, Ключові файли, Конвенції, Крок 1. Типи запиту та відповіді (entities), Крок 2. Сервіс (entities) (+24 more)

### Community 52 - "Link"
Cohesion: 0.09
Nodes (25): ResetPasswordContent(), ResetPasswordContentProps, BlogListContent(), BlogListPage(), ForgotPasswordContent(), HowItWorksContent(), NotFoundPage(), ProfileContent() (+17 more)

### Community 53 - "support/layout.tsx"
Cohesion: 0.38
Nodes (4): messagesByLocale, SupportLayout(), messages, messages

### Community 54 - "ItemCondition"
Cohesion: 0.27
Nodes (6): IUpdateProposalRequest, REQUEST_URGENCY_LABELS, ItemCondition, NEW, USED, FormattedChange

### Community 55 - "@tanstack/react-query"
Cohesion: 0.14
Nodes (7): Статуси пропозицій (ProposalStatus), @tanstack/react-query, normalizeProposalItem(), proposalService, IProposalWithSeller, EditProposalModalProps, ProposalItemProps

### Community 57 - "RequestDetailContent.tsx"
Cohesion: 0.30
Nodes (8): RequestDetailContent(), useCanPropose(), useProposals(), useRequest(), useMe(), useUserContacts(), ProposalList(), ProposalListProps

### Community 58 - "requestService.ts"
Cohesion: 0.16
Nodes (18): useCreateRequest(), useLatestRequests(), useRequests(), createRequestSchema, getRequestsResponseSchema, requestBuyerSchema, requestSchema, updateRequestSchema (+10 more)

### Community 59 - "proposalSchema.ts"
Cohesion: 0.19
Nodes (10): createProposalSchema, getProposalsResponseSchema, proposalSellerSchema, updateProposalSchema, ProposalStatus, ACCEPTED, COMPLETED, PENDING (+2 more)

### Community 63 - "Детальний опис архітектури проєкту MOOC Frontend"
Cohesion: 0.14
Nodes (13): API та HTTP запити, Path Aliases:, TypeScript конфігурація, Використання:, Використання:, Висновок, Детальний опис архітектури проєкту MOOC Frontend, Додаткові ресурси (+5 more)

### Community 64 - "eslint.config.mjs"
Cohesion: 0.15
Nodes (10): compat, __dirname, __filename, eslint-config-prettier, @eslint/eslintrc, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+2 more)

### Community 65 - "RequestStatus"
Cohesion: 0.13
Nodes (14): Загальна логіка відгуків, Статуси запитів (RequestStatus), HOME_LATEST_REQUESTS_LIMIT, REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY, RequestStatus, ACTIVE (+6 more)

### Community 66 - "Інтернаціоналізація (i18n) - Інструкція для розробників"
Cohesion: 0.12
Nodes (15): Динамічні значення в перекладах, Конвенція іменування ключів, Крок 1: Переконайтеся, що компонент клієнтський, Крок 2: Створити функцію `t` в компоненті, Крок 3: Додати ключі перекладу у файли локалей, Огляд, Переклад метаданих (Title, Description) сторінок (SEO), Підтримувані мови (+7 more)

### Community 68 - "admin/layout.tsx"
Cohesion: 0.32
Nodes (4): AdminLayout(), messagesByLocale, messages, messages

### Community 69 - "toggle-group.tsx"
Cohesion: 0.15
Nodes (15): class-variance-authority, @radix-ui/react-toggle, @radix-ui/react-toggle-group, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetOverlay (+7 more)

### Community 70 - "[locale]/page.tsx"
Cohesion: 0.20
Nodes (4): generateMetadata(), getLatestRequests(), HomePage(), revalidate

### Community 71 - "SEO Technical Backlog — Shukayu"
Cohesion: 0.09
Nodes (22): 0. Поточний стан (коротко), 1.2. Контент посадкової категорії (не порожній лістинг), 1.3. Авто-шаблони мета-тегів + ручний override, 1. Пріоритет P0 — SEO-каркас (без нього UGC не «полетить»), 2.1. SEO-URL і індексація профілів, 2.2. Контент картки (те, що любить Google), 2.3. Синергія профіль ↔ категорія, 2. Пріоритет P0 — Картки виконавців (E-E-A-T) (+14 more)

### Community 75 - "Деплой"
Cohesion: 0.67
Nodes (3): Environment Variables, Netlify, Деплой

### Community 76 - "RequestSubscriptionModal.tsx"
Cohesion: 0.17
Nodes (19): useCreateRequestSubscription(), useUpdateRequestSubscription(), ICategoryPreference, INewRequestsPreference, channelsForEnabled(), toggleNotificationChannel(), CategoryChipsSelect(), CategoryChipsSelectProps (+11 more)

### Community 77 - "Основні сутності"
Cohesion: 0.14
Nodes (14): 10. UserAchievement (Досягнення профілю), 1. Account (Обліковий запис), 2. Profile (Профіль), 3. Proposal (Пропозиція), 3. Request (Запит), 4. Review (Відгук), 5. Message (Повідомлення), 6. Discussion (Обговорення) (+6 more)

### Community 78 - "Роутинг (React Router v7)"
Cohesion: 0.50
Nodes (4): Конфігурація, Навігація:, Особливості:, Роутинг (React Router v7)

### Community 80 - "profile/[id]/page.tsx"
Cohesion: 0.08
Nodes (44): BlogArticlePage(), generateMetadata(), Props, generateMetadata(), getDisplayName(), getProfile, ProfileIdPage(), ProfileLookup (+36 more)

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
Cohesion: 0.17
Nodes (11): Правила залежностей (Import Rules), Структура проєкту (Feature-Sliced Design), Next.js FSD App, Path Aliases, Встановлення, Додаткова інформація, Запуск, Правила залежностей (Import Rules) (+3 more)

### Community 104 - "Документація Backend API для проєкту shukayu"
Cohesion: 0.20
Nodes (9): Storage Strategy, Висновок, Документація Backend API для проєкту shukayu, Діаграма flow створення запиту → пропозиції → угоди, Завантаження зображень, Зміст, Обмеження, Структура бази даних (+1 more)

### Community 120 - "Аутентифікація та авторизація"
Cohesion: 0.25
Nodes (8): Access Token, JWT Токени, Refresh Token, Аутентифікація та авторизація, Діаграма flow авторизації, Захищені routes, Механізм оновлення токенів, Профілі та права

### Community 124 - "shared/utils/index.ts"
Cohesion: 0.09
Nodes (26): 1. Найменування, 2. Імпорти, 3. Експорти, 4. Типізація, 5. Обробка помилок, 6. Стан завантаження, Правила та конвенції, createUploadFormData() (+18 more)

### Community 125 - "Патерни та практики"
Cohesion: 0.33
Nodes (6): 1. Кастомні хуки, 2. Higher-Order Components, 3. Селектори для оптимізації, 4. Abort Controller для cleanup, 5. Error Boundaries (майбутнє), Патерни та практики

### Community 135 - "locale.ts"
Cohesion: 0.19
Nodes (18): alt, contentType, OpengraphImage(), runtime, size, defaultLocale, isLocale(), Locale (+10 more)

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
Cohesion: 0.13
Nodes (35): AdminTrafficPage(), AdminContentBlogPage(), AdminContentPagesPage(), AdminContentPricingPage(), AdminModerationProposalsPage(), AdminModerationReportsPage(), AdminModerationRequestsPage(), AdminModerationSubscriptionsPage() (+27 more)

### Community 181 - "NotificationSettingsContent.tsx"
Cohesion: 0.13
Nodes (19): useCreateTelegramLinkToken(), useDeleteRequestSubscription(), useNotificationPreferences(), useRequestSubscriptions(), useTelegramLinkStatus(), useUnlinkTelegram(), useUpdateNotificationPreferences(), NotificationPreferencesSection() (+11 more)

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
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `breadcrumbs.tsx`, `getLocaleFromHeaders`, `cn`, `CreateRequestForm.tsx`, `Button`, `Input`, `sidebar.tsx`, `DialogContent`, `SupportContent.tsx`, `[locale]/layout.tsx`, `use-toast.ts`, `ProfileSettings.tsx`, `ProposalDetailContent.tsx`, `Card`, `universal-pagination.tsx`, `authStore.ts`, `lucide-react`, `chart.tsx`, `entities/admin/index.ts`, `RequestInfo.tsx`, `NotificationsTabContent.tsx`, `navigation-menu.tsx`, `drawer.tsx`, `input-otp.tsx`, `GamificationProgress.tsx`, `package.json`, `ProfilesSwitcher.tsx`, `privacy/layout.tsx`, `review/index.ts`, `Link`, `support/layout.tsx`, `CardHeader`, `NotificationSettingsContent.tsx`, `RequestDetailContent.tsx`, `requestService.ts`, `admin/layout.tsx`, `toggle-group.tsx`, `RequestSubscriptionModal.tsx`, `profile/[id]/page.tsx`?**
  _High betweenness centrality (0.175) - this node is a cross-community bridge._
- **What connects `{ GET, POST }`, `ALREADY_PROPOSED`, `NO_CONTACTS` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `breadcrumbs.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05052125100240577 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `breadcrumbs.tsx`, `CreateRequestForm.tsx`, `Button`, `Input`, `sidebar.tsx`, `DialogContent`, `SupportContent.tsx`, `use-toast.ts`, `ProfileSettings.tsx`, `ProposalDetailContent.tsx`, `Card`, `universal-pagination.tsx`, `lucide-react`, `chart.tsx`, `entities/admin/index.ts`, `RequestInfo.tsx`, `NotificationsTabContent.tsx`, `navigation-menu.tsx`, `drawer.tsx`, `input-otp.tsx`, `GamificationProgress.tsx`, `review/index.ts`, `CardHeader`, `NotificationSettingsContent.tsx`, `Link`, `toggle-group.tsx`, `RequestSubscriptionModal.tsx`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Should `proposal/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14919354838709678 - nodes in this community are weakly interconnected._
- **Why does `CityCombobox()` connect `lucide-react` to `cn`, `CreateRequestForm.tsx`, `Button`, `Input`, `RequestSubscriptionModal.tsx`, `UX універсальних компонентів Shukayu`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `getLocaleFromHeaders` be split into smaller, more focused modules?**
  _Cohesion score 0.06649616368286446 - nodes in this community are weakly interconnected._