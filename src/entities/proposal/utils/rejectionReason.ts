import { AxiosError } from 'axios';
import { ProposalRejectionReason } from '../types/Proposal';

const REASON_ALIASES: Record<string, ProposalRejectionReason> = {
  NO_CONTACT_CHANNELS: ProposalRejectionReason.NO_CONTACTS,
  NO_CONTACT_CHANNEL: ProposalRejectionReason.NO_CONTACTS,
};

export function parseProposalRejectionReason(value: unknown): ProposalRejectionReason | undefined {
  if (typeof value !== 'string' || !value) return undefined;
  const aliased = REASON_ALIASES[value];
  if (aliased) return aliased;
  if (Object.values(ProposalRejectionReason).includes(value as ProposalRejectionReason)) {
    return value as ProposalRejectionReason;
  }
  return undefined;
}

export function getProposalRejectionReasonFromError(
  error: unknown,
): ProposalRejectionReason | undefined {
  if (!(error instanceof AxiosError)) return undefined;
  const data = error.response?.data as Record<string, unknown> | undefined;
  if (!data || typeof data !== 'object') return undefined;

  const nested = data.error;
  const nestedObj =
    nested && typeof nested === 'object' ? (nested as Record<string, unknown>) : null;

  const candidates = [
    data.reason,
    data.code,
    nestedObj?.code,
    nestedObj?.reason,
    typeof nested === 'string' ? nested : undefined,
    data.message,
  ];

  for (const candidate of candidates) {
    const parsed = parseProposalRejectionReason(candidate);
    if (parsed) return parsed;
  }

  return undefined;
}
