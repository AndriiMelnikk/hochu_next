"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Card, CardContent } from "@shared/ui/card";
import { Badge } from "@shared/ui/badge";
import { Button } from "@shared/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@shared/ui/alert";
import { Separator } from "@shared/ui/separator";
import { Loading } from "@shared/ui/loading";
import { Error } from "@shared/ui/error";
import { useBlogPost } from "@/entities/blog/hooks/useBlogPosts";
import { 
  parseContentToSections, 
  getIconComponent,
  type ArticleSectionData 
} from "@/entities/blog/utils/contentParser";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Lightbulb, 
  Info, 
  CheckCircle, 
  Target,
  DollarSign,
  Image as ImageIcon,
  FileText,
  Star
} from "lucide-react";

// Компонент для секції з порадою
function TipSection({ title, content, items, iconName }: { title: string; content: string; items?: string[]; iconName?: string }) {
  const IconComponent = iconName ? getIconComponent(iconName) : Lightbulb;
  const Icon = IconComponent || Lightbulb;
  
  return (
    <Alert className="border-primary/50 bg-primary/5 shadow-sm">
      <Icon className="h-5 w-5 text-primary" />
      <AlertTitle className="text-xl font-bold mb-3 text-foreground">{title}</AlertTitle>
      <AlertDescription className="text-base">
        <p className="mb-4 leading-7">{content}</p>
        {items && items.length > 0 && (
          <ul className="list-disc list-inside space-y-2.5 mt-4 ml-2">
            {items.map((item, idx) => (
              <li key={idx} className="text-sm leading-6 text-muted-foreground">{item}</li>
            ))}
          </ul>
        )}
      </AlertDescription>
    </Alert>
  );
}

// Компонент для інформаційної секції
function InfoSection({ title, content, iconName }: { title: string; content: string; iconName?: string }) {
  const IconComponent = iconName ? getIconComponent(iconName) : undefined;
  
  return (
    <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {IconComponent && (
            <div className="mt-1 text-primary flex-shrink-0">
              <IconComponent className="h-5 w-5" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-7 text-base">{content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Компонент для вступу
function IntroSection({ content }: { content: string }) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="text-xl leading-8 text-muted-foreground font-light">{content}</p>
    </div>
  );
}

// Компонент для висновку
function ConclusionSection({ content }: { content: string }) {
  return (
    <Card className="bg-muted/50 border-primary/20 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <p className="text-base leading-7 font-medium text-foreground">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
}

// Компонент для списку порад
function TipsListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-5 flex items-center gap-2 text-foreground">
          <Star className="h-5 w-5 text-primary" />
          {title}
        </h3>
        <div className="grid gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <Badge variant="outline" className="mt-0.5 flex-shrink-0 font-semibold">
                {idx + 1}
              </Badge>
              <p className="text-sm text-muted-foreground flex-1 leading-6">{item}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Компонент для рендерингу секції
function ArticleSection({ section }: { section: ArticleSectionData }) {
  switch (section.type) {
    case 'intro':
      return <IntroSection content={section.content} />;
    case 'tip':
      return <TipSection title={section.title} content={section.content} items={section.items} iconName={section.icon} />;
    case 'info':
      return <InfoSection title={section.title} content={section.content} iconName={section.icon} />;
    case 'conclusion':
      return <ConclusionSection content={section.content} />;
    case 'tips-list':
      return <TipsListSection title={section.title} items={section.items} />;
    default:
      return null;
  }
}

export default function BlogArticlePage() {
  const params = useParams();
  const id = params?.id as string;

  // Завантаження даних з API
  const { data: article, isLoading, isError, error } = useBlogPost(id);

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

