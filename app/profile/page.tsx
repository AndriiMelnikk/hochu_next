"use client";

import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Профіль</h1>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Огляд</TabsTrigger>
              <TabsTrigger value="settings">Налаштування</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card className="p-6">
                <p className="text-muted-foreground">Інформація про профіль</p>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card className="p-6">
                <p className="text-muted-foreground">Налаштування профілю</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}

