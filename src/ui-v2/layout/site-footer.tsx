'use client';

import { useLingui } from '@lingui/react';

import { routes } from '@app/router/routes';
import Link from '@/shared/ui/link';

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/shukayu.com.ua/', label: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=61557142326871', label: 'Facebook' },
  { href: 'https://www.tiktok.com/@shukayu.com.ua', label: 'TikTok' },
] as const;

/** Мінімальна зона натискання 44px (WCAG 2.5.5) */
const linkClass =
  'inline-flex min-h-11 items-center text-sm font-[450] text-v2-secondary transition-colors hover:text-v2-ink hover:underline underline-offset-4';

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-2 text-sm font-semibold text-v2-ink">{title}</h2>
      <ul>{children}</ul>
    </div>
  );
}

/** Футер сайту: бренд, три колонки посилань, копірайт. */
export function SiteFooter() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const wikiHref =
    i18n.locale === 'uk'
      ? 'https://uk.wikipedia.org/wiki/%D0%97%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%B9_%D0%B0%D1%83%D0%BA%D1%86%D1%96%D0%BE%D0%BD'
      : 'https://en.wikipedia.org/wiki/Reverse_auction';

  return (
    <footer className="ui-v2 border-t border-v2-border bg-v2-surface-subtle">
      <div className="mx-auto max-w-[1240px] px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 text-2xl font-semibold tracking-tight text-v2-primary">
              Shukayu
            </div>
            <p className="max-w-xs text-sm text-v2-muted">{t('common.footer.brandDescription')}</p>
            <p className="mt-4 text-sm font-semibold">{t('common.footer.social')}</p>
            <ul className="flex flex-wrap gap-x-4">
              {SOCIAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer me" className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Column title={t('common.footer.section.platform')}>
            <li>
              <Link href={routes.REQUEST} className={linkClass}>
                {t('common.nav.viewRequests')}
              </Link>
            </li>
            <li>
              <Link href={routes.CREATE} className={linkClass}>
                {t('common.nav.createRequest')}
              </Link>
            </li>
            <li>
              <Link href={routes.HOW_IT_WORKS} className={linkClass}>
                {t('common.nav.howItWorks')}
              </Link>
            </li>
          </Column>

          <Column title={t('common.footer.section.company')}>
            <li>
              <Link href={routes.ABOUT} className={linkClass}>
                {t('common.footer.about')}
              </Link>
            </li>
            <li>
              <Link href={routes.CONTACT} className={linkClass}>
                {t('common.footer.contact')}
              </Link>
            </li>
          </Column>

          <Column title={t('common.footer.section.legal')}>
            <li>
              <Link href={routes.TERMS} className={linkClass}>
                {t('common.footer.terms')}
              </Link>
            </li>
            <li>
              <Link href={routes.PRIVACY} className={linkClass}>
                {t('common.footer.privacy')}
              </Link>
            </li>
            <li>
              <Link href={routes.SUPPORT} className={linkClass}>
                {t('common.footer.support')}
              </Link>
            </li>
          </Column>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-v2-border pt-6 md:flex-row">
          <p className="text-sm text-v2-muted">{t('common.footer.copyright')}</p>
          <p className="text-center text-sm text-v2-muted md:text-right">
            {t('common.footer.externalPrefix')}{' '}
            <a
              href={wikiHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-semibold text-v2-primary underline underline-offset-4"
            >
              {t('common.footer.externalLink')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
