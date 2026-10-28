import Image from 'next/image';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { getBlogPosts } from '@/entities/blog/services/blogPosts';
import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { Card, CardContent } from '@shared/ui/card';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getItemListJsonLd } from '@/shared/seo/schemas';

/** Список статей кешується на годину */
export const revalidate = 3600;

const COPY = {
  uk: {
    title: 'Блог Shukayu',
    intro:
      'Поради для покупців і продавців: як вигідно купувати через запити, складати пропозиції, що вигравають, і безпечно проводити угоди.',
    empty: 'Статей поки немає',
    readMore: 'Читати далі',
  },
  en: {
    title: 'Shukayu Blog',
    intro:
      'Tips for buyers and sellers: how to buy smarter with requests, write winning offers and close deals safely.',
    empty: 'No articles yet',
    readMore: 'Read more',
  },
} as const;

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  const metadata = getMetadataForRoute(locale, 'BLOG');
  const posts = await getBlogPosts(locale);
  // Порожній блог не індексуємо
  return posts.length > 0 ? metadata : { ...metadata, robots: { index: false, follow: true } };
}

export default async function BlogListPage({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  const posts = await getBlogPosts(locale);
  const copy = COPY[locale];

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">{copy.title}</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">{copy.intro}</p>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">{copy.empty}</p>
      ) : (
        <>
          <JsonLd
            data={getItemListJsonLd(
              posts.map((post) => ({
                name: post.title,
                url: `/${locale}${routes.BLOG_ID(String(post.id))}`,
              })),
            )}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                {post.image && (
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 480px, 100vw"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.category}</p>
                  <h2 className="text-2xl font-semibold mb-2">
                    <Link href={routes.BLOG_ID(String(post.id))} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <Link
                    href={routes.BLOG_ID(String(post.id))}
                    className="inline-flex min-h-11 items-center text-primary font-medium underline underline-offset-2"
                  >
                    {copy.readMore}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
