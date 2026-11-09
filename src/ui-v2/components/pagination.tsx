'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { cn } from '@/lib/utils';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Справжній URL сторінки, щоб пагінація була доступна краулерам без JS */
  getPageHref?: (page: number) => string;
  className?: string;
};

function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | 'ellipsis')[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push('ellipsis');
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < total - 1) pages.push('ellipsis');
  pages.push(total);
  return pages;
}

const itemClass =
  'inline-flex h-10 min-w-10 items-center justify-center gap-1 rounded-v2-pill px-3 text-sm font-semibold text-v2-ink transition-colors hover:bg-v2-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  getPageHref,
  className,
}: PaginationProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pages = React.useMemo(
    () => getPageNumbers(currentPage, totalPages),
    [currentPage, totalPages],
  );

  if (totalPages <= 1) return null;

  const go = (event: React.MouseEvent, page: number) => {
    event.preventDefault();
    if (page >= 1 && page <= totalPages && page !== currentPage) onPageChange(page);
  };
  const href = (page: number) => getPageHref?.(page) ?? '#';
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  return (
    <nav aria-label="Pagination" className={cn('ui-v2 flex justify-center', className)}>
      <ul className="flex flex-wrap items-center gap-1">
        <li>
          <Link
            href={href(currentPage - 1)}
            rel="prev"
            aria-label={t('pagination.previous')}
            aria-disabled={!canPrev}
            onClick={(e) => go(e, currentPage - 1)}
            className={cn(itemClass, !canPrev && 'pointer-events-none text-v2-disabled-text')}
          >
            <ChevronLeft className="size-4" />
            <span className="hidden sm:inline">{t('pagination.previous')}</span>
          </Link>
        </li>
        {pages.map((page, i) => (
          <li key={page === 'ellipsis' ? `e${i}` : page}>
            {page === 'ellipsis' ? (
              <span
                aria-hidden
                className="inline-flex h-10 min-w-10 items-center justify-center text-v2-muted"
              >
                …
              </span>
            ) : (
              <Link
                href={href(page)}
                aria-current={page === currentPage ? 'page' : undefined}
                onClick={(e) => go(e, page)}
                className={cn(
                  itemClass,
                  page === currentPage && 'bg-v2-ink text-v2-surface hover:bg-v2-ink',
                )}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
        <li>
          <Link
            href={href(currentPage + 1)}
            rel="next"
            aria-label={t('pagination.next')}
            aria-disabled={!canNext}
            onClick={(e) => go(e, currentPage + 1)}
            className={cn(itemClass, !canNext && 'pointer-events-none text-v2-disabled-text')}
          >
            <span className="hidden sm:inline">{t('pagination.next')}</span>
            <ChevronRight className="size-4" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
