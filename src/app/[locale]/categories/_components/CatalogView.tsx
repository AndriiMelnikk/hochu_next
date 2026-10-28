import Link from '@/shared/ui/link';
import { RequestCard } from '@/features/requests';
import type { IRequest } from '@/entities/request';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getBreadcrumbListJsonLd, getFaqPageJsonLd, getItemListJsonLd } from '@/shared/seo/schemas';
import { routes } from '@/app/router/routes';
import type { Locale } from '@/locales/config';
import type { CatalogCopy } from '../_lib/catalog';

export type CatalogLink = { href: string; label: string; count?: number };

type CatalogViewProps = {
  locale: Locale;
  copy: CatalogCopy;
  breadcrumbs: CatalogLink[];
  subcategories?: { title: string; links: CatalogLink[] };
  cities?: { title: string; links: CatalogLink[] };
  requests: IRequest[];
};

function LinkChips({ links }: { links: CatalogLink[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm hover:border-primary hover:text-primary transition-colors"
          >
            {link.label}
            {link.count !== undefined && link.count > 0 && (
              <span className="text-muted-foreground">{link.count}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Серверний шаблон сторінки каталогу: хлібні крихти, текст, перелінковка, запити, FAQ */
export function CatalogView({
  locale,
  copy,
  breadcrumbs,
  subcategories,
  cities,
  requests,
}: CatalogViewProps) {
  const localized = (href: string) => `/${locale}${href === '/' ? '' : href}`;

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <JsonLd
        data={getBreadcrumbListJsonLd(
          breadcrumbs.map((item, index) => ({
            name: item.label,
            url: index < breadcrumbs.length - 1 ? localized(item.href) : undefined,
          })),
        )}
      />
      <nav aria-label="breadcrumb" className="mb-6 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <span aria-hidden>/</span>}
              {index < breadcrumbs.length - 1 ? (
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{copy.h1}</h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-3xl">{copy.intro}</p>
      <Link
        href={routes.CREATE}
        className="inline-flex min-h-11 items-center rounded-md bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90 transition-colors mb-10"
      >
        {copy.cta}
      </Link>

      {subcategories && subcategories.links.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{subcategories.title}</h2>
          <LinkChips links={subcategories.links} />
        </section>
      )}

      {cities && cities.links.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{cities.title}</h2>
          <LinkChips links={cities.links} />
        </section>
      )}

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{copy.listTitle}</h2>
        {requests.length === 0 ? (
          <p className="text-muted-foreground">{copy.empty}</p>
        ) : (
          <>
            <JsonLd
              data={getItemListJsonLd(
                requests.map((request) => ({
                  name: request.title,
                  url: localized(routes.REQUEST_ID(request._id)),
                })),
              )}
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {requests.map((request) => (
                <RequestCard
                  key={request._id}
                  request={request}
                  categoryName={request.category.name}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="mb-12 max-w-3xl">
        <JsonLd data={getFaqPageJsonLd(copy.faq)} />
        <h2 className="text-2xl font-bold mb-6">{locale === 'en' ? 'FAQ' : 'Часті питання'}</h2>
        <dl className="space-y-5">
          {copy.faq.map((item) => (
            <div key={item.question}>
              <dt className="font-semibold mb-1">{item.question}</dt>
              <dd className="text-muted-foreground leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
