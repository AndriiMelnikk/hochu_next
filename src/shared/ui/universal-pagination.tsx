'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { cn } from '@/lib/utils';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from './pagination';

export type UniversalPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  previousLabel?: string;
  nextLabel?: string;
  variant?: 'default' | 'mini';
  className?: string;
};

function getPageNumbers(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
  if (totalPages <= 0) return [];
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages: (number | 'ellipsis')[] = [1];
  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  if (start > 2) {
    pages.push('ellipsis');
  }
  for (let p = start; p <= end; p++) {
    pages.push(p);
  }
  if (end < totalPages - 1) {
    pages.push('ellipsis');
  }
  if (totalPages > 1) {
    pages.push(totalPages);
  }
  return pages;
}

export function UniversalPagination({
  currentPage,
  totalPages,
  onPageChange,
  previousLabel,
  nextLabel,
  variant = 'default',
  className,
}: UniversalPaginationProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const prevText = previousLabel || t('pagination.previous');
  const nextText = nextLabel || t('pagination.next');

  const pageNumbers = React.useMemo(
    () => getPageNumbers(currentPage, totalPages),
    [currentPage, totalPages],
  );

  const handleClick = React.useCallback(
    (e: React.MouseEvent, page: number) => {
      e.preventDefault();
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages],
  );

  if (totalPages <= 1) {
    return null;
  }

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            size="default"
            className={cn('gap-1 pl-2.5', !canGoPrevious && 'pointer-events-none opacity-50')}
            aria-label={prevText}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (canGoPrevious) onPageChange(currentPage - 1);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{prevText}</span>
          </PaginationLink>
        </PaginationItem>

        {variant === 'default' ? (
          <>
            {pageNumbers.map((page, index) =>
              page === 'ellipsis' ? (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    href="#"
                    onClick={(e) => handleClick(e, page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}
          </>
        ) : (
          <PaginationItem className="flex items-center justify-center text-sm font-medium mx-2">
            {currentPage} {t('pagination.of')} {totalPages}
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink
            size="default"
            className={cn('gap-1 pr-2.5', !canGoNext && 'pointer-events-none opacity-50')}
            aria-label={nextText}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (canGoNext) onPageChange(currentPage + 1);
            }}
          >
            <span>{nextText}</span>
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
