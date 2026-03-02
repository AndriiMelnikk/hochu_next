import { FC, useMemo } from 'react';
import { Card, CardContent } from '@shared/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/tabs';
import { Star } from 'lucide-react';
import { useReviewStats } from '@entities/review';
import { Skeleton } from '@shared/ui/skeleton';
import { ReviewsList } from '@widgets/app/ReviewsList';

interface ProfileReviewsProps {
  profileId: string;
}

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'fill-primary text-primary' : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
};

export const ProfileReviews: FC<ProfileReviewsProps> = ({ profileId }) => {
  const { data: reviewStats, isLoading } = useReviewStats(profileId);

  const avgRating = useMemo(() => {
    if (!reviewStats || reviewStats.total === 0) return 0;

    const totalRating = Object.entries(reviewStats.stars).reduce(
      (acc, [stars, count]) => acc + Number(stars) * count,
      0,
    );
    return totalRating / reviewStats.total;
  }, [reviewStats]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <Skeleton className="h-12 w-24 mb-2" />
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-4 w-40" />
            </div>
            <div className="flex-1 space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-2 flex-1" />
                  <Skeleton className="h-4 w-12" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!reviewStats) {
    return (
      <Card>
        <CardContent className="pt-6 text-center text-muted-foreground">
          Не вдалося завантажити статистику відгуків.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{avgRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">{renderStars(Math.round(avgRating))}</div>
              <p className="text-sm text-muted-foreground">
                На основі {reviewStats.total} відгуків
              </p>
            </div>

            <div className="flex-1 space-y-2">
              {Object.entries(reviewStats.stars)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([stars, count]) => {
                  const percentage = reviewStats.total > 0 ? (count / reviewStats.total) * 100 : 0;
                  return (
                    <div key={stars} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-20">
                        <span className="text-sm">{stars}</span>
                        <Star className="h-3 w-3 fill-primary text-primary" />
                      </div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${percentage}%` }} />
                      </div>
                      <span className="text-sm text-muted-foreground w-12 text-right">{count}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="about-me" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="about-me">Відгуки про мене</TabsTrigger>
          <TabsTrigger value="my-reviews">Мої відгуки</TabsTrigger>
        </TabsList>

        <TabsContent value="about-me" className="mt-6">
          <ReviewsList targetUserId={profileId} />
        </TabsContent>

        <TabsContent value="my-reviews" className="mt-6">
          <ReviewsList authorId={profileId} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
