import { IProposal } from '../../Proposal';

export interface IGetProposalsResponse {
  count: number;
  results: IProposal[];
}
