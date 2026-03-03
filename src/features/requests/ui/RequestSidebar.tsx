import { Star, Shield } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { format } from 'date-fns';
import { uk, enUS } from 'date-fns/locale';
import { Separator } from '@shared/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import { IRequestBuyer } from '@/entities/request/types/Request';
import { routes } from '@/app/router/routes';
import Link from 'next/link';

interface RequestSidebarProps {
  buyer?: IRequestBuyer;
  proposalsCount: number;
}

export const RequestSidebar = ({ buyer, proposalsCount }: RequestSidebarProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  if (!buyer) return null;

  const dateLocale = i18n.locale === 'uk' ? uk : enUS;
  const memberSinceFormatted = buyer.memberSince
    ? format(new Date(buyer.memberSince), 'd MMMM yyyy', { locale: dateLocale })
    : '';

  return (
    <div className="space-y-6 sticky top-24">
      {/* Buyer Card */}
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border  top-24">
        <h2 className="text-xl font-semibold mb-4">{t('request.sidebar.buyer')}</h2>

        <div className="flex items-start mb-4">
          <Link href={routes.PROFILE_BY_ID(buyer._id)}>
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src={buyer.avatar || undefined} />
              <AvatarFallback>{buyer.name}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">
                <Link href={routes.PROFILE_BY_ID(buyer._id)} className="hover:underline">
                  {buyer.name} {buyer.lastName || ''}
                </Link>
              </h3>
              {buyer.isVerified && <Shield className="h-4 w-4 text-primary" />}
            </div>
            <p className="text-sm text-muted-foreground">
              {t('request.sidebar.memberSince', { date: memberSinceFormatted })}
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Buyer Stats */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{t('request.sidebar.rating')}</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-semibold">{buyer.rating}</span>
              <span className="text-sm text-muted-foreground ml-1">({buyer.xp || 0})</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{t('request.sidebar.completedDeals')}</span>
            <span className="font-semibold">{buyer.completedDeals}</span>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Info */}
        <div className="bg-muted/30 rounded-lg p-3">
          <p className="text-xs text-muted-foreground">{t('request.sidebar.buyerTrust')}</p>
        </div>
      </div>

      {/* Competition Info */}
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
        <h3 className="text-lg font-semibold mb-4">{t('request.sidebar.competition')}</h3>
        <div className="space-y-4">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-4xl font-bold text-primary mb-1">{proposalsCount}</div>
            <p className="text-sm text-muted-foreground">{t('request.sidebar.otherProposals')}</p>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {t('request.sidebar.competitionHint')}
          </p>
        </div>
      </div>
    </div>
  );
};
