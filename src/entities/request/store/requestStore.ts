import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { requestService } from '../services/requestService';
import { IRequest } from '../types/Request';
import { IGetRequestsResponse } from '../types/responses/GetRequests';
import { ICreateRequestRequest } from '../types/requests/CreateRequest';
import { IGetRequestsRequest } from '../types/requests/GetRequests';
import { IUpdateRequestRequest } from '../types/requests/UpdateRequest';

interface RequestState {
  requests: IGetRequestsResponse | null;
  loading: boolean;
  error: string | null;
  creating: boolean;
  createError: string | null;
  updating: boolean;
  updateError: string | null;
}

interface RequestActions {
  fetchRequests: (params?: IGetRequestsRequest) => Promise<void>;
  fetchRequestsByProposals: (profileId: string, params?: IGetRequestsRequest) => Promise<void>;
  createRequest: (data: ICreateRequestRequest) => Promise<IRequest>;
  updateRequest: (id: string, data: IUpdateRequestRequest) => Promise<IRequest>;
}

export const useRequestStore = create<RequestState & RequestActions>()(
  immer((set) => ({
    requests: null,
    loading: false,
    error: null,
    creating: false,
    createError: null,
    updating: false,
    updateError: null,
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
    fetchRequestsByProposals: async (profileId, params) => {
      set((state) => {
        state.loading = true;
        state.error = null;
      });
      try {
        const data = await requestService.getByProposals(profileId, params);
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
      } catch (error) {
        set((state) => {
          state.creating = false;
          state.createError = error.response?.data?.message || 'Failed to create request';
        });
        throw error;
      }
    },
    updateRequest: async (id, data) => {
      set((state) => {
        state.updating = true;
        state.updateError = null;
      });
      try {
        const updated = await requestService.update(id, data);
        set((state) => {
          state.updating = false;
        });
        return updated;
      } catch (error) {
        set((state) => {
          state.updating = false;
          state.updateError = error.response?.data?.message || 'Failed to update request';
        });
        throw error;
      }
    },
  })),
);
