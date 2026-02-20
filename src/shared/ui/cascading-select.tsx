'use client';

import * as React from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

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
  backLabel = 'Back',
  moreLabel = 'More',
  disabled = false,
  className,
  clearable = false,
}: CascadingSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [currentParentId, setCurrentParentId] = React.useState<string | null>(null);
  const [navigationPath, setNavigationPath] = React.useState<CascadingSelectItem[]>([]);

  // Build lookup maps
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

  // Get items for current level
  const currentLevelItems = React.useMemo(() => {
    return itemsByParentId.get(currentParentId ?? 'root') ?? [];
  }, [itemsByParentId, currentParentId]);

  // Check if an item has children
  const hasChildren = React.useCallback(
    (itemId: string) => {
      return (itemsByParentId.get(itemId)?.length ?? 0) > 0;
    },
    [itemsByParentId],
  );

  // Build path to a specific item
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

  // Get display value
  const displayValue = React.useMemo(() => {
    if (!value) return null;

    const path = buildPathToItem(value);
    return path.map((item) => item.name).join(' → ');
  }, [value, buildPathToItem]);

  // Get ancestor IDs of the selected value
  const selectedAncestors = React.useMemo(() => {
    if (!value) return new Set<string>();
    const path = buildPathToItem(value);
    return new Set(path.map((item) => item.id));
  }, [value, buildPathToItem]);

  // Handle item selection - always select the item
  const handleSelect = (item: CascadingSelectItem) => {
    const path = buildPathToItem(item.id);
    onValueChange?.(item.id, path);
    setOpen(false);
    // Reset navigation
    setCurrentParentId(null);
    setNavigationPath([]);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onValueChange?.(null, null);
  };

  // Handle drill-down into subcategories
  const handleDrillDown = (item: CascadingSelectItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentParentId(item.id);
    setNavigationPath((prev) => [...prev, item]);
  };

  // Handle back navigation
  const handleBack = () => {
    if (navigationPath.length > 0) {
      const newPath = navigationPath.slice(0, -1);
      setNavigationPath(newPath);
      setCurrentParentId(newPath[newPath.length - 1]?.id ?? null);
    }
  };

  const handleOpenChange = React.useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen);
      if (isOpen) {
        // If there's a selected value, navigate to its parent level
        if (value) {
          const path = buildPathToItem(value);
          if (path.length > 1) {
            const parentPath = path.slice(0, -1);
            setNavigationPath(parentPath);
            setCurrentParentId(parentPath[parentPath.length - 1]?.id ?? null);
          } else {
            setCurrentParentId(null);
            setNavigationPath([]);
          }
        } else {
          setCurrentParentId(null);
          setNavigationPath([]);
        }
      }
    },
    [value, buildPathToItem],
  );

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-between text-base font-normal',
            !displayValue && 'text-muted-foreground',
            className,
          )}
          disabled={disabled}
        >
          <span className="truncate">{displayValue || placeholder}</span>
          <div className="flex items-center">
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
            {/* Navigation breadcrumb */}
            {navigationPath.length > 0 && (
              <div className="px-2 py-2 border-b flex items-center justify-between">
                <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground ml-6">
                  {navigationPath.map((item, index) => (
                    <React.Fragment key={item.id}>
                      {index > 0 && <span> → </span>}
                      <span className="font-medium">{item.name}</span>
                    </React.Fragment>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-1 text-xs mr-3 text-muted-foreground hover:text-foreground px-2 py-1 rounded hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  {backLabel}
                </button>
              </div>
            )}

            {currentLevelItems.length === 0 ? (
              <CommandEmpty>{emptyLabel}</CommandEmpty>
            ) : (
              <CommandGroup>
                {currentLevelItems.map((item) => {
                  const itemHasChildren = hasChildren(item.id);
                  const isSelected = value === item.id;
                  const isAncestor = selectedAncestors.has(item.id) && !isSelected;

                  return (
                    <CommandItem
                      key={item.id}
                      value={item.name}
                      onSelect={() => handleSelect(item)}
                      className={cn(
                        'flex items-center justify-between',
                        isAncestor && 'bg-accent/40 text-accent-foreground font-medium',
                        isSelected && 'bg-accent text-accent-foreground font-medium',
                      )}
                    >
                      <div className="flex items-center">
                        <Check
                          className={cn('mr-2 h-4 w-4', isSelected ? 'opacity-100' : 'opacity-0')}
                        />
                        <span>{item.name}</span>
                      </div>
                      {itemHasChildren && (
                        <button
                          type="button"
                          onClick={(e) => handleDrillDown(item, e)}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded hover:bg-accent transition-colors"
                        >
                          {moreLabel}
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
