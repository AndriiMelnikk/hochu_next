'use client';

import { useEffect, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCities } from '@/entities/location';
import { useDebounce } from '@/shared/hooks';
import { Button } from '@/shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/ui/command';

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
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(value ?? '');
  const debouncedSearch = useDebounce(search, 500);
  const { data: cities = [], isLoading } = useCities(debouncedSearch);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSearch(value ?? '');
      }, 0);
    }
  }, [value, isOpen]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          disabled={disabled}
          className={cn(
            'w-full justify-between text-base font-normal',
            !value && 'text-muted-foreground',
            className,
          )}
        >
          {value || placeholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput placeholder={searchPlaceholder} value={search} onValueChange={setSearch} />
          <CommandList>
            {isLoading && <div className="py-6 text-center text-sm">{searchingLabel}</div>}
            {!isLoading && cities.length === 0 && search.length >= 2 && (
              <CommandEmpty>{notFoundLabel}</CommandEmpty>
            )}
            <CommandGroup>
              {cities.map((city) => (
                <CommandItem
                  key={city.ref}
                  value={city.name}
                  onSelect={() => {
                    onValueChange(city.name);
                    setIsOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      city.name === value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <div className="flex flex-col">
                    <span>{city.name}</span>
                    <span className="text-xs text-muted-foreground">{city.mainDescription}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
