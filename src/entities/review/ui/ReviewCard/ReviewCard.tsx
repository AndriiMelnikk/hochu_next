import { FC } from 'react';
import { format } from 'date-fns';
import { useLingui } from '@lingui/react';

import { IReview } from '@entities/review';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { Avatar, Rating } from '@/ui-v2';

interface ReviewCardProps {
  review: IReview;
}

/** Запис відгуку як у «Work history» Upwork: заголовок-посилання, оцінка | дата, цитата. */
export const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const author = review.authorProfileId;
  const requestFromProposal = review.proposalId?.requestId;

  // requestId can be a string (ID) or a populated object
  const populatedRequest =
    typeof review.requestId === 'object' && review.requestId !== null ? review.requestId : null;

  const requestId =
    populatedRequest?._id ??
    (review.requestId as unknown as { _id: string } | null)?._id ??
    requestFromProposal?._id;

  const requestTitle = populatedRequest ? populatedRequest.title : requestFromProposal?.title;

  return (
    <article className="ui-v2 border-b border-v2-border py-6 first:pt-0 last:border-b-0">
      {requestId && requestTitle ? (
        <Link
          href={routes.REQUEST_ID(requestId)}
          className="text-xl font-[550] leading-7 text-v2-primary underline-offset-4 hover:underline"
        >
          {requestTitle}
        </Link>
      ) : (
        <p className="text-sm text-v2-muted">{t('review.card.noRequest')}</p>
      )}

      <div className="mt-2 flex items-center gap-3 text-sm">
        <Rating value={review.rating} showValue />
        <span aria-hidden className="h-4 w-px bg-v2-border" />
        <time className="text-v2-muted" dateTime={review.createdAt}>
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </time>
      </div>

      {review.comment && (
        <blockquote className="mt-3 text-sm italic leading-[21px] text-v2-ink">
          “{review.comment}”
        </blockquote>
      )}

      <div className="mt-4 flex items-center gap-2 text-sm text-v2-muted">
        <Avatar
          size="sm"
          src={author.avatar ?? undefined}
          fallback={String(author.name[0] ?? '').charAt(0)}
        />
        <Link
          href={routes.PROFILE_BY_ID(author._id)}
          className="font-semibold text-v2-ink underline-offset-4 hover:underline"
        >
          {author.name} {author.lastName}
        </Link>
      </div>
    </article>
  );
};
