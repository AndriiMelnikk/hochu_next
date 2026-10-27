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

/** Робить із довільного тексту (у т.ч. HTML/UGC) охайний meta description. */
export function toMetaDescription(text: string | undefined | null, max = 160): string | undefined {
  if (!text) return undefined;
  const plain = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!plain) return undefined;
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:!-]+$/, '')}…`;
}
