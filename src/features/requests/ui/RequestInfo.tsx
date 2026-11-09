'use client';

import { useState } from 'react';
import {
  Clock,
  Eye,
  MessageSquare,
  Wallet,
  MapPin,
  Calendar,
  Package,
  Pencil,
  XCircle,
  ChevronDown,
} from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Heading,
} from '@/ui-v2';
import {
  IRequest,
  REQUEST_STATUS_LABELS,
  REQUEST_URGENCY_LABELS,
  RequestStatus,
  useRequestStore,
  useCancelRequest,
} from '@/entities/request';
import { EditRequestModal } from './EditRequestModal';
import { formatChange } from '../utils/formatChanges';
import { formatBudget } from '../utils/formatBudget';
import Image from 'next/image';
import { CreateReviewModal } from '@/features/proposals/ui/CreateReviewModal';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/ui-v2';

const STATUS_TONE = {
  pending: 'warning',
  active: 'success',
  closed: 'neutral',
  completed: 'success',
  cancelled: 'danger',
  rejected: 'danger',
} as const;

interface RequestInfoProps {
  request: Pick<
    IRequest,
    | '_id'
    | 'title'
    | 'category'
    | 'description'
    | 'createdAt'
    | 'views'
    | 'proposalsCount'
    | 'budgetMin'
    | 'budgetMax'
    | 'location'
    | 'urgency'
    | 'itemCondition'
    | 'edits'
    | 'images'
    | 'status'
  > & { buyerId?: IRequest['buyerId']; images?: string[] };
  onImageClick: (images: string[], index: number) => void;
  formatTimeAgo: (date: string) => string;
  isOwner?: boolean;
  onActionSuccess?: () => void;
  executorReviewProps?: {
    targetProfileId: string;
    proposalId: string;
  };
}

export const RequestInfo = ({
  request,
  onImageClick,
  formatTimeAgo,
  isOwner = false,
  onActionSuccess,
  executorReviewProps,
}: RequestInfoProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const queryClient = useQueryClient();
  const { updateRequest, updating } = useRequestStore();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const { mutateAsync: cancelRequest, isPending: isCancelling } = useCancelRequest();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleActionSuccess = () => {
    if (request._id) {
      queryClient.invalidateQueries({ queryKey: ['requests', request._id] });
    }
    onActionSuccess?.();
  };

  const handleCancelRequest = async () => {
    if (!request._id) return;
    try {
      await cancelRequest(request._id);
      toast.success(t('request.actions.cancelSuccess'));
      setCancelDialogOpen(false);
      handleActionSuccess();
    } catch {
      toast.error(t('request.actions.cancelError'));
    }
  };
  const isCancelled = request.status === RequestStatus.CANCELLED;

  const budget = formatBudget(request, t, i18n.locale);
  const timeAgo = request.createdAt ? formatTimeAgo(request.createdAt) : '';

  const urgencyLabel =
    REQUEST_URGENCY_LABELS[request.urgency as keyof typeof REQUEST_URGENCY_LABELS];

  return (
    <div className="ui-v2 divide-y divide-v2-border overflow-hidden rounded-v2-2xl border border-v2-border bg-v2-surface">
      {/* Request Header */}
      <div className="p-6 md:px-8">
        <div className="flex items-start justify-between mb-4 gap-4">
          <div className="flex-1 min-w-0 gap-2">
            <div>
              <Badge
                tone={STATUS_TONE[request.status as keyof typeof STATUS_TONE] ?? 'neutral'}
                className="mb-3"
              >
                {t(REQUEST_STATUS_LABELS[request.status as keyof typeof REQUEST_STATUS_LABELS])}
              </Badge>
              <Badge tone="info" className="mb-3 ml-1">
                {request.category.name}
              </Badge>
            </div>
            <Heading level="title" as="h1" className="mb-3">
              {request.title}
            </Heading>
          </div>
          <div className="flex flex-col items-end gap-2">
            {isOwner && request.status === RequestStatus.ACTIVE && (
              <>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" disabled={updating}>
                      {t('request.actions.menu')}
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[200px]">
                    <DropdownMenuItem
                      disabled={isCancelled}
                      onSelect={() => {
                        window.setTimeout(() => setEditModalOpen(true), 0);
                      }}
                    >
                      <Pencil className="h-4 w-4 mr-2 text-v2-primary" />
                      {t('request.actions.edit')}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onSelect={() => {
                        window.setTimeout(() => setCancelDialogOpen(true), 0);
                      }}
                    >
                      <XCircle className="h-4 w-4 mr-2 text-v2-danger" />
                      {t('request.actions.cancel')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <AlertDialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{t('request.cancel.confirmTitle')}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {t('request.cancel.confirmDescription')}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>{t('request.edit.cancel')}</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={(e) => {
                          e.preventDefault();
                          handleCancelRequest();
                        }}
                        className="bg-v2-danger text-white hover:opacity-90"
                      >
                        {isCancelling ? t('request.edit.submitting') : t('request.actions.cancel')}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}

            {executorReviewProps && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setReviewModalOpen(true);
                  }}
                >
                  {t('proposal.item.leaveReviewForBuyer')}
                </Button>
                <CreateReviewModal
                  targetProfileId={executorReviewProps.targetProfileId}
                  requestId={request._id}
                  proposalId={executorReviewProps.proposalId}
                  open={reviewModalOpen}
                  onOpenChange={setReviewModalOpen}
                  onSuccess={handleActionSuccess}
                />
              </>
            )}
          </div>
        </div>

        {isOwner && (
          <EditRequestModal
            request={request as IRequest}
            open={editModalOpen}
            onOpenChange={setEditModalOpen}
            onSuccess={handleActionSuccess}
          />
        )}

        <div className="flex flex-wrap gap-4 text-sm text-v2-muted mb-4">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {timeAgo}
          </span>
          <span className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            {request.views} {t('request.detail.views')}
          </span>
          <span className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {request.proposalsCount} {t('request.detail.proposals')}
          </span>
        </div>

        <div className="-mx-6 mb-0 mt-6 grid grid-cols-1 gap-4 border-t border-v2-border px-6 pt-6 md:-mx-8 md:grid-cols-4 md:px-8">
          <div className="flex items-start">
            <Wallet className="h-5 w-5 text-v2-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-v2-muted">{t('request.detail.budget')}</p>
              <p className="font-semibold">{budget}</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-v2-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-v2-muted">{t('request.detail.location')}</p>
              <p className="font-semibold">{request.location || '-'}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-v2-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-v2-muted">{t('request.detail.urgency')}</p>
              <p className="font-semibold">{urgencyLabel ? t(urgencyLabel) : request.urgency}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Package className="h-5 w-5 mr-2 text-v2-primary" />
            <div>
              <p className="text-sm text-v2-muted">{t('request.detail.condition')}</p>
              <p className="font-semibold">
                {request.itemCondition === 'new'
                  ? t('request.create.itemConditionNew')
                  : request.itemCondition === 'used'
                    ? t('request.create.itemConditionUsed')
                    : '-'}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="p-6 md:px-8">
        <h2 className="mb-4 text-xl font-[550]">{t('request.detail.description')}</h2>
        <div className="prose max-w-none text-v2-muted whitespace-pre-line">
          {request.description}
        </div>

        {/* Edit History */}
        {request.edits && request.edits.length > 0 && (
          <div className="mt-6 pt-6 border-t border-v2-border">
            <h3 className="text-sm font-semibold text-v2-muted mb-3">
              {t('request.detail.editHistory')}
            </h3>
            <div className="space-y-3">
              {request.edits.map((edit, index) => (
                <div
                  key={index}
                  className="bg-v2-surface-subtle rounded-v2-lg p-3 border border-v2-border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{t('request.detail.clarification')}</Badge>
                    <span className="text-xs text-v2-muted">
                      {new Date(edit.timestamp).toLocaleString()}
                    </span>
                  </div>
                  {/* {edit.text && <p className="text-sm mb-2">{edit.text}</p>} */}
                  {edit.changes && edit.changes.length > 0 && (
                    <div className="mt-2 text-sm">
                      <div className="space-y-1">
                        {edit.changes.map((change, idx) => {
                          const { label, oldValue, newValue, formatted } = formatChange(
                            change.field,
                            change.oldValue,
                            change.newValue,
                            t,
                          );
                          return (
                            <div key={idx} className="flex gap-2 text-xs">
                              <span className="font-semibold text-v2-ink">{label}:</span>
                              {formatted ? (
                                <span className="text-v2-muted">{formatted}</span>
                              ) : (
                                <>
                                  <span className="text-v2-muted line-through">
                                    {String(oldValue)}
                                  </span>
                                  <span className="text-v2-muted">→</span>
                                  <span className="text-v2-primary font-medium">
                                    {String(newValue)}
                                  </span>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Images */}
      {request.images && request.images.length > 0 && (
        <div className="p-6 md:px-8">
          <h2 className="mb-4 text-xl font-[550]">
            {t('request.detail.photos', { count: request.images.length })}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {request.images.map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-v2-lg overflow-hidden border border-v2-border hover:border-v2-primary transition-colors cursor-pointer group"
                onClick={() => onImageClick(request.images, index)}
              >
                <Image
                  src={image}
                  alt={`Photo ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
