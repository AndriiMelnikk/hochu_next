export { proposalService } from './services/proposalService';
export type { IProposal, IProposalWithSeller } from './types/Proposal';
export type { ICreateProposalRequest } from './types/requests/CreateProposal';
export type { IGetProposalsResponse } from './types/responses/GetProposals';
export { useProposals, useProposal } from './hooks/useProposals';
export { useProposal as useProposalDetail } from './hooks/useProposal';
export {
  proposalSchema,
  getProposalsResponseSchema,
  createProposalSchema,
} from './schemas/proposalSchema';
