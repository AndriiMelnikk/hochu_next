import { cache } from 'react';
import type { Locale } from '@/locales/config';
import {
  getCategoryAncestors,
  getCategoryIndex,
  isServiceCategory,
  type CategoryIndex,
  type ICategory,
} from '@/entities/category';
import { fetchAllRequests, RequestStatus, type IRequest } from '@/entities/request';
import { matchCity, type City } from '@/shared/config/cities';

export type CatalogStats = {
  /** К-сть активних запитів у категорії (разом із підкатегоріями) */
  byCategory: Map<string, number>;
  /** categoryId → citySlug → к-сть */
  byCategoryCity: Map<string, Map<string, number>>;
};

/**
 * Лічильники активних запитів по категоріях і містах. Запит рахується у своїй
 * категорії та всіх її предках. Структура дерева не залежить від мови.
 */
export const getCatalogStats = cache(async (): Promise<CatalogStats> => {
  const byCategory = new Map<string, number>();
  const byCategoryCity = new Map<string, Map<string, number>>();

  let index: CategoryIndex;
  let requests: IRequest[];
  try {
    [index, requests] = await Promise.all([
      getCategoryIndex('uk'),
      fetchAllRequests(RequestStatus.ACTIVE),
    ]);
  } catch (error) {
    console.error('Failed to build catalog stats:', error);
    return { byCategory, byCategoryCity };
  }

  for (const request of requests) {
    const category = index.byId.get(request.category.id);
    if (!category) continue;
    const city = matchCity(request.location);

    for (const { _id: id } of getCategoryAncestors(index, category)) {
      byCategory.set(id, (byCategory.get(id) ?? 0) + 1);
      if (city) {
        const cities = byCategoryCity.get(id) ?? new Map<string, number>();
        cities.set(city.slug, (cities.get(city.slug) ?? 0) + 1);
        byCategoryCity.set(id, cities);
      }
    }
  }

  return { byCategory, byCategoryCity };
});

/**
 * Політика індексації сторінок каталогу (захист від тонкого контенту):
 * корені й 1-й рівень — завжди (шаблонний текст + FAQ), 2-й рівень — лише з запитами;
 * «категорія + місто» — лише якщо є активні запити.
 */
export function isIndexableCategory(category: ICategory, count: number): boolean {
  return (category.level ?? 0) <= 1 || count > 0;
}

export function isIndexableCategoryCity(count: number): boolean {
  return count > 0;
}

type CopyInput = {
  locale: Locale;
  title: string;
  isService: boolean;
  count: number;
  city?: City;
};

export type CatalogCopy = {
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  listTitle: string;
  empty: string;
  cta: string;
  faq: Array<{ question: string; answer: string }>;
};

/** Шаблонний текст сторінок каталогу (товари vs послуги, з містом чи без) */
export function getCatalogCopy({ locale, title, isService, count, city }: CopyInput): CatalogCopy {
  if (locale === 'en') {
    const where = city ? ` in ${city.en}` : '';
    const who = isService ? 'Service providers' : 'Sellers';
    return {
      h1: `${title}${where}: buyer requests`,
      intro: isService
        ? `Service requests in “${title}”${where}: what needs to be done, budget and location. ${who} send offers with price and timing, and the customer picks the best one. Need a service? Post a free request and providers will come to you.`
        : `Buyer requests in “${title}”${where}: what people want to buy, at what budget and where. ${who} send offers with price and terms, and the buyer picks the best deal. Want to buy something in this category? Post a free request and sellers will compete for you.`,
      metaTitle: `${title}${where} — buyer requests | Shukayu`,
      metaDescription: `${count > 0 ? `Active requests: ${count}. ` : ''}Buyers${where} are looking for ${isService ? 'services' : 'goods'} in “${title}”. Send an offer as a ${isService ? 'provider' : 'seller'} or post your own request for free.`,
      listTitle: 'Active requests',
      empty: `No active requests${where} in this category yet. Post the first one — ${isService ? 'providers' : 'sellers'} will see it right away.`,
      cta: 'Post a request for free',
      faq: [
        {
          question: isService
            ? `How do I order a service in “${title}”${where} at a good price?`
            : `How do I buy in “${title}”${where} at a good price?`,
          answer: `Post a request with a description, budget and city. ${who} send offers, you compare them side by side and accept the best one.`,
        },
        {
          question: 'How much does it cost to post a request?',
          answer: 'Nothing. Posting a request and receiving offers is free.',
        },
        {
          question: isService
            ? `How can a provider find customers in “${title}”?`
            : `How can a seller find buyers in “${title}”?`,
          answer: `Browse the requests on this page and send offers with your price and terms. A complete profile with reviews increases your chances.`,
        },
      ],
    };
  }

  const where = city ? ` ${city.ukIn}` : '';
  const who = isService ? 'Виконавці' : 'Продавці';
  return {
    h1: `${title}${where}: запити покупців`,
    intro: isService
      ? `Запити на послуги в категорії «${title}»${where}: що потрібно зробити, бюджет і місце. ${who} надсилають пропозиції з ціною і термінами, а замовник обирає найкращу. Потрібна послуга? Створіть безкоштовний запит — виконавці самі запропонують умови.`
      : `Запити покупців у категорії «${title}»${where}: що хочуть купити, за яким бюджетом і де. ${who} надсилають пропозиції з ціною та умовами, а покупець обирає найвигіднішу. Хочете щось купити в цій категорії? Створіть безкоштовний запит — продавці конкуруватимуть за вас.`,
    metaTitle: `${title}${where} — запити покупців | Shukayu`,
    metaDescription: `${count > 0 ? `Активних запитів: ${count}. ` : ''}Покупці${where} шукають ${isService ? 'послуги' : 'товари'} в категорії «${title}». Надішліть пропозицію як ${isService ? 'виконавець' : 'продавець'} або створіть свій запит безкоштовно.`,
    listTitle: 'Активні запити',
    empty: `Активних запитів${where} у цій категорії поки немає. Створіть перший — ${isService ? 'виконавці' : 'продавці'} побачать його одразу.`,
    cta: 'Створити запит безкоштовно',
    faq: [
      {
        question: isService
          ? `Як вигідно замовити послугу в категорії «${title}»${where}?`
          : `Як вигідно купити в категорії «${title}»${where}?`,
        answer: `Створіть запит з описом, бюджетом і містом. ${who} надішлють пропозиції, ви порівняєте їх поруч і приймете найкращу.`,
      },
      {
        question: 'Скільки коштує створити запит?',
        answer: 'Нічого. Створення запиту та отримання пропозицій безкоштовні.',
      },
      {
        question: isService
          ? `Як виконавцю знайти клієнтів у категорії «${title}»?`
          : `Як продавцю знайти покупців у категорії «${title}»?`,
        answer:
          'Переглядайте запити на цій сторінці й надсилайте пропозиції зі своєю ціною та умовами. Заповнений профіль із відгуками підвищує шанси.',
      },
    ],
  };
}

export { getCategoryAncestors, getCategoryIndex, isServiceCategory };
