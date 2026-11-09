'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Star } from 'lucide-react';
import { toast } from 'sonner';
import { useCreateReview } from '@/entities/review/hooks/useCreateReview';
import { cn } from '@/lib/utils';
import {
  Button,
  Label,
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Textarea,
} from '@/ui-v2';

interface CreateReviewModalProps {
  targetProfileId: string;
  requestId?: string;
  proposalId?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const createReviewSchema = z.object({
  rating: z.number().min(1, 'Rating is required').max(5),
  comment: z.string().max(1000, 'Comment is too long').optional(),
});

type CreateReviewFormValues = z.infer<typeof createReviewSchema>;

export const CreateReviewModal = ({
  targetProfileId,
  requestId,
  proposalId,
  open,
  onOpenChange,
  onSuccess,
}: CreateReviewModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { mutateAsync: createReview, isPending } = useCreateReview();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<CreateReviewFormValues>({
    resolver: zodResolver(createReviewSchema),
    defaultValues: {
      rating: 0,
      comment: '',
    },
  });

  const rating = watch('rating');
  const [hoverRating, setHoverRating] = useState(0);

  const onSubmit = async (data: CreateReviewFormValues) => {
    try {
      await createReview({
        targetProfileId,
        requestId,
        proposalId,
        rating: data.rating,
        comment: data.comment,
      });
      toast.success(t('review.create.success'));
      onOpenChange(false);
      reset();
      onSuccess?.();
    } catch {
      toast.error(t('review.create.error'));
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{t('review.create.title')}</ModalTitle>
          <ModalDescription>{t('review.create.description')}</ModalDescription>
        </ModalHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>{t('review.create.rating')}</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  aria-label={`${star}/5`}
                  aria-pressed={star === rating}
                  className="rounded-v2-sm transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setValue('rating', star, { shouldValidate: true })}
                >
                  <Star
                    className={cn(
                      'h-8 w-8 transition-colors',
                      (hoverRating ? star <= hoverRating : star <= rating)
                        ? 'fill-v2-rating text-v2-rating'
                        : 'fill-v2-surface-muted text-v2-surface-muted',
                    )}
                  />
                </button>
              ))}
            </div>
            {errors.rating && (
              <p className="text-sm text-v2-danger">{t('review.create.ratingRequired')}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">{t('review.create.comment')}</Label>
            <Textarea
              id="comment"
              placeholder={t('review.create.commentPlaceholder')}
              className="resize-none"
              {...register('comment')}
            />
            {errors.comment && <p className="text-sm text-v2-danger">{errors.comment.message}</p>}
          </div>

          <ModalFooter>
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
              {t('common.cancel')}
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? t('common.submitting') : t('review.create.submit')}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
