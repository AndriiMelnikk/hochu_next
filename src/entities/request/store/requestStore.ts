import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { requestService } from '../services/requestService';
import { IRequest } from '../types/Request';
import { PaginationResult } from '../types/responses/GetRequests';
import { ICreateRequestRequest } from '../types/requests/CreateRequest';
import { IGetRequestsRequest } from '../types/requests/GetRequests';

interface RequestState {
  requests: PaginationResult<IRequest> | null;
  loading: boolean;
  error: string | null;
  creating: boolean;
  createError: string | null;
}

interface RequestActions {
  fetchRequests: (params?: IGetRequestsRequest) => Promise<void>;
  createRequest: (data: ICreateRequestRequest) => Promise<IRequest>;
}

export const useRequestStore = create<RequestState & RequestActions>()(
  immer((set) => ({
    requests: null,
    loading: false,
    error: null,
    creating: false,
    createError: null,
    fetchRequests: async (params) => {
      set((state) => {
        state.loading = true;
        state.error = null;
      });
      try {
        const data = await requestService.get(params);
        set((state) => {
          state.requests = data;
          state.loading = false;
        });
      } catch (error) {
        set((state) => {
          state.loading = false;
          state.error = 'Failed to fetch requests';
        });
      }
    },
    createRequest: async (data) => {
      set((state) => {
        state.creating = true;
        state.createError = null;
      });
      try {
        const newRequest = await requestService.create(data);
        set((state) => {
          state.creating = false;
        });
        return newRequest;
      } catch (error: any) {
        set((state) => {
          state.creating = false;
          state.createError = error.response?.data?.message || 'Failed to create request';
        });
        throw error;
      }
    },
  })),
);
