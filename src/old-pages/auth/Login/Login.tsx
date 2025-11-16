import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card";
import Header from "@widgets/app/Header";
import { routes } from "@app/router/routes";
import { useAuth } from "@entities/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@entities/auth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await login(data.email, data.password);
      navigate(routes.HOME);
    } catch (error) {
      console.error("Login error:", error);
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
              <h1 className="text-3xl font-bold text-card-foreground">Вхід</h1>
              <p className="text-muted-foreground">
                Введіть свої дані для входу в акаунт
              </p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              <Button type="submit" className="w-full bg-gradient-primary">
                Увійти
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Ще не маєте акаунту? </span>
              <Link to={routes.REGISTER} className="text-primary hover:underline font-medium">
                Зареєструватись
              </Link>
            </div>
          </div>

          {/* Right Section - Info */}
          <div className="bg-gradient-primary p-8 lg:p-12 text-white flex flex-col justify-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Ласкаво просимо!</h2>
                <p className="text-white/90 text-lg">
                  Платформа для пошуку виконавців та замовників
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Безпечні угоди</h3>
                    <p className="text-white/80 text-sm">Захист ваших інтересів на кожному етапі</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Перевірені виконавці</h3>
                    <p className="text-white/80 text-sm">Працюйте з професіоналами з рейтингом</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Швидкий пошук</h3>
                    <p className="text-white/80 text-sm">Знаходьте виконавців за лічені хвилини</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

