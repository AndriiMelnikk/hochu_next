'use client';

import React, { useMemo } from 'react';
import Link from '@/shared/ui/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { cn } from '@/lib/utils';
import { routes } from '@/app/router/routes';
import { useCategories, getCategoryPath } from '@/entities/category';
import { localizeHref } from '@/locales/config';
import { useCurrentLocale } from '@/shared/ui/link';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getBreadcrumbListJsonLd } from '@/shared/seo/schemas';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';

export interface BreadcrumbItemData {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  /** ID категорії поста (листок дерева) */
  categoryId?: string;
  /** Назва поточної сторінки (останній сегмент без посилання) */
  currentLabel: string;
  className?: string;
  /** Явне посилання для кнопки «Назад»; за замовчуванням — history.back() */
  backHref?: string;
  /** Ланцюжок категорій, підготовлений на сервері (щоб крихти були в HTML без JS) */
  categoryTrail?: Array<{ title: string; slug: string }>;
}

export function Breadcrumbs({
  categoryId,
  currentLabel,
  className,
  backHref,
  categoryTrail,
}: BreadcrumbsProps) {
  const router = useRouter();
  const { i18n } = useLingui();
  const locale = useCurrentLocale();

  const { data: categories = [] } = useCategories();

  const breadcrumbItems = useMemo(() => {
    const items: BreadcrumbItemData[] = [
      {
        label: i18n._('common.breadcrumbs.home'),
        href: routes.HOME,
      },
    ];

    if (categoryTrail && categoryTrail.length > 0) {
      categoryTrail.forEach((category) => {
        items.push({ label: category.title, href: routes.CATEGORY(category.slug) });
      });
    } else if (categoryId) {
      const categoryPath = getCategoryPath(categories, categoryId);
      categoryPath.forEach((category) => {
        items.push({
          label: category.title,
          href: routes.CATEGORY(category.slug),
        });
      });
    }

    items.push({ label: currentLabel });

    return items;
  }, [categories, categoryId, categoryTrail, currentLabel, i18n]);

  const handleBack = () => {
    router.back();
  };

  const backLabel = i18n._('common.breadcrumbs.back');
  // Мобільний: кругла кнопка-стрілка + один рядок крихт; десктоп: «← Назад» текстом
  const backClass =
    'inline-flex shrink-0 items-center justify-center gap-1.5 rounded-v2-pill text-v2-primary outline-none transition-[background-color,transform] duration-150 ease-v2-out hover:bg-v2-hover active:scale-[0.97] active:bg-v2-hover focus-visible:ring-2 focus-visible:ring-v2-primary size-10 -ml-2 md:size-auto md:ml-0 md:px-2 md:py-1 md:text-sm md:font-semibold [&_svg]:size-5';
  const backContent = (
    <>
      <ArrowLeft aria-hidden />
      <span className="max-md:sr-only">{backLabel}</span>
    </>
  );

  return (
    <div className={cn('ui-v2 mb-4 flex items-center gap-1 md:mb-6 md:gap-2', className)}>
      <JsonLd
        data={getBreadcrumbListJsonLd(
          breadcrumbItems.map((item) => ({
            name: item.label,
            url: item.href ? localizeHref(locale, item.href) : undefined,
          })),
        )}
      />
      {backHref ? (
        <Link href={backHref} aria-label={backLabel} className={backClass}>
          {backContent}
        </Link>
      ) : (
        <button type="button" aria-label={backLabel} onClick={handleBack} className={backClass}>
          {backContent}
        </button>
      )}

      <Breadcrumb className="min-w-0 flex-1">
        <BreadcrumbList className="flex-nowrap gap-1 text-v2-muted sm:gap-1.5 md:flex-wrap">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            // На мобільному «Головна» не потрібна — вона є в меню; лишаємо розділ і поточну
            const hideOnMobile = index === 0 && breadcrumbItems.length > 2;

            return (
              <React.Fragment key={`${item.label}-${index}`}>
                <BreadcrumbItem
                  className={cn(
                    isLast ? 'min-w-0' : 'min-w-0 max-md:max-w-[45%]',
                    hideOnMobile && 'max-md:hidden',
                  )}
                >
                  {item.href && !isLast ? (
                    <BreadcrumbLink asChild>
                      <Link href={item.href} className="block truncate hover:text-v2-primary">
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="truncate font-medium text-v2-ink">
                      {item.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {!isLast && (
                  <BreadcrumbSeparator
                    className={cn('shrink-0', hideOnMobile && 'max-md:hidden')}
                  />
                )}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
