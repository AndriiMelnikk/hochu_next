import { notFound } from 'next/navigation';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { getBlogPost } from '@/entities/blog/services/blogPosts';
import { LOCAL_POSTS } from '@/entities/blog/content/localPosts';
import { routes } from '@/app/router/routes';
import { Error as ErrorComponent } from '@shared/ui/error';
import { parseContentToSections } from '@/entities/blog/utils/contentParser';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getBlogPostingJsonLd } from '@/shared/seo/schemas';
import { isNotFoundError, toMetaDescription } from '@/shared/seo/indexability';
import { siteUrl } from '@/shared/config/envVars';
import BlogArticleContent from './BlogArticleContent';

/** Статті кешуються на годину */
export const revalidate = 3600;

/** Локальні статті генеруються під час білда, решта — при першому запиті */
export function generateStaticParams() {
  return LOCAL_POSTS.map((post) => ({ id: post.slug }));
}

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromParams(params);
  const baseMetadata = getMetadataForRoute(locale, 'BLOG_ID', routes.BLOG_ID(id));

  try {
    const post = await getBlogPost(id, locale);
    if (post) {
      const description =
        toMetaDescription(post.description) ??
        toMetaDescription(post.content) ??
        baseMetadata.description;
      return {
        ...baseMetadata,
        title: `${post.title} | Shukayu`,
        description,
        openGraph: {
          ...baseMetadata.openGraph,
          type: 'article',
          title: post.title,
          description,
          ...(post.image ? { images: [post.image] } : {}),
        },
        twitter: {
          ...baseMetadata.twitter,
          title: post.title,
          description,
        },
      };
    }
  } catch (error) {
    if (isNotFoundError(error)) {
      return { ...baseMetadata, robots: { index: false, follow: false } };
    }
    console.error('Failed to fetch blog post for metadata:', error);
  }

  return baseMetadata;
}

export default async function BlogArticlePage({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromParams(params);

  let article;
  let error;

  try {
    article = await getBlogPost(id, locale);
  } catch (err) {
    if (isNotFoundError(err)) notFound();
    console.error('Failed to fetch article:', err);
    error = err;
  }

  if (!error && !article) notFound();

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
