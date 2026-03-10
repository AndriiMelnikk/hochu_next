'use client';

import Link from 'next/link';
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
              Hochu
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
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            {t('common.footer.copyright')}
          </p>

          {/* TODO: add social media links */}

          {/* <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
