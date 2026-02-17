import { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import type { ICreateProposalRequest } from '../types/requests/CreateProposal';
import type { IGetProposalsResponse } from '../types/responses/GetProposals';
import type { IProposalWithSeller } from '../types/Proposal';

class ProposalService {
  async get(requestId?: number, config?: AxiosRequestConfig): Promise<IGetProposalsResponse> {
    const url = requestId ? `/api/proposals?requestId=${requestId}` : '/api/proposals';
    return (await api.get(url, config)).data;
  }

  async getOne(id: string | number, config?: AxiosRequestConfig): Promise<IProposalWithSeller> {
    return (await api.get(`/api/proposals/${id}`, config)).data;
  }

  async create(
    requestId: string | number,
    data: Omit<ICreateProposalRequest, 'requestId'>,
    config?: AxiosRequestConfig,
  ): Promise<IProposalWithSeller> {
    return (await api.post(`/api/proposals/requests/${requestId}`, data, config)).data;
  }
}

export const proposalService = new ProposalService();
