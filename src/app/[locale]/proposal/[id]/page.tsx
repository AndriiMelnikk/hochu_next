import ProposalDetailContent from './ProposalDetailContent';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { proposalService } from '@/entities/proposal/services/proposalService';
import { routes } from '@/app/router/routes';
import { toMetaDescription } from '@/shared/seo/indexability';

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromParams(params);
  const baseMetadata = getMetadataForRoute(locale, 'PROPOSAL_ID', routes.PROPOSAL_ID(id));

  try {
    const proposal = await proposalService.getOne(id);
    if (proposal) {
      const description = toMetaDescription(proposal.description) ?? baseMetadata.description;
      return {
        ...baseMetadata,
        title: `${proposal.seller.name} | Shukayu`,
        description,
        openGraph: {
          ...baseMetadata.openGraph,
          title: proposal.seller.name,
          description,
        },
        twitter: {
          ...baseMetadata.twitter,
          title: proposal.seller.name,
          description,
        },
      };
    }
  } catch (error) {
    console.error('Failed to fetch proposal for metadata:', error);
  }

  return baseMetadata;
}

export default async function ProposalDetailPage({ params }: Props) {
  const { id } = await params;
  return <ProposalDetailContent id={id} />;
}
