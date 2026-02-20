export const PROPOSAL_WARRANTY = {
  NONE: 1,
  ONE_MONTH: 2,
  THREE_MONTHS: 3,
  SIX_MONTHS: 4,
  ONE_YEAR: 5,
} as const;

export const PROPOSAL_WARRANTY_LABELS = {
  [PROPOSAL_WARRANTY.NONE]: 'proposal.create.warranty.none',
  [PROPOSAL_WARRANTY.ONE_MONTH]: 'proposal.create.warranty.1month',
  [PROPOSAL_WARRANTY.THREE_MONTHS]: 'proposal.create.warranty.3months',
  [PROPOSAL_WARRANTY.SIX_MONTHS]: 'proposal.create.warranty.6months',
  [PROPOSAL_WARRANTY.ONE_YEAR]: 'proposal.create.warranty.1year',
} as const;

export const PROPOSAL_DELIVERY_TIME = {
  ONE_TWO_DAYS: 1,
  THREE_FIVE_DAYS: 2,
  ONE_WEEK: 3,
  TWO_WEEKS: 4,
} as const;

export const PROPOSAL_DELIVERY_TIME_LABELS = {
  [PROPOSAL_DELIVERY_TIME.ONE_TWO_DAYS]: 'proposal.create.deliveryTime.1_2days',
  [PROPOSAL_DELIVERY_TIME.THREE_FIVE_DAYS]: 'proposal.create.deliveryTime.3_5days',
  [PROPOSAL_DELIVERY_TIME.ONE_WEEK]: 'proposal.create.deliveryTime.week',
  [PROPOSAL_DELIVERY_TIME.TWO_WEEKS]: 'proposal.create.deliveryTime.2weeks',
} as const;
