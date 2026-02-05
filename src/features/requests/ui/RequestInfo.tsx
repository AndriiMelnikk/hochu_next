import { Clock, Eye, MessageSquare, DollarSign, MapPin, Calendar, Package } from 'lucide-react';
import { Badge } from '@shared/ui/badge';
import { Separator } from '@shared/ui/separator';
import { IRequest } from '@/entities/request';

interface RequestInfoProps {
  request: Pick<
    IRequest,
    | 'title'
    | 'category'
    | 'description'
    | 'createdAt'
    | 'views'
    | 'proposalsCount'
    | 'budgetMin'
    | 'budgetMax'
    | 'location'
    | 'urgency'
    | 'itemCondition'
    | 'edits'
    | 'images'
  >;
  onImageClick: (images: string[], index: number) => void;
  formatTimeAgo: (date: string) => string;
}

export const RequestInfo = ({ request, onImageClick, formatTimeAgo }: RequestInfoProps) => {
  const budget =
    request.budgetMin && request.budgetMax
      ? `${request.budgetMin}-${request.budgetMax} грн`
      : 'Не вказано';
  const timeAgo = request.createdAt ? formatTimeAgo(request.createdAt) : '';

  return (
    <div className="space-y-6">
      {/* Request Header */}
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Badge variant="secondary" className="bg-accent text-accent-foreground mb-3">
              {request.category}
            </Badge>
            <h1 className="text-3xl font-bold mb-3 text-card-foreground">{request.title}</h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {timeAgo}
          </span>
          <span className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            {request.views} переглядів
          </span>
          <span className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {request.proposalsCount} пропозицій
          </span>
        </div>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-start">
            <DollarSign className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Бюджет</p>
              <p className="font-semibold">{budget}</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Локація</p>
              <p className="font-semibold">{request.location}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Терміни</p>
              <p className="font-semibold">{request.urgency}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Package className="h-5 w-5 mr-2 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Стан</p>
              <p className="font-semibold">{request.itemCondition}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
        <h2 className="text-xl font-semibold mb-4">Детальний опис</h2>
        <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
          {request.description}
        </div>

        {/* Edit History */}
        {request.edits && request.edits.length > 0 && (
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Історія редагування:
            </h3>
            <div className="space-y-3">
              {request.edits.map((edit, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-3 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      Уточнення
                    </Badge>
                    <span className="text-xs text-muted-foreground">{edit.timestamp}</span>
                  </div>
                  <p className="text-sm">{edit.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Images */}
      {request.images && request.images.length > 0 && (
        <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
          <h2 className="text-xl font-semibold mb-4">Фотографії ({request.images.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {request.images.map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer group"
                onClick={() => onImageClick(request.images, index)}
              >
                <img
                  src={image}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
