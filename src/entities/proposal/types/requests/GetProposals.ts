import { ProposalStatus } from '../Proposal';

export interface IGetProposalsRequest {
  page?: number;
  pageSize?: number;
  status?: ProposalStatus;
}
