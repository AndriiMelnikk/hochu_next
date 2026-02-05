'use client';

import { useState } from 'react';
import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import ImageLightbox from '@/widgets/app/ImageLightbox';
import { useRequest } from '@/entities/request';
import { RequestInfo, RequestSidebar } from '@/features/requests';
import { CreateProposalForm, ProposalList } from '@/features/proposals';
import { DiscussionForm, DiscussionList } from '@/features/discussions';
import { Loading } from '@shared/ui/loading';
import { Error } from '@shared/ui/error';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/tabs';
import { Breadcrumbs } from '@shared/ui/breadcrumbs';

export default function RequestDetailContent({ _id }: { _id: string }) {
  const { data: request, isLoading, error } = useRequest(_id);

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
    return new Date(dateString).toLocaleDateString('uk-UA');
  };

  const handleImageClick = (images: string[], index: number) => {
    setActiveLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (isLoading) {
    return <Loading variant="full-page" HeaderComponent={Header} FooterComponent={Footer} />;
  }

  if (error || !request) {
    return (
      <Error
        variant="full-page"
        message="Помилка завантаження запиту"
        HeaderComponent={Header}
        FooterComponent={Footer}
      />
    );
  }

  const buyer = request.buyer || {
    _id: '0',
    name: 'Невідомий користувач',
    avatar: null,
    rating: 0,
    reviewsCount: 0,
    isVerified: false,
    memberSince: '',
    completedDeals: 0,
  };

  const budget =
    request.budgetMin && request.budgetMax
      ? `${request.budgetMin}-${request.budgetMax} грн`
      : 'Не вказано';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            dynamicLabels={{
              [`/request/${request._id}`]: `Запит #${request._id}`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <RequestInfo
                request={request}
                onImageClick={handleImageClick}
                formatTimeAgo={formatTimeAgo}
              />

              <CreateProposalForm budget={budget} requestId={request._id} />

              {/* Tabs for Proposals and Discussion */}
              <Tabs
                defaultValue="proposals"
                className="bg-card rounded-2xl shadow-md border border-border"
              >
                <TabsList className="w-full justify-start rounded-t-2xl rounded-b-none h-14 p-1 bg-muted/50">
                  <TabsTrigger value="proposals" className="flex-1 text-base">
                    Активні пропозиції ({request.proposalsCount})
                  </TabsTrigger>
                  <TabsTrigger
                    value="discussion"
                    className="flex-1 items-center gap-2 cursor-not-allowed opacity-60"
                    disabled
                  >
                    <span className="hidden sm:inline">Публічні обговорення</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="discussion"
                    className="flex-1 items-center gap-2 cursor-not-allowed opacity-60"
                    disabled
                  >
                    <span className="hidden sm:inline">Відхилені пропозиції</span>
                  </TabsTrigger>
                </TabsList>

                {/* Received Proposals Tab */}
                <TabsContent value="proposals" className="p-6 mt-0">
                  <ProposalList requestId={request._id} onImageClick={handleImageClick} />
                </TabsContent>

                {/* Public Discussion Tab */}
                <TabsContent value="discussion" className="p-6 mt-0">
                  <p className="text-sm text-muted-foreground mb-6">
                    Задавайте питання публічно. Автор запиту та інші виконавці можуть відповісти.
                  </p>

                  <DiscussionList />

                  <DiscussionForm
                    replyTo={replyTo}
                    onCancelReply={() => setReplyTo(null)}
                    onSubmit={handleDiscussionSubmit}
                  />
                </TabsContent>
              </Tabs>
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
