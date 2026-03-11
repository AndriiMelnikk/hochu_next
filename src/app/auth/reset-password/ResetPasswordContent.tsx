'use client';

import Link from 'next/link';
import { routes } from '@/app/router/routes';
import { ResetPasswordForm } from '@/features/auth';
import { useLingui } from '@lingui/react';

interface ResetPasswordContentProps {
  token: string | null;
}

export default function ResetPasswordContent({ token }: ResetPasswordContentProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  if (!token) {
    return (
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-md mx-auto bg-card rounded-3xl shadow-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-card-foreground mb-4">
            {t('auth.resetPassword.noToken.title')}
          </h1>
          <p className="text-muted-foreground mb-6">{t('auth.resetPassword.noToken.subtitle')}</p>
          <Link href={routes.FORGOT_PASSWORD} className="text-primary hover:underline font-medium">
            {t('auth.resetPassword.noToken.requestLink')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Section - Form */}
        <div className="p-8 lg:p-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold text-card-foreground">
              {t('auth.resetPassword.title')}
            </h1>
            <p className="text-muted-foreground">{t('auth.resetPassword.subtitle')}</p>
          </div>

          <ResetPasswordForm token={token} />

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              {t('auth.resetPassword.rememberPassword')}
            </span>
            <Link href={routes.LOGIN} className="text-primary hover:underline font-medium">
              {t('auth.resetPassword.loginLink')}
            </Link>
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="bg-gradient-primary p-8 lg:p-12 text-white flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">{t('auth.resetPassword.info.title')}</h2>
              <p className="text-white/90 text-lg">{t('auth.resetPassword.info.subtitle')}</p>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t('auth.resetPassword.info.security.title')}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {t('auth.resetPassword.info.security.desc')}
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
