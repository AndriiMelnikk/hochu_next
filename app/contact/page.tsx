"use client";

import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Контакти</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Зв'яжіться з нами</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>support@hochu.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+380 (44) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Київ, Україна</span>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Надішліть повідомлення</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ім'я</Label>
                  <Input id="name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div>
                  <Label htmlFor="message">Повідомлення</Label>
                  <Textarea id="message" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Відправити
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

