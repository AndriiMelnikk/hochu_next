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
