import type { Messages } from '@lingui/core';

export const messages: Messages = {
  // Profiles
  'profile.profiles.title': 'My Profiles',
  'profile.profiles.description':
    'Switch between buyer and seller profiles. The current profile determines your rights on the platform.',
  'profile.profiles.createBuyer': 'Create a buyer profile',
  'profile.profiles.createSeller': 'Create a seller profile',
  'profile.profiles.switchSuccess': 'Profile switched successfully',
  'profile.profiles.switchError': 'Failed to switch profile',
  'profile.profiles.loadingError': 'An error occurred while loading profiles',
  'profile.profiles.currentBadge': 'Current',
  'profile.profiles.stats': 'Rating: {rating} • XP: {xp} • Deals: {deals}',
  'profile.type.buyer': 'Buyer',
  'profile.type.seller': 'Seller',
  'profile.create.title.buyer': 'Create a buyer profile',
  'profile.create.title.seller': 'Create a seller profile',
  'profile.create.description.buyer':
    'You will be able to use this profile to create requests and order services.',
  'profile.create.description.seller':
    'You will be able to use this profile to send proposals and complete orders.',
  'profile.create.namePlaceholder': 'Enter first name',
  'profile.create.lastNameLabel': 'Last name (optional)',
  'profile.create.lastNamePlaceholder': 'Enter last name',
  'profile.create.submit': 'Create',
  'profile.create.submitting': 'Creating...',
  'profile.create.success': '"{type}" profile created',
  'profile.create.error': 'Failed to create profile',

  // Profile Header & Tabs
  'profile.header.verified': 'Verified',
  'profile.header.joined': 'Joined on {date}',
  'profile.tabs.overview': 'Overview',
  'profile.tabs.profiles': 'Profiles',
  'profile.tabs.reviews': 'Reviews',
  'profile.tabs.settings': 'Settings',
  'profile.userNotFound': 'User not found',
  'profile.backToHome': 'Back to Home',
};
