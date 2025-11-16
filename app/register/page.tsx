"use client";

import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { routes } from "@/app/router/routes";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12 flex items-center justify-center">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Реєстрація</h1>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Ім'я</Label>
              <Input id="name" type="text" placeholder="Ваше ім'я" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Зареєструватися
            </Button>
          </form>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            Вже є акаунт?{" "}
            <Link href={routes.LOGIN} className="text-primary hover:underline">
              Увійти
            </Link>
          </p>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

