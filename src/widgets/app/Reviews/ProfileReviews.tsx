import { FC, useMemo, useState } from 'react';
import { Star } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useReviewStats } from '@entities/review';
import { ReviewsList } from '@entities/review/ui/ReviewsList/ReviewsList';
import { LoadingState, Rating, Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui-v2';

interface ProfileReviewsProps {
  profileId: string;
}

export const ProfileReviews: FC<ProfileReviewsProps> = ({ profileId }) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const { data: reviewStats, isLoading } = useReviewStats(profileId);
  const [activeTab, setActiveTab] = useState('about-me');

  const avgRating = useMemo(() => {
    if (!reviewStats || reviewStats.total === 0) return 0;

    const totalRating = Object.entries(reviewStats.stars).reduce(
      (acc, [stars, count]) => acc + Number(stars) * count,
      0,
    );
    return totalRating / reviewStats.total;
  }, [reviewStats]);

  const reviewsParams = useMemo(() => {
    if (activeTab === 'about-me') {
      return { targetProfileId: profileId };
    }
    return { authorProfileId: profileId };
  }, [activeTab, profileId]);

  if (isLoading) {
    return <LoadingState className="min-h-[30vh]" />;
  }

  if (!reviewStats) {
    return <p className="py-8 text-center text-v2-muted">{t('review.statsError')}</p>;
  }

  return (
    <div className="ui-v2 space-y-8">
      <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
        <div>
          <div className="text-[40px] font-[550] leading-[48px]">{avgRating.toFixed(1)}</div>
          <Rating value={avgRating} className="my-1" />
          <p className="text-sm text-v2-muted">
            {t('review.summary.basedOn', { count: reviewStats.total })}
          </p>
        </div>

        <div className="max-w-md flex-1 space-y-2">
          {Object.entries(reviewStats.stars)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([stars, count]) => {
              const percentage = reviewStats.total > 0 ? (count / reviewStats.total) * 100 : 0;
              return (
                <div key={stars} className="flex items-center gap-3 text-sm">
                  <span className="flex w-8 items-center gap-1">
                    {stars}
                    <Star className="size-3 fill-v2-rating text-v2-rating" />
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-v2-surface-muted">
                    <div className="h-full bg-v2-rating" style={{ width: `${percentage}%` }} />
                  </div>
                  <span className="w-8 text-right text-v2-muted">{count}</span>
                </div>
              );
            })}
        </div>
      </section>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="about-me">{t('review.tabs.aboutMe')}</TabsTrigger>
          <TabsTrigger value="my-reviews">{t('review.tabs.mine')}</TabsTrigger>
        </TabsList>

        <TabsContent value="about-me" className="mt-6">
          <ReviewsList params={reviewsParams} />
        </TabsContent>

        <TabsContent value="my-reviews" className="mt-6">
          <ReviewsList params={reviewsParams} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
