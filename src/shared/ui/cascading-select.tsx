'use client';

import * as React from 'react';
import { ChevronDown, Check, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from './command';

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
  backLabel?: string;
  /** @deprecated No longer used */
  moreLabel?: string;
  clearable?: boolean;
  disabled?: boolean;
  className?: string;
}

export function CascadingSelect({
  items,
  value,
  onValueChange,
  placeholder = 'Select...',
  emptyLabel = 'No items found',
  disabled = false,
  className,
  clearable = false,
}: CascadingSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [expandedIds, setExpandedIds] = React.useState<Set<string>>(new Set());

  const itemsById = React.useMemo(() => {
    return new Map(items.map((item) => [item.id, item]));
  }, [items]);

  const itemsByParentId = React.useMemo(() => {
    const map = new Map<string, CascadingSelectItem[]>();
    items.forEach((item) => {
      const key = item.parentId ?? 'root';
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)?.push(item);
    });
    return map;
  }, [items]);

  const hasChildren = React.useCallback(
    (itemId: string) => {
      return (itemsByParentId.get(itemId)?.length ?? 0) > 0;
    },
    [itemsByParentId],
  );

  const buildPathToItem = React.useCallback(
    (itemId: string): CascadingSelectItem[] => {
      const path: CascadingSelectItem[] = [];
      let currentItem = itemsById.get(itemId);

      while (currentItem) {
        path.unshift(currentItem);
        if (currentItem.parentId) {
          currentItem = itemsById.get(currentItem.parentId);
        } else {
          break;
        }
      }

      return path;
    },
    [itemsById],
  );

  const displayValue = React.useMemo(() => {
    if (!value) return null;

    const path = buildPathToItem(value);
    return path.map((item) => item.name).join(' → ');
  }, [value, buildPathToItem]);

  const selectedAncestors = React.useMemo(() => {
    if (!value) return new Set<string>();
    const path = buildPathToItem(value);
    return new Set(path.map((item) => item.id));
  }, [value, buildPathToItem]);

  const collapseDescendants = React.useCallback(
    (parentId: string, ids: Set<string>) => {
      const collapse = (id: string) => {
        itemsByParentId.get(id)?.forEach((child) => {
          ids.delete(child.id);
          collapse(child.id);
        });
      };
      collapse(parentId);
    },
    [itemsByParentId],
  );

  const handleSelect = React.useCallback(
    (item: CascadingSelectItem) => {
      const path = buildPathToItem(item.id);
      onValueChange?.(item.id, path);
      setOpen(false);
      setExpandedIds(new Set());
    },
    [buildPathToItem, onValueChange],
  );

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onValueChange?.(null, null);
  };

  const handleToggleExpand = React.useCallback(
    (item: CascadingSelectItem, e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();

      const isExpanded = expandedIds.has(item.id);

      setExpandedIds((prev) => {
        const next = new Set(prev);
        if (isExpanded) {
          next.delete(item.id);
          collapseDescendants(item.id, next);
        } else {
          next.add(item.id);
        }
        return next;
      });
    },
    [collapseDescendants, expandedIds],
  );

  const handleOpenChange = React.useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen);
      if (isOpen) {
        if (value) {
          const path = buildPathToItem(value);
          const ancestors = path.slice(0, -1);
          setExpandedIds(new Set(ancestors.map((item) => item.id)));
        } else {
          setExpandedIds(new Set());
        }
      } else {
        setExpandedIds(new Set());
      }
    },
    [value, buildPathToItem],
  );

  const rootItems = itemsByParentId.get('root') ?? [];

  const renderTree = (parentId: string | null, depth: number): React.ReactNode => {
    const levelItems = itemsByParentId.get(parentId ?? 'root') ?? [];

    return levelItems.map((item) => {
      const itemHasChildren = hasChildren(item.id);
      const isExpanded = expandedIds.has(item.id);
      const isSelected = value === item.id;
      const isAncestor = selectedAncestors.has(item.id) && !isSelected;

      return (
        <React.Fragment key={item.id}>
          <CommandItem
            value={item.id}
            onSelect={() => handleSelect(item)}
            className={cn(
              'flex items-center justify-between gap-2',
              isAncestor && 'bg-accent/40 text-accent-foreground font-medium',
              isSelected && 'bg-accent text-accent-foreground font-medium',
            )}
            style={{ paddingLeft: `${8 + depth * 16}px` }}
          >
            <div className="flex items-center flex-1 min-w-0">
              <Check
                className={cn('mr-2 h-4 w-4 shrink-0', isSelected ? 'opacity-100' : 'opacity-0')}
              />
              <span className="truncate">{item.name}</span>
            </div>
            {itemHasChildren && (
              <button
                type="button"
                onClick={(e) => handleToggleExpand(item, e)}
                onPointerDown={(e) => e.stopPropagation()}
                className="flex shrink-0 items-center rounded p-0.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-expanded={isExpanded}
                aria-label="Expand subcategories"
              >
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')}
                />
              </button>
            )}
          </CommandItem>
          {isExpanded && itemHasChildren && renderTree(item.id, depth + 1)}
        </React.Fragment>
      );
    });
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-between text-base font-normal min-w-0',
            !displayValue && 'text-muted-foreground',
            className,
          )}
          disabled={disabled}
        >
          <span className="truncate flex-1 text-left">{displayValue || placeholder}</span>
          <div className="flex items-center shrink-0">
            {clearable && value && (
              <Button
                variant="ghost"
                className="h-6 w-6 p-0 mr-1"
                onClick={handleClear}
                aria-label="Clear selection"
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </Button>
            )}
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command shouldFilter={false}>
          <CommandList>
            {rootItems.length === 0 ? (
              <CommandEmpty>{emptyLabel}</CommandEmpty>
            ) : (
              <CommandGroup>{renderTree(null, 0)}</CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
