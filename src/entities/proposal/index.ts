export { proposalService } from './services/proposalService';
export { ProposalStatus } from './types/Proposal';
export type { IProposal, IProposalWithSeller, IProposalSeller } from './types/Proposal';
export type { ICreateProposalRequest } from './types/requests/CreateProposal';
export type { IGetProposalsResponse } from './types/responses/GetProposals';
export type { ICanProposeResponse } from './types/responses/CanPropose';
export { useProposals } from './hooks/useProposals';
export { useCanPropose } from './hooks/useCanPropose';
export { useProposal as useProposalDetail } from './hooks/useProposal';
export {
  proposalSchema,
  getProposalsResponseSchema,
  createProposalSchema,
} from './schemas/proposalSchema';
