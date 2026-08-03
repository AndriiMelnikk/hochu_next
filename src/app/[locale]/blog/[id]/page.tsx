import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { blogService } from '@/entities/blog/services/blogService';
import { routes } from '@/app/router/routes';
import { Error as ErrorComponent } from '@shared/ui/error';
import { parseContentToSections } from '@/entities/blog/utils/contentParser';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getBlogPostingJsonLd } from '@/shared/seo/schemas';
import { siteUrl } from '@/shared/config/envVars';
import BlogArticleContent from './BlogArticleContent';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  const baseMetadata = getMetadataForRoute(locale, 'BLOG_ID', routes.BLOG_ID(id));

  try {
    const post = await blogService.getOne(id);
    if (post) {
      const description = post.content?.slice(0, 160).replace(/<[^>]*>/g, '');
      return {
        ...baseMetadata,
        title: `${post.title} | Shukayu Blog`,
        description,
        openGraph: {
          ...baseMetadata.openGraph,
          type: 'article',
          title: post.title,
          description,
          images: post.image ? [post.image] : [],
        },
        twitter: {
          ...baseMetadata.twitter,
          title: post.title,
          description,
        },
      };
    }
  } catch (error) {
    console.error('Failed to fetch blog post for metadata:', error);
  }

  return baseMetadata;
}

export default async function BlogArticlePage({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();

  let article;
  let error;

  try {
    article = await blogService.getOne(id);
  } catch (err) {
    console.error('Failed to fetch article:', err);
    error = err;
  }

  if (error || !article) {
    return (
      <ErrorComponent
        variant="full-page"
        message={locale === 'en' ? 'Failed to load article' : 'Не вдалося завантажити статтю'}
      />
    );
  }

  const sections = article?.content ? parseContentToSections(article.content) : [];

  return (
    <>
      <JsonLd
        data={getBlogPostingJsonLd({
          title: article.title,
          description: article.description,
          image: article.image,
          author: article.author,
          datePublished: article.date,
          url: `${siteUrl}/${locale}${routes.BLOG_ID(id)}`,
          locale,
        })}
      />
      <BlogArticleContent article={article} sections={sections} />
    </>
  );
}
