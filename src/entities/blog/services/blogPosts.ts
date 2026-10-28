import type { Locale } from '@/locales/config';
import { LOCAL_POSTS, type LocalPost } from '../content/localPosts';
import type { IBlogPost } from '../types/Blog';
import { blogService } from './blogService';

function toBlogPost(post: LocalPost, locale: Locale): IBlogPost {
  const localized = post.content[locale];
  return {
    id: post.slug,
    title: localized.title,
    description: localized.description,
    category: localized.category,
    author: post.author,
    date: post.date,
    readTime: localized.readTime,
    image: post.image,
    content: JSON.stringify(localized.sections),
  };
}

/** Усі статті: локальні (з репозиторію) + опубліковані через API. Помилка API не ламає список. */
export async function getBlogPosts(locale: Locale): Promise<IBlogPost[]> {
  const local = LOCAL_POSTS.map((post) => toBlogPost(post, locale));
  try {
    const { results } = await blogService.get();
    return [...local, ...results];
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return local;
  }
}

/** Стаття за id/slug: спершу локальні, далі API (помилки API прокидаються далі). */
export async function getBlogPost(id: string, locale: Locale): Promise<IBlogPost | null> {
  const local = LOCAL_POSTS.find((post) => post.slug === id);
  if (local) return toBlogPost(local, locale);
  return blogService.getOne(id);
}
