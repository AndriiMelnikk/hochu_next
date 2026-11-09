import { Eye, Shield, ShieldCheck, Wallet, Zap } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { format } from 'date-fns';
import { uk, enUS } from 'date-fns/locale';

import { IRequest, IRequestBuyer } from '@/entities/request/types/Request';
import { REQUEST_URGENCY_LABELS } from '@/entities/request/const';
import { formatBudget } from '../utils/formatBudget';
import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { Avatar, Button, Card, Rating } from '@/ui-v2';

interface RequestSidebarProps {
  buyer?: IRequestBuyer;
  request?: IRequest;
  proposalsCount: number;
  /** Кнопка «Подати пропозицію» над блоком покупця (як Apply now в Upwork). */
  onApply?: () => void;
}

export const RequestSidebar = ({
  buyer,
  request,
  proposalsCount,
  onApply,
}: RequestSidebarProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  if (!buyer) return null;

  const dateLocale = i18n.locale === 'uk' ? uk : enUS;
  const memberSince = buyer.memberSince
    ? format(new Date(buyer.memberSince), 'd MMMM yyyy', { locale: dateLocale })
    : '';
  const fullName = `${buyer.name} ${buyer.lastName || ''}`.trim();

  return (
    <div className="ui-v2 space-y-6 lg:sticky lg:top-24">
      {onApply && (
        <Button className="w-full" onClick={onApply}>
          {t('request.sidebar.apply')}
        </Button>
      )}
      {request && (
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-[550]">{t('request.sidebar.termsTitle')}</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-v2-muted">
                <Wallet className="size-4" />
                {t('request.sidebar.budget')}
              </dt>
              <dd className="text-right font-semibold">{formatBudget(request, t, i18n.locale)}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-v2-muted">
                <Zap className="size-4" />
                {t('request.sidebar.urgency')}
              </dt>
              <dd className="text-right font-semibold">
                {REQUEST_URGENCY_LABELS[request.urgency as keyof typeof REQUEST_URGENCY_LABELS]
                  ? t(
                      REQUEST_URGENCY_LABELS[
                        request.urgency as keyof typeof REQUEST_URGENCY_LABELS
                      ],
                    )
                  : '—'}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-v2-muted">
                <Eye className="size-4" />
                {t('request.sidebar.views')}
              </dt>
              <dd className="font-semibold">{request.views ?? 0}</dd>
            </div>
          </dl>
        </Card>
      )}

      <Card className="p-6">
        <h2 className="mb-4 text-xl font-[550]">{t('request.sidebar.buyer')}</h2>

        <div className="mb-4 flex items-start gap-4">
          <Link href={routes.PROFILE_BY_ID(buyer._id)} aria-label={fullName}>
            <Avatar size="md" src={buyer.avatar || undefined} fallback={buyer.name?.[0]} />
          </Link>
          <div className="min-w-0 flex-1">
            <div className="mb-0.5 flex items-center gap-2">
              <Link
                href={routes.PROFILE_BY_ID(buyer._id)}
                className="truncate text-base font-[550] hover:underline underline-offset-4"
              >
                {fullName}
              </Link>
              {buyer.isVerified && (
                <span
                  className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-v2-primary"
                  title={t('request.sidebar.verified')}
                >
                  <Shield className="size-4" />
                  {t('request.sidebar.verified')}
                </span>
              )}
            </div>
            <p className="text-sm text-v2-muted">
              {t('request.sidebar.memberSince', { date: memberSince })}
            </p>
          </div>
        </div>

        <dl className="space-y-3 border-t border-v2-border pt-4 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-v2-muted">{t('request.sidebar.rating')}</dt>
            <dd className="flex items-center gap-1 font-semibold">
              <Rating value={Number(buyer.rating) || 0} />
              {buyer.rating}
              <span className="font-[450] text-v2-muted">({buyer.xp || 0})</span>
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-v2-muted">{t('request.sidebar.completedDeals')}</dt>
            <dd className="font-semibold">{buyer.completedDeals}</dd>
          </div>
        </dl>

        <p className="mt-4 rounded-v2-lg bg-v2-surface-subtle p-3 text-xs text-v2-muted">
          {t('request.sidebar.buyerTrust')}
        </p>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-[550]">{t('request.sidebar.competition')}</h3>
        <div className="mb-3 rounded-v2-xl bg-v2-surface-subtle p-4 text-center">
          <div className="mb-1 text-4xl font-[550] text-v2-primary">{proposalsCount}</div>
          <p className="text-sm text-v2-muted">{t('request.sidebar.otherProposals')}</p>
        </div>
        <p className="text-center text-sm text-v2-muted">{t('request.sidebar.competitionHint')}</p>
      </Card>

      <Card className="p-6">
        <h3 className="mb-3 flex items-center gap-2 text-lg font-[550]">
          <ShieldCheck className="size-5 text-v2-primary" />
          {t('request.sidebar.secureTitle')}
        </h3>
        <ul className="space-y-2 text-sm text-v2-muted">
          {[1, 2, 3].map((n) => (
            <li key={n} className="flex gap-2">
              <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-v2-primary" />
              {t(`request.sidebar.secure${n}`)}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
