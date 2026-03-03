import { FC } from 'react';
import { IReview } from '@entities/review';
import { Card, CardContent, CardFooter, CardHeader } from '@shared/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import { Star } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { routes } from '@/app/router/routes';

interface ReviewCardProps {
  review: IReview;
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

export const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const author = review.authorProfileId;
  const requestFromProposal = review.proposalId?.requestId;
  const requestId = review.requestId ?? requestFromProposal?._id;
  const requestTitle = requestFromProposal?.title;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={author.avatar ?? undefined} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold">
            {author.name} {author.lastName}
          </p>
          <div className="text-sm text-muted-foreground">{renderStars(review.rating)}</div>
        </div>
        <div className="text-sm text-muted-foreground">
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{review.comment}</p>
      </CardContent>
      <CardFooter>
        {requestId && requestTitle ? (
          <Link
            href={routes.REQUEST_ID(requestId)}
            className="text-xs text-primary hover:underline"
          >
            Відгук до запиту: {requestTitle}
          </Link>
        ) : (
          <p className="text-xs text-muted-foreground">Відгук без привʼязки до запиту</p>
        )}
      </CardFooter>
    </Card>
  );
};
