'use client';

import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  adminModerationService,
  type IListModerationParams,
} from '../services/adminModerationService';

const KEY = ['admin', 'moderation-requests'] as const;

export function useModerationRequests(params: IListModerationParams) {
  return useQuery({
    queryKey: [...KEY, 'list', params],
    queryFn: () => adminModerationService.list(params),
    placeholderData: keepPreviousData,
  });
}

export function useModerationRequest(id: string | null) {
  return useQuery({
    queryKey: [...KEY, 'item', id],
    queryFn: () => adminModerationService.get(id as string),
    enabled: Boolean(id),
  });
}

/** Схвалення/відхилення одного запиту; після успіху оновлює чергу й лічильники. */
export function useModerateRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (
      input: { id: string; action: 'approve' } | { id: string; action: 'reject'; reason: string },
    ) =>
      input.action === 'approve'
        ? adminModerationService.approve(input.id)
        : adminModerationService.reject(input.id, input.reason),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: KEY }),
  });
}

export function useBulkModerate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: adminModerationService.bulk,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: KEY }),
  });
}
