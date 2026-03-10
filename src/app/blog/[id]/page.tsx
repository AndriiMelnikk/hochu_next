import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { blogService } from '@/entities/blog/services/blogService';
import { Error as ErrorComponent } from '@shared/ui/error';
import { parseContentToSections } from '@/entities/blog/utils/contentParser';
import BlogArticleContent from './BlogArticleContent';

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
        description: post.content?.slice(0, 160).replace(/<[^>]*>/g, ''),
        openGraph: {
          title: post.title,
          description: post.content?.slice(0, 160).replace(/<[^>]*>/g, ''),
          images: post.image ? [post.image] : [],
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
        message={
          locale === 'en'
            ? 'Failed to load article'
            : 'Не вдалося завантажити статтю'
        }
      />
    );
  }

  const sections = article?.content ? parseContentToSections(article.content) : [];

  return <BlogArticleContent article={article} sections={sections} />;
}
