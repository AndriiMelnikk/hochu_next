import Link from '@/shared/ui/link';
import { RequestCard } from '@/features/requests';
import type { IRequest } from '@/entities/request';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getBreadcrumbListJsonLd, getFaqPageJsonLd, getItemListJsonLd } from '@/shared/seo/schemas';
import { routes } from '@/app/router/routes';
import type { Locale } from '@/locales/config';
import { Button, Container, Heading } from '@/ui-v2';
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
            className="inline-flex min-h-11 items-center gap-2 rounded-v2-pill border border-v2-border bg-v2-surface px-4 text-sm font-semibold transition-colors hover:border-v2-border-strong hover:bg-v2-hover"
          >
            {link.label}
            {link.count !== undefined && link.count > 0 && (
              <span className="font-[450] text-v2-subtle">{link.count}</span>
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
    <Container className="ui-v2">
      <JsonLd
        data={getBreadcrumbListJsonLd(
          breadcrumbs.map((item, index) => ({
            name: item.label,
            url: index < breadcrumbs.length - 1 ? localized(item.href) : undefined,
          })),
        )}
      />
      <nav aria-label="breadcrumb" className="mb-6 text-sm text-v2-muted">
        <ol className="flex flex-wrap items-center gap-1">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <span aria-hidden>/</span>}
              {index < breadcrumbs.length - 1 ? (
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center hover:text-v2-primary hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-v2-ink">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <Heading level="h1" as="h1" className="mb-3">
        {copy.h1}
      </Heading>
      <p className="mb-6 text-lg text-v2-muted max-w-3xl">{copy.intro}</p>
      <Button asChild className="mb-10 h-11 px-6">
        <Link href={routes.CREATE}>{copy.cta}</Link>
      </Button>

      {subcategories && subcategories.links.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-[550]">{subcategories.title}</h2>
          <LinkChips links={subcategories.links} />
        </section>
      )}

      {cities && cities.links.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-[550]">{cities.title}</h2>
          <LinkChips links={cities.links} />
        </section>
      )}

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-[550]">{copy.listTitle}</h2>
        {requests.length === 0 ? (
          <p className="text-v2-muted">{copy.empty}</p>
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
        <h2 className="mb-6 text-2xl font-[550]">{locale === 'en' ? 'FAQ' : 'Часті питання'}</h2>
        <dl className="space-y-5">
          {copy.faq.map((item) => (
            <div key={item.question}>
              <dt className="mb-1 font-semibold">{item.question}</dt>
              <dd className="leading-6 text-v2-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Container>
  );
}
