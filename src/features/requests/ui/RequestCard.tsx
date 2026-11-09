'use client';

import Link from '@/shared/ui/link';
import { Badge } from '@/ui-v2';
import { Clock, MapPin } from 'lucide-react';
import { routes } from '@/app/router/routes';
import { IRequest, REQUEST_STATUS_LABELS, RequestStatus } from '@entities/request';
import { useLingui } from '@lingui/react';

interface RequestCardProps {
  request: IRequest;
  categoryName?: string;
  status?: RequestStatus;
}

export const RequestCard = ({ request, categoryName, status }: RequestCardProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const min = request.budgetMin || 0;
  const max = request.budgetMax || 0;

  let budget = t('request.detail.budgetNotSpecified');
  if (min > 0 && max > 0) {
    budget = `${min}-${max} грн`;
  } else if (min > 0) {
    budget = t('request.budget.from', { amount: min });
  } else if (max > 0) {
    budget = t('request.budget.to', { amount: max });
  }

  const statusTone = {
    pending: 'warning',
    active: 'success',
    closed: 'neutral',
    completed: 'success',
    cancelled: 'danger',
    rejected: 'danger',
  } as const;

  return (
    <Link
      href={routes.REQUEST_ID(request._id.toString())}
      className="group block h-full"
      prefetch={false}
    >
      <article className="ui-v2 flex h-full flex-col rounded-v2-2xl border border-v2-border bg-v2-surface p-6 transition-colors group-hover:bg-v2-hover group-focus-visible:ring-2 group-focus-visible:ring-v2-primary">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="info">{categoryName || request.category.name}</Badge>
            {status && (
              <Badge tone={statusTone[request.status as keyof typeof statusTone] ?? 'neutral'}>
                {t(REQUEST_STATUS_LABELS[request.status as keyof typeof REQUEST_STATUS_LABELS])}
              </Badge>
            )}
          </div>
          <span className="flex shrink-0 items-center text-xs text-v2-subtle">
            <Clock className="mr-1 size-3" />
            {new Date(request.createdAt).toLocaleDateString(
              i18n.locale === 'uk' ? 'uk-UA' : 'en-US',
              { timeZone: 'UTC' },
            )}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-[550] leading-6 text-v2-ink group-hover:text-v2-primary group-hover:underline underline-offset-4">
          {request.title}
        </h3>

        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-5 text-v2-muted">
          {request.description}
        </p>

        <div className="space-y-1 text-sm">
          <div className="font-semibold text-v2-ink">{budget}</div>
          <div className="flex items-center text-v2-muted">
            <MapPin className="mr-1.5 size-4 shrink-0" />
            {request.location}
          </div>
          <div className="mt-3 border-t border-v2-border pt-3 font-semibold text-v2-primary">
            {request.proposalsCount} пропозицій
          </div>
        </div>
      </article>
    </Link>
  );
};
