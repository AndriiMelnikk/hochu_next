import { useState } from 'react';
import { Card, CardContent } from '@shared/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import { Button } from '@shared/ui/button';
import { Textarea } from '@shared/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@shared/ui/dialog';
import { Star, Flag, ThumbsUp } from 'lucide-react';
import { useToast } from '@shared/ui/use-toast';

interface Review {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
  dealTitle: string;
  helpful: number;
}

const mockReviewsAboutMe: Review[] = [
  {
    id: 1,
    author: { name: 'Марія Коваль', avatar: '' },
    rating: 5,
    comment: 'Чудовий покупець! Швидка оплата, ввічлива комунікація. Рекомендую!',
    date: '10.11.2024',
    dealTitle: 'iPad Air',
    helpful: 12,
  },
  {
    id: 2,
    author: { name: 'Дмитро Петренко', avatar: '' },
    rating: 5,
    comment: 'Все пройшло чудово. Швидка відповідь, чітка домовленість про зустріч.',
    date: '05.11.2024',
    dealTitle: 'Apple Watch',
    helpful: 8,
  },
  {
    id: 3,
    author: { name: 'Олена Сидоренко', avatar: '' },
    rating: 4,
    comment: 'Гарна людина, але трохи довго вирішувалися з місцем зустрічі.',
    date: '28.10.2024',
    dealTitle: 'Magic Keyboard',
    helpful: 5,
  },
];

const mockMyReviews: Review[] = [
  {
    id: 4,
    author: { name: 'Іван Мельник', avatar: '' },
    rating: 5,
    comment: 'Відмінний продавець! Товар у ідеальному стані, все як описано.',
    date: '12.11.2024',
    dealTitle: 'iPhone 14 Pro',
    helpful: 15,
  },
  {
    id: 5,
    author: { name: 'Анна Кравченко', avatar: '' },
    rating: 4,
    comment: 'Гарний сервіс, але ціна трохи завищена.',
    date: '08.11.2024',
    dealTitle: 'Ремонт ноутбука',
    helpful: 6,
  },
];

const Reviews = () => {
  const { toast } = useToast();
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [reportReason, setReportReason] = useState('');

  const handleReport = () => {
    toast({
      title: 'Скаргу відправлено',
      description: 'Ми розглянемо вашу скаргу найближчим часом.',
    });
    setReportDialogOpen(false);
    setReportReason('');
  };

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

  const renderReviewCard = (review: Review) => (
    <Card key={review.id} className="mb-4">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={review.author.avatar} />
              <AvatarFallback className="bg-gradient-primary text-white">
                {review.author.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{review.author.name}</p>
              <p className="text-sm text-muted-foreground">{review.date}</p>
            </div>
          </div>
          {renderStars(review.rating)}
        </div>

        <div className="mb-3">
          <p className="text-sm text-muted-foreground mb-1">Угода: {review.dealTitle}</p>
          <p className="text-foreground">{review.comment}</p>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <ThumbsUp className="h-4 w-4 mr-1" />
            Корисно ({review.helpful})
          </Button>

          <Dialog open={reportDialogOpen} onOpenChange={setReportDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-destructive"
              >
                <Flag className="h-4 w-4 mr-1" />
                Поскаржитись
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Поскаржитись на відгук</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Textarea
                  placeholder="Опишіть причину скарги..."
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  rows={4}
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setReportDialogOpen(false)}>
                    Скасувати
                  </Button>
                  <Button onClick={handleReport}>Відправити скаргу</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );

  const avgRating =
    mockReviewsAboutMe.reduce((acc, r) => acc + r.rating, 0) / mockReviewsAboutMe.length;

  return (
    <div className="space-y-6">
      {/* Overall Rating Summary */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{avgRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">{renderStars(Math.round(avgRating))}</div>
              <p className="text-sm text-muted-foreground">
                На основі {mockReviewsAboutMe.length} відгуків
              </p>
            </div>

            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = mockReviewsAboutMe.filter((r) => r.rating === stars).length;
                const percentage = (count / mockReviewsAboutMe.length) * 100;
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

      {/* Reviews Tabs */}
      <Tabs defaultValue="about-me" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="about-me">Відгуки про мене ({mockReviewsAboutMe.length})</TabsTrigger>
          <TabsTrigger value="my-reviews">Мої відгуки ({mockMyReviews.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="about-me" className="mt-6">
          {mockReviewsAboutMe.map(renderReviewCard)}
        </TabsContent>

        <TabsContent value="my-reviews" className="mt-6">
          {mockMyReviews.map(renderReviewCard)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reviews;
