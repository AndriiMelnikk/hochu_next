import { NotificationCategory } from '../types/Notification';
import type { INotification } from '../types/Notification';

const TYPE_TO_CATEGORY: Record<string, NotificationCategory> = {
  new_request: NotificationCategory.NEW_REQUESTS,
  request_approved: NotificationCategory.REQUEST_UPDATES,
  request_rejected: NotificationCategory.REQUEST_UPDATES,
  request_update: NotificationCategory.REQUEST_UPDATES,
  new_proposal: NotificationCategory.MY_REQUEST_ACTIVITY,
  proposal_accepted: NotificationCategory.MY_PROPOSAL_STATUS,
  proposal_rejected: NotificationCategory.MY_PROPOSAL_STATUS,
  proposal_completed: NotificationCategory.MY_PROPOSAL_STATUS,
  new_message: NotificationCategory.MESSAGES,
  message_received: NotificationCategory.MESSAGES,
  review_received: NotificationCategory.REVIEWS,
  achievement_unlocked: NotificationCategory.ACHIEVEMENTS,
};

const CATEGORY_VALUES = new Set<string>(Object.values(NotificationCategory));

export function inferNotificationCategory(
  type: string,
  category?: string | null,
): NotificationCategory {
  if (category && CATEGORY_VALUES.has(category)) {
    return category as NotificationCategory;
  }
  return TYPE_TO_CATEGORY[type] ?? NotificationCategory.MESSAGES;
}

export function normalizeNotification(raw: Record<string, unknown>): INotification {
  const type = String(raw.type ?? '');
  const category = inferNotificationCategory(
    type,
    typeof raw.category === 'string' ? raw.category : null,
  );

  return {
    _id: String(raw._id ?? raw.id ?? ''),
    accountId: String(raw.accountId ?? ''),
    profileId:
      raw.profileId === null || raw.profileId === undefined
        ? null
        : String(raw.profileId),
    type,
    category,
    title: String(raw.title ?? ''),
    message: String(raw.message ?? ''),
    link:
      raw.link === null || raw.link === undefined || raw.link === ''
        ? null
        : String(raw.link),
    metadata:
      raw.metadata && typeof raw.metadata === 'object' && !Array.isArray(raw.metadata)
        ? (raw.metadata as Record<string, unknown>)
        : null,
    read: Boolean(raw.read),
    createdAt: String(raw.createdAt ?? ''),
  };
}
