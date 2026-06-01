'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { cn } from '@/lib/utils';
import { routes } from '@/app/router/routes';
import { useCategories, getCategoryPath } from '@/entities/category';
import { Button } from '@shared/ui/button';
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
}

function buildCategoryHref(categoryId: string) {
  return `${routes.REQUEST}?category=${categoryId}`;
}

export function Breadcrumbs({ categoryId, currentLabel, className, backHref }: BreadcrumbsProps) {
  const router = useRouter();
  const { i18n } = useLingui();

  const { data: categories = [] } = useCategories();

  const breadcrumbItems = useMemo(() => {
    const items: BreadcrumbItemData[] = [
      {
        label: i18n._('common.breadcrumbs.home'),
        href: routes.HOME,
      },
    ];

    if (categoryId) {
      const categoryPath = getCategoryPath(categories, categoryId);
      categoryPath.forEach((category) => {
        items.push({
          label: category.title,
          href: buildCategoryHref(category._id),
        });
      });
    }

    items.push({ label: currentLabel });

    return items;
  }, [categories, categoryId, currentLabel, i18n]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={cn('mb-6 flex flex-wrap items-center gap-2', className)}>
      {backHref ? (
        <Button variant="link" size="sm" className="h-8 shrink-0 px-2" asChild>
          <Link href={backHref}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            {i18n._('common.breadcrumbs.back')}
          </Link>
        </Button>
      ) : (
        <Button
          type="button"
          variant="link"
          size="sm"
          className="h-8 shrink-0 px-2"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          {i18n._('common.breadcrumbs.back')}
        </Button>
      )}

      <Breadcrumb className="min-w-0 flex-1">
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <React.Fragment key={`${item.label}-${index}`}>
                <BreadcrumbItem>
                  {item.href && !isLast ? (
                    <BreadcrumbLink asChild>
                      <Link href={item.href} className="hover:text-primary">
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="line-clamp-1">{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
