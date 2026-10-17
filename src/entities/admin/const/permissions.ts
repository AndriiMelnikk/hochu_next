import type { StaffPermission, StaffRole } from '../types/admin';

export const ALL_STAFF_PERMISSIONS: StaffPermission[] = [
  'moderation.requests',
  'moderation.proposals',
  'moderation.reports',
  'users.block',
  'notifications.subscriptions',
  'content.blog',
  'content.pricing',
  'content.pages',
  'analytics.view',
  'analytics.traffic',
  'staff.manage',
];

export const STAFF_ROLES: StaffRole[] = ['admin', 'moderator', 'editor', 'analyst'];

export const ROLE_PERMISSIONS: Record<StaffRole, StaffPermission[]> = {
  admin: ALL_STAFF_PERMISSIONS,
  moderator: [
    'moderation.requests',
    'moderation.proposals',
    'moderation.reports',
    'users.block',
    'notifications.subscriptions',
  ],
  editor: ['content.blog', 'content.pricing', 'content.pages'],
  analyst: ['analytics.view', 'analytics.traffic'],
};
