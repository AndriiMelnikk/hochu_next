import type { IProposal } from '../Proposal';

export interface IGetProposalsResponse {
  results: IProposal[];
  count?: number;
  page?: number;
  pageSize?: number;
  totalPages?: number;
}
