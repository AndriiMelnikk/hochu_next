import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";
import RequestDetailContent from "./RequestDetailContent";
import { requestService } from "@/entities/request/services/requestService";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  const baseMetadata = getMetadataForRoute(locale, 'REQUEST_ID');

  try {
    const request = await requestService.getOne(id);
    if (request) {
      return {
        ...baseMetadata,
        title: `${request.title} | Hochu`,
        description: request.description?.slice(0, 160),
        openGraph: {
          title: request.title,
          description: request.description?.slice(0, 160),
        },
      };
    }
  } catch (error) {
    console.error("Failed to fetch request for metadata:", error);
  }

  return baseMetadata;
}

export default async function RequestDetailPage({ params }: Props) {
  const { id } = await params;
  return <RequestDetailContent id={id} />;
}
