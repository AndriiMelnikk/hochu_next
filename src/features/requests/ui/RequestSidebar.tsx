import { Star, Shield } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { Separator } from '@shared/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';

interface RequestSidebarProps {
  buyer: {
    _id: string;
    name: string;
    avatar: string | null;
    rating: number;
    reviewsCount: number;
    isVerified: boolean;
    memberSince: string;
    completedDeals: number;
  };
  proposalsCount: number;
}

export const RequestSidebar = ({ buyer, proposalsCount }: RequestSidebarProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  return (
    <div className="space-y-6">
      {/* Buyer Card */}
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border sticky top-24">
        <h2 className="text-xl font-semibold mb-4">{t('request.sidebar.buyer')}</h2>

        <div className="flex items-start mb-4">
          <Avatar className="h-16 w-16 mr-4">
            <AvatarImage src={buyer.avatar || undefined} />
            <AvatarFallback>{buyer.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">{buyer.name}</h3>
              {buyer.isVerified && <Shield className="h-4 w-4 text-primary" />}
            </div>
            <p className="text-sm text-muted-foreground">
              {t('request.sidebar.memberSince', { year: buyer.memberSince })}
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
              <span className="text-sm text-muted-foreground ml-1">({buyer.reviewsCount})</span>
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

      {/* Tips */}
      <div className="bg-gradient-secondary rounded-2xl p-6 text-white shadow-md">
        <h3 className="text-lg font-semibold mb-3">{t('request.sidebar.tipsTitle')}</h3>
        <ul className="space-y-2 text-sm opacity-90">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{t('request.sidebar.tip1')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{t('request.sidebar.tip2')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{t('request.sidebar.tip3')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{t('request.sidebar.tip4')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
