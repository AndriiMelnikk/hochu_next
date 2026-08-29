'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { useQueryClient } from '@tanstack/react-query';
import ImageLightbox from '@/widgets/app/ImageLightbox';
import { RequestStatus, useRequest, IRequest } from '@/entities/request';
import { useMe, useUserContacts, hasFilledContacts } from '@/entities/user';
import {
  ProposalStatus,
  ProposalRejectionReason,
  useCanPropose,
  useProposals,
} from '@/entities/proposal';
import { RequestInfo, RequestSidebar, StatusGuide } from '@/features/requests';
import { CreateProposalForm, ProposalList } from '@/features/proposals';
import { DiscussionForm, DiscussionList } from '@/features/discussions';
import { EditContactChannelsModal, SwitchProfileModal } from '@/features/user';
import { Loading } from '@shared/ui/loading';
import { Error } from '@shared/ui/error';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/tabs';
import { Breadcrumbs } from '@shared/ui/breadcrumbs';
import { Alert, AlertDescription, AlertTitle } from '@shared/ui/alert';
import { Button } from '@shared/ui/button';
import { Ban, LogIn, Phone, UserPlus, Users } from 'lucide-react';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';

export default function RequestDetailContent({
  id,
  initialData,
}: {
  id: string;
  initialData?: IRequest | null;
}) {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const queryClient = useQueryClient();

  const { data: request, isLoading } = useRequest(id, {
    initialData: initialData ?? undefined,
    staleTime: 60_000,
  });
  const { data: canProposeData } = useCanPropose(request?._id);
  const { data: user } = useMe();
  const {
    data: contacts,
    isLoading: isContactsLoading,
    isError: isContactsError,
  } = useUserContacts(user?.profile?._id, {
    enabled:
      !!user?.profile?._id &&
      (canProposeData?.canPropose === true ||
        canProposeData?.reason === ProposalRejectionReason.NO_CONTACTS),
  });
  const { data: completedProposals } = useProposals(id, {
    status: ProposalStatus.COMPLETED,
    page: 1,
    pageSize: 100,
  });

  const isOwner = !!request && !!user && request.buyerId?._id === user.profile?._id;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeLightboxImages, setActiveLightboxImages] = useState<string[]>([]);
  const [contactsModalOpen, setContactsModalOpen] = useState(false);
  const [switchProfileModalOpen, setSwitchProfileModalOpen] = useState(false);

  // Discussion state
  const [replyTo, setReplyTo] = useState<number | null>(null);

  const handleDiscussionSubmit = (text: string) => {
    console.log('Discussion message:', text, 'Reply to:', replyTo);
    setReplyTo(null);
  };

  const formatTimeAgo = (dateString: string) => {
    // Simple time ago formatter (should use a library like date-fns)
    return new Date(dateString).toLocaleDateString(i18n.locale === 'uk' ? 'uk-UA' : 'en-US');
  };

  const handleImageClick = (images: string[], index: number) => {
    setActiveLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleProposalSuccess = () => {
    if (request?._id) {
      void queryClient.invalidateQueries({ queryKey: ['proposals', 'canPropose', request._id] });
      void queryClient.invalidateQueries({ queryKey: ['proposals', 'list', request._id] });
      void queryClient.invalidateQueries({ queryKey: ['requests', request._id] });
    }
  };

  if (isLoading) {
    return <Loading variant="full-page" />;
  }

  if (!request) {
    return <Error variant="full-page" message={t('request.detail.loadingError')} />;
  }

  const buyer = request.buyerId;
  const executorCompletedProposalForCurrentUser = completedProposals?.results.find(
    (proposal) => proposal.sellerId === user?.profile?._id,
  );
  const canCurrentUserReviewBuyer =
    !!executorCompletedProposalForCurrentUser && request.status === RequestStatus.COMPLETED;

  const budget =
    request.budgetMin && request.budgetMax
      ? `${request.budgetMin}-${request.budgetMax} грн`
      : t('request.detail.budgetNotSpecified');

  const lightboxImages =
    activeLightboxImages.length > 0 ? activeLightboxImages : request.images || [];

  const contactsFilled = hasFilledContacts(contacts);
  const noContactsFromList = !isContactsLoading && !isContactsError && !contactsFilled;
  const blockedByMissingContacts =
    noContactsFromList &&
    (canProposeData?.canPropose === true ||
      canProposeData?.reason === ProposalRejectionReason.NO_CONTACTS);
  const cannotProposeReason = blockedByMissingContacts
    ? ProposalRejectionReason.NO_CONTACTS
    : !canProposeData?.canPropose && canProposeData?.reason !== ProposalRejectionReason.NO_CONTACTS
      ? canProposeData?.reason
      : undefined;
  const showProposalForm =
    !blockedByMissingContacts &&
    !isContactsLoading &&
    (canProposeData?.canPropose === true ||
      (canProposeData?.reason === ProposalRejectionReason.NO_CONTACTS && contactsFilled));
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <Breadcrumbs categoryId={request.category.id} currentLabel={request.title} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <RequestInfo
            request={request}
            onImageClick={handleImageClick}
            formatTimeAgo={formatTimeAgo}
            isOwner={isOwner}
            executorReviewProps={
              canCurrentUserReviewBuyer && buyer?._id && executorCompletedProposalForCurrentUser
                ? {
                    targetProfileId: buyer._id,
                    proposalId: executorCompletedProposalForCurrentUser._id,
                  }
                : undefined
            }
            onActionSuccess={() => {
              queryClient.invalidateQueries({ queryKey: ['requests', request._id] });
            }}
          />

          {(canProposeData?.canPropose ||
            canProposeData?.reason === ProposalRejectionReason.NO_CONTACTS) &&
            isContactsLoading && <Loading variant="block" />}

          {showProposalForm && (
            <CreateProposalForm
              budget={budget}
              requestId={request._id}
              onSuccess={handleProposalSuccess}
            />
          )}

          {cannotProposeReason && (
            <Alert variant="amber">
              <Ban className="h-4 w-4" />
              <AlertTitle>{t('request.detail.cannotPropose')}</AlertTitle>
              <AlertDescription className="flex flex-col gap-3">
                <span>{t(`proposal.rejection.${cannotProposeReason}`)}</span>
                {cannotProposeReason === ProposalRejectionReason.NOT_SELLER && user && (
                  <div className="pt-1">
                    <Button
                      size="sm"
                      className="gap-1.5"
                      onClick={() => setSwitchProfileModalOpen(true)}
                    >
                      <Users className="h-3.5 w-3.5" />
                      {t('request.detail.switchToSeller')}
                    </Button>
                  </div>
                )}
                {cannotProposeReason === ProposalRejectionReason.NO_CONTACTS && user && (
                  <div className="pt-1">
                    <Button
                      size="sm"
                      className="gap-1.5"
                      onClick={() => setContactsModalOpen(true)}
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {t('request.detail.addContacts')}
                    </Button>
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          {user && (
            <>
              <EditContactChannelsModal
                user={user}
                open={contactsModalOpen}
                onOpenChange={setContactsModalOpen}
                onSuccess={() => {
                  void queryClient.invalidateQueries({
                    queryKey: ['users', 'contacts', user.profile._id],
                  });
                  if (request._id) {
                    void queryClient.invalidateQueries({
                      queryKey: ['proposals', 'canPropose', request._id],
                    });
                  }
                }}
              />
              <SwitchProfileModal
                open={switchProfileModalOpen}
                onOpenChange={setSwitchProfileModalOpen}
                onSuccess={() => {
                  if (request._id) {
                    void queryClient.invalidateQueries({
                      queryKey: ['proposals', 'canPropose', request._id],
                    });
                  }
                }}
              />
            </>
          )}

          {!user && (
            <Alert variant="amber">
              <UserPlus className="h-4 w-4 text-amber-600" />
              <AlertTitle>{t('request.detail.proposalAuthRequired.title')}</AlertTitle>
              <AlertDescription className="flex flex-col gap-3">
                <span>{t('request.detail.proposalAuthRequired.description')}</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link href={routes.REGISTER}>
                    <Button size="sm" className="gap-1.5">
                      <UserPlus className="h-3.5 w-3.5" />
                      {t('request.detail.proposalAuthRequired.register')}
                    </Button>
                  </Link>
                  <Link href={routes.LOGIN}>
                    <Button size="sm" variant="outline" className="gap-1.5">
                      <LogIn className="h-3.5 w-3.5" />
                      {t('request.detail.proposalAuthRequired.login')}
                    </Button>
                  </Link>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Tabs for Proposals and Discussion */}
          <Tabs
            defaultValue="proposals"
            className="bg-card rounded-2xl shadow-md border border-border"
          >
            <div className="overflow-x-auto scrollbar-none">
              <TabsList className="w-full min-w-max justify-start rounded-t-2xl rounded-b-none h-14 p-1 bg-muted/50 flex-nowrap">
                <TabsTrigger value="proposals" className="flex-1 min-w-[140px] text-base">
                  {t('request.detail.tabs.proposals', { count: request.pendingProposalsCount })}
                </TabsTrigger>

                <TabsTrigger value="rejected" className="flex-1 min-w-[140px] text-base">
                  {t('request.detail.tabs.rejected', { count: request.rejectedProposalsCount })}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Received Proposals Tab */}
            <TabsContent value="proposals" className="p-6 mt-0">
              <ProposalList
                requestId={request._id}
                onImageClick={handleImageClick}
                isOwner={isOwner}
                currentUserId={user?.profile?._id}
                onProposalSuccess={handleProposalSuccess}
                buyerId={buyer?._id}
                type="pending"
                requestStatus={request.status}
              />
            </TabsContent>

            {/* Rejected Proposals Tab */}
            <TabsContent value="rejected" className="p-6 mt-0">
              <ProposalList
                requestId={request._id}
                onImageClick={handleImageClick}
                isOwner={isOwner}
                currentUserId={user?.profile?._id}
                onProposalSuccess={handleProposalSuccess}
                buyerId={buyer?._id}
                status={ProposalStatus.REJECTED}
                type="rejected"
              />
            </TabsContent>

            {/* Public Discussion Tab */}
            <TabsContent value="discussion" className="p-6 mt-0">
              <p className="text-sm text-muted-foreground mb-6">
                {t('request.detail.discussion.empty')}
              </p>

              <DiscussionList />

              <DiscussionForm
                replyTo={replyTo}
                onCancelReply={() => setReplyTo(null)}
                onSubmit={handleDiscussionSubmit}
              />
            </TabsContent>
          </Tabs>

          <StatusGuide />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <RequestSidebar buyer={buyer} proposalsCount={request.proposalsCount} />
        </div>
      </div>
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </div>
  );
}
