'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useCities } from '@/entities/location';
import { useDebounce } from '@/shared/hooks';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export interface CityComboboxProps {
  value: string | null;
  onValueChange: (value: string | null) => void;
  disabled?: boolean;
  placeholder: string;
  searchPlaceholder: string;
  searchingLabel: string;
  notFoundLabel: string;
  className?: string;
  id?: string;
}

/** Вибір міста з пошуком по API: кнопка-тригер + поле пошуку + список. */
export function CityCombobox({
  value,
  onValueChange,
  disabled,
  placeholder,
  searchPlaceholder,
  searchingLabel,
  notFoundLabel,
  className,
  id,
}: CityComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState(value ?? '');
  const debounced = useDebounce(search, 500);
  const { data: cities = [], isLoading } = useCities(debounced);

  React.useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => setSearch(value ?? ''), 0);
      return () => clearTimeout(timer);
    }
  }, [value, open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            'flex h-10 w-full items-center justify-between gap-2 rounded-v2-xl border border-v2-border bg-v2-surface px-4 text-sm font-[450] transition-colors',
            'hover:border-v2-border-strong focus-visible:border-v2-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-v2-primary',
            'disabled:cursor-not-allowed disabled:bg-v2-disabled-bg disabled:text-v2-disabled-text',
            !value && 'text-v2-muted',
            className,
          )}
        >
          <span className="truncate">{value || placeholder}</span>
          <ChevronDown className="size-4 shrink-0 text-v2-muted" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <div className="border-b border-v2-border p-2">
          <input
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-9 w-full rounded-v2-md bg-v2-surface-subtle px-3 text-sm outline-none placeholder:text-v2-muted focus-visible:ring-1 focus-visible:ring-v2-primary"
          />
        </div>
        <ul className="max-h-64 overflow-y-auto p-1">
          {isLoading && (
            <li className="py-6 text-center text-sm text-v2-muted">{searchingLabel}</li>
          )}
          {!isLoading && cities.length === 0 && search.length >= 2 && (
            <li className="py-6 text-center text-sm text-v2-muted">{notFoundLabel}</li>
          )}
          {cities.map((city) => (
            <li key={city.ref}>
              <button
                type="button"
                onClick={() => {
                  onValueChange(city.name);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-v2-sm px-2 py-1.5 text-left text-sm hover:bg-v2-hover"
              >
                <Check
                  className={cn(
                    'size-4 shrink-0 text-v2-primary',
                    city.name !== value && 'opacity-0',
                  )}
                />
                <span className="flex flex-col">
                  <span>{city.name}</span>
                  <span className="text-xs text-v2-muted">{city.mainDescription}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
