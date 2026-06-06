// Shared constants
export const MAX_IMAGES = 10;
export const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/heic',
  'image/heif',
];
/** Value for `<input accept>` — includes extensions for iOS HEIC picker. */
export const ACCEPTED_IMAGE_ACCEPT_ATTR = [...ACCEPTED_IMAGE_TYPES, '.heic', '.heif'].join(',');
