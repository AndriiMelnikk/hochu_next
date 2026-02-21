export const REQUEST_URGENCY = {
  FLEXIBLE: 1,
  WEEK: 2,
  DAYS: 3,
  URGENT: 4,
} as const;

export const REQUEST_URGENCY_LABELS = {
  [REQUEST_URGENCY.FLEXIBLE]: 'request.create.urgencyFlexible',
  [REQUEST_URGENCY.WEEK]: 'request.create.urgencyWeek',
  [REQUEST_URGENCY.DAYS]: 'request.create.urgencyDays',
  [REQUEST_URGENCY.URGENT]: 'request.create.urgencyUrgent',
} as const;

export const REQUEST_STATUS_BADGE_VARIANT = {
  pending: 'secondary',
  active: 'default',
  closed: 'outline',
  completed: 'success',
  cancelled: 'destructive',
  rejected: 'destructive',
} as const;

export const REQUEST_STATUS_LABELS = {
  pending: 'request.status.pending',
  active: 'request.status.active',
  closed: 'request.status.closed',
  completed: 'request.status.completed',
  cancelled: 'request.status.cancelled',
  rejected: 'request.status.rejected',
} as const;
