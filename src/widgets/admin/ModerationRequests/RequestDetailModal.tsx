'use client';

import { useLingui } from '@lingui/react';
import {
  useModerateRequest,
  useModerationRequest,
  type IModerationRequest,
} from '@/entities/admin';
import { ApproveRejectActions, PermissionGate } from '@/features/admin';
import { formatBudget } from '@/features/requests/utils/formatBudget';
import {
  LoadingState,
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/ui-v2';
import { RequestStatusBadge } from './RequestStatusBadge';
import { formatDateTime } from './formatDateTime';

interface RequestDetailModalProps {
  requestId: string | null;
  onClose: () => void;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-sm text-v2-muted">{label}</dt>
      <dd className="mt-0.5 text-base text-v2-ink">{children}</dd>
    </div>
  );
}

function Body({ request }: { request: IModerationRequest }) {
  const { i18n } = useLingui();
  const t = (id: string, v?: Record<string, string | number>) => i18n._(id, v);
  const locale = i18n.locale;

  return (
    <div className="space-y-6">
      <dl className="grid gap-4 sm:grid-cols-2">
        <Field label={t('admin.requests.detail.author')}>
          {request.buyer ? (
            <>
              {request.buyer.name}
              {request.buyer.email && (
                <span className="block text-sm text-v2-muted">{request.buyer.email}</span>
              )}
            </>
          ) : (
            '—'
          )}
        </Field>
        <Field label={t('admin.requests.detail.category')}>{request.category?.title || '—'}</Field>
        <Field label={t('admin.requests.detail.budget')}>{formatBudget(request, t, locale)}</Field>
        <Field label={t('admin.requests.detail.location')}>{request.location || '—'}</Field>
        <Field label={t('admin.requests.table.date')}>
          {formatDateTime(request.createdAt, locale)}
        </Field>
        <Field label={t('admin.requests.table.status')}>
          <RequestStatusBadge status={request.status} />
        </Field>
      </dl>

      <div>
        <p className="text-sm text-v2-muted">{t('admin.requests.detail.description')}</p>
        <p className="mt-1 whitespace-pre-wrap break-words text-base text-v2-ink">
          {request.description}
        </p>
      </div>

      {request.images.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {request.images.slice(0, 6).map((src) => (
            <li key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="size-20 rounded-v2-lg border border-v2-border object-cover"
              />
            </li>
          ))}
        </ul>
      )}

      {request.status === 'rejected' && request.rejectionReason && (
        <div className="rounded-v2-lg border border-v2-border bg-v2-surface-subtle p-4 text-sm">
          <p className="font-semibold text-v2-danger">
            {t('admin.requests.detail.rejectionReason')}
          </p>
          <p className="mt-1 whitespace-pre-wrap break-words text-v2-ink">
            {request.rejectionReason}
          </p>
        </div>
      )}

      <div>
        <p className="mb-2 text-sm font-semibold text-v2-ink">
          {t('admin.requests.detail.history')}
        </p>
        {request.moderationLog && request.moderationLog.length > 0 ? (
          <ol className="space-y-2 text-sm">
            {[...request.moderationLog].reverse().map((entry) => (
              <li key={`${entry.at}-${entry.action}`} className="flex flex-col">
                <span className="text-v2-ink">
                  {t(`admin.requests.log.${entry.action}`)} · {entry.by}
                  <span className="text-v2-muted"> · {formatDateTime(entry.at, locale)}</span>
                </span>
                {entry.reason && <span className="text-v2-muted">{entry.reason}</span>}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-v2-muted">{t('admin.requests.detail.noHistory')}</p>
        )}
      </div>
    </div>
  );
}

/** Картка запиту: повний вміст, історія модерації та дії схвалити/відхилити. */
export function RequestDetailModal({ requestId, onClose }: RequestDetailModalProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: request, isLoading, isError } = useModerationRequest(requestId);
  const { mutateAsync: moderate } = useModerateRequest();

  return (
    <Modal open={Boolean(requestId)} onOpenChange={(open) => !open && onClose()}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{request?.title ?? t('admin.requests.detail.title')}</ModalTitle>
          <ModalDescription className="sr-only">
            {t('admin.requests.detail.title')}
          </ModalDescription>
        </ModalHeader>
        <ModalBody>
          {isLoading && <LoadingState variant="inline" />}
          {isError && <p className="text-v2-danger">{t('admin.error.generic')}</p>}
          {request && <Body request={request} />}
        </ModalBody>
        {request && (
          <ModalFooter>
            <PermissionGate permission="moderation.requests">
              <ApproveRejectActions
                entityLabel={request.title}
                canApprove={request.status !== 'active'}
                canReject={request.status !== 'rejected'}
                onApprove={async () => {
                  await moderate({ id: request.id, action: 'approve' });
                }}
                onReject={async (reason) => {
                  await moderate({ id: request.id, action: 'reject', reason });
                }}
                onResolved={onClose}
              />
            </PermissionGate>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}
