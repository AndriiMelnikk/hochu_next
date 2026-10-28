import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { RETURN_URL_PARAM } from '@/features/auth';
import LoginContent from './LoginContent';

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'LOGIN');
}

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined): string | null {
  return (Array.isArray(value) ? value[0] : value) ?? null;
}

export default async function LoginPage({ searchParams }: PageProps) {
  const query = await searchParams;
  return <LoginContent returnUrl={first(query[RETURN_URL_PARAM])} error={first(query.error)} />;
}
