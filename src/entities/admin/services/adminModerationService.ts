import type {
  IBulkModerationResult,
  IModerationList,
  IModerationRequest,
  ModerationFilter,
} from '../types/admin';
import { adminCall as call } from './adminHttp';

export interface IListModerationParams {
  status: ModerationFilter;
  q?: string;
  page: number;
  pageSize: number;
}

export const adminModerationService = {
  list(params: IListModerationParams): Promise<IModerationList> {
    const qs = new URLSearchParams({
      status: params.status,
      page: String(params.page),
      pageSize: String(params.pageSize),
    });
    if (params.q) qs.set('q', params.q);
    return call(`/requests?${qs}`);
  },
  get(id: string): Promise<IModerationRequest> {
    return call(`/requests/${id}`);
  },
  approve(id: string) {
    return call<{ success: boolean }>(`/requests/${id}/approve`, { method: 'POST' });
  },
  reject(id: string, reason: string) {
    return call<{ success: boolean }>(`/requests/${id}/reject`, {
      method: 'POST',
      body: JSON.stringify({ reason }),
    });
  },
  bulk(input: { ids: string[]; action: 'approve' | 'reject'; reason?: string }) {
    return call<IBulkModerationResult>('/requests/bulk', {
      method: 'POST',
      body: JSON.stringify(input),
    });
  },
};
