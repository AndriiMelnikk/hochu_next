"use client";

import { useParams } from "next/navigation";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { useRequest } from "@/entities/request";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Eye, MessageSquare } from "lucide-react";

export default function RequestDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { data: request, isLoading, error } = useRequest(id);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <p>Завантаження...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !request) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <p>Помилка завантаження запиту</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {request.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{request.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{request.timeAgo}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{request.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>{request.budget}</span>
              </div>
              {request.views && (
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{request.views} переглядів</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>{request.proposalsCount} пропозицій</span>
              </div>
            </div>
          </div>

          <Card className="p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Опис</h2>
            <p className="text-muted-foreground whitespace-pre-line">{request.description}</p>
          </Card>

          {request.buyer && (
            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Замовник</h2>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">{request.buyer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Рейтинг: {request.buyer.rating} ({request.buyer.reviewsCount} відгуків)
                  </p>
                </div>
              </div>
            </Card>
          )}

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              Залишити пропозицію
            </Button>
            <Button variant="outline" size="lg">
              Зберегти
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

