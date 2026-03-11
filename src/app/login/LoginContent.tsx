'use client';

import Link from 'next/link';
import { routes } from '@/app/router/routes';
import { LoginForm } from '@/features/auth/ui/LoginForm';
import { toast } from 'sonner';

import { useLingui } from '@lingui/react';

export default function LoginContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  // const router = useRouter();
  // const { login } = useAuth();
  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: zodResolver(loginSchema),
  // });

  // const onSubmit = async (data: { email: string; password: string }) => {
  //   try {
  //     await login(data.email, data.password);
  //     router.push(routes.HOME);
  //   } catch (error: any) {
  //     let handledAsFieldError = false;

  //     if (error.response?.data) {
  //       const serverErrors = error.response.data.errors || error.response.data;
  //       if (typeof serverErrors === 'object') {
  //         Object.keys(serverErrors).forEach((key) => {
  //           if (['email', 'password'].includes(key)) {
  //             const message = Array.isArray(serverErrors[key]) ? serverErrors[key][0] : serverErrors[key];
  //             const errorMessage = typeof message === 'string' ? message : "Невалідні дані";

  //             toast.error(errorMessage);
  //             handledAsFieldError = true;
  //           }
  //         });
  //       }
  //     }

  //     if (!handledAsFieldError) {
  //       toast.error(error.friendlyMessage || "Сталася помилка при вході");
  //     }
  //   }
  // };

  // const onInvalid = (errors: any) => {
  //   Object.values(errors).forEach((error: any) => {
  //     if (error.message) {
  //       toast.error(error.message as string);
  //     }
  //   });
  // };

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Section - Form */}
        <div className="p-8 lg:p-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold text-card-foreground">{t('auth.login.title')}</h1>
            <p className="text-muted-foreground">{t('auth.login.subtitle')}</p>
          </div>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            <Link
              href={routes.FORGOT_PASSWORD}
              className="text-primary hover:underline font-medium"
            >
              {t('auth.login.forgotPassword')}
            </Link>
          </div>
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">{t('auth.login.noAccount')}</span>
            <Link href={routes.REGISTER} className="text-primary hover:underline font-medium">
              {t('auth.login.registerLink')}
            </Link>
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="bg-gradient-primary p-8 lg:p-12 text-white flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">{t('auth.login.info.title')}</h2>
              <p className="text-white/90 text-lg">{t('auth.login.info.subtitle')}</p>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t('auth.login.features.security.title')}
                  </h3>
                  <p className="text-white/80 text-sm">{t('auth.login.features.security.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {t('auth.login.features.verified.title')}
                  </h3>
                  <p className="text-white/80 text-sm">{t('auth.login.features.verified.desc')}</p>
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
                  <h3 className="font-semibold text-lg">{t('auth.login.features.fast.title')}</h3>
                  <p className="text-white/80 text-sm">{t('auth.login.features.fast.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
