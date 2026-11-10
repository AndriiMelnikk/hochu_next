import * as React from 'react';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

export type StepStatus = 'done' | 'active' | 'pending';

export interface StepperStep {
  label: string;
  status: StepStatus;
}

/**
 * Горизонтальний степер (майстер створення). Маркер 24px:
 * done — галочка в сірому колі, active — коло 20px з рамкою 2px, pending — блідий контур.
 * Між маркерами — тонка лінія, темна після пройдених кроків.
 */
export function Stepper({ steps, className }: { steps: StepperStep[]; className?: string }) {
  return (
    <ol className={cn('flex w-full items-start', className)}>
      {steps.map((step, i) => (
        <li
          key={step.label}
          aria-current={step.status === 'active' ? 'step' : undefined}
          className="flex flex-1 flex-col items-center gap-2"
        >
          <div className="flex w-full items-center">
            <span
              aria-hidden
              className={cn(
                'h-px flex-1',
                i === 0
                  ? 'invisible'
                  : steps[i - 1].status === 'done'
                    ? 'bg-v2-ink'
                    : 'bg-v2-border',
              )}
            />
            <Marker status={step.status} />
            <span
              aria-hidden
              className={cn(
                'h-px flex-1',
                i === steps.length - 1
                  ? 'invisible'
                  : step.status === 'done'
                    ? 'bg-v2-ink'
                    : 'bg-v2-border',
              )}
            />
          </div>
          <span className="sr-only">
            {step.status === 'done'
              ? 'Completed step'
              : step.status === 'active'
                ? 'Current step'
                : 'Step'}
          </span>
          <span className="text-xs font-[450] text-v2-ink">{step.label}</span>
        </li>
      ))}
    </ol>
  );
}

function Marker({ status }: { status: StepStatus }) {
  if (status === 'done') {
    return (
      <span className="flex size-6 items-center justify-center rounded-full border border-v2-muted text-v2-muted">
        <Check className="size-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  if (status === 'active') {
    return (
      <span className="flex size-6 items-center justify-center">
        <span className="size-5 rounded-full border-2 border-v2-ink" />
      </span>
    );
  }
  return (
    <span className="flex size-6 items-center justify-center">
      <span className="size-5 rounded-full border border-v2-border" />
    </span>
  );
}

/** Тонка смуга прогресу (внизу майстра). value: 0–100. */
export function ProgressBar({ value, className }: { value: number; className?: string }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      className={cn('h-1 w-full bg-v2-surface-muted', className)}
    >
      <div className="h-full bg-v2-ink transition-[width]" style={{ width: `${clamped}%` }} />
    </div>
  );
}

/** Нижня панель майстра: смуга прогресу, "Back" зліва, головна дія справа. */
export function WizardFooter({
  progress,
  back,
  next,
  className,
}: {
  progress: number;
  back?: React.ReactNode;
  next?: React.ReactNode;
  className?: string;
}) {
  return (
    <footer className={cn('bg-v2-surface', className)}>
      <ProgressBar value={progress} />
      <div className="flex items-center justify-between px-6 py-4">
        <div>{back}</div>
        <div>{next}</div>
      </div>
    </footer>
  );
}
