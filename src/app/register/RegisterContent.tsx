"use client";

import Link from "next/link";
import { routes } from "@/app/router/routes";
import { RegisterForm } from "@/features/auth";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";

export default function RegisterContent() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Section - Form */}
          <div className="p-8 lg:p-12">
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-card-foreground">Реєстрація</h1>
              <p className="text-muted-foreground">
                Створіть акаунт, щоб почати користуватися платформою
              </p>
            </div>
            
            <RegisterForm />
            
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Вже є акаунт? </span>
              <Link href={routes.LOGIN} className="text-primary hover:underline font-medium">
                Увійти
              </Link>
            </div>
          </div>

          {/* Right Section - Info */}
          <div className="bg-gradient-primary p-8 lg:p-12 text-white flex flex-col justify-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Приєднуйтесь!</h2>
                <p className="text-white/90 text-lg">
                  Створіть акаунт та отримайте доступ до всіх можливостей
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Безкоштовний старт</h3>
                    <p className="text-white/80 text-sm">Публікуйте 3 запити без оплати</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Геймифікація</h3>
                    <p className="text-white/80 text-sm">Досягнення та бонуси за активність</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Прямий зв'язок</h3>
                    <p className="text-white/80 text-sm">Спілкуйтесь з виконавцями напряму</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
