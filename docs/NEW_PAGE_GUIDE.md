# Інструкція: як створити нову сторінку в стилі Shukayu

Файл для людини або ШІ-агента, який отримує завдання «зроби нову сторінку». Після його виконання сторінка має виглядати так само, як головна для гостя, `/how-it-works`, `/about`, `/pricing`, `/support`, `/contact`.

Стиль — Upwork 2024: світле полотно, великі заокруглені картки (24px), темно-зелена шапка, зелений градієнт у CTA, багато повітря.

> **Джерело правди — код, не старі docs.** `DESIGN_SYSTEM.md` описує старий червоний бренд (`shared/ui`) і застарів. Для нових сторінок працює лише бібліотека `@/ui-v2`.

---

## 0. Що передати разом із цим файлом

1. Цей файл.
2. Текст і структуру нової сторінки: заголовки, абзаци, списки, які кнопки куди ведуть.
3. Шлях (URL) сторінки, наприклад `/partners`.
4. Бажано: посилання на 1–2 еталонні сторінки з розділу 8.

Якщо тексту ще немає, ставити заглушки (Lorem-подібні, але українською) і позначити їх у відповіді.

---

## 1. Золоті правила

1. Імпортувати UI **тільки з `@/ui-v2`**. Нічого зі `@/shared/ui` (крім `Link` з `@/shared/ui/link` для внутрішніх посилань, як у решті проєкту).
2. Корінь сторінки — `<div className="ui-v2">`. Без цього класу не працюють базова типографіка й шрифти.
3. Кольори й радіуси — лише токени `v2-*` (розділ 3). Жодних довільних hex у розмітці сторінки. Виняток — градієнти всередині компонентів `marketing.tsx`.
4. Усі тексти — через Lingui-ключі `uk` + `en` (розділ 5). Жодного захардкоженого тексту в JSX.
5. Світла тема. Dark mode не робимо.
6. Не вигадувати нових візуальних блоків, поки не перевірено, що їх немає в розділі 4. Якщо блоку справді бракує, додати його в `src/ui-v2/components/marketing.tsx` як перевикористовуваний компонент, а не стилізувати одноразово на сторінці.
7. Заголовок `h1` на сторінці один. Його видає `PageHero`.

---

## 2. Файли, які треба створити

Для сторінки `/partners` (приклад):

```
src/app/[locale]/partners/
  page.tsx            # серверний: metadata + рендер Content
  layout.tsx          # LinguiProvider з перекладами сторінки
  PartnersContent.tsx # 'use client': уся розмітка
src/locales/uk/partners.ts
src/locales/en/partners.ts
```

Копіювати за зразком `src/app/[locale]/about/`.

### 2.1 `page.tsx`

```tsx
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import PartnersContent from './PartnersContent';

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'PARTNERS');
}

export default function PartnersPage() {
  return <PartnersContent />;
}
```

### 2.2 `layout.tsx`

```tsx
import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { messages as enMessages } from '@/locales/en/partners';
import { messages as ukMessages } from '@/locales/uk/partners';

const messagesByLocale = { en: enMessages, uk: ukMessages } as const;

export default async function PartnersLayout({
  children,
  params,
}: { children: ReactNode } & LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      {children}
    </LinguiProvider>
  );
}
```

Якщо layout вже виводить власний `h1` (як у Support), у `PageHero` ставити `as="h2"`.

### 2.3 Реєстрація маршруту (4 місця)

| Що                         | Де                                                   | Приклад                          |
| -------------------------- | ---------------------------------------------------- | -------------------------------- |
| URL                        | `src/app/router/routes.ts`                           | `PARTNERS: '/partners',`         |
| SEO title/description (uk) | `src/locales/uk/metadata.ts`, об'єкт `routeMetadata` | за зразком запису `ABOUT`        |
| SEO title/description (en) | `src/locales/en/metadata.ts`                         | те саме                          |
| Крихти                     | `src/shared/config/breadcrumbs.ts`                   | `[routes.PARTNERS]: 'Партнери',` |

Додатково, якщо сторінка має бути в меню: посилання у `src/ui-v2/layout/site-footer.tsx` (колонка з `routes.ABOUT`) і/або в `site-header.tsx`.

Приватні сторінки (кабінет, адмінка) треба додати в `NOINDEX_ROUTES` у `src/locales/route-metadata.ts`. Публічні інформаційні — не додавати.

---

## 3. Токени (Tailwind-класи)

| Призначення                           | Клас                               |
| ------------------------------------- | ---------------------------------- |
| Основний текст                        | `text-v2-ink`                      |
| Другорядний текст                     | `text-v2-muted`                    |
| Слабкий текст, підписи                | `text-v2-subtle`                   |
| Бренд-зелений (кнопки, посилання-дії) | `text-v2-primary`, `bg-v2-primary` |
| Яскравіший зелений (акценти)          | `text-v2-brand`                    |
| Білий фон картки                      | `bg-v2-surface`                    |
| Ледь сірий фон                        | `bg-v2-surface-subtle`             |
| Блідо-зелений hover-фон               | `bg-v2-hover`                      |
| Рамка                                 | `border-v2-border`                 |
| Радіус картки                         | `rounded-v2-2xl` (24px)            |
| Радіус кнопки/поля                    | `rounded-v2-pill`, `rounded-v2-lg` |

Ширина контенту: `Container` (макс. 1240px). Вузький текст усередині: `mx-auto max-w-4xl`.

Шрифтові вагові значення в стилі: `font-[450]` (звичайний), `font-[550]` (виділений). Не використовувати `font-bold`.

---

## 4. Каталог готових блоків (`@/ui-v2`)

Усе нижче вже існує. Дивись пропси в `src/ui-v2/components/marketing.tsx`.

| Компонент             | Для чого                                                                           | Ключові пропси                                                                            |
| --------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `PageHero`            | **Обов'язкова шапка** будь-якої інформаційної сторінки: темно-зелена картка з glow | `title`, `subtitle`, `action`, `media`, `as` (`h1`/`h2`)                                  |
| `SectionHeader`       | Заголовок секції всередині сторінки                                                | `title`, `subtitle`, `action`, `align`                                                    |
| `InfoCard`            | Велика контурна картка (сітка 2×N) з іконкою                                       | `icon`, `title`, `description`, `action`                                                  |
| `FactItem`            | Короткий факт без рамки (рядок з 3–4 штук)                                         | `icon`, `title`, `description`                                                            |
| `FeatureCard`         | Менша картка переваги в `Card`                                                     | `icon`, `title`, `description`, `action`                                                  |
| `PlanCard`            | Тариф або роль з чеклістом                                                         | `name`, `goal`, `description`, `includes`, `features[]`, `action`, `badge`, `highlighted` |
| `StatItem`            | Велике число + підпис                                                              | `value`, `label`                                                                          |
| `CategoryTile`        | Плитка-посилання (`asChild` + `Link`)                                              | `icon`, `title`                                                                           |
| `Testimonial`         | Відгук                                                                             | `quote`, `name`, `role`, `avatarSrc`                                                      |
| `SegmentedControl<T>` | Перемикач-пігулка (потрібен явний тип `<SegmentedControl<Tab>`)                    | `value`, `onValueChange`, `options`, `tone`                                               |
| `PromoBanner`         | Світло-зелена промо-смуга                                                          | `children`, `action`                                                                      |
| `CtaBanner`           | **Завершальний** зелений заклик до дії                                             | `title`, `description`, `actions`                                                         |
| `ImagePlaceholder`    | Заглушка під картинку                                                              | `label`                                                                                   |

Базові елементи: `Button`, `Accordion*`, `Tabs*`, `Badge`, `Card`, `Input`, `Textarea`, `Label`, `Form*`, `Heading`, `TextLink`, `Container`, `Section`, `Separator`, `Avatar`.

Готові віджети (серверні/клієнтські, можна вставляти як є): `@/widgets/app/Faq`, `@/widgets/app/CtaSection` (CTA «Створити запит»), `@/widgets/app/Testimonials`, `@/widgets/app/Trust`.

---

## 5. Тексти й переклади (Lingui)

Ключі лежать у `src/locales/{uk,en}/<сторінка>.ts`:

```ts
import type { Messages } from '@lingui/core';

export const messages: Messages = {
  'partners.hero.title': 'Партнерам Shukayu',
  'partners.hero.subtitle': 'Розкажіть, як ми можемо працювати разом.',
};
```

Правила:

- Префікс ключа — назва сторінки: `partners.hero.title`, `partners.benefits.1.title`.
- **Обидві мови обов'язково**, однаковий набір ключів у `uk` і `en`.
- У компоненті:

```tsx
'use client';
import { useLingui } from '@lingui/react';

const { i18n } = useLingui();
const t = (id: string) => i18n._(id);
```

- Ключі, що використовуються на кількох сторінках (навігація, кнопки), вже лежать у `src/locales/*/create.ts` з префіксом `common.*`. Переглянь їх перед тим як створювати дублікати.

---

## 6. Каркас сторінки (скопіювати й заповнити)

```tsx
'use client';

import { useLingui } from '@lingui/react';
import { Rocket } from 'lucide-react';

import { Button, Container, InfoCard, PageHero } from '@/ui-v2';
import CtaSection from '@/widgets/app/CtaSection';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';

export default function PartnersContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="ui-v2">
      <Container className="py-6 md:py-8">
        {/* 1. Шапка — завжди перша */}
        <PageHero
          title={t('partners.hero.title')}
          subtitle={t('partners.hero.subtitle')}
          action={
            <Button asChild>
              <Link href={routes.CONTACT}>{t('partners.hero.cta')}</Link>
            </Button>
          }
        />

        {/* 2. Секція: заголовок + контент */}
        <section className="mt-16">
          <h2 className="mb-8 text-4xl font-[450] tracking-tight md:text-5xl">
            {t('partners.benefits.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              icon={<Rocket strokeWidth={1.5} />}
              title={t('partners.benefits.1.title')}
              description={t('partners.benefits.1.description')}
            />
            {/* … ще картки */}
          </div>
        </section>

        {/* 3. Завершальний CTA — завжди останній */}
        <div className="mt-16">
          <CtaSection />
        </div>
      </Container>
    </div>
  );
}
```

### Ритм сторінки

1. `PageHero` (завжди перший блок).
2. Секції з відступом `mt-16`; заголовок секції `text-4xl md:text-5xl font-[450] tracking-tight`, під ним `mb-8`.
3. Контент секції: сітка `grid gap-6 md:grid-cols-2` з `InfoCard`/`PlanCard`, **або** `max-w-4xl` текст `text-lg leading-8 text-v2-muted`, **або** `Accordion` для FAQ.
4. `CtaBanner`/`CtaSection` — завершальний блок.

Іконки — лише `lucide-react`, `strokeWidth={1.5}` в `InfoCard`.

---

## 7. Чого не робити

- Не додавати власні кольори, тіні, радіуси, що не збігаються з токенами.
- Не створювати друге `h1` (перевір `layout.tsx` сторінки).
- Не використовувати `font-bold`, `text-gray-*`, `bg-gray-*`, `rounded-xl` у розмітці сторінок.
- Не вставляти справжні фото, поки їх немає. Використовувати `ImagePlaceholder`.
- Не імпортувати зі `@/shared/ui/*` (крім `Link`).
- Не лишати текст прямо в JSX.
- Не додавати dark-стилі.

---

## 8. Еталонні сторінки

| Сторінка          | Файл                                                  | Що показує                                          |
| ----------------- | ----------------------------------------------------- | --------------------------------------------------- |
| Про нас           | `src/app/[locale]/about/AboutContent.tsx`             | шапка, текстові секції, сітка `InfoCard`            |
| Тарифи            | `src/app/[locale]/pricing/PricingContent.tsx`         | `PlanCard` + FAQ-акордеон                           |
| Як це працює      | `src/app/[locale]/how-it-works/HowItWorksContent.tsx` | `SegmentedControl`, `InfoCard`, `Faq`, `CtaSection` |
| Підтримка         | `src/app/[locale]/support/SupportContent.tsx`         | `as="h2"`, FAQ, `CtaBanner`                         |
| Контакти          | `src/app/[locale]/contact/ContactContent.tsx`         | шапка + форма                                       |
| Головна для гостя | `src/app/[locale]/page.tsx` + `src/widgets/app/*`     | усі лендингові секції                               |

Не оформлені досі: `/terms`, `/privacy` (суцільний юридичний текст).

---

## 9. Перевірка перед здачею

```bash
npx tsc --noEmit
npx eslint "src/app/[locale]/partners" src/locales
npx prettier --check "src/app/[locale]/partners" src/locales
npm run dev
```

Відкрити `http://localhost:3000/uk/partners` і `/en/partners`.

Чекліст:

- [ ] Сторінка відкривається в обох мовах без «сирих» ключів на екрані.
- [ ] Один `h1`.
- [ ] Шапка — `PageHero`, останній блок — CTA.
- [ ] Лише токени `v2-*`, імпорти з `@/ui-v2`.
- [ ] Мобільна ширина 375px: немає горизонтального скролу, картки в одну колонку.
- [ ] Маршрут додано в `routes.ts`, `metadata.ts` (uk і en), `breadcrumbs.ts`.
- [ ] `tsc` без помилок, `eslint` без помилок.
- [ ] У відповіді вказано, які тексти й зображення є заглушками.
