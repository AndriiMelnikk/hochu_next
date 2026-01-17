import Link from "next/link";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Card, CardContent } from "@shared/ui/card";
import { Badge } from "@shared/ui/badge";
import { Button } from "@shared/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";

import { blogService } from "@/entities/blog/services/blogService";
import { Loading } from "@/shared/ui/loading";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  const baseMetadata = getMetadataForRoute(locale, 'BLOG_ID');

  try {
    const post = await blogService.getOne(id);
    if (post) {
      return {
        ...baseMetadata,
        title: `${post.title} | Hochu Blog`,
        description: post.content?.slice(0, 160).replace(/<[^>]*>/g, ""),
        openGraph: {
          title: post.title,
          description: post.content?.slice(0, 160).replace(/<[^>]*>/g, ""),
          images: post.image ? [post.image] : [],
        },
      };
    }
  } catch (error) {
    console.error("Failed to fetch blog post for metadata:", error);
  }

  return baseMetadata;
}

export default async function BlogArticlePage({ params }: Props) {
  const { id } = await params;

  // Макетні дані статті (в реальному додатку тут буде fetch з сервера)
  const article = {
    id,
    title: "Як створити ідеальний запит на послугу",
    category: "Поради покупцям",
    author: "Команда Hochu",
    date: "2024-03-15",
    readTime: "5 хв",
    image: "/placeholder.svg",
    content: `
      <h2>Вступ</h2>
      <p>Створення якісного запиту на послугу — це перший крок до успішного співробітництва з виконавцями. У цій статті ми розповімо, як правильно сформулювати ваші потреби, щоб отримати найкращі пропозиції.</p>`
  }
  // Парсинг контенту в секції
  const sections = article?.content 
    ? parseContentToSections(article.content)
    : [];

  // Обробка стану завантаження
  if (isLoading) {
    return (
      <Loading 
        variant="full-page" 
        message="Завантаження статті..."
        HeaderComponent={Header}
        FooterComponent={Footer}
      />
    );
  }

  // Обробка помилок
  if (isError || !article) {
    return (
      <Error 
        variant="full-page" 
        message={error?.message || "Не вдалося завантажити статтю"}
        HeaderComponent={Header}
        FooterComponent={Footer}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад до блогу
          </Button>
        </Link>

        {/* Article Header */}
        <Card className="mb-8">
          <div className="relative h-96 w-full overflow-hidden rounded-t-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('uk-UA', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} читання</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Поділитися
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="scroll-mt-24">
              <ArticleSection section={section} />
              {index < sections.length - 1 && section.type !== 'intro' && (
                <Separator className="my-8" />
              )}
            </div>
          ))}
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Схожі статті</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Link key={i} href={`/blog/${i + 1}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-2">Поради продавцям</Badge>
                    <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                      10 порад для успішних продавців
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Секрети створення привабливих пропозицій...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
