import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import BlogListContent from './BlogListContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'BLOG');
}

export default function BlogListPage() {
  return <BlogListContent />;
}
