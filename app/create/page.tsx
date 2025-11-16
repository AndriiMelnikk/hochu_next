"use client";

import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function CreateRequestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold mb-8">Створити запит</h1>
          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <Label htmlFor="title">Назва запиту</Label>
                <Input id="title" placeholder="Що вам потрібно?" />
              </div>
              <div>
                <Label htmlFor="description">Опис</Label>
                <Textarea id="description" placeholder="Детальний опис..." rows={6} />
              </div>
              <div>
                <Label htmlFor="category">Категорія</Label>
                <Input id="category" placeholder="Категорія" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budgetMin">Бюджет від</Label>
                  <Input id="budgetMin" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="budgetMax">Бюджет до</Label>
                  <Input id="budgetMax" type="number" placeholder="0" />
                </div>
              </div>
              <div>
                <Label htmlFor="location">Локація</Label>
                <Input id="location" placeholder="Місто або віддалено" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Створити запит
              </Button>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

