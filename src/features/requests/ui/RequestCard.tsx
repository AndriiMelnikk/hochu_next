import Link from 'next/link';
import { Badge } from '@shared/ui/badge';
import { Clock, DollarSign, MapPin } from 'lucide-react';
import { routes } from '@/app/router/routes';
import {
  IRequest,
  REQUEST_STATUS_BADGE_VARIANT,
  REQUEST_STATUS_LABELS,
  RequestStatus,
} from '@entities/request';
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

  return (
    <Link href={`${routes.REQUEST_ID(request._id.toString())}`} className="group">
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg hover:shadow-blue/20 transition-all h-full flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Badge variant="default">{categoryName || request.category.name}</Badge>
            {status && (
              <Badge
                variant={
                  REQUEST_STATUS_BADGE_VARIANT[
                    request.status as keyof typeof REQUEST_STATUS_BADGE_VARIANT
                  ] ?? 'secondary'
                }
              >
                {t(REQUEST_STATUS_LABELS[request.status as keyof typeof REQUEST_STATUS_LABELS])}
              </Badge>
            )}
          </div>

          <span className="text-xs text-muted-foreground flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {new Date(request.createdAt).toLocaleDateString()}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {request.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">{request.description}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="h-4 w-4 mr-2 text-primary" />
            <span className="font-medium text-foreground">{budget}</span>
          </div>

          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            {request.location}
          </div>

          <div className="pt-3 border-t border-border">
            <span className="text-primary font-medium">{request.proposalsCount} пропозицій</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
