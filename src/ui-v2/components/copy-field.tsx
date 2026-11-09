'use client';

import * as React from 'react';

import { Button } from './button';
import { Input } from './input';

/** Поле лише для читання з посиланням і кнопкою "Copy link" під ним (Job link). */
export function CopyField({
  value,
  label = 'Copy link',
  copiedLabel = 'Copied',
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard недоступний (http, дозволи) — мовчки ігноруємо
    }
  };

  return (
    <div className="space-y-2">
      <Input readOnly value={value} aria-label="Link" />
      <Button variant="link" size="sm" className="px-0" onClick={copy}>
        {copied ? copiedLabel : label}
      </Button>
    </div>
  );
}
