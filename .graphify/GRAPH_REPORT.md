# Graph Report - .  (2026-10-12)

## Corpus Check
- 415 files · ~108,981 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1315 nodes · 3147 edges · 69 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: imports_from: 1047 · imports: 952 · contains: 858 · re_exports: 183 · method: 59 · calls: 44 · inherits: 4


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 415 · Candidates: 475
- Excluded: 126 untracked · 37903 ignored · 9 sensitive · 14 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `808d065`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `cn()` - 60 edges
2. `Button` - 51 edges
3. `routes` - 41 edges
4. `getLocaleFromHeaders()` - 37 edges
5. `ProposalService` - 23 edges
6. `getMetadataForRoute()` - 21 edges
7. `LinguiProvider()` - 20 edges
8. `RequestService` - 17 edges
9. `Input` - 17 edges
10. `AuthService` - 16 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (34): useAcceptProposal(), useCancelAcceptedProposal(), useCancelProposal(), useCanPropose(), useCompleteProposal(), useCreateProposal(), useProposal(), useProposals() (+26 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (33): GUEST_PROFILE_TABS, HASH_TO_TAB, OWNER_PROFILE_TABS, PROFILE_HASH, PROFILE_TAB, ProfileTabId, resolveProfileTab(), syncProfileTabHash() (+25 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (41): ImageLightboxProps, AcceptProposalModal(), AcceptProposalModalProps, CancelAcceptedProposalModal(), CancelAcceptedProposalModalProps, CancelProposalModal(), CancelProposalModalProps, Carousel (+33 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (36): AppRouter, useLocalizedRouter(), Button, CategoryFilterButtonProps, CreateProfileModalProps, CreateProposalFormProps, CreateProposalFormValues, urgencyOptions (+28 more)

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (27): useCancelRequest(), useCreateRequest(), useLatestRequests(), useRequest(), useRequests(), REQUEST_STATUS_BADGE_VARIANT, REQUEST_STATUS_LABELS, REQUEST_URGENCY (+19 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (30): cn(), buttonVariants, CalendarProps, CascadingSelectProps, Checkbox, CityComboboxProps, Command, CommandDialogProps (+22 more)

### Community 6 - "Community 6"
Cohesion: 0.05
Nodes (33): useIsMobile(), SheetContent, SheetContentProps, SheetDescription, SheetOverlay, SheetTitle, sheetVariants, Sidebar (+25 more)

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (29): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+21 more)

### Community 8 - "Community 8"
Cohesion: 0.15
Nodes (23): LS_KEYS, AuthContext, AuthContextType, AuthProvider(), useAuth(), IGoogleAuthRequest, ILoginRequest, IRegisterRequest (+15 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (10): defaultMetadata, routeMetadata, buildAlternates(), getMetadataForRoute(), localizedUrl(), metadataByLocale, NOINDEX_ROUTES, OG_LOCALE (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.09
Nodes (8): breadcrumbLabels, BULLET_KEYS, routes, AuthRequiredProps, CreateRequestButtonProps, LoginForm(), RegisterButtonProps, RequestCardProps

### Community 11 - "Community 11"
Cohesion: 0.10
Nodes (22): createUploadFormData(), parseUploadResponse(), refreshAccessToken(), uploadFile(), cn(), ACCEPTED_IMAGE_ACCEPT_ATTR, ACCEPTED_IMAGE_TYPES, createDefaultSections() (+14 more)

### Community 12 - "Community 12"
Cohesion: 0.10
Nodes (18): FAQ_KEYS, generateMetadata(), getRequest, Props, RequestDetailPage(), JsonLd(), JsonLdProps, BlogPostingJsonLdInput (+10 more)

### Community 13 - "Community 13"
Cohesion: 0.17
Nodes (22): PROFILES_QUERY_KEY, useCreateProfile(), useProfiles(), useMe(), useUser(), accountSchema, createProfileSchema, profileSchema (+14 more)

### Community 14 - "Community 14"
Cohesion: 0.09
Nodes (2): getLocaleFromHeaders(), PageProps

### Community 15 - "Community 15"
Cohesion: 0.14
Nodes (18): CategoryChipsSelect(), CategoryChipsSelectProps, CityCombobox(), Label, labelVariants, NewRequestsPreferenceForm(), NewRequestsPreferenceFormProps, CATEGORY_OPTIONS (+10 more)

### Community 16 - "Community 16"
Cohesion: 0.11
Nodes (23): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+15 more)

### Community 17 - "Community 17"
Cohesion: 0.17
Nodes (10): BUYER_CATEGORIES, ProfilePreferencesSectionProps, SELLER_CATEGORIES, Card, CardContent, CardDescription, CardFooter, CardHeader (+2 more)

### Community 18 - "Community 18"
Cohesion: 0.12
Nodes (11): messagesByLocale, messages, inter, messagesByLocale, Props, getDefaultMetadata(), Providers(), ProvidersProps (+3 more)

### Community 19 - "Community 19"
Cohesion: 0.17
Nodes (14): renderStars(), ReviewCard(), ReviewCardProps, Avatar, AvatarFallback, AvatarImage, DiscussionForm(), DiscussionFormProps (+6 more)

### Community 20 - "Community 20"
Cohesion: 0.17
Nodes (10): useCreateReview(), useReviews(), useReviewStats(), ICreateReviewRequest, IGetReviewsRequest, IGetReviewsResponse, IReviewStatsResponse, reviewSchema (+2 more)

### Community 21 - "Community 21"
Cohesion: 0.15
Nodes (17): useNotifications(), IGetNotificationsRequest, categoryPreferenceSchema, newRequestsPreferenceSchema, notificationCategorySchema, notificationChannelSchema, notificationSchemaRaw, paginationResultSchema() (+9 more)

### Community 22 - "Community 22"
Cohesion: 0.13
Nodes (15): GamificationProgressProps, badgeSizeClasses, GamifiedAvatarProps, sizeClasses, UserRole, Achievement, buyerAchievements, buyerLevels (+7 more)

### Community 23 - "Community 23"
Cohesion: 0.19
Nodes (9): messagesByLocale, messages, messagesByLocale, i18n, messagesByLocale, LinguiProvider(), LinguiProviderProps, messagesByLocale (+1 more)

### Community 24 - "Community 24"
Cohesion: 0.16
Nodes (10): useCreateRequestSubscription(), useDeleteRequestSubscription(), useRequestSubscriptions(), useUpdateRequestSubscription(), IGetRequestSubscriptionsRequest, requestSubscriptionSchema, RequestSubscriptionService, ICreateRequestSubscriptionRequest (+2 more)

### Community 25 - "Community 25"
Cohesion: 0.17
Nodes (12): size, isLocale(), Locale, localizeHref(), resolveLocale(), switchLocaleInPathname(), config, detectPreferredLocale() (+4 more)

### Community 26 - "Community 26"
Cohesion: 0.21
Nodes (11): CategoryIdLike, normalizeId(), normalizeParentId(), useCategories(), IGetCategoriesResponse, categorySchema, getCategoriesResponseSchema, objectIdSchema (+3 more)

### Community 27 - "Community 27"
Cohesion: 0.16
Nodes (8): useMarkAllNotificationsRead(), useMarkNotificationRead(), useNotificationPreferences(), useUnreadCount(), NotificationPreferenceService, NotificationService, ALL_NOTIFICATION_CHANNELS, channelsForEnabled()

### Community 28 - "Community 28"
Cohesion: 0.15
Nodes (5): AI_BOTS, DISALLOW, LS_KEYS, HeroBadge, HeroBadgeProps

### Community 29 - "Community 29"
Cohesion: 0.18
Nodes (11): useProfileSwitch(), UseProfileSwitchOptions, BuyerProfileRequired(), CreateProfileModal(), PROFILE_TYPE_ICONS, ProfileCard(), ProfileCardProps, ProfilesSwitcher() (+3 more)

### Community 30 - "Community 30"
Cohesion: 0.30
Nodes (7): useBlogPost(), useBlogPosts(), IGetBlogPostsResponse, blogPostSchema, getBlogPostsResponseSchema, BlogService, IBlogPost

### Community 31 - "Community 31"
Cohesion: 0.18
Nodes (7): Conversation, Message, ProfileHeaderProps, Badge(), BadgeProps, badgeVariants, ScrollArea

### Community 32 - "Community 32"
Cohesion: 0.21
Nodes (2): Loading, LoadingProps

### Community 33 - "Community 33"
Cohesion: 0.22
Nodes (5): CascadingSelect(), CascadingSelectItem, Error, ErrorProps, UserRequestsListProps

### Community 34 - "Community 34"
Cohesion: 0.27
Nodes (6): citySchema, searchCitiesResponseSchema, LocationService, ICity, ISearchCitiesDto, ISearchCitiesResponse

### Community 35 - "Community 35"
Cohesion: 0.17
Nodes (1): AuthService

### Community 36 - "Community 36"
Cohesion: 0.26
Nodes (8): Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator(), BreadcrumbItemData, BreadcrumbsProps

### Community 37 - "Community 37"
Cohesion: 0.17
Nodes (10): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarSubContent (+2 more)

### Community 38 - "Community 38"
Cohesion: 0.27
Nodes (4): api, failedQueue, ENDPOINTS, notificationPreferencesSchema

### Community 39 - "Community 39"
Cohesion: 0.18
Nodes (2): features, steps

### Community 40 - "Community 40"
Cohesion: 0.33
Nodes (7): useUpdateNotificationPreferences(), IPaginationResult, NotificationChannel, ICategoryPreference, INewRequestsPreference, INotificationPreferences, IUpdateNotificationPreferencesRequest

### Community 41 - "Community 41"
Cohesion: 0.18
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 42 - "Community 42"
Cohesion: 0.31
Nodes (6): ArticleSection(), Props, Props, ArticleSectionData, getIconComponent(), iconMap

### Community 43 - "Community 43"
Cohesion: 0.20
Nodes (8): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSubContent, ContextMenuSubTrigger

### Community 44 - "Community 44"
Cohesion: 0.22
Nodes (8): BUYER_CHANNELS, CHANNEL_ICONS, ContactFormData, EditContactChannelsForm(), EditContactChannelsFormProps, SELLER_CHANNELS, EditContactChannelsModal(), EditContactChannelsModalProps

### Community 45 - "Community 45"
Cohesion: 0.31
Nodes (1): UserService

### Community 46 - "Community 46"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 47 - "Community 47"
Cohesion: 0.32
Nodes (5): getBlogEntries(), getRequestEntries(), sitemap(), STATIC_ROUTES, locales

### Community 48 - "Community 48"
Cohesion: 0.25
Nodes (4): DrawerContent, DrawerDescription, DrawerOverlay, DrawerTitle

### Community 49 - "Community 49"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 50 - "Community 50"
Cohesion: 0.38
Nodes (3): messagesByLocale, messages, messages

### Community 51 - "Community 51"
Cohesion: 0.38
Nodes (3): messagesByLocale, messages, messages

### Community 52 - "Community 52"
Cohesion: 0.38
Nodes (3): messagesByLocale, messages, messages

### Community 53 - "Community 53"
Cohesion: 0.38
Nodes (3): messagesByLocale, messages, messages

### Community 54 - "Community 54"
Cohesion: 0.38
Nodes (3): messages, messagesByLocale, messages

### Community 55 - "Community 55"
Cohesion: 0.38
Nodes (3): messages, messagesByLocale, messages

### Community 56 - "Community 56"
Cohesion: 0.38
Nodes (3): messages, messagesByLocale, messages

### Community 57 - "Community 57"
Cohesion: 0.38
Nodes (3): messages, messagesByLocale, messages

### Community 58 - "Community 58"
Cohesion: 0.38
Nodes (3): messages, messagesByLocale, messages

### Community 59 - "Community 59"
Cohesion: 0.38
Nodes (3): messages, messagesByLocale, messages

### Community 60 - "Community 60"
Cohesion: 0.38
Nodes (3): messages, messagesByLocale, messages

### Community 61 - "Community 61"
Cohesion: 0.33
Nodes (4): useUserContacts(), CHANNEL_ICONS, ContactSellerModal(), ContactSellerModalProps

### Community 62 - "Community 62"
Cohesion: 0.60
Nodes (2): IContactRequest, ContactService

### Community 64 - "Community 64"
Cohesion: 0.40
Nodes (3): DEFAULT_INITIAL_FILTERS, UseQueryPaginationOptions, UseQueryPaginationReturn

### Community 65 - "Community 65"
Cohesion: 0.50
Nodes (3): compat, __dirname, __filename

### Community 66 - "Community 66"
Cohesion: 0.50
Nodes (1): { handlers, signIn, signOut, auth }

### Community 67 - "Community 67"
Cohesion: 0.50
Nodes (3): DefaultSession, JWT, Session

### Community 68 - "Community 68"
Cohesion: 0.67
Nodes (1): ToasterProps

### Community 69 - "Community 69"
Cohesion: 1.00
Nodes (1): nextConfig

## Knowledge Gaps
- **306 isolated node(s):** `__filename`, `__dirname`, `compat`, `nextConfig`, `messagesByLocale` (+301 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 14`** (2 nodes): `getLocaleFromHeaders()`, `PageProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (2 nodes): `Loading`, `LoadingProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (1 nodes): `AuthService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (2 nodes): `features`, `steps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `UserService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (2 nodes): `IContactRequest`, `ContactService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (1 nodes): `{ handlers, signIn, signOut, auth }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (1 nodes): `ToasterProps`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (1 nodes): `nextConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 5` to `Community 42`, `Community 12`, `Community 1`, `Community 7`, `Community 19`, `Community 31`, `Community 36`, `Community 3`, `Community 17`, `Community 2`, `Community 41`, `Community 43`, `Community 48`, `Community 33`, `Community 28`, `Community 15`, `Community 32`, `Community 37`, `Community 49`, `Community 22`, `Community 6`, `Community 46`, `Community 16`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Why does `getLocaleFromHeaders()` connect `Community 14` to `Community 50`, `Community 51`, `Community 25`, `Community 52`, `Community 63`, `Community 23`, `Community 53`, `Community 18`, `Community 9`, `Community 54`, `Community 12`, `Community 39`, `Community 55`, `Community 56`, `Community 57`, `Community 58`, `Community 32`, `Community 59`, `Community 60`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Why does `Button` connect `Community 3` to `Community 31`, `Community 28`, `Community 42`, `Community 32`, `Community 19`, `Community 1`, `Community 2`, `Community 10`, `Community 17`, `Community 12`, `Community 36`, `Community 29`, `Community 5`, `Community 61`, `Community 44`, `Community 7`, `Community 15`, `Community 6`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **What connects `__filename`, `__dirname`, `compat` to the rest of the system?**
  _306 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0662004662004662 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05786090005844535 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06957047791893527 - nodes in this community are weakly interconnected._