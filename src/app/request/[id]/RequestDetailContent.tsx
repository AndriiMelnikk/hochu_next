'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { useQueryClient } from '@tanstack/react-query';
import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import ImageLightbox from '@/widgets/app/ImageLightbox';
import { useRequest } from '@/entities/request';
import { useMe } from '@/entities/user/hooks/useUser';
import { useCanPropose, ProposalStatus } from '@/entities/proposal';
import { RequestInfo, RequestSidebar, StatusGuide } from '@/features/requests';
import { CreateProposalForm, ProposalList } from '@/features/proposals';
import { DiscussionForm, DiscussionList } from '@/features/discussions';
import { Loading } from '@shared/ui/loading';
import { Error } from '@shared/ui/error';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/tabs';
import { Breadcrumbs } from '@shared/ui/breadcrumbs';
import { Alert, AlertDescription, AlertTitle } from '@shared/ui/alert';
import { Button } from '@shared/ui/button';
import { Ban, LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { routes } from '@/app/router/routes';

export default function RequestDetailContent({ id }: { id: string }) {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const queryClient = useQueryClient();

  const { data: request, isLoading, error } = useRequest(id);
  const { data: canProposeData } = useCanPropose(request?._id);
  const { data: user } = useMe();

  const isOwner = !!request && !!user && request.buyerId?._id === user.profile?._id;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeLightboxImages, setActiveLightboxImages] = useState<string[]>([]);

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
    return <Loading variant="full-page" HeaderComponent={Header} FooterComponent={Footer} />;
  }

  if (error || !request) {
    return (
      <Error
        variant="full-page"
        message={t('request.detail.loadingError')}
        HeaderComponent={Header}
        FooterComponent={Footer}
      />
    );
  }

  const buyer = request.buyerId;

  const budget =
    request.budgetMin && request.budgetMax
      ? `${request.budgetMin}-${request.budgetMax} грн`
      : t('request.detail.budgetNotSpecified');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            dynamicLabels={{
              [`/request/${request._id}`]: t('request.detail.breadcrumbs', { id: request._id }),
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <RequestInfo
                request={request}
                onImageClick={handleImageClick}
                formatTimeAgo={formatTimeAgo}
                isOwner={isOwner}
                onActionSuccess={() => {
                  queryClient.invalidateQueries({ queryKey: ['requests', request._id] });
                }}
              />

              {canProposeData?.canPropose && (
                <CreateProposalForm
                  budget={budget}
                  requestId={request._id}
                  onSuccess={handleProposalSuccess}
                />
              )}

              {!canProposeData?.canPropose && canProposeData?.reason && (
                <Alert variant="amber">
                  <Ban className="h-4 w-4" />
                  <AlertTitle>{t('request.detail.cannotPropose')}</AlertTitle>
                  <AlertDescription>
                    {t(`proposal.rejection.${canProposeData.reason}`)}
                  </AlertDescription>
                </Alert>
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
                <TabsList className="w-full justify-start rounded-t-2xl rounded-b-none h-14 p-1 bg-muted/50">
                  <TabsTrigger value="proposals" className="flex-1 text-base">
                    {t('request.detail.tabs.proposals', { count: request.pendingProposalsCount })}
                  </TabsTrigger>
                  <TabsTrigger
                    value="discussion"
                    className="flex-1 items-center gap-2 cursor-not-allowed opacity-60"
                    disabled
                  >
                    <span className="hidden sm:inline">{t('request.detail.tabs.discussion')}</span>
                  </TabsTrigger>
                  <TabsTrigger value="rejected" className="flex-1 text-base">
                    {t('request.detail.tabs.rejected', { count: request.rejectedProposalsCount })}
                  </TabsTrigger>
                </TabsList>

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
        </div>
      </main>

      <ImageLightbox
        images={activeLightboxImages.length > 0 ? activeLightboxImages : request.images || []}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />

      <Footer />
    </div>
  );
}
