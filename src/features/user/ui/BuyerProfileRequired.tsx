'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { UserPlus, UserCircle } from 'lucide-react';

import { SwitchProfileModal } from './SwitchProfileModal';
import { Button } from '@/ui-v2';

export function BuyerProfileRequired() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [switchProfileModalOpen, setSwitchProfileModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="bg-v2-primary p-6 rounded-full mb-6">
          <UserCircle className="h-16 w-16 text-v2-primary" />
        </div>
        <h2 className="text-2xl font-[550] mb-4">
          {t('request.create.buyerProfileRequired.title')}
        </h2>
        <p className="text-v2-muted mb-8 max-w-md">
          {t('request.create.buyerProfileRequired.description')}
        </p>
        <Button className="gap-2" onClick={() => setSwitchProfileModalOpen(true)}>
          <UserPlus className="h-5 w-5" />
          {t('request.create.buyerProfileRequired.button')}
        </Button>
      </div>

      <SwitchProfileModal open={switchProfileModalOpen} onOpenChange={setSwitchProfileModalOpen} />
    </>
  );
}
