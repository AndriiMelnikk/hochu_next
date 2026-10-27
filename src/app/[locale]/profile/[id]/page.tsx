import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { routes } from '@/app/router/routes';
import ProfileContent from './ProfileContent';
import { Loading } from '@/shared/ui/loading';
import { userService, type IProfile } from '@/entities/user';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getProfilePageJsonLd } from '@/shared/seo/schemas';
import { isIndexableProfile, isNotFoundError } from '@/shared/seo/indexability';
import { siteUrl } from '@/shared/config/envVars';

type Props = {
  params: Promise<{ id: string }>;
};

type ProfileLookup =
  | { state: 'found'; profile: IProfile }
  | { state: 'missing' }
  | { state: 'error' };

const getProfile = cache(async (id: string): Promise<ProfileLookup> => {
  try {
    return { state: 'found', profile: await userService.get(id) };
  } catch (error) {
    if (isNotFoundError(error)) return { state: 'missing' };
    console.error('Failed to fetch profile:', error);
    return { state: 'error' };
  }
});

function getDisplayName(profile: IProfile): string {
  return [profile.name, profile.lastName].filter(Boolean).join(' ').trim();
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  const baseMetadata = getMetadataForRoute(locale, 'PROFILE_BY_ID', routes.PROFILE_BY_ID(id));

  const lookup = await getProfile(id);
  if (lookup.state === 'missing') {
    return { ...baseMetadata, robots: { index: false, follow: false } };
  }
  if (lookup.state === 'error') return baseMetadata;

  const { profile } = lookup;
  const name = getDisplayName(profile);
  if (!name) return baseMetadata;

  const isSeller = profile.type === 'seller';
  const title =
    locale === 'en'
      ? `${name} — ${isSeller ? 'seller' : 'buyer'} profile | Shukayu`
      : `${name} — профіль ${isSeller ? 'продавця' : 'покупця'} | Shukayu`;

  const details: string[] = [];
  if (profile.location) details.push(profile.location);
  if (profile.reviewsCount) {
    details.push(
      locale === 'en' ? `${profile.reviewsCount} reviews` : `відгуків: ${profile.reviewsCount}`,
    );
  }
  if (profile.completedDeals) {
    details.push(
      locale === 'en'
        ? `${profile.completedDeals} completed deals`
        : `завершених угод: ${profile.completedDeals}`,
    );
  }
  const description =
    locale === 'en'
      ? `${name} on Shukayu.${details.length ? ` ${details.join(', ')}.` : ''} View reputation, reviews and requests.`
      : `${name} на Shukayu.${details.length ? ` ${details.join(', ')}.` : ''} Репутація, відгуки та запити користувача.`;

  return {
    ...baseMetadata,
    title,
    description,
    // Порожні/нові профілі не індексуємо, щоб не створювати тонкий контент
    robots: isIndexableProfile(profile) ? baseMetadata.robots : { index: false, follow: true },
    openGraph: { ...baseMetadata.openGraph, type: 'profile', title, description },
    twitter: { ...baseMetadata.twitter, title, description },
  };
}

export default async function ProfileIdPage({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  const lookup = await getProfile(id);
  if (lookup.state === 'missing') notFound();

  const profile = lookup.state === 'found' ? lookup.profile : undefined;
  const name = profile ? getDisplayName(profile) : '';

  return (
    <>
      {profile && name && isIndexableProfile(profile) && (
        <JsonLd
          data={getProfilePageJsonLd({
            name,
            url: `${siteUrl}/${locale}${routes.PROFILE_BY_ID(id)}`,
            image: profile.avatar,
            location: profile.location,
            rating: profile.rating,
            reviewsCount: profile.reviewsCount,
            memberSince: profile.memberSince ?? profile.createdAt,
            locale,
          })}
        />
      )}
      <Suspense fallback={<Loading variant="block" />}>
        <ProfileContent initialData={profile} />
      </Suspense>
    </>
  );
}
