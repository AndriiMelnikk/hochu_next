import { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type { ICreateProposalRequest } from '../types/requests/CreateProposal';
import type { IUpdateProposalRequest } from '../types/requests/UpdateProposal';
import type { IGetProposalsRequest } from '../types/requests/GetProposals';
import type { IGetProposalsResponse } from '../types/responses/GetProposals';
import type { ICanProposeResponse } from '../types/responses/CanPropose';
import type { IProposalWithSeller, IProposalSeller } from '../types/Proposal';

/** Бекенд може повертати sellerId як populated об'єкт; нормалізуємо до sellerId (string) + seller (object). */
function normalizeProposalItem(raw: Record<string, unknown>): IProposalWithSeller {
  const sellerIdRaw = raw.sellerId;
  const sellerId =
    typeof sellerIdRaw === 'object' && sellerIdRaw !== null && '_id' in sellerIdRaw
      ? String((sellerIdRaw as { _id: string })._id)
      : String(sellerIdRaw ?? '');
  const seller: IProposalSeller | undefined =
    typeof sellerIdRaw === 'object' && sellerIdRaw !== null && '_id' in sellerIdRaw
      ? (sellerIdRaw as IProposalSeller)
      : (raw.seller as IProposalSeller | undefined);

  const { __v: _v, sellerId: _sid, seller: _s, ...rest } = raw;
  return {
    ...rest,
    sellerId,
    seller,
    images: Array.isArray(raw.images) ? raw.images : [],
  } as IProposalWithSeller;
}

class ProposalService {
  /** GET proposals/requests/:requestId — список пропозицій по заявці (з пагінацією) */
  async getByRequestId(
    requestId: string | number,
    searchParams: IGetProposalsRequest = {},
    config?: AxiosRequestConfig,
  ): Promise<IGetProposalsResponse> {
    const url = ENDPOINTS.PROPOSALS.BY_REQUEST_ID(requestId);
    const data = (await api.get(url, { params: searchParams, ...config })).data;
    const items = Array.isArray(data) ? data : (data?.results ?? []);
    const results = items.map((item: Record<string, unknown>) => normalizeProposalItem(item));
    const count = typeof data?.count === 'number' ? data.count : results.length;
    return {
      results,
      count,
      page: data?.page ?? searchParams.page ?? 1,
      pageSize: data?.pageSize ?? searchParams.pageSize,
      totalPages:
        data?.totalPages ??
        (searchParams.pageSize ? Math.ceil(count / searchParams.pageSize) : undefined),
    };
  }

  async getOne(id: string | number, config?: AxiosRequestConfig): Promise<IProposalWithSeller> {
    const url = ENDPOINTS.PROPOSALS.BY_ID(id);
    return (await api.get(url, config)).data;
  }

  /** GET proposals/can-propose/:requestId — чи може поточний користувач створити пропозицію */
  async canPropose(
    requestId: string | number,
    config?: AxiosRequestConfig,
  ): Promise<ICanProposeResponse> {
    const url = ENDPOINTS.PROPOSALS.CAN_PROPOSE(requestId);
    return (await api.get(url, config)).data;
  }

  async create(
    requestId: string | number,
    data: Omit<ICreateProposalRequest, 'requestId'>,
    config?: AxiosRequestConfig,
  ): Promise<IProposalWithSeller> {
    const url = ENDPOINTS.PROPOSALS.BY_REQUEST_ID(requestId);
    return (await api.post(url, data, config)).data;
  }

  async update(
    proposalId: string | number,
    data: IUpdateProposalRequest,
    config?: AxiosRequestConfig,
  ): Promise<IProposalWithSeller> {
    const url = ENDPOINTS.PROPOSALS.BY_ID(proposalId);
    const raw = (await api.patch(url, data, config)).data;
    return normalizeProposalItem(raw);
  }

  async cancel(proposalId: string | number, config?: AxiosRequestConfig): Promise<void> {
    const url = ENDPOINTS.PROPOSALS.WITHDRAW(proposalId);
    await api.post(url, {}, config);
  }

  async reject(proposalId: string | number, config?: AxiosRequestConfig): Promise<void> {
    const url = ENDPOINTS.PROPOSALS.REJECT(proposalId);
    await api.post(url, {}, config);
  }

  async accept(proposalId: string | number, config?: AxiosRequestConfig): Promise<void> {
    const url = ENDPOINTS.PROPOSALS.ACCEPT(proposalId);
    await api.post(url, {}, config);
  }

  async complete(proposalId: string | number, config?: AxiosRequestConfig): Promise<void> {
    const url = ENDPOINTS.PROPOSALS.COMPLETE(proposalId);
    await api.post(url, {}, config);
  }

  /** POST proposals/:id/cancel — скасування раніше прийнятої пропозиції покупцем */
  async cancelAccepted(proposalId: string | number, config?: AxiosRequestConfig): Promise<void> {
    const url = ENDPOINTS.PROPOSALS.CANCEL(proposalId);
    await api.post(url, {}, config);
  }
}

export const proposalService = new ProposalService();
