import { useState } from 'react';
import { DollarSign, Send, Upload, AlertCircle } from 'lucide-react';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Textarea } from '@shared/ui/textarea';
import { Label } from '@shared/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';

interface CreateProposalFormProps {
  budget: string;
  requestId: string;
}

export const CreateProposalForm = ({ budget, requestId }: CreateProposalFormProps) => {
  const [proposalText, setProposalText] = useState('');
  const [proposalPrice, setProposalPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [warranty, setWarranty] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Proposal submitted:', {
      requestId,
      price: proposalPrice,
      description: proposalText,
      deliveryTime,
      warranty,
    });
    // TODO: Add API call
  };

  return (
    <div className="bg-gradient-primary rounded-2xl p-1 shadow-lg">
      <div className="bg-card rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <Send className="h-6 w-6 mr-2 text-primary" />
          Створити пропозицію
        </h2>
        <p className="text-muted-foreground mb-6">
          Запропонуйте своє рішення та виграйте цей запит
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="proposal-price" className="text-base font-semibold flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-primary" />
              Ваша ціна (грн)
            </Label>
            <Input
              id="proposal-price"
              type="number"
              placeholder={`Бюджет замовника: ${budget}`}
              value={proposalPrice}
              onChange={(e) => setProposalPrice(e.target.value)}
              className="text-base"
            />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="proposal-title" className="text-base font-semibold">
              Заголовок пропозиції
            </Label>
            <Input
              id="proposal-title"
              placeholder="Наприклад: MacBook Pro 2019 - Професійний ремонт з гарантією"
              className="text-base"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="proposal-description" className="text-base font-semibold">
              Детальний опис
            </Label>
            <Textarea
              id="proposal-description"
              placeholder="Опишіть що саме ви пропонуєте, ваш досвід, терміни виконання, умови..."
              rows={8}
              value={proposalText}
              onChange={(e) => setProposalText(e.target.value)}
              className="text-base"
            />
            <p className="text-sm text-muted-foreground">{proposalText.length} символів</p>
          </div>

          {/* Delivery details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="delivery-time" className="text-base font-semibold">
                Термін виконання
              </Label>
              <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                <SelectTrigger id="delivery-time" className="text-base">
                  <SelectValue placeholder="Оберіть термін" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">1-2 дні</SelectItem>
                  <SelectItem value="3-5">3-5 днів</SelectItem>
                  <SelectItem value="week">Тиждень</SelectItem>
                  <SelectItem value="2-weeks">2 тижні</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="warranty" className="text-base font-semibold">
                Гарантія
              </Label>
              <Select value={warranty} onValueChange={setWarranty}>
                <SelectTrigger id="warranty" className="text-base">
                  <SelectValue placeholder="Оберіть гарантію" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Без гарантії</SelectItem>
                  <SelectItem value="1m">1 місяць</SelectItem>
                  <SelectItem value="3m">3 місяці</SelectItem>
                  <SelectItem value="6m">6 місяців</SelectItem>
                  <SelectItem value="1y">1 рік</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-2">
            <Label htmlFor="proposal-images" className="text-base font-semibold flex items-center">
              <Upload className="h-4 w-4 mr-1 text-primary" />
              Фото ваших робіт
            </Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">
                Перетягніть файли або натисніть для вибору
              </p>
              <p className="text-xs text-muted-foreground">До 5 фото, макс. 10MB кожне</p>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-accent/30 rounded-lg p-4 border border-accent flex items-start">
            <AlertCircle className="h-5 w-5 text-accent-foreground mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-accent-foreground">
              <p className="font-semibold mb-1">Важлива інформація:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Чітко опишіть що ви пропонуєте</li>
                <li>Вкажіть реальні терміни виконання</li>
                <li>Додайте фото ваших попередніх робіт</li>
                <li>Будьте чесні щодо гарантій та умов</li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" variant="gradient" className="w-full text-lg shadow-glow">
            <Send className="mr-2 h-5 w-5" />
            Надіслати пропозицію
          </Button>
        </form>
      </div>
    </div>
  );
};
