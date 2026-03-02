import { FC } from 'react';
import { Card, CardContent } from '@shared/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import { Button } from '@shared/ui/button';
import { Star, Flag, ThumbsUpIcon } from 'lucide-react';
import { useReviews } from '@entities/review';

interface ReviewsListProps {
  targetUserId?: string;
  authorId?: string;
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

export const ReviewsList: FC<ReviewsListProps> = ({ targetUserId, authorId }) => {
  const { data: reviews, isLoading } = useReviews({ targetUserId, authorId });

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  if (!reviews) {
    return <div>Немає відгуків</div>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <Card key={review.id} className="mb-4">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={''} />
                  <AvatarFallback className="bg-gradient-primary text-white">
                    {review.userId}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{review.userId}</p>
                  <p className="text-sm text-muted-foreground">{review.createdAt}</p>
                </div>
              </div>
              {renderStars(review.rating)}
            </div>

            <div className="mb-3">
              <p className="text-foreground">{review.comment}</p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                {/* <HandThumbUp className="h-4 w-4 mr-1" /> */}
                <ThumbsUpIcon className="h-4 w-4 mr-1" />
                Корисно
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-destructive"
              >
                <Flag className="h-4 w-4 mr-1" />
                Поскаржитись
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
