export const PROFILE_TAB = {
  OVERVIEW: 'overview',
  NOTIFICATIONS: 'notifications',
  PROFILES: 'profiles',
  REVIEWS: 'reviews',
  SETTINGS: 'settings',
} as const;

export const PROFILE_HASH = {
  CONTACTS: 'contacts',
} as const;

export type ProfileTabId = (typeof PROFILE_TAB)[keyof typeof PROFILE_TAB];

export const OWNER_PROFILE_TABS: ProfileTabId[] = [
  PROFILE_TAB.OVERVIEW,
  PROFILE_TAB.NOTIFICATIONS,
  PROFILE_TAB.PROFILES,
  PROFILE_TAB.REVIEWS,
  PROFILE_TAB.SETTINGS,
];

export const GUEST_PROFILE_TABS: ProfileTabId[] = [PROFILE_TAB.OVERVIEW, PROFILE_TAB.REVIEWS];

const HASH_TO_TAB: Record<string, ProfileTabId> = {
  [PROFILE_HASH.CONTACTS]: PROFILE_TAB.SETTINGS,
};

export function resolveProfileTab(hash: string, isOwner: boolean): ProfileTabId {
  const value = hash.replace(/^#/, '');
  const mapped = HASH_TO_TAB[value] ?? value;
  const tabs = isOwner ? OWNER_PROFILE_TABS : GUEST_PROFILE_TABS;
  return tabs.includes(mapped as ProfileTabId) ? (mapped as ProfileTabId) : tabs[0];
}

export function syncProfileTabHash(tab: ProfileTabId) {
  const current = window.location.hash.replace(/^#/, '');
  if (HASH_TO_TAB[current] === tab) return;
  const nextHash = `#${tab}`;
  if (window.location.hash !== nextHash) {
    window.history.replaceState(null, '', nextHash);
  }
}
