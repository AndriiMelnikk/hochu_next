'use client';

import { Star, Clock, Shield, MessageSquare } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { Button } from '@shared/ui/button';
import { Badge } from '@shared/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@shared/ui/carousel';
import type { IProposalWithSeller } from '@/entities/proposal';

interface ProposalItemProps {
  proposal: IProposalWithSeller;
  onImageClick: (images: string[], index: number) => void;
}

export const ProposalItem = ({ proposal, onImageClick }: ProposalItemProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const seller = proposal.seller;
  const displayName = seller?.name;
  const displayRating = seller?.rating;
  const displayReviewsCount = seller?.reviewsCount;
  const displayCompletedDeals = seller?.completedDeals;
  const displayAvatar = seller?.avatar;

  return (
    <div className="border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-md">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary shrink-0">
          <AvatarImage src={displayAvatar ?? undefined} />
          <AvatarFallback>{displayName}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2 flex-wrap">
                {displayName}
                {displayRating != null && (
                  <Badge variant="secondary" className="text-xs">
                    <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                    {displayRating}
                  </Badge>
                )}
              </h3>
              {(displayReviewsCount != null || displayCompletedDeals != null) && (
                <p className="text-sm text-muted-foreground">
                  {displayCompletedDeals != null && (
                    <>
                      {displayCompletedDeals} {t('proposal.item.completedDeals')}
                    </>
                  )}
                  {displayCompletedDeals != null && displayReviewsCount != null && ' • '}
                  {displayReviewsCount != null && (
                    <>
                      {displayReviewsCount} {t('proposal.item.reviews')}
                    </>
                  )}
                </p>
              )}
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-bold text-primary">{proposal.price} грн</div>
              <p className="text-xs text-muted-foreground">
                {new Date(proposal.createdAt).toLocaleDateString(
                  i18n.locale === 'uk' ? 'uk-UA' : 'en-US',
                )}
              </p>
            </div>
          </div>

          <h4 className="font-semibold mb-2">{proposal.title}</h4>
          <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
            {proposal.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span className="text-muted-foreground">{t('proposal.item.delivery')}</span>
              <span className="font-medium">{proposal.estimatedTime}</span>
            </span>
            {proposal.warranty != null && proposal.warranty !== '' && (
              <span className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">{t('proposal.item.warranty')}</span>
                <span className="font-medium">{proposal.warranty}</span>
              </span>
            )}
          </div>

          {proposal.images && proposal.images.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">{t('proposal.item.photos')}</h4>
              <Carousel opts={{ align: 'start' }} className="w-full max-w-full">
                <CarouselContent className="-ml-2">
                  {proposal.images.map((image: string, index: number) => (
                    <CarouselItem key={index} className="pl-2 basis-1/3 sm:basis-1/3 md:basis-1/4">
                      <div
                        className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer group"
                        onClick={() => onImageClick(proposal.images, index)}
                      >
                        <Image width={100} height={100} src={image} alt={`Фото ${index + 1}`} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {proposal.images.length > 3 && (
                  <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </>
                )}
              </Carousel>
            </div>
          )}

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              {t('proposal.item.writeButton')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
