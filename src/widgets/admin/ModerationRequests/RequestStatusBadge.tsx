'use client';

import { useLingui } from '@lingui/react';
import type { ModerationStatus } from '@/entities/admin';
import { Badge } from '@/ui-v2';

const TONE = { pending: 'warning', active: 'success', rejected: 'danger' } as const;

export function RequestStatusBadge({ status }: { status: ModerationStatus }) {
  const { i18n } = useLingui();
  return <Badge tone={TONE[status]}>{i18n._(`admin.requests.status.${status}`)}</Badge>;
}
