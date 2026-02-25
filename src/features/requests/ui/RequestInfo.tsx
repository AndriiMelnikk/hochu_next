'use client';

import { useState } from 'react';
import {
  Clock,
  Eye,
  MessageSquare,
  DollarSign,
  MapPin,
  Calendar,
  Package,
  Pencil,
  XCircle,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Badge } from '@shared/ui/badge';
import { Separator } from '@shared/ui/separator';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@shared/ui/alert-dialog';
import {
  IRequest,
  REQUEST_STATUS_BADGE_VARIANT,
  REQUEST_STATUS_LABELS,
  REQUEST_URGENCY_LABELS,
  RequestStatus,
  useRequestStore,
  useCancelRequest,
} from '@/entities/request';
import { EditRequestModal } from './EditRequestModal';
import { formatChange } from '../utils/formatChanges';
import Image from 'next/image';

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
}

export const RequestInfo = ({
  request,
  onImageClick,
  formatTimeAgo,
  isOwner = false,
  onActionSuccess,
}: RequestInfoProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const queryClient = useQueryClient();
  const { updateRequest, updating } = useRequestStore();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const { mutateAsync: cancelRequest, isPending: isCancelling } = useCancelRequest();

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

  const min = request.budgetMin || 0;
  const max = request.budgetMax || 0;

  let budget = t('request.detail.budgetNotSpecified');

  if (min > 0 && max > 0) {
    budget = `${min}-${max} грн`;
  } else if (min > 0) {
    budget = t('request.budget.from', { amount: min });
  } else if (max > 0) {
    budget = t('request.budget.to', { amount: max });
  }
  const timeAgo = request.createdAt ? formatTimeAgo(request.createdAt) : '';

  const urgencyLabel =
    REQUEST_URGENCY_LABELS[request.urgency as keyof typeof REQUEST_URGENCY_LABELS];

  return (
    <div className="space-y-6">
      {/* Request Header */}
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
        <div className="flex items-start justify-between mb-4 gap-4">
          <div className="flex-1 min-w-0 gap-2">
            <div>
              <Badge
                variant={
                  REQUEST_STATUS_BADGE_VARIANT[
                    request.status as keyof typeof REQUEST_STATUS_BADGE_VARIANT
                  ] ?? 'secondary'
                }
                className="mb-3"
              >
                {t(REQUEST_STATUS_LABELS[request.status as keyof typeof REQUEST_STATUS_LABELS])}
              </Badge>
              <Badge variant="secondary" className="bg-accent text-accent-foreground mb-3 ml-1">
                {request.category.name}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-card-foreground">{request.title}</h1>
          </div>
          {isOwner && request.status === RequestStatus.ACTIVE && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" disabled={updating}>
                    {t('request.actions.menu')}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[200px]">
                  <DropdownMenuItem onClick={() => setEditModalOpen(true)} disabled={isCancelled}>
                    <Pencil className="h-4 w-4 mr-2 text-primary" />
                    {t('request.actions.edit')}
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => setCancelDialogOpen(true)}>
                    <XCircle className="h-4 w-4 mr-2 text-destructive" />
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
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      {isCancelling ? t('request.edit.submitting') : t('request.actions.cancel')}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          )}
        </div>

        {isOwner && (
          <EditRequestModal
            request={request as IRequest}
            open={editModalOpen}
            onOpenChange={setEditModalOpen}
            onSuccess={handleActionSuccess}
          />
        )}

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
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

        <Separator className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-start">
            <DollarSign className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">{t('request.detail.budget')}</p>
              <p className="font-semibold">{budget}</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">{t('request.detail.location')}</p>
              <p className="font-semibold">{request.location}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">{t('request.detail.urgency')}</p>
              <p className="font-semibold">{urgencyLabel ? t(urgencyLabel) : request.urgency}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Package className="h-5 w-5 mr-2 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">{t('request.detail.condition')}</p>
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
      <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
        <h2 className="text-xl font-semibold mb-4">{t('request.detail.description')}</h2>
        <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
          {request.description}
        </div>

        {/* Edit History */}
        {request.edits && request.edits.length > 0 && (
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              {t('request.detail.editHistory')}
            </h3>
            <div className="space-y-3">
              {request.edits.map((edit, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-3 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {t('request.detail.clarification')}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
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
                              <span className="font-semibold text-foreground">{label}:</span>
                              {formatted ? (
                                <span className="text-muted-foreground">{formatted}</span>
                              ) : (
                                <>
                                  <span className="text-muted-foreground line-through">
                                    {String(oldValue)}
                                  </span>
                                  <span className="text-muted-foreground">→</span>
                                  <span className="text-primary font-medium">
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
        <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
          <h2 className="text-xl font-semibold mb-4">
            {t('request.detail.photos', { count: request.images.length })}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {request.images.map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer group"
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
