'use client';

import { useState } from 'react';
import { Star, Clock, Shield, MessageSquare, CheckCircle2, Pencil, XCircle } from 'lucide-react';
import { useLingui } from '@lingui/react';
import Image from 'next/image';
import Link from '@/shared/ui/link';
import { formatDate, formatMoney, getInitials, joinName } from '@/lib/format';
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
import { routes } from '@/app/router/routes';
import { Badge, Button, Avatar } from '@/ui-v2';

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
  const displayName = joinName(seller?.name, seller?.lastName) || t('proposal.item.unknownSeller');
  const displayRating = seller?.rating || 0;
  const displayXp = seller?.xp || 0;
  const displayReviewsCount = seller?.reviewsCount;
  const displayCompletedDeals = seller?.completedDeals;
  const displayAvatar = seller?.avatar;

  const cardBaseClasses = 'border rounded-v2-lg p-4 sm:p-6 transition-colors';
  const cardStateClasses = isSelected
    ? ' border-v2-primary bg-v2-primary '
    : ' border-v2-border hover:border-v2-primary hover:';

  const avatar = (
    <Link href={routes.PROFILE_BY_ID(proposal.sellerId)}>
      <Avatar
        size="md"
        className="border-2 border-v2-primary shrink-0 transition-opacity hover:opacity-80"
        src={displayAvatar ?? undefined}
        fallback={getInitials(displayName)}
      />
    </Link>
  );

  return (
    <div className={cardBaseClasses + cardStateClasses}>
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="hidden sm:block">{avatar}</div>

        <div className="flex-1 min-w-0 w-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6 mb-3">
            <div className="min-w-0">
              <div className="flex items-center gap-3 sm:gap-2">
                <div className="sm:hidden">{avatar}</div>
                <h3 className="font-semibold text-lg flex items-center gap-2 flex-wrap">
                  <Link
                    href={routes.PROFILE_BY_ID(proposal.sellerId)}
                    className="break-words hover:underline [overflow-wrap:anywhere]"
                  >
                    {displayName}
                  </Link>
                  {displayRating != null && (
                    <Badge tone="neutral" className="shrink-0 whitespace-nowrap text-xs">
                      <Star className="h-3 w-3 mr-1 fill-v2-rating text-v2-rating" />
                      {displayRating} ({displayXp})
                    </Badge>
                  )}
                  {isSelected && (
                    <Badge tone="success" className="text-xs">
                      {t('proposal.item.selectedExecutorBadge')}
                    </Badge>
                  )}
                  {type === 'rejected' && (
                    <Badge tone="danger" className="text-xs">
                      {t('proposal.item.rejectedBadge')}
                    </Badge>
                  )}
                </h3>
              </div>
              {(displayReviewsCount != null || displayCompletedDeals != null) && (
                <p className="text-sm text-v2-muted">
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
              <div className="text-xl sm:text-2xl font-[550] text-v2-primary">
                {formatMoney(proposal.price, i18n.locale)}
              </div>
              <p className="text-xs text-v2-muted mt-1 sm:mt-0">
                {formatDate(proposal.createdAt, i18n.locale)}
              </p>
            </div>
          </div>

          <h4 className="font-semibold mb-2 break-words">{proposal.title}</h4>
          <p className="text-sm text-v2-muted mb-4 whitespace-pre-line break-words">
            {proposal.description}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-v2-primary shrink-0" />
              <span className="text-v2-muted">{t('proposal.item.delivery')}</span>
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
                <Shield className="h-4 w-4 text-v2-primary shrink-0" />
                <span className="text-v2-muted">{t('proposal.item.warranty')}</span>
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
              <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2">
                {proposal.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className="relative aspect-video w-[45%] shrink-0 cursor-pointer snap-start overflow-hidden rounded-v2-lg border border-v2-border transition-colors hover:border-v2-primary sm:w-[30%] md:w-[24%]"
                    onClick={() => onImageClick(proposal.images, index)}
                  >
                    <Image
                      fill
                      src={image}
                      alt={`${t('request.detail.photoAlt')} ${index + 1}`}
                      className="object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 25vw"
                    />
                  </div>
                ))}
              </div>
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
                <Button size="sm" onClick={() => setAcceptDialogOpen(true)}>
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
                  variant="outline"
                  className="border-v2-danger text-v2-danger"
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
                  <Button size="sm" onClick={() => setCompleteDialogOpen(true)}>
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
            {isProposalOwner &&
              proposal.status === ProposalStatus.PENDING &&
              requestStatus === RequestStatus.ACTIVE && (
                <>
                  <Button variant="outline" size="sm" onClick={() => setEditModalOpen(true)}>
                    <Pencil className="h-4 w-4 mr-2" />
                    {t('proposal.item.editButton')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-v2-danger hover:text-v2-danger"
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
