import { ProposalRejectionReason } from '../Proposal';

export interface ICanProposeResponse {
  canPropose: boolean;
  reason?: ProposalRejectionReason;
}
