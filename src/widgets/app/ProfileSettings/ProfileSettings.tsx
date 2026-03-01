import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Input } from '@shared/ui/input';
import { Label } from '@shared/ui/label';
import { Button } from '@shared/ui/button';
import { Switch } from '@shared/ui/switch';
import { Textarea } from '@shared/ui/textarea';
import { useToast } from '@shared/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { Badge } from '@shared/ui/badge';
import { Shield, AlertCircle, Lock } from 'lucide-react';

const ProfileSettings = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSaveProfile = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Профіль оновлено',
        description: 'Ваші зміни успішно збережені',
      });
    }, 1000);
  };

  const handleSaveNotifications = () => {
    toast({
      title: 'Налаштування збережені',
      description: 'Ваші налаштування сповіщень оновлені',
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
              <Label htmlFor="firstName">Ім&apos;я</Label>
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
            {loading ? 'Збереження...' : 'Зберегти зміни'}
          </Button>
        </CardContent>
      </Card>

      {/* Verification Section */}
      <Card className="relative overflow-hidden">
        <CardHeader className="opacity-50">
          <CardTitle>
            <p className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" /> Верифікація акаунту
            </p>
          </CardTitle>
          <CardDescription>Буде доступно пізніше</CardDescription>
        </CardHeader>
      </Card>

      {/* Налаштування сповіщень */}
      <Card className="relative overflow-hidden">
        <CardHeader className="opacity-50">
          <CardTitle>
            <p className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" /> Сповіщення
            </p>
          </CardTitle>
          <CardDescription>Буде доступно пізніше</CardDescription>
        </CardHeader>
      </Card>

      {/* Конфіденційність */}
      <Card>
        <CardHeader>
          <CardTitle>Конфіденційність та безпека</CardTitle>
          <CardDescription>Керуйте своїми даними та налаштуваннями безпеки</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="pt-4 space-y-4">
            <Button variant="outline">Змінити пароль</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
