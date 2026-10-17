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

export interface IModerationRequest {
  id: string;
  title: string;
  author: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
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

export interface IAdminBlogPost {
  id: string;
  title: string;
  status: 'draft' | 'published';
  updatedAt: string;
}

export interface IAdminPricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  isActive: boolean;
}

export interface IAdminInfoPage {
  id: string;
  slug: string;
  title: string;
  updatedAt: string;
}

export interface IAdminStaffMember {
  id: string;
  name: string;
  email: string;
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
