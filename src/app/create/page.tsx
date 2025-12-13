"use client";

import { useState } from "react";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Textarea } from "@shared/ui/textarea";
import { Label } from "@shared/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/ui/select";
import { FileText, DollarSign, MapPin, Clock, Upload } from "lucide-react";

export default function CreateRequestPage() {
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Створити <span className="bg-gradient-primary bg-clip-text text-transparent">запит</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Опишіть що вам потрібно, і отримайте пропозиції від професіоналів
            </p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
            <form className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-semibold flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Заголовок запиту
                </Label>
                <Input 
                  id="title"
                  placeholder="Наприклад: Шукаю веб-дизайнера для створення лендінгу"
                  className="text-base"
                />
                <p className="text-sm text-muted-foreground">
                  Стисло опишіть що вам потрібно
                </p>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-base font-semibold">
                  Категорія
                </Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category" className="text-base">
                    <SelectValue placeholder="Оберіть категорію" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Електроніка</SelectItem>
                    <SelectItem value="design">Дизайн</SelectItem>
                    <SelectItem value="development">Розробка</SelectItem>
                    <SelectItem value="education">Освіта</SelectItem>
                    <SelectItem value="construction">Будівництво</SelectItem>
                    <SelectItem value="services">Послуги</SelectItem>
                    <SelectItem value="other">Інше</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-semibold">
                  Детальний опис
                </Label>
                <Textarea 
                  id="description"
                  placeholder="Опишіть детально що вам потрібно, які є вимоги та очікування..."
                  rows={6}
                  className="text-base"
                />
              </div>

              {/* Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget-min" className="text-base font-semibold flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-primary" />
                    Бюджет від (грн)
                  </Label>
                  <Input 
                    id="budget-min"
                    type="number"
                    placeholder="0"
                    className="text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget-max" className="text-base font-semibold">
                    Бюджет до (грн)
                  </Label>
                  <Input 
                    id="budget-max"
                    type="number"
                    placeholder="10000"
                    className="text-base"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-base font-semibold flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-secondary" />
                  Локація
                </Label>
                <Input 
                  id="location"
                  placeholder="Місто або 'Віддалено'"
                  className="text-base"
                />
              </div>

              {/* Urgency */}
              <div className="space-y-2">
                <Label htmlFor="urgency" className="text-base font-semibold flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Терміновість
                </Label>
                <Select value={urgency} onValueChange={setUrgency}>
                  <SelectTrigger id="urgency" className="text-base">
                    <SelectValue placeholder="Оберіть терміновість" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flexible">Гнучко (не терміново)</SelectItem>
                    <SelectItem value="week">Протягом тижня</SelectItem>
                    <SelectItem value="days">2-3 дні</SelectItem>
                    <SelectItem value="urgent">Терміново (сьогодні-завтра)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="files" className="text-base font-semibold flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-primary" />
                  Додати файли
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Перетягніть файли сюди або натисніть для вибору</p>
                  <p className="text-sm text-muted-foreground">Фото, документи (до 5 файлів, макс. 10MB кожен)</p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="gradient"
                  className="flex-1 text-lg shadow-glow"
                >
                  Опублікувати запит
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="lg"
                  className="sm:w-auto"
                >
                  Зберегти як чернетку
                </Button>
              </div>

              {/* Info */}
              <div className="bg-accent/30 rounded-lg p-4 border border-accent">
                <p className="text-sm text-accent-foreground">
                  <strong>Підказка:</strong> Чим детальніше ви опишете свій запит, тим більше якісних пропозицій отримаєте. Вкажіть всі важливі деталі та очікування.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

