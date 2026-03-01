'use client';

import { useState } from 'react';
import { Star, Clock, Shield, MessageSquare, CheckCircle2, Pencil, XCircle } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { Button } from '@shared/ui/button';
import { Badge } from '@shared/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@shared/ui/carousel';
import {
  type IProposalWithSeller,
  PROPOSAL_DELIVERY_TIME_LABELS,
  PROPOSAL_WARRANTY_LABELS,
  ProposalStatus,
} from '@/entities/proposal';
import { EditProposalModal } from './EditProposalModal';
import { ContactSellerModal } from './ContactSellerModal';
import { RejectProposalModal } from './RejectProposalModal';
import { CancelProposalModal } from './CancelProposalModal';
import { AcceptProposalModal } from './AcceptProposalModal';
import { CompleteProposalModal } from './CompleteProposalModal';
import { CancelAcceptedProposalModal } from './CancelAcceptedProposalModal';
import { CreateReviewModal } from './CreateReviewModal';
import { RequestStatus } from '@/entities/request';

interface ProposalItemProps {
  proposal: IProposalWithSeller;
  onImageClick: (images: string[], index: number) => void;
  isOwner: boolean;
  isProposalOwner?: boolean;
  onProposalSuccess?: () => void;
  type?: 'pending' | 'rejected';
  requestStatus?: RequestStatus;
  buyerId?: string;
  isSelected?: boolean;
}

export const ProposalItem = ({
  proposal,
  onImageClick,
  isOwner,
  isProposalOwner = false,
  onProposalSuccess,
  type = 'pending',
  requestStatus,
  buyerId,
  isSelected = false,
}: ProposalItemProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const [acceptDialogOpen, setAcceptDialogOpen] = useState(false);
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
  const [cancelAcceptedDialogOpen, setCancelAcceptedDialogOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewTarget, setReviewTarget] = useState<'seller' | 'buyer' | null>(null);

  const seller = proposal.seller;
  const displayName = seller?.name + ' ' + seller?.lastName;
  const displayRating = seller?.rating;
  const displayReviewsCount = seller?.reviewsCount;
  const displayCompletedDeals = seller?.completedDeals;
  const displayAvatar = seller?.avatar;

  const cardBaseClasses = 'border rounded-lg p-4 sm:p-6 transition-all';
  const cardStateClasses = isSelected
    ? ' border-primary bg-primary/5 shadow-md'
    : ' border-border hover:border-primary hover:shadow-md';

  const avatar = (
    <Link href={`/profile/${proposal.sellerId}`}>
      <Avatar className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-primary shrink-0 transition-opacity hover:opacity-80">
        <AvatarImage src={displayAvatar ?? undefined} />
        <AvatarFallback>{displayName}</AvatarFallback>
      </Avatar>
    </Link>
  );

  return (
    <div className={cardBaseClasses + cardStateClasses}>
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="hidden sm:block">{avatar}</div>

        <div className="flex-1 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6 mb-3">
            <div>
              <div className="flex items-center gap-3 sm:gap-2">
                <div className="sm:hidden">{avatar}</div>
                <h3 className="font-semibold text-lg flex items-center gap-2 flex-wrap">
                  <Link href={`/profile/${proposal.sellerId}`} className="hover:underline">
                    {displayName}
                  </Link>
                  {displayRating != null && (
                    <Badge variant="secondary" className="text-xs">
                      <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                      {displayRating}
                    </Badge>
                  )}
                  {isSelected && (
                    <Badge variant="success" className="text-xs">
                      {t('proposal.item.selectedExecutorBadge')}
                    </Badge>
                  )}
                  {type === 'rejected' && (
                    <Badge variant="destructive" className="text-xs">
                      {t('proposal.item.rejectedBadge')}
                    </Badge>
                  )}
                </h3>
              </div>
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
            <div className="text-left sm:text-right shrink-0 sm:ml-auto">
              <div className="text-xl sm:text-2xl font-bold text-primary">{proposal.price} грн</div>
              <p className="text-xs text-muted-foreground mt-1 sm:mt-0">
                {new Date(proposal.createdAt).toLocaleDateString(
                  i18n.locale === 'uk' ? 'uk-UA' : 'en-US',
                )}
              </p>
            </div>
          </div>

          <h4 className="font-semibold mb-2 break-words">{proposal.title}</h4>
          <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line break-words">
            {proposal.description}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-sm mb-4">
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
                    <CarouselItem key={index} className="pl-2 basis-1/2 xs:basis-1/3 md:basis-1/4">
                      <div
                        className="relative aspect-video w-full rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer group"
                        onClick={() => onImageClick(proposal.images, index)}
                      >
                        <Image
                          fill
                          src={image}
                          alt={`Фото ${index + 1}`}
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        />
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
                <Button variant="outline" size="sm" onClick={() => setContactModalOpen(true)}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {t('proposal.item.contactSellerButton')}
                </Button>
                <ContactSellerModal
                  userId={proposal.sellerId}
                  open={contactModalOpen}
                  onOpenChange={setContactModalOpen}
                />
                <Button variant="gradient" size="sm" onClick={() => setAcceptDialogOpen(true)}>
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  {t('proposal.item.selectSellerButton')}
                </Button>
                <AcceptProposalModal
                  requestId={proposal.requestId}
                  proposalId={proposal._id}
                  open={acceptDialogOpen}
                  onOpenChange={setAcceptDialogOpen}
                  onSuccess={onProposalSuccess}
                />
                <Button
                  variant="destructiveOutline"
                  size="sm"
                  onClick={() => setRejectDialogOpen(true)}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  {t('proposal.item.rejectSellerButton')}
                </Button>
                <RejectProposalModal
                  requestId={proposal.requestId}
                  proposalId={proposal._id}
                  open={rejectDialogOpen}
                  onOpenChange={setRejectDialogOpen}
                  onSuccess={onProposalSuccess}
                />
              </>
            )}
            {isOwner &&
              proposal.status === ProposalStatus.ACCEPTED &&
              requestStatus === RequestStatus.CLOSED && (
                <>
                  <Button variant="gradient" size="sm" onClick={() => setCompleteDialogOpen(true)}>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    {t('request.actions.confirm')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCancelAcceptedDialogOpen(true)}
                  >
                    {t('proposal.item.cancelAcceptedButton')}
                  </Button>
                  <CompleteProposalModal
                    requestId={proposal.requestId}
                    proposalId={proposal._id}
                    open={completeDialogOpen}
                    onOpenChange={setCompleteDialogOpen}
                    onSuccess={onProposalSuccess}
                  />
                  <CancelAcceptedProposalModal
                    requestId={proposal.requestId}
                    proposalId={proposal._id}
                    open={cancelAcceptedDialogOpen}
                    onOpenChange={setCancelAcceptedDialogOpen}
                    onSuccess={onProposalSuccess}
                  />
                </>
              )}
            {isProposalOwner && proposal.status === ProposalStatus.PENDING && (
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
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  {t('proposal.item.cancelButton')}
                </Button>
                <CancelProposalModal
                  requestId={proposal.requestId}
                  proposalId={proposal._id}
                  open={cancelDialogOpen}
                  onOpenChange={setCancelDialogOpen}
                  onSuccess={onProposalSuccess}
                />
              </>
            )}
            {proposal.status === ProposalStatus.COMPLETED && (
              <>
                {isOwner && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setReviewTarget('seller');
                      setReviewModalOpen(true);
                    }}
                  >
                    {t('proposal.item.leaveReviewForSeller')}
                  </Button>
                )}
                {isProposalOwner && buyerId && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setReviewTarget('buyer');
                      setReviewModalOpen(true);
                    }}
                  >
                    {t('proposal.item.leaveReviewForBuyer')}
                  </Button>
                )}
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
          {reviewTarget && (
            <CreateReviewModal
              targetProfileId={reviewTarget === 'seller' ? proposal.sellerId : (buyerId as string)}
              requestId={proposal.requestId}
              proposalId={proposal._id}
              open={reviewModalOpen}
              onOpenChange={(open) => {
                setReviewModalOpen(open);
                if (!open) {
                  setReviewTarget(null);
                }
              }}
              onSuccess={() => {
                onProposalSuccess?.();
                setReviewTarget(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
