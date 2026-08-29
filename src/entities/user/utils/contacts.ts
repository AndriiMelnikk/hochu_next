import type { ContactChannel } from '../types/User';

export function normalizeContacts(data: unknown): Partial<Record<ContactChannel, string>> {
  if (!data) return {};

  if (Array.isArray(data)) {
    const result: Partial<Record<ContactChannel, string>> = {};
    for (const item of data) {
      if (!item || typeof item !== 'object') continue;
      const rec = item as Record<string, unknown>;
      const channel = String(rec.channel ?? rec.type ?? rec.key ?? rec.name ?? '');
      const value = rec.value ?? rec.url ?? rec.contact ?? rec.address;
      if (channel && typeof value === 'string' && value.trim()) {
        result[channel as ContactChannel] = value.trim();
      }
    }
    return result;
  }

  if (typeof data === 'object') {
    const rec = data as Record<string, unknown>;
    if (rec.contacts != null) return normalizeContacts(rec.contacts);
    if (Array.isArray(rec.results)) return normalizeContacts(rec.results);

    const result: Partial<Record<ContactChannel, string>> = {};
    for (const [key, value] of Object.entries(rec)) {
      if (typeof value === 'string' && value.trim()) {
        result[key as ContactChannel] = value.trim();
      }
    }
    return result;
  }

  return {};
}

export function hasFilledContacts(data: unknown): boolean {
  return Object.keys(normalizeContacts(data)).length > 0;
}
