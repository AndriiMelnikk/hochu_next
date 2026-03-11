import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import ResetPasswordContent from './ResetPasswordContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'RESET_PASSWORD');
}

type PageProps = {
  searchParams: Promise<{ token?: string }>;
};

export default async function ResetPasswordPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const token = params.token ?? null;
  return <ResetPasswordContent token={token} />;
}
