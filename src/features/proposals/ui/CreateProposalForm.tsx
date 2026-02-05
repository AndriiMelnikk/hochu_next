'use client';

import { useState } from 'react';
import { DollarSign, Send, Upload, AlertCircle } from 'lucide-react';
import { useLingui } from '@lingui/react';
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
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

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
          {t('proposal.create.title')}
        </h2>
        <p className="text-muted-foreground mb-6">{t('proposal.create.subtitle')}</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="proposal-price" className="text-base font-semibold flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-primary" />
              {t('proposal.create.priceLabel')}
            </Label>
            <Input
              id="proposal-price"
              type="number"
              placeholder={t('proposal.create.budgetPlaceholder', { budget })}
              value={proposalPrice}
              onChange={(e) => setProposalPrice(e.target.value)}
              className="text-base"
            />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="proposal-title" className="text-base font-semibold">
              {t('proposal.create.proposalTitleLabel')}
            </Label>
            <Input
              id="proposal-title"
              placeholder={t('proposal.create.proposalTitlePlaceholder')}
              className="text-base"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="proposal-description" className="text-base font-semibold">
              {t('proposal.create.descriptionLabel')}
            </Label>
            <Textarea
              id="proposal-description"
              placeholder={t('proposal.create.descriptionPlaceholder')}
              rows={8}
              value={proposalText}
              onChange={(e) => setProposalText(e.target.value)}
              className="text-base"
            />
            <p className="text-sm text-muted-foreground">
              {t('proposal.create.charsCount', { count: proposalText.length })}
            </p>
          </div>

          {/* Delivery details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="delivery-time" className="text-base font-semibold">
                {t('proposal.create.deliveryTimeLabel')}
              </Label>
              <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                <SelectTrigger id="delivery-time" className="text-base">
                  <SelectValue placeholder={t('proposal.create.deliveryTimePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2">{t('proposal.create.deliveryTime.1_2days')}</SelectItem>
                  <SelectItem value="3-5">{t('proposal.create.deliveryTime.3_5days')}</SelectItem>
                  <SelectItem value="week">{t('proposal.create.deliveryTime.week')}</SelectItem>
                  <SelectItem value="2-weeks">
                    {t('proposal.create.deliveryTime.2weeks')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="warranty" className="text-base font-semibold">
                {t('proposal.create.warrantyLabel')}
              </Label>
              <Select value={warranty} onValueChange={setWarranty}>
                <SelectTrigger id="warranty" className="text-base">
                  <SelectValue placeholder={t('proposal.create.warrantyPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">{t('proposal.create.warranty.none')}</SelectItem>
                  <SelectItem value="1m">{t('proposal.create.warranty.1month')}</SelectItem>
                  <SelectItem value="3m">{t('proposal.create.warranty.3months')}</SelectItem>
                  <SelectItem value="6m">{t('proposal.create.warranty.6months')}</SelectItem>
                  <SelectItem value="1y">{t('proposal.create.warranty.1year')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-2">
            <Label htmlFor="proposal-images" className="text-base font-semibold flex items-center">
              <Upload className="h-4 w-4 mr-1 text-primary" />
              {t('proposal.create.imagesLabel')}
            </Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">{t('proposal.create.dragDrop')}</p>
              <p className="text-xs text-muted-foreground">{t('proposal.create.imagesHint')}</p>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-accent/30 rounded-lg p-4 border border-accent flex items-start">
            <AlertCircle className="h-5 w-5 text-accent-foreground mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-accent-foreground">
              <p className="font-semibold mb-1">{t('proposal.create.warningTitle')}</p>
              <ul className="list-disc list-inside space-y-1">
                <li>{t('proposal.create.warning1')}</li>
                <li>{t('proposal.create.warning2')}</li>
                <li>{t('proposal.create.warning3')}</li>
                <li>{t('proposal.create.warning4')}</li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" variant="gradient" className="w-full text-lg shadow-glow">
            <Send className="mr-2 h-5 w-5" />
            {t('proposal.create.submitButton')}
          </Button>
        </form>
      </div>
    </div>
  );
};
