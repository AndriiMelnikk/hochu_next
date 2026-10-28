export type City = {
  slug: string;
  /** Назва українською (як у локації запиту: «м. Київ, Київська обл.») */
  uk: string;
  /** Місцевий відмінок: «у Києві» */
  ukIn: string;
  en: string;
};

/**
 * Міста для SEO-сторінок «категорія + місто» (обласні центри та найбільші міста
 * на підконтрольній території). Локація запиту зберігається рядком на кшталт
 * «м. Луцьк, Волинська обл.», тому зіставлення йде за префіксом «м. {uk}».
 */
export const CITIES: City[] = [
  { slug: 'kyiv', uk: 'Київ', ukIn: 'у Києві', en: 'Kyiv' },
  { slug: 'lviv', uk: 'Львів', ukIn: 'у Львові', en: 'Lviv' },
  { slug: 'odesa', uk: 'Одеса', ukIn: 'в Одесі', en: 'Odesa' },
  { slug: 'kharkiv', uk: 'Харків', ukIn: 'у Харкові', en: 'Kharkiv' },
  { slug: 'dnipro', uk: 'Дніпро', ukIn: 'у Дніпрі', en: 'Dnipro' },
  { slug: 'zaporizhzhia', uk: 'Запоріжжя', ukIn: 'у Запоріжжі', en: 'Zaporizhzhia' },
  { slug: 'kryvyi-rih', uk: 'Кривий Ріг', ukIn: 'у Кривому Розі', en: 'Kryvyi Rih' },
  { slug: 'vinnytsia', uk: 'Вінниця', ukIn: 'у Вінниці', en: 'Vinnytsia' },
  { slug: 'zhytomyr', uk: 'Житомир', ukIn: 'у Житомирі', en: 'Zhytomyr' },
  { slug: 'lutsk', uk: 'Луцьк', ukIn: 'у Луцьку', en: 'Lutsk' },
  { slug: 'rivne', uk: 'Рівне', ukIn: 'у Рівному', en: 'Rivne' },
  { slug: 'ternopil', uk: 'Тернопіль', ukIn: 'у Тернополі', en: 'Ternopil' },
  { slug: 'khmelnytskyi', uk: 'Хмельницький', ukIn: 'у Хмельницькому', en: 'Khmelnytskyi' },
  {
    slug: 'ivano-frankivsk',
    uk: 'Івано-Франківськ',
    ukIn: 'в Івано-Франківську',
    en: 'Ivano-Frankivsk',
  },
  { slug: 'uzhhorod', uk: 'Ужгород', ukIn: 'в Ужгороді', en: 'Uzhhorod' },
  { slug: 'chernivtsi', uk: 'Чернівці', ukIn: 'у Чернівцях', en: 'Chernivtsi' },
  { slug: 'chernihiv', uk: 'Чернігів', ukIn: 'у Чернігові', en: 'Chernihiv' },
  { slug: 'sumy', uk: 'Суми', ukIn: 'у Сумах', en: 'Sumy' },
  { slug: 'poltava', uk: 'Полтава', ukIn: 'у Полтаві', en: 'Poltava' },
  { slug: 'cherkasy', uk: 'Черкаси', ukIn: 'у Черкасах', en: 'Cherkasy' },
  { slug: 'kropyvnytskyi', uk: 'Кропивницький', ukIn: 'у Кропивницькому', en: 'Kropyvnytskyi' },
  { slug: 'mykolaiv', uk: 'Миколаїв', ukIn: 'у Миколаєві', en: 'Mykolaiv' },
  { slug: 'kherson', uk: 'Херсон', ukIn: 'у Херсоні', en: 'Kherson' },
  { slug: 'bila-tserkva', uk: 'Біла Церква', ukIn: 'у Білій Церкві', en: 'Bila Tserkva' },
];

const BY_SLUG = new Map(CITIES.map((city) => [city.slug, city]));

export function getCityBySlug(slug: string): City | undefined {
  return BY_SLUG.get(slug);
}

/** Фільтр для API запитів (підрядок поля location) */
export function getCityLocationQuery(city: City): string {
  return `м. ${city.uk}`;
}

/** Місто з рядка локації запиту («м. Луцьк, Волинська обл.» → lutsk) */
export function matchCity(location: string | null | undefined): City | undefined {
  if (!location) return undefined;
  return CITIES.find(
    (city) =>
      location.startsWith(`${getCityLocationQuery(city)},`) ||
      location === getCityLocationQuery(city),
  );
}
