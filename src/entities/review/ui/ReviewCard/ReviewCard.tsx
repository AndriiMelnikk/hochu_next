import { FC } from 'react';
import { IReview } from '@entities/review';
import { Star } from 'lucide-react';
import { format } from 'date-fns';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { Avatar, Card, CardBody } from '@/ui-v2';

interface ReviewCardProps {
  review: IReview;
}

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? 'fill-v2-rating text-v2-rating' : 'text-v2-muted'}`}
        />
      ))}
    </div>
  );
};

export const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const author = review.authorProfileId;
  const requestFromProposal = review.proposalId?.requestId;

  // requestId can be a string (ID) or a populated object
  const populatedRequest =
    typeof review.requestId === 'object' && review.requestId !== null ? review.requestId : null;

  const requestId =
    populatedRequest?._id ??
    (review.requestId as unknown as { _id: string } | null)?._id ??
    requestFromProposal?._id;

  const requestTitle =
    typeof populatedRequest === 'object' && populatedRequest !== null
      ? populatedRequest.title
      : requestFromProposal?.title;

  return (
    <Card>
      <CardBody className="flex items-center gap-4 pb-0">
        <Avatar
          src={author.avatar ?? undefined}
          fallback={String(author.name[0] ?? '').charAt(0)}
        />
        <div className="flex-1">
          <p className="font-semibold">
            {author.name} {author.lastName}
          </p>
          <div className="text-sm text-v2-muted">{renderStars(review.rating)}</div>
        </div>
        <div className="text-sm text-v2-muted">
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </div>
      </CardBody>
      <CardBody className="pb-2">
        <p className="text-sm">{review.comment}</p>
      </CardBody>
      <CardBody className="pt-0">
        {requestId && requestTitle ? (
          <Link
            href={routes.REQUEST_ID(requestId)}
            className="text-xs text-v2-primary hover:underline"
          >
            Відгук до запиту: {requestTitle}
          </Link>
        ) : (
          <p className="text-xs text-v2-muted">Відгук без привʼязки до запиту</p>
        )}
      </CardBody>
    </Card>
  );
};
