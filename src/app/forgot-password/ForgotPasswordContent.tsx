'use client';

import Link from 'next/link';
import { routes } from '@/app/router/routes';
import { ForgotPasswordForm } from '@/features/auth';
import { useLingui } from '@lingui/react';

export default function ForgotPasswordContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Section - Form */}
        <div className="p-8 lg:p-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold text-card-foreground">
              {t('auth.forgotPassword.title')}
            </h1>
            <p className="text-muted-foreground">{t('auth.forgotPassword.subtitle')}</p>
          </div>

          <ForgotPasswordForm />

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              {t('auth.forgotPassword.rememberPassword')}
            </span>
            <Link href={routes.LOGIN} className="text-primary hover:underline font-medium">
              {t('auth.forgotPassword.loginLink')}
            </Link>
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="bg-gradient-primary p-8 lg:p-12 text-white flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">{t('auth.forgotPassword.info.title')}</h2>
              <p className="text-white/90 text-lg">{t('auth.forgotPassword.info.subtitle')}</p>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t('auth.forgotPassword.info.step1.title')}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t('auth.forgotPassword.info.step1.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t('auth.forgotPassword.info.step2.title')}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t('auth.forgotPassword.info.step2.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
