'use client';

import { useLingui } from '@lingui/react';
import Link from '@/shared/ui/link';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { ArticleSection } from './ArticleSection';
import { routes } from '@/app/router/routes';
import Image from 'next/image';
import type { IBlogPost } from '@/entities/blog/types/Blog';
import type { ArticleSectionData } from '@/entities/blog/utils/contentParser';
import { Badge, Button, Card, CardBody, Separator } from '@/ui-v2';

type Props = {
  article: IBlogPost;
  sections: ArticleSectionData[];
};

export default function BlogArticleContent({ article, sections }: Props) {
  const { i18n } = useLingui();
  const t = (id: string, values?: any) => i18n._(id, values);

  const locale = i18n.locale === 'en' ? 'en-US' : 'uk-UA';

  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6 pb-16">
      {/* Back Button */}
      <Link href={routes.BLOG}>
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('blog.article.backToBlog')}
        </Button>
      </Link>

      {/* Article Header */}
      <Card className="mb-8">
        <div className="relative h-96 w-full overflow-hidden rounded-t-lg">
          <Image
            src={article.image || '/placeholder.svg'}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <CardBody className="p-8">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-[550] mb-6">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-v2-muted mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(article.date).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{t('blog.article.readTime', { time: article.readTime })}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              {t('blog.article.share')}
            </Button>
          </div>
        </CardBody>
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
        <h2 className="text-2xl font-[550] mb-6">{t('blog.article.related')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Link key={i} href={`${routes.BLOG}/${i + 1}`}>
              <Card className="hover: transition-shadow">
                <CardBody className="p-6">
                  <Badge className="mb-2">{t('blog.article.category.tips')}</Badge>
                  <h3 className="font-semibold mb-2 hover:text-v2-primary transition-colors">
                    {t('blog.article.placeholder.title')}
                  </h3>
                  <p className="text-sm text-v2-muted">
                    {t('blog.article.placeholder.description')}
                  </p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
