export type {
  StaffRole,
  StaffPermission,
  AnalyticsRange,
  IAdminKpi,
  IRegistrationPoint,
  ICategoryShare,
  IProductAnalytics,
  ITrafficSource,
  IDeviceShare,
  ICountryShare,
  ITopPath,
  ITrafficPoint,
  ITrafficAnalytics,
  IModerationRequest,
  IModerationProposal,
  IModerationReport,
  IModerationUser,
  IAdminBlogPost,
  IAdminPricingPlan,
  IAdminInfoPage,
  IAdminStaffMember,
  IAdminRequestSubscription,
} from './types/admin';

export { ALL_STAFF_PERMISSIONS, STAFF_ROLES, ROLE_PERMISSIONS } from './const/permissions';
export { ADMIN_NAV_ITEMS, ADMIN_NAV_GROUP_KEYS, type IAdminNavItem } from './const/nav';
export { hasPermission, hasAnyPermission } from './lib/can';
export { useAdminPreviewStore } from './store/adminPreviewStore';
export {
  adminNotificationService,
  type IGetAdminRequestSubscriptionsParams,
  type IAdminRequestSubscriptionsResult,
} from './services/adminNotificationService';
export {
  adminMockData,
  productAnalytics,
  trafficAnalytics,
  moderationRequests,
  moderationProposals,
  moderationReports,
  moderationUsers,
  adminBlogPosts,
  adminPricingPlans,
  adminInfoPages,
  adminStaff,
  adminRequestSubscriptions,
} from './mocks/adminMockData';
