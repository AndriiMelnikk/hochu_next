import { apiBaseUrl, LS_KEYS } from '@shared/config/envVars';
import {
  assertValidUploadedImageUrl,
  ImageUploadError,
  normalizeImageFileForUpload,
} from '@shared/utils';

function getUploadHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (typeof window === 'undefined') return headers;

  const token = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
  if (token) headers.Authorization = `Bearer ${token}`;
  headers['Accept-Language'] = localStorage.getItem(LS_KEYS.LOCALE) || 'uk';
  return headers;
}

function createUploadFormData(file: File): { formData: FormData; normalized: File } {
  const normalized = normalizeImageFileForUpload(file);
  const filename = normalized.name || 'photo.jpg';
  const formData = new FormData();
  formData.append('file', normalized, filename);

  if (process.env.NODE_ENV === 'development') {
    console.log('[upload] file:', {
      name: normalized.name,
      size: normalized.size,
      type: normalized.type,
      filename,
    });
    for (const [key, value] of formData.entries()) {
      console.log(
        '[upload] formData',
        key,
        value instanceof File ? `File(${value.size}b)` : value,
      );
    }
  }

  return { formData, normalized };
}

async function parseUploadResponse(response: Response): Promise<string> {
  const data: { url?: string; path?: string; error?: { message?: string }; message?: string } | null =
    await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      data?.error?.message ??
      data?.message ??
      `Upload failed (${response.status})`;
    throw new ImageUploadError('UPLOAD_FAILED', message);
  }

  if (typeof data === 'string') return assertValidUploadedImageUrl(data);
  const url = data?.url ?? data?.path;
  if (typeof url !== 'string') {
    throw new ImageUploadError('UPLOAD_FAILED', 'Upload response missing url');
  }
  return assertValidUploadedImageUrl(url);
}

async function refreshAccessToken(): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  const refreshToken = localStorage.getItem(LS_KEYS.REFRESH_TOKEN);
  if (!refreshToken) return false;

  const response = await fetch(`${apiBaseUrl}/api/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!response.ok) return false;

  const tokens: { access_token: string; refresh_token: string } = await response.json();
  localStorage.setItem(LS_KEYS.ACCESS_TOKEN, tokens.access_token);
  localStorage.setItem(LS_KEYS.REFRESH_TOKEN, tokens.refresh_token);
  return true;
}

/**
 * Uploads a file via fetch + FormData (Safari-safe: no manual Content-Type, explicit filename).
 * Recreates FormData on 401 retry so the body is never sent empty.
 */
export async function uploadFile(endpoint: string, file: File): Promise<string> {
  const { normalized } = createUploadFormData(file);
  const filename = normalized.name || 'photo.jpg';

  const send = () => {
    const formData = new FormData();
    formData.append('file', normalized, filename);
    return fetch(`${apiBaseUrl}${endpoint}`, {
      method: 'POST',
      headers: getUploadHeaders(),
      body: formData,
    });
  };

  let response = await send();

  if (response.status === 401) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      response = await send();
    }
  }

  return parseUploadResponse(response);
}
