'use client';

import Link from '@/shared/ui/link';
import { routes } from '@app/router/routes';
import { useLingui } from '@lingui/react';

const Footer = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Shukayu
            </div>
            <p className="text-muted-foreground text-sm">{t('common.footer.brandDescription')}</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('common.footer.section.platform')}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={routes.REQUEST} className="hover:text-primary transition-colors">
                  {t('common.nav.viewRequests')}
                </Link>
              </li>
              <li>
                <Link href={routes.CREATE} className="hover:text-primary transition-colors">
                  {t('common.nav.createRequest')}
                </Link>
              </li>
              <li>
                <Link href={routes.HOW_IT_WORKS} className="hover:text-primary transition-colors">
                  {t('common.nav.howItWorks')}
                </Link>
              </li>
              {/* <li><Link href={routes.PRICING} className="hover:text-primary transition-colors">Ціни</Link></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('common.footer.section.company')}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={routes.ABOUT} className="hover:text-primary transition-colors">
                  {t('common.footer.about')}
                </Link>
              </li>
              {/* <li><Link href={routes.BLOG} className="hover:text-primary transition-colors">Блог</Link></li> */}
              <li>
                <Link href={routes.CONTACT} className="hover:text-primary transition-colors">
                  {t('common.footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('common.footer.section.legal')}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={routes.TERMS} className="hover:text-primary transition-colors">
                  {t('common.footer.terms')}
                </Link>
              </li>
              <li>
                <Link href={routes.PRIVACY} className="hover:text-primary transition-colors">
                  {t('common.footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href={routes.SUPPORT} className="hover:text-primary transition-colors">
                  {t('common.footer.support')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm mb-0">{t('common.footer.copyright')}</p>
          <p className="text-muted-foreground text-sm text-center md:text-right">
            {t('common.footer.externalPrefix')}{' '}
            <a
              href={
                i18n.locale === 'uk'
                  ? 'https://uk.wikipedia.org/wiki/%D0%97%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%B9_%D0%B0%D1%83%D0%BA%D1%86%D1%96%D0%BE%D0%BD'
                  : 'https://en.wikipedia.org/wiki/Reverse_auction'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-2"
            >
              {t('common.footer.externalLink')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
