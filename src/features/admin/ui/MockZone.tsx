'use client';

import type { ReactNode } from 'react';
import { FlaskConical } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { cn } from '@shared/utils/cn';

interface MockZoneProps {
  children: ReactNode;
  /** `false` — дані справжні (з бекенду), обгортка нічого не змінює. */
  active?: boolean;
  className?: string;
}

/**
 * Позначає блок як заглушку: сірий, неклікабельний (`inert` прибирає фокус і кліки),
 * з банером зверху. Все, що не обгорнуто в MockZone, працює зі справжнім бекендом.
 */
export function MockZone({ children, active = true, className }: MockZoneProps) {
  const { i18n } = useLingui();
  if (!active) return <>{children}</>;

  return (
    <div className={className}>
      <div
        role="status"
        className="mb-4 flex items-center gap-2 rounded-v2-lg border border-dashed border-v2-border bg-v2-surface-subtle px-4 py-3 text-sm text-v2-muted"
      >
        <FlaskConical className="size-4 shrink-0" aria-hidden />
        {i18n._('admin.mock.banner')}
      </div>
      <div
        inert
        aria-disabled="true"
        data-mock="true"
        className={cn(
          'pointer-events-none select-none opacity-50 grayscale',
          '[&_*]:!cursor-not-allowed',
        )}
      >
        {children}
      </div>
    </div>
  );
}

/** Маленька мітка «Заглушка» для пунктів меню. */
export function MockTag({ className }: { className?: string }) {
  const { i18n } = useLingui();
  return (
    <span
      className={cn(
        'ml-2 rounded-full border border-v2-border px-1.5 py-px text-[10px] font-medium uppercase leading-4 tracking-wide text-v2-muted',
        className,
      )}
    >
      {i18n._('admin.mock.badge')}
    </span>
  );
}
