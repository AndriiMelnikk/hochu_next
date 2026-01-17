import ProposalDetailContent from "./ProposalDetailContent";
import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";
import { proposalService } from "@/entities/proposal/services/proposalService";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  const baseMetadata = getMetadataForRoute(locale, 'PROPOSAL_ID');

  try {
    const proposal = await proposalService.getOne(id);
    if (proposal) {
      return {
        ...baseMetadata,
        title: `${proposal.seller.name} | Hochu`,
        description: proposal.description?.slice(0, 160),
        openGraph: {
          title: proposal.seller.name,
          description: proposal.description?.slice(0, 160),
        },
      };
    }
  } catch (error) {
    console.error("Failed to fetch proposal for metadata:", error);
  }

  return baseMetadata;
}

export default async function ProposalDetailPage({ params }: Props) {
  const { id } = await params;
  return <ProposalDetailContent id={id} />;
}
