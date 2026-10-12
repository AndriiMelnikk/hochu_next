import type { StaffPermission } from '../types/admin';

export interface IAdminNavItem {
  id: string;
  href: string;
  labelKey: string;
  permission: StaffPermission;
  group: 'analytics' | 'moderation' | 'content' | 'staff';
}

export const ADMIN_NAV_ITEMS: IAdminNavItem[] = [
  {
    id: 'analytics',
    href: '/admin/analytics',
    labelKey: 'admin.nav.analytics',
    permission: 'analytics.view',
    group: 'analytics',
  },
  {
    id: 'traffic',
    href: '/admin/analytics/traffic',
    labelKey: 'admin.nav.traffic',
    permission: 'analytics.traffic',
    group: 'analytics',
  },
  {
    id: 'requests',
    href: '/admin/moderation/requests',
    labelKey: 'admin.nav.requests',
    permission: 'moderation.requests',
    group: 'moderation',
  },
  {
    id: 'proposals',
    href: '/admin/moderation/proposals',
    labelKey: 'admin.nav.proposals',
    permission: 'moderation.proposals',
    group: 'moderation',
  },
  {
    id: 'reports',
    href: '/admin/moderation/reports',
    labelKey: 'admin.nav.reports',
    permission: 'moderation.reports',
    group: 'moderation',
  },
  {
    id: 'users',
    href: '/admin/moderation/users',
    labelKey: 'admin.nav.users',
    permission: 'users.block',
    group: 'moderation',
  },
  {
    id: 'blog',
    href: '/admin/content/blog',
    labelKey: 'admin.nav.blog',
    permission: 'content.blog',
    group: 'content',
  },
  {
    id: 'pricing',
    href: '/admin/content/pricing',
    labelKey: 'admin.nav.pricing',
    permission: 'content.pricing',
    group: 'content',
  },
  {
    id: 'pages',
    href: '/admin/content/pages',
    labelKey: 'admin.nav.pages',
    permission: 'content.pages',
    group: 'content',
  },
  {
    id: 'staff',
    href: '/admin/staff',
    labelKey: 'admin.nav.staff',
    permission: 'staff.manage',
    group: 'staff',
  },
];

export const ADMIN_NAV_GROUP_KEYS: Record<IAdminNavItem['group'], string> = {
  analytics: 'admin.nav.group.analytics',
  moderation: 'admin.nav.group.moderation',
  content: 'admin.nav.group.content',
  staff: 'admin.nav.group.staff',
};
