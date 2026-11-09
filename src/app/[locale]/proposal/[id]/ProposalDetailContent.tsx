'use client';

import { ProfileReviews } from '@/widgets/app/Reviews';
import { Breadcrumbs } from '@shared/ui/breadcrumbs';
import {
  Star,
  MapPin,
  Clock,
  Wallet,
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
import { useProposal } from '@/entities/proposal/hooks/useProposal';
import { useRequest } from '@/entities/request/hooks/useRequest';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { ItemCondition } from '@/entities/request';
import { useLingui } from '@lingui/react';
import { routes } from '@/app/router/routes';
import { Badge, Button, Card, CardBody, CardHead, CardTitle, Separator, Avatar } from '@/ui-v2';

export default function ProposalDetailContent({ id }: { id: string }) {
  const { i18n } = useLingui();
  const t = (key: string, values?: Record<string, unknown>) => i18n._(key, values);

  const { data: proposal, isLoading: isProposalLoading, error: proposalError } = useProposal(id);
  const { data: request, isLoading: isRequestLoading } = useRequest(proposal?.requestId, {
    enabled: !!proposal?.requestId,
  });

  if (isProposalLoading || isRequestLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-v2-primary" />
      </div>
    );
  }

  if (proposalError || !proposal) {
    return (
      <div className="flex items-center justify-center p-4 min-h-[50vh]">
        <Card className="max-w-md w-full">
          <CardHead>
            <CardTitle className="text-v2-danger flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              {t('proposal.detail.errorTitle')}
            </CardTitle>
          </CardHead>
          <CardBody>
            <p className="text-v2-muted">{t('proposal.detail.errorDescription')}</p>
            <Button className="w-full mt-4" onClick={() => window.location.reload()}>
              {t('proposal.detail.errorRetry')}
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  const conditionMap: Record<ItemCondition, string> = {
    [ItemCondition.NEW]: t('proposal.detail.itemCondition.new'),
    [ItemCondition.USED]: t('proposal.detail.itemCondition.used'),
  };

  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6 max-w-7xl">
      <Breadcrumbs
        categoryId={request?.category.id}
        currentLabel={proposal.title}
        backHref={request ? routes.REQUEST_ID(request._id) : undefined}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="rounded-v2-2xl border border-v2-border bg-v2-surface p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-[550] mb-2 text-v2-ink">{proposal.title}</h1>
                <p className="text-v2-muted flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {t('proposal.detail.createdAt', {
                    date: format(new Date(proposal.createdAt), 'd MMMM yyyy', { locale: uk }),
                  })}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-[550] text-v2-primary">
                  {t('proposal.detail.price', { price: proposal.price })}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {proposal.itemCondition && (
                <Badge tone="neutral" className="bg-v2-hover text-v2-ink">
                  <Package className="h-3 w-3 mr-1" />
                  {conditionMap[proposal.itemCondition]}
                </Badge>
              )}
              {proposal.warranty && (
                <Badge tone="neutral" className="bg-v2-hover text-v2-ink">
                  <Shield className="h-3 w-3 mr-1" />
                  Гарантія: {proposal.warranty} міс.
                </Badge>
              )}
              <Badge tone="neutral" className="bg-v2-hover text-v2-ink">
                <Clock className="h-3 w-3 mr-1" />
                {proposal.estimatedTime} днів
              </Badge>
            </div>
          </div>

          {/* Images Gallery */}
          {proposal.images && proposal.images.length > 0 && (
            <div className="rounded-v2-2xl border border-v2-border bg-v2-surface p-6">
              <h2 className="text-xl font-semibold mb-4">{t('proposal.detail.images.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {proposal.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-v2-lg overflow-hidden border border-v2-border hover:border-v2-primary transition-colors cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={t('proposal.detail.images.alt', { index: index + 1 })}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="rounded-v2-2xl border border-v2-border bg-v2-surface p-6">
            <h2 className="text-xl font-semibold mb-4">{t('proposal.detail.description.title')}</h2>
            <div className="prose max-w-none text-v2-muted whitespace-pre-line">
              {proposal.description}
            </div>
          </div>

          {/* Original Request */}
          {request && (
            <div className="bg-v2-surface-subtle rounded-v2-2xl p-6 border border-v2-border">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-v2-primary" />
                {t('proposal.detail.originalRequest.title')}
              </h3>
              <div className="space-y-2">
                <p className="font-medium">{request.title}</p>
                <div className="flex items-center gap-4 text-sm text-v2-muted">
                  <span className="flex items-center">
                    <Wallet className="h-4 w-4 mr-1" />
                    {t('proposal.detail.originalRequest.budget', {
                      min: request.budgetMin,
                      max: request.budgetMax,
                    })}
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {t('proposal.detail.originalRequest.views', { count: request.views })}
                  </span>
                  <span>
                    {t('proposal.detail.originalRequest.proposals', {
                      count: request.proposalsCount,
                    })}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Buyer Information */}
          {request?.buyerId && (
            <Card className="border-2 border-v2-primary">
              <CardHead>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-v2-primary" />
                  {t('proposal.detail.buyer.title')}
                </CardTitle>
              </CardHead>
              <CardBody>
                <div className="flex items-start gap-4">
                  <Avatar
                    className=" "
                    src={request.buyerId.avatar || undefined}
                    fallback={String(request.buyerId.name?.[0] ?? '').charAt(0)}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">
                        {request.buyerId.name} {request.buyerId.lastName || ''}
                      </h3>
                      {request.buyerId.isVerified && <Shield className="h-4 w-4 text-v2-primary" />}
                    </div>
                    <p className="text-sm text-v2-muted flex items-center mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      {request.buyerId.location || t('proposal.detail.buyer.locationUnknown')}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-v2-muted">
                          {t('proposal.detail.buyer.ratingLabel')}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-v2-rating fill-v2-rating" />
                          <span className="font-semibold">{request.buyerId.rating || 0}</span>
                          <span className="text-v2-muted">
                            {t('proposal.detail.buyer.reviewsCount', {
                              count: request.buyerId.reviewsCount || 0,
                            })}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-v2-muted">
                          {t('proposal.detail.buyer.completedDeals')}
                        </span>
                        <span className="font-semibold">{request.buyerId.completedDeals || 0}</span>
                      </div>
                      <div>
                        <span className="text-v2-muted">
                          {t('proposal.detail.seller.memberSince', {
                            date: '',
                          }).replace(/\s*$/, '')}
                        </span>
                        <span className="font-semibold">
                          {request.buyerId.memberSince
                            ? format(new Date(request.buyerId.memberSince), 'd MMMM yyyy', {
                                locale: uk,
                              })
                            : '-'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          )}

          {/* Full Reviews Section */}
          <Card>
            <CardHead>
              <CardTitle>{t('proposal.detail.reviews.title')}</CardTitle>
            </CardHead>
            <CardBody>
              <ProfileReviews profileId={proposal.seller._id} />
            </CardBody>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Seller Card */}
          {proposal.seller && (
            <div className="rounded-v2-2xl border border-v2-border bg-v2-surface p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">{t('proposal.detail.seller.title')}</h2>

              <div className="flex items-start mb-4">
                <Avatar
                  className="  mr-4"
                  src={proposal.seller.avatar || undefined}
                  fallback={String(proposal.seller.name?.[0] ?? '').charAt(0)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">
                      {proposal.seller.name} {proposal.seller.lastName || ''}
                    </h3>
                    {proposal.seller.isVerified && <Shield className="h-4 w-4 text-v2-primary" />}
                  </div>
                  <p className="text-sm text-v2-muted flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {proposal.seller.location || t('proposal.detail.seller.locationUnknown')}
                  </p>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Rating */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-v2-muted">{t('proposal.detail.seller.rating')}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-v2-rating fill-v2-rating mr-1" />
                  <span className="font-semibold">{proposal.seller.rating || 0}</span>
                  <span className="text-sm text-v2-muted ml-1">
                    ({proposal.seller.reviewsCount || 0})
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-v2-muted">
                    {t('proposal.detail.seller.completedDeals')}
                  </span>
                  <span className="font-semibold">{proposal.seller.completedDeals || 0}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-v2-muted">
                    {t('proposal.detail.seller.memberSince', {
                      date: '',
                    }).replace(/\s*$/, '')}
                  </span>
                  <span className="font-semibold">
                    {proposal.seller.memberSince
                      ? format(new Date(proposal.seller.memberSince), 'd MMMM yyyy', {
                          locale: uk,
                        })
                      : '-'}
                  </span>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full shadow-glow">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  {t('proposal.detail.actions.accept')}
                </Button>

                <Button variant="outline" className="w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('proposal.detail.actions.message')}
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-v2-danger hover:bg-v2-danger hover:text-white"
                >
                  <XCircle className="mr-2 h-5 w-5" />
                  {t('proposal.detail.actions.reject')}
                </Button>
              </div>

              {/* Warning */}
              <div className="mt-4 p-3 bg-v2-hover rounded-v2-lg border border-v2-border">
                <p className="text-xs text-v2-ink">
                  <strong>{t('proposal.detail.tip.title')}</strong> {t('proposal.detail.tip.text')}
                </p>
              </div>
            </div>
          )}

          {/* Quick Stats */}
          <Card>
            <CardHead>
              <CardTitle className="text-lg">{t('proposal.detail.stats.title')}</CardTitle>
            </CardHead>
            <CardBody className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-v2-muted flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {t('proposal.detail.stats.views')}
                </span>
                <span className="font-semibold">{request?.views || 0}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-v2-muted flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  {t('proposal.detail.stats.sellerReviews')}
                </span>
                <span className="font-semibold">{proposal.seller?.reviewsCount || 0}</span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
