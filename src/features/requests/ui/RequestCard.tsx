import Link from 'next/link';
import { Badge } from '@shared/ui/badge';
import { Clock, DollarSign, MapPin } from 'lucide-react';
import { routes } from '@/app/router/routes';
import { IRequest } from '@entities/request';

interface RequestCardProps {
  request: IRequest;
}

export const RequestCard = ({ request }: RequestCardProps) => {
  return (
    <Link href={`${routes.REQUEST_ID(request._id.toString())}`} className="group">
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg hover:shadow-blue/20 transition-all h-full flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            {request.category}
          </Badge>
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
            <span className="font-medium text-foreground">
              {request.budgetMin}-{request.budgetMax} грн
            </span>
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
