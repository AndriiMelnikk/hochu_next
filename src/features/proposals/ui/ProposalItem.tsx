'use client';

import { useState } from 'react';
import { Star, Clock, Shield, MessageSquare, CheckCircle2, Pencil, XCircle } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@shared/ui/alert-dialog';
import {
  type IProposalWithSeller,
  PROPOSAL_DELIVERY_TIME_LABELS,
  PROPOSAL_WARRANTY_LABELS,
} from '@/entities/proposal';
import { useCancelProposal } from '@/entities/proposal/hooks/useCancelProposal';
import { useRejectProposal } from '@/entities/proposal/hooks/useRejectProposal';
import { EditProposalModal } from './EditProposalModal';
import { RequestStatus } from '@/entities/request';

interface ProposalItemProps {
  proposal: IProposalWithSeller;
  onImageClick: (images: string[], index: number) => void;
  isOwner: boolean;
  isProposalOwner?: boolean;
  onProposalSuccess?: () => void;
  type?: 'pending' | 'rejected';
  requestStatus?: RequestStatus;
}

export const ProposalItem = ({
  proposal,
  onImageClick,
  isOwner,
  isProposalOwner = false,
  onProposalSuccess,
  type = 'pending',
  requestStatus,
}: ProposalItemProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const { mutateAsync: cancelProposal, isPending: isCancelling } = useCancelProposal(
    proposal.requestId,
  );
  const { mutateAsync: rejectProposal, isPending: isRejecting } = useRejectProposal(
    proposal.requestId,
  );

  const handleCancelProposal = async () => {
    try {
      await cancelProposal(proposal._id);
      toast.success(t('proposal.cancel.success'));
      setCancelDialogOpen(false);
      onProposalSuccess?.();
    } catch {
      toast.error(t('proposal.cancel.error'));
    }
  };

  const handleRejectProposal = async () => {
    try {
      await rejectProposal(proposal._id);
      toast.success(t('proposal.reject.success'));
      setRejectDialogOpen(false);
      onProposalSuccess?.();
    } catch {
      toast.error(t('proposal.reject.error'));
    }
  };

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
                {type === 'rejected' && (
                  <Badge variant="destructive" className="text-xs">
                    {t('proposal.item.rejectedBadge')}
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
              <span className="font-medium">
                {PROPOSAL_DELIVERY_TIME_LABELS[
                  proposal.estimatedTime as keyof typeof PROPOSAL_DELIVERY_TIME_LABELS
                ]
                  ? t(
                      PROPOSAL_DELIVERY_TIME_LABELS[
                        proposal.estimatedTime as keyof typeof PROPOSAL_DELIVERY_TIME_LABELS
                      ],
                    )
                  : proposal.estimatedTime}
              </span>
            </span>
            {proposal.warranty != null && (
              <span className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground">{t('proposal.item.warranty')}</span>
                <span className="font-medium">
                  {PROPOSAL_WARRANTY_LABELS[
                    proposal.warranty as keyof typeof PROPOSAL_WARRANTY_LABELS
                  ]
                    ? t(
                        PROPOSAL_WARRANTY_LABELS[
                          proposal.warranty as keyof typeof PROPOSAL_WARRANTY_LABELS
                        ],
                      )
                    : proposal.warranty}
                </span>
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

          <div className="flex flex-wrap gap-2">
            {isOwner && type === 'pending' && requestStatus === RequestStatus.ACTIVE && (
              <>
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {t('proposal.item.contactSellerButton')}
                </Button>
                <Button variant="gradient" size="sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  {t('proposal.item.selectSellerButton')}
                </Button>
                <Button
                  variant="destructiveOutline"
                  size="sm"
                  onClick={() => setRejectDialogOpen(true)}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  {t('proposal.item.rejectSellerButton')}
                </Button>
                <AlertDialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{t('proposal.reject.confirmTitle')}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {t('proposal.reject.confirmDescription')}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>{t('proposal.reject.cancel')}</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={(e) => {
                          e.preventDefault();
                          handleRejectProposal();
                        }}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        {isRejecting ? t('proposal.edit.submitting') : t('proposal.reject.submit')}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
            {isProposalOwner && (
              <>
                <Button variant="outline" size="sm" onClick={() => setEditModalOpen(true)}>
                  <Pencil className="h-4 w-4 mr-2" />
                  {t('proposal.item.editButton')}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={() => setCancelDialogOpen(true)}
                  disabled={isCancelling}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  {t('proposal.item.cancelButton')}
                </Button>
                <AlertDialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{t('proposal.cancel.confirmTitle')}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {t('proposal.cancel.confirmDescription')}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>{t('proposal.edit.cancel')}</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={(e) => {
                          e.preventDefault();
                          handleCancelProposal();
                        }}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        {isCancelling
                          ? t('proposal.edit.submitting')
                          : t('proposal.item.cancelButton')}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
          </div>

          {isProposalOwner && (
            <EditProposalModal
              proposal={proposal}
              open={editModalOpen}
              onOpenChange={setEditModalOpen}
              onSuccess={() => {
                onProposalSuccess?.();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
