import { RequestStatus } from '@/entities/request/types/Request';

/** Індексуємо лише активні запити; решта (pending/rejected/closed/…) — noindex. */
export function isIndexableRequestStatus(status: string | undefined): boolean {
  return status === RequestStatus.ACTIVE;
}

type ProfileSignals = {
  completedDeals?: number | null;
  reviewsCount?: number | null;
  rating?: number | null;
  isBlocked?: boolean;
};

/** Профіль індексується, лише якщо він наповнений (угоди/відгуки/рейтинг) і не заблокований. */
export function isIndexableProfile(profile: ProfileSignals): boolean {
  if (profile.isBlocked) return false;
  return (
    (profile.completedDeals ?? 0) > 0 ||
    (profile.reviewsCount ?? 0) > 0 ||
    (profile.rating ?? 0) > 0
  );
}

/** Чи помилка API означає «ресурсу немає» (а не тимчасовий збій). */
export function isNotFoundError(error: unknown): boolean {
  const status = (error as { response?: { status?: number } })?.response?.status;
  return status === 404 || status === 400;
}
