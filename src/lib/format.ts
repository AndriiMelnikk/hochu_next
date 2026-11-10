/** Спільні форматувальники: локаль → Intl, безпечні для порожніх значень. */

export const intlLocale = (locale: string) => (locale === 'uk' ? 'uk-UA' : 'en-US');

export function formatMoney(value: number | string | null | undefined, locale: string): string {
  const n = Number(value);
  if (value === null || value === undefined || value === '' || !Number.isFinite(n)) return '—';
  return new Intl.NumberFormat(intlLocale(locale), {
    style: 'currency',
    currency: 'UAH',
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatDate(
  value: string | number | Date | null | undefined,
  locale: string,
  options?: Intl.DateTimeFormatOptions,
): string {
  if (!value) return '—';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '—';
  return new Intl.DateTimeFormat(intlLocale(locale), { timeZone: 'UTC', ...options }).format(d);
}

export function formatDateTime(value: string | number | Date | null | undefined, locale: string) {
  return formatDate(value, locale, {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: undefined,
  });
}

/** Ініціали з графем: перша літера першого й останнього слова; запасний варіант — «?». */
export function getInitials(name: string | null | undefined): string {
  const words = (name ?? '').trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  const seg =
    typeof Intl !== 'undefined' && 'Segmenter' in Intl
      ? new Intl.Segmenter(undefined, { granularity: 'grapheme' })
      : null;
  const first = (w: string) =>
    seg ? (Array.from(seg.segment(w))[0]?.segment ?? '') : (Array.from(w)[0] ?? '');
  const picked = words.length === 1 ? [words[0]] : [words[0], words[words.length - 1]];
  return picked.map(first).join('').toUpperCase();
}

/** Склеює ім'я та прізвище, пропускаючи порожні частини. */
export function joinName(...parts: Array<string | null | undefined>): string {
  return parts
    .map((p) => (p ?? '').trim())
    .filter(Boolean)
    .join(' ');
}
