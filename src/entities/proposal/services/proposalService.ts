import { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type { ICreateProposalRequest } from '../types/requests/CreateProposal';
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
    return (await api.get(`/api/proposals/${id}`, config)).data;
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
    return (await api.post(`/api/proposals/requests/${requestId}`, data, config)).data;
  }
}

export const proposalService = new ProposalService();
