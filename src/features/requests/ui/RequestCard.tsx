'use client';

import Image from 'next/image';
import { formatDate } from '@/lib/format';
import Link from '@/shared/ui/link';
import { Badge } from '@/ui-v2';
import { Clock, ImageIcon, MapPin, ShieldCheck } from 'lucide-react';
import { routes } from '@/app/router/routes';
import { IRequest, REQUEST_STATUS_LABELS, REQUEST_URGENCY, RequestStatus } from '@entities/request';
import { formatBudget } from '../utils/formatBudget';
import { useLingui } from '@lingui/react';

interface RequestCardProps {
  request: IRequest;
  categoryName?: string;
  status?: RequestStatus;
  /** `row` — рядок списку як у Upwork (пошук), `card` — плитка. */
  variant?: 'card' | 'row';
}

export const RequestCard = ({
  request,
  categoryName,
  status,
  variant = 'card',
}: RequestCardProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const budget = formatBudget(request, t, i18n.locale);
  const isUrgent = request.urgency === REQUEST_URGENCY.URGENT;
  const isVerified = !!request.buyerId?.isVerified;

  const statusTone = {
    pending: 'warning',
    active: 'success',
    closed: 'neutral',
    completed: 'success',
    cancelled: 'danger',
    rejected: 'danger',
  } as const;

  const postedAt = formatDate(request.createdAt, i18n.locale);

  if (variant === 'row') {
    const photos = request.images ?? [];
    return (
      <Link
        href={routes.REQUEST_ID(request._id.toString())}
        className="group block border-b border-v2-border px-4 py-6 outline-none first:border-t md:py-8 hover:bg-v2-hover focus-visible:bg-v2-hover"
        prefetch={false}
      >
        <article className="ui-v2 flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs text-v2-muted">
              {t('request.card.posted', { date: postedAt })} ·{' '}
              {t('request.card.proposals', { count: request.proposalsCount })}
            </p>
            <h3 className="mb-2 break-words text-xl font-[500] leading-7 text-v2-ink [overflow-wrap:anywhere] group-hover:text-v2-primary group-hover:underline underline-offset-4">
              {request.title}
            </h3>
            <p className="mb-3 text-sm text-v2-muted">
              <span className="font-semibold text-v2-ink">{budget}</span>
              {request.location && (
                <>
                  {' · '}
                  <MapPin className="mr-1 inline size-4 align-text-bottom" />
                  {request.location}
                </>
              )}
              {status && (
                <>
                  {' · '}
                  {t(REQUEST_STATUS_LABELS[request.status as keyof typeof REQUEST_STATUS_LABELS])}
                </>
              )}
            </p>
            <p className="mb-4 line-clamp-3 text-sm leading-[21px] text-v2-ink">
              {request.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="neutral" className="max-w-full truncate">
                {categoryName || request.category.name}
              </Badge>
              {isUrgent && <Badge tone="warning">{t('request.card.urgent')}</Badge>}
              {request.proposalsCount === 0 && (
                <Badge tone="success">{t('request.card.noProposals')}</Badge>
              )}
              {isVerified && (
                <span className="inline-flex items-center gap-1 text-xs text-v2-muted">
                  <ShieldCheck className="size-4 text-v2-primary" />
                  {t('request.card.verified')}
                </span>
              )}
            </div>
          </div>
          {photos.length === 0 && (
            <div
              aria-hidden
              className="hidden size-28 shrink-0 items-center justify-center rounded-v2-lg border border-dashed border-v2-border bg-v2-surface-subtle text-v2-subtle sm:flex"
            >
              <ImageIcon className="size-7" />
            </div>
          )}
          {photos.length > 0 && (
            <div className="relative size-16 shrink-0 overflow-hidden rounded-v2-lg border border-v2-border sm:size-28">
              <Image
                src={photos[0]}
                alt=""
                width={112}
                height={112}
                className="size-full object-cover"
              />
              {photos.length > 1 && (
                <span className="absolute bottom-1 right-1 rounded-v2-pill bg-v2-ink/80 px-1.5 text-xs font-semibold text-white">
                  +{photos.length - 1}
                </span>
              )}
            </div>
          )}
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={routes.REQUEST_ID(request._id.toString())}
      className="group block h-full"
      prefetch={false}
    >
      <article className="ui-v2 flex h-full flex-col rounded-v2-2xl border border-v2-border bg-v2-surface p-6 transition-colors group-hover:bg-v2-hover group-focus-visible:ring-2 group-focus-visible:ring-v2-primary">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="info" className="max-w-full truncate">
              {categoryName || request.category.name}
            </Badge>
            {isUrgent && <Badge tone="warning">{t('request.card.urgent')}</Badge>}
            {status && (
              <Badge tone={statusTone[request.status as keyof typeof statusTone] ?? 'neutral'}>
                {t(REQUEST_STATUS_LABELS[request.status as keyof typeof REQUEST_STATUS_LABELS])}
              </Badge>
            )}
          </div>
          <span className="flex shrink-0 items-center text-xs text-v2-subtle">
            <Clock className="mr-1 size-3" />
            {postedAt}
          </span>
        </div>

        <h3 className="mb-2 break-words text-lg font-[550] leading-6 text-v2-ink [overflow-wrap:anywhere] group-hover:text-v2-primary group-hover:underline underline-offset-4">
          {request.title}
        </h3>

        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-5 text-v2-muted">
          {request.description}
        </p>

        <div className="space-y-1 text-sm">
          <div className="font-semibold text-v2-ink">{budget}</div>
          {request.location && (
            <div className="flex min-w-0 items-center text-v2-muted">
              <MapPin className="mr-1.5 size-4 shrink-0" />
              <span className="min-w-0 truncate" title={request.location}>
                {request.location}
              </span>
            </div>
          )}
          <div className="mt-3 border-t border-v2-border pt-3 font-semibold text-v2-primary">
            {t('request.card.proposalsBadge', { count: request.proposalsCount })}
          </div>
        </div>
      </article>
    </Link>
  );
};
