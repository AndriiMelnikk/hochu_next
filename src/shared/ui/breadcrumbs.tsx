'use client';

import React from 'react';
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { breadcrumbLabels } from '@/shared/config/breadcrumbs';
import { routes } from '@/app/router/routes';
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
  items?: BreadcrumbItemData[];
  className?: string;
  // Додаткові дані для динамічних сегментів
  dynamicLabels?: Record<string, string>;
}

export function Breadcrumbs({ items, className, dynamicLabels = {} }: BreadcrumbsProps) {
  const pathname = usePathname();
  const params = useParams();

  // Якщо items передані явно, використовуємо їх
  if (items) {
    return (
      <Breadcrumb className={cn('mb-6', className)}>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href && !isLast ? (
                    <BreadcrumbLink asChild>
                      <Link href={item.href} className="hover:text-primary">
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Автоматично генеруємо breadcrumbs на основі шляху
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbItems: BreadcrumbItemData[] = [];

  // Завжди додаємо "Головна"
  breadcrumbItems.push({
    label: breadcrumbLabels[routes.HOME] || 'Головна',
    href: routes.HOME,
  });

  // Генеруємо breadcrumbs для кожного сегменту
  let currentPath = '';

  // Перевіряємо, чи це динамічний роут (наприклад, /request/[id] або /proposal/[id])
  const isDynamicRoute =
    pathSegments.length === 2 &&
    (pathSegments[0] === 'request' || pathSegments[0] === 'proposal' || pathSegments[0] === 'blog');

  // Якщо це динамічний роут, додаємо проміжний сегмент "Запити" або "Блог"
  if (isDynamicRoute && pathSegments[0] !== 'blog') {
    breadcrumbItems.push({
      label: breadcrumbLabels[routes.BROWSE] || 'Запити',
      href: routes.BROWSE,
    });
  } else if (isDynamicRoute && pathSegments[0] === 'blog') {
    breadcrumbItems.push({
      label: breadcrumbLabels[routes.BLOG] || 'Блог',
      href: routes.BLOG,
    });
  }

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;

    // Перевіряємо, чи це динамічний сегмент (UUID або число)
    const isDynamicSegment = segment.match(/^[a-f0-9-]{36}$|^\d+$/) !== null;

    // Для динамічних роутів пропускаємо перший сегмент (request/proposal/blog)
    // оскільки він вже оброблений вище
    if (isDynamicRoute && index === 0) {
      return;
    }

    let label: string;
    let href: string | undefined;

    if (isLast && isDynamicSegment) {
      // Останній сегмент - динамічний (ID)
      if (dynamicLabels[currentPath] || dynamicLabels[segment]) {
        label = dynamicLabels[currentPath] || dynamicLabels[segment] || segment;
      } else {
        // Спробуємо знайти базовий шлях (наприклад, /request для /request/123)
        const basePath = `/${pathSegments[0]}`;
        const baseLabel = breadcrumbLabels[basePath];
        if (baseLabel) {
          label = `${baseLabel} #${segment}`;
        } else {
          label = segment;
        }
      }
      href = undefined; // Останній елемент не має посилання
    } else if (isLast) {
      // Останній сегмент - не динамічний
      if (breadcrumbLabels[currentPath]) {
        label = breadcrumbLabels[currentPath];
      } else {
        label = segment;
      }
      href = undefined; // Останній елемент не має посилання
    } else {
      // Проміжні сегменти
      if (breadcrumbLabels[currentPath]) {
        label = breadcrumbLabels[currentPath];
        href = currentPath;
      } else {
        // Якщо немає перекладу, використовуємо сегмент як є
        label = segment;
        href = currentPath;
      }
    }

    breadcrumbItems.push({ label, href });
  });

  return (
    <Breadcrumb className={cn('mb-6', className)}>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.href && !isLast ? (
                  <BreadcrumbLink asChild>
                    <Link href={item.href} className="hover:text-primary">
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
