export interface IProposal {
  id: number;
  requestId: number;
  sellerId: number;
  price: number;
  description: string;
  estimatedTime: string;
  createdAt: string;
  status: "pending" | "accepted" | "rejected";
}

export interface IProposalWithSeller extends IProposal {
  seller?: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
    isVerified: boolean;
  };
}

