import { ACCEPTED_IMAGE_TYPES } from './const';

export type ImageUploadErrorCode = 'EMPTY_FILE' | 'INVALID_UPLOAD_URL' | 'UPLOAD_FAILED';

export class ImageUploadError extends Error {
  readonly code: ImageUploadErrorCode;

  constructor(code: ImageUploadErrorCode, message?: string) {
    super(message ?? code);
    this.name = 'ImageUploadError';
    this.code = code;
  }
}

export function getImageUploadErrorMessageKey(error: unknown): string {
  if (error instanceof ImageUploadError && error.code === 'EMPTY_FILE') {
    return 'request.create.filesEmptyError';
  }
  return 'request.create.filesUploadError';
}

const EXT_TO_MIME: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
  heic: 'image/heic',
  heif: 'image/heif',
};

const MIME_TO_EXT: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/heic': 'heic',
  'image/heif': 'heif',
};

const ACCEPTED_EXTENSIONS = new Set(Object.keys(EXT_TO_MIME));

function getFileExtension(name: string): string | null {
  const dot = name.lastIndexOf('.');
  if (dot <= 0) return null;
  return name.slice(dot + 1).toLowerCase();
}

/** iOS may send empty or generic MIME; fall back to file extension or allow backend magic-byte detection. */
export function isAcceptedImageFile(file: File): boolean {
  if (ACCEPTED_IMAGE_TYPES.includes(file.type)) return true;
  if (file.type === '' || file.type === 'application/octet-stream') {
    const ext = getFileExtension(file.name);
    if (ext !== null) return ACCEPTED_EXTENSIONS.has(ext);
    return true;
  }
  return false;
}

/**
 * Normalizes iOS uploads: adds missing extension, fixes generic MIME.
 * Throws when the file is empty (common with iCloud placeholders).
 */
export function normalizeImageFileForUpload(file: File): File {
  if (!file || file.size === 0) {
    throw new ImageUploadError('EMPTY_FILE');
  }

  let name = file.name;
  let type = file.type;
  const ext = getFileExtension(name);

  if (!ext && type && type !== 'application/octet-stream' && MIME_TO_EXT[type]) {
    name = `${name}.${MIME_TO_EXT[type]}`;
  } else if (!type || type === 'application/octet-stream') {
    if (ext) {
      type = EXT_TO_MIME[ext] ?? type;
    }
  }

  if (name === file.name && type === file.type) return file;
  return new File([file], name, { type, lastModified: file.lastModified });
}

/** Rejects API endpoint paths mistaken for uploaded image URLs. */
export function assertValidUploadedImageUrl(url: string): string {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new ImageUploadError('INVALID_UPLOAD_URL');
  }
  if (parsed.pathname.includes('/api/upload')) {
    throw new ImageUploadError('INVALID_UPLOAD_URL');
  }
  return url;
}
