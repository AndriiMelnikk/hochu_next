'use client';

import * as React from 'react';
import { Check, ChevronDown, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export interface CascadingSelectItem {
  id: string;
  name: string;
  parentId?: string | null;
}

export interface CascadingSelectProps {
  items: CascadingSelectItem[];
  value?: string;
  onValueChange?: (id: string | null, path: CascadingSelectItem[] | null) => void;
  placeholder?: string;
  emptyLabel?: string;
  clearable?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  id?: string;
}

/** Випадний список із деревом (категорії): розгортання підкатегорій, вибір будь-якого вузла. */
export function CascadingSelect({
  items,
  value,
  onValueChange,
  placeholder = 'Select...',
  emptyLabel = 'No items found',
  disabled,
  invalid,
  clearable,
  className,
  id,
}: CascadingSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set());

  const byId = React.useMemo(() => new Map(items.map((i) => [i.id, i])), [items]);
  const byParent = React.useMemo(() => {
    const map = new Map<string, CascadingSelectItem[]>();
    items.forEach((i) => {
      const key = i.parentId ?? 'root';
      map.set(key, [...(map.get(key) ?? []), i]);
    });
    return map;
  }, [items]);

  const pathTo = React.useCallback(
    (itemId: string) => {
      const path: CascadingSelectItem[] = [];
      let cur = byId.get(itemId);
      while (cur) {
        path.unshift(cur);
        cur = cur.parentId ? byId.get(cur.parentId) : undefined;
      }
      return path;
    },
    [byId],
  );

  const display = value
    ? pathTo(value)
        .map((i) => i.name)
        .join(' → ')
    : null;

  const onOpenChange = (next: boolean) => {
    setOpen(next);
    setExpanded(
      new Set(
        next && value
          ? pathTo(value)
              .slice(0, -1)
              .map((i) => i.id)
          : [],
      ),
    );
  };

  const toggle = (itemId: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });

  const renderLevel = (parentId: string | null, depth: number): React.ReactNode =>
    (byParent.get(parentId ?? 'root') ?? []).map((item) => {
      const children = byParent.get(item.id) ?? [];
      const isOpen = expanded.has(item.id);
      const selected = value === item.id;
      return (
        <li key={item.id}>
          <div
            className={cn(
              'flex items-center rounded-v2-sm pr-1 hover:bg-v2-hover',
              selected && 'bg-v2-hover font-semibold',
            )}
            style={{ paddingLeft: 8 + depth * 16 }}
          >
            <button
              type="button"
              className="flex min-h-9 flex-1 items-center gap-2 py-1 text-left text-sm"
              onClick={() => {
                onValueChange?.(item.id, pathTo(item.id));
                setOpen(false);
              }}
            >
              <Check className={cn('size-4 shrink-0 text-v2-primary', !selected && 'opacity-0')} />
              <span className="truncate">{item.name}</span>
            </button>
            {children.length > 0 && (
              <button
                type="button"
                aria-expanded={isOpen}
                aria-label="Expand subcategories"
                onClick={() => toggle(item.id)}
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-v2-pill hover:bg-v2-surface-muted"
              >
                <ChevronDown
                  className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
                />
              </button>
            )}
          </div>
          {isOpen && children.length > 0 && <ul>{renderLevel(item.id, depth + 1)}</ul>}
        </li>
      );
    });

  const root = byParent.get('root') ?? [];

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          disabled={disabled}
          className={cn(
            'flex h-10 w-full min-w-0 items-center justify-between gap-2 rounded-v2-xl border bg-v2-surface px-4 text-sm font-[450] transition-colors',
            'hover:border-v2-border-strong focus-visible:border-v2-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-v2-primary',
            'disabled:cursor-not-allowed disabled:bg-v2-disabled-bg disabled:text-v2-disabled-text',
            invalid ? 'border-v2-danger' : 'border-v2-border',
            !display && 'text-v2-muted',
            className,
          )}
        >
          <span className="flex-1 truncate text-left">{display || placeholder}</span>
          <span className="flex shrink-0 items-center gap-1">
            {clearable && value && (
              <span
                role="button"
                tabIndex={0}
                aria-label="Clear selection"
                className="inline-flex size-6 items-center justify-center rounded-v2-pill hover:bg-v2-surface-muted"
                onClick={(e) => {
                  e.stopPropagation();
                  onValueChange?.(null, null);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    onValueChange?.(null, null);
                  }
                }}
              >
                <X className="size-4" />
              </span>
            )}
            <ChevronDown className="size-4 text-v2-muted" />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="max-h-80 w-[--radix-popover-trigger-width] overflow-y-auto">
        {root.length === 0 ? (
          <p className="px-3 py-2 text-sm text-v2-muted">{emptyLabel}</p>
        ) : (
          <ul>{renderLevel(null, 0)}</ul>
        )}
      </PopoverContent>
    </Popover>
  );
}
