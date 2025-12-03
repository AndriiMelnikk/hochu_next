"use client";

import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card";
import { Checkbox } from "@shared/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { routes } from "@/app/router/routes";
import { useAuth } from "@/entities/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/entities/auth";

export default function RegisterPage() {
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const password = watch("password");

  const onSubmit = async (data: { name: string; email: string; password: string }) => {
    try {
      await registerUser(data.email, data.password, data.name);
      router.push(routes.HOME);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

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
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ім'я</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ваше ім'я"
                  {...register("name")}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message as string}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message as string}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                />
                {errors.password && <p className="text-sm text-red-500">{errors.password.message as string}</p>}
              </div>
              <Button type="submit" variant="gradient" className="w-full">
                Зареєструватися
              </Button>
            </form>
            
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

