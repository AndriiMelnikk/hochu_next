import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertCircle } from "lucide-react";

const ProfileSettings = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSaveProfile = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Профіль оновлено",
        description: "Ваші зміни успішно збережені",
      });
    }, 1000);
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Налаштування збережені",
      description: "Ваші налаштування сповіщень оновлені",
    });
  };

  return (
    <div className="space-y-6">
      {/* Особиста інформація */}
      <Card>
        <CardHeader>
          <CardTitle>Особиста інформація</CardTitle>
          <CardDescription>Оновіть свої особисті дані та контактну інформацію</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Ім'я</Label>
              <Input id="firstName" defaultValue="Олександр" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Прізвище</Label>
              <Input id="lastName" defaultValue="Коваленко" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="oleksandr@example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" type="tel" defaultValue="+380 67 123 4567" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Місто</Label>
            <Input id="location" defaultValue="Київ" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Про себе</Label>
            <Textarea 
              id="bio" 
              placeholder="Розкажіть трохи про себе..."
              defaultValue="Шукаю якісну техніку за доступними цінами. Надійний покупець з гарною історією угод."
              rows={4}
            />
          </div>
          
          <Button onClick={handleSaveProfile} disabled={loading}>
            {loading ? "Збереження..." : "Зберегти зміни"}
          </Button>
        </CardContent>
      </Card>

      {/* Verification Section */}
      <Card>
        <CardHeader>
          <CardTitle>Верифікація акаунту</CardTitle>
          <CardDescription>Підтвердіть свій номер телефону для підвищення довіри</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Статус верифікації</p>
                <p className="text-sm text-muted-foreground">+380 67 123 4567</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
              Не підтверджено
            </Badge>
          </div>

          <div className="space-y-2">
            <Label htmlFor="verifyPhone">Номер телефону для верифікації</Label>
            <div className="flex gap-2">
              <Input 
                id="verifyPhone" 
                type="tel" 
                placeholder="+380 XX XXX XXXX"
                defaultValue="+380 67 123 4567"
              />
              <Button onClick={() => {
                toast({
                  title: "Код відправлено",
                  description: "Перевірте SMS повідомлення",
                });
              }}>
                Надіслати код
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="verifyCode">Код підтвердження</Label>
            <div className="flex gap-2">
              <Input 
                id="verifyCode" 
                type="text" 
                placeholder="Введіть 6-значний код"
                maxLength={6}
              />
              <Button variant="default" onClick={() => {
                toast({
                  title: "Номер підтверджено!",
                  description: "Ваш акаунт успішно верифіковано",
                });
              }}>
                Підтвердити
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              Верифіковані користувачі отримують значок довіри в профілі та мають перевагу при виборі виконавців.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Налаштування сповіщень */}
      <Card>
        <CardHeader>
          <CardTitle>Сповіщення</CardTitle>
          <CardDescription>Налаштуйте, як ви хочете отримувати сповіщення</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="emailNotif">Email сповіщення</Label>
              <p className="text-sm text-muted-foreground">
                Отримувати сповіщення на email
              </p>
            </div>
            <Switch id="emailNotif" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="pushNotif">Push-сповіщення</Label>
              <p className="text-sm text-muted-foreground">
                Отримувати сповіщення в браузері
              </p>
            </div>
            <Switch id="pushNotif" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="newProposal">Нові пропозиції</Label>
              <p className="text-sm text-muted-foreground">
                Сповіщення про нові відповіді на запити
              </p>
            </div>
            <Switch id="newProposal" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="messages">Повідомлення</Label>
              <p className="text-sm text-muted-foreground">
                Сповіщення про нові повідомлення
              </p>
            </div>
            <Switch id="messages" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="newsletter">Новини платформи</Label>
              <p className="text-sm text-muted-foreground">
                Отримувати новини та оновлення
              </p>
            </div>
            <Switch id="newsletter" />
          </div>
          
          <Button onClick={handleSaveNotifications}>
            Зберегти налаштування
          </Button>
        </CardContent>
      </Card>

      {/* Конфіденційність */}
      <Card>
        <CardHeader>
          <CardTitle>Конфіденційність та безпека</CardTitle>
          <CardDescription>Керуйте своїми даними та налаштуваннями безпеки</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="profileVisible">Публічний профіль</Label>
              <p className="text-sm text-muted-foreground">
                Зробити профіль видимим для інших користувачів
              </p>
            </div>
            <Switch id="profileVisible" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="showRating">Показувати рейтинг</Label>
              <p className="text-sm text-muted-foreground">
                Відображати ваш рейтинг у профілі
              </p>
            </div>
            <Switch id="showRating" defaultChecked />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="privacy">Хто може бачити вашу активність</Label>
            <Select defaultValue="all">
              <SelectTrigger id="privacy">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Всі користувачі</SelectItem>
                <SelectItem value="verified">Тільки верифіковані</SelectItem>
                <SelectItem value="none">Ніхто</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="pt-4 space-y-4">
            <Button variant="outline" className="w-full">
              Змінити пароль
            </Button>
            <Button variant="outline" className="w-full">
              Завантажити мої дані
            </Button>
            <Button variant="destructive" className="w-full">
              Видалити акаунт
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
