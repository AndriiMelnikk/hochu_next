import type { IRequest } from '@/entities/request';

type T = (id: string, values?: Record<string, string | number>) => string;

const nf = (locale: string) => new Intl.NumberFormat(locale === 'uk' ? 'uk-UA' : 'en-US');

/** Єдиний формат бюджету для картки, сторінки запиту та бічної панелі. */
export function formatBudget(
  request: Pick<IRequest, 'budgetMin' | 'budgetMax'>,
  t: T,
  locale: string,
): string {
  const min = request.budgetMin || 0;
  const max = request.budgetMax || 0;
  const fmt = nf(locale);
  if (min > 0 && max > 0)
    return t('request.budget.range', { min: fmt.format(min), max: fmt.format(max) });
  if (min > 0) return t('request.budget.from', { amount: fmt.format(min) });
  if (max > 0) return t('request.budget.to', { amount: fmt.format(max) });
  return t('request.detail.budgetNotSpecified');
}
