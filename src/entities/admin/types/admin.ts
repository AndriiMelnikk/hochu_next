export type StaffRole = 'admin' | 'moderator' | 'editor' | 'analyst';

export type StaffPermission =
  | 'moderation.requests'
  | 'moderation.proposals'
  | 'moderation.reports'
  | 'users.block'
  | 'notifications.subscriptions'
  | 'content.blog'
  | 'content.pricing'
  | 'content.pages'
  | 'analytics.view'
  | 'analytics.traffic'
  | 'staff.manage';

export type AnalyticsRange = '7d' | '30d' | '90d';

export interface IAdminKpi {
  totalUsers: number;
  activeRequests: number;
  totalProposals: number;
  revenue: string;
  growth: string;
}

export interface IRegistrationPoint {
  date: string;
  count: number;
}

export interface ICategoryShare {
  name: string;
  value: number;
}

export interface IProductAnalytics {
  kpi: IAdminKpi;
  registrations: Record<AnalyticsRange, IRegistrationPoint[]>;
  categories: ICategoryShare[];
}

export interface ITrafficSource {
  ref: string;
  visits: number;
}

export interface IDeviceShare {
  device: string;
  visits: number;
}

export interface ICountryShare {
  country: string;
  visits: number;
}

export interface ITopPath {
  path: string;
  visits: number;
}

export interface ITrafficPoint {
  date: string;
  visitors: number;
  pageviews: number;
}

export interface ITrafficAnalytics {
  visitors: number;
  pageviews: number;
  onlineApprox: number;
  series: Record<AnalyticsRange, ITrafficPoint[]>;
  sources: ITrafficSource[];
  devices: IDeviceShare[];
  countries: ICountryShare[];
  topPaths: ITopPath[];
}

export type ModerationStatus = 'pending' | 'active' | 'rejected';
export type ModerationFilter = ModerationStatus | 'all';

export interface IModerationLogEntry {
  action: 'approved' | 'rejected';
  reason?: string;
  by: string;
  at: string;
}

/** Запит покупця в черзі модерації (відповідь `GET /admin/requests`). */
export interface IModerationRequest {
  id: string;
  title: string;
  description: string;
  budgetMin?: number;
  budgetMax: number;
  urgency: number;
  location?: string;
  images: string[];
  status: ModerationStatus;
  createdAt: string;
  moderatedAt: string | null;
  moderatedBy: string | null;
  rejectionReason: string | null;
  buyer: { id: string; name: string; email: string | null } | null;
  category: { id: string; title: string } | null;
  /** Є лише у відповіді `GET /admin/requests/:id`. */
  moderationLog?: IModerationLogEntry[];
}

export interface IModerationList {
  count: number;
  page: number;
  pageSize: number;
  counts: Record<ModerationStatus, number>;
  results: IModerationRequest[];
}

export interface IBulkModerationResult {
  succeeded: string[];
  failed: { id: string; error: string }[];
}

export interface IModerationProposal {
  id: string;
  requestId: string;
  author: string;
  price: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface IModerationReport {
  id: string;
  targetType: 'user' | 'request' | 'proposal';
  targetLabel: string;
  reporter: string;
  reason: string;
  date: string;
  status: 'open' | 'resolved';
}

export interface IModerationUser {
  id: string;
  name: string;
  email: string;
  reason: string;
  reports: number;
  status: 'active' | 'blocked';
}

export type IAdminBlogPost = IAdminContentItem;

export type AdminPricingPeriod = 'month' | 'year';

export interface IAdminPricingPlan {
  id: string;
  name: string;
  /** Ціна числом у рядку ('0' — безкоштовно). */
  price: string;
  period: AdminPricingPeriod;
  description: string;
  /** Перелік можливостей тарифу. */
  features: string[];
  isActive: boolean;
}

export type AdminPricingPlanInput = Omit<IAdminPricingPlan, 'id'>;

export type AdminPageStatus = 'draft' | 'published';

/** Спільна форма для сторінок і статей блогу. */
export interface IAdminContentItem {
  id: string;
  slug: string;
  title: string;
  status: AdminPageStatus;
  /** Основний текст (Markdown / простий текст). */
  content: string;
  metaDescription: string;
  /** ISO-дата (YYYY-MM-DD). */
  updatedAt: string;
}

export type IAdminInfoPage = IAdminContentItem;

export type AdminInfoPageInput = Pick<
  IAdminContentItem,
  'slug' | 'title' | 'status' | 'content' | 'metaDescription'
>;

/** Співробітник адмінки (відповідь `GET /admin/staff`). */
export interface IAdminStaffMember {
  id: string;
  login: string;
  name: string;
  role: StaffRole;
  isActive: boolean;
  lastLoginAt: string | null;
  createdAt: string;
  createdBy: string | null;
}

/** Поточний співробітник (відповідь `GET /admin/auth/me`). */
export interface IAdminMe {
  id: string;
  login: string;
  name: string;
  role: StaffRole;
  permissions: StaffPermission[];
}

export interface AdminStaffInput {
  login: string;
  name?: string;
  password: string;
  role: StaffRole;
}

export interface IAdminRequestSubscription {
  id: string;
  sellerProfileId: string;
  sellerName: string;
  accountId: string;
  accountEmail: string;
  categories: string[];
  location: string | null;
  budgetMin: number | null;
  budgetMax: number | null;
  enabled: boolean;
  channels: string[];
  telegramLinked: boolean;
  createdAt: string;
}
