'use client';

import { Button } from '@shared/ui/button';
import { Badge } from '@shared/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import { Separator } from '@shared/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card';
import { ProfileReviews } from '@/widgets/app/Reviews';
import { Breadcrumbs } from '@shared/ui/breadcrumbs';
import {
  Star,
  MapPin,
  Clock,
  DollarSign,
  MessageCircle,
  CheckCircle,
  XCircle,
  Shield,
  Award,
  Package,
  Truck,
  Calendar,
  Eye,
  User,
  Loader2,
} from 'lucide-react';
import { Textarea } from '@shared/ui/textarea';
import { useProposal } from '@/entities/proposal/hooks/useProposal';
import { useRequest } from '@/entities/request/hooks/useRequest';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { ItemCondition } from '@/entities/request';

export default function ProposalDetailContent({ id }: { id: string }) {
  const { data: proposal, isLoading: isProposalLoading, error: proposalError } = useProposal(id);
  const { data: request, isLoading: isRequestLoading } = useRequest(proposal?.requestId, {
    enabled: !!proposal?.requestId,
  });

  if (isProposalLoading || isRequestLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (proposalError || !proposal) {
    return (
      <div className="flex items-center justify-center p-4 min-h-[50vh]">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              Помилка завантаження
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Не вдалося завантажити дані пропозиції. Спробуйте оновити сторінку пізніше.
            </p>
            <Button className="w-full mt-4" onClick={() => window.location.reload()}>
              Оновити сторінку
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const conditionMap: Record<ItemCondition, string> = {
    [ItemCondition.NEW]: 'Нове',
    [ItemCondition.USED]: 'Вживане',
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <Breadcrumbs
        dynamicLabels={{
          [`/proposal/${id}`]: `Пропозиція #${id}`,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2 text-card-foreground">{proposal.title}</h1>
                <p className="text-muted-foreground flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Створено {format(new Date(proposal.createdAt), 'd MMMM yyyy', { locale: uk })}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{proposal.price} грн</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {proposal.itemCondition && (
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  <Package className="h-3 w-3 mr-1" />
                  {conditionMap[proposal.itemCondition]}
                </Badge>
              )}
              {proposal.warranty && (
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  <Shield className="h-3 w-3 mr-1" />
                  Гарантія: {proposal.warranty} міс.
                </Badge>
              )}
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {proposal.estimatedTime} днів
              </Badge>
            </div>
          </div>

          {/* Images Gallery */}
          {proposal.images && proposal.images.length > 0 && (
            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <h2 className="text-xl font-semibold mb-4">Фотографії</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {proposal.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Фото ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
            <h2 className="text-xl font-semibold mb-4">Детальний опис</h2>
            <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
              {proposal.description}
            </div>
          </div>

          {/* Original Request */}
          {request && (
            <div className="bg-muted/30 rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Оригінальний запит
              </h3>
              <div className="space-y-2">
                <p className="font-medium">{request.title}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Бюджет: {request.budgetMin}-{request.budgetMax} грн
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {request.views} переглядів
                  </span>
                  <span>{request.proposalsCount} пропозицій</span>
                </div>
              </div>
            </div>
          )}

          {/* Buyer Information */}
          {request?.buyerId && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Замовник (Покупець)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={request.buyerId.avatar || undefined} />
                    <AvatarFallback>{request.buyerId.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">
                        {request.buyerId.name} {request.buyerId.lastName || ''}
                      </h3>
                      {request.buyerId.isVerified && <Shield className="h-4 w-4 text-primary" />}
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      {request.buyerId.location || 'Місцезнаходження не вказано'}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Рейтинг: </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{request.buyerId.rating || 0}</span>
                          <span className="text-muted-foreground">
                            ({request.buyerId.reviewsCount || 0} відгуків)
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Завершено угод: </span>
                        <span className="font-semibold">{request.buyerId.completedDeals || 0}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">На платформі з: </span>
                        <span className="font-semibold">
                          {request.buyerId.memberSince
                            ? format(new Date(request.buyerId.memberSince), 'd MMMM yyyy', {
                                locale: uk,
                              })
                            : '-'}{' '}
                          року
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Full Reviews Section */}
          <Card>
            <CardHeader>
              <CardTitle>Відгуки про продавця</CardTitle>
            </CardHeader>
            <CardContent>
              <ProfileReviews profileId={proposal.seller._id} />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Seller Card */}
          {proposal.seller && (
            <div className="bg-card rounded-2xl p-6 shadow-md border border-border sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Продавець</h2>

              <div className="flex items-start mb-4">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src={proposal.seller.avatar || undefined} />
                  <AvatarFallback>{proposal.seller.name?.[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">
                      {proposal.seller.name} {proposal.seller.lastName || ''}
                    </h3>
                    {proposal.seller.isVerified && <Shield className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {proposal.seller.location || 'Місцезнаходження не вказано'}
                  </p>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Rating */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Рейтинг</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-semibold">{proposal.seller.rating || 0}</span>
                  <span className="text-sm text-muted-foreground ml-1">
                    ({proposal.seller.reviewsCount || 0})
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Виконаних угод</span>
                  <span className="font-semibold">{proposal.seller.completedDeals || 0}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">На платформі з</span>
                  <span className="font-semibold">
                    {proposal.seller.memberSince
                      ? format(new Date(proposal.seller.memberSince), 'd MMMM yyyy', {
                          locale: uk,
                        })
                      : '-'}{' '}
                    року
                  </span>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button variant="gradient" className="w-full shadow-glow" size="lg">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Прийняти пропозицію
                </Button>

                <Button variant="outline" className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Написати повідомлення
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  <XCircle className="mr-2 h-5 w-5" />
                  Відхилити
                </Button>
              </div>

              {/* Warning */}
              <div className="mt-4 p-3 bg-accent/30 rounded-lg border border-accent">
                <p className="text-xs text-accent-foreground">
                  <strong>Порада:</strong> Обов&apos;язково обговоріть всі деталі в чаті перед
                  прийняттям рішення. Перевірте рейтинг та відгуки продавця.
                </p>
              </div>
            </div>
          )}

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Статистика пропозиції</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  Переглядів
                </span>
                <span className="font-semibold">{request?.views || 0}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Відгуків про продавця
                </span>
                <span className="font-semibold">{proposal.seller?.reviewsCount || 0}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
