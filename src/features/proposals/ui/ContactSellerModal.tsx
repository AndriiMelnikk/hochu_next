'use client';

import { useLingui } from '@lingui/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui/dialog';
import {
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Send,
  MessageCircle,
  MessageSquare,
  Loader2,
} from 'lucide-react';
import { useUserContacts } from '@/entities/user/hooks/useUserContacts';
import { ContactChannel } from '@/entities/user/types/User';
import { Button } from '@shared/ui/button';
import Link from 'next/link';

interface ContactSellerModalProps {
  userId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CHANNEL_ICONS: Record<ContactChannel, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  phone: Phone,
  email: Mail,
  website: Globe,
  instagram: Instagram,
  facebook: Facebook,
  telegram: Send,
  viber: MessageSquare,
  whatsapp: MessageCircle,
};

const getHref = (channel: ContactChannel, value: string) => {
  switch (channel) {
    case 'phone':
      return `tel:${value}`;
    case 'email':
      return `mailto:${value}`;
    case 'instagram':
      return `https://instagram.com/${value.replace('@', '')}`;
    case 'facebook':
      return `https://facebook.com/${value}`;
    case 'telegram':
      return `https://t.me/${value.replace('@', '')}`;
    case 'viber':
      return `viber://chat?number=${value.replace(/[^0-9]/g, '')}`;
    case 'whatsapp':
      return `https://wa.me/${value.replace(/[^0-9]/g, '')}`;
    case 'website':
      return value.startsWith('http') ? value : `https://${value}`;
    default:
      return value;
  }
};

export const ContactSellerModal = ({ userId, open, onOpenChange }: ContactSellerModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { data: contacts, isLoading } = useUserContacts(userId, {
    enabled: open,
  });

  const validContacts = contacts
    ? (Object.entries(contacts) as [ContactChannel, string][]).filter(([_, value]) => value)
    : [];

  const hasContacts = validContacts.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('proposal.contact.title')}</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : !hasContacts ? (
            <div className="text-center text-muted-foreground py-8">
              {t('proposal.contact.noContacts')}
            </div>
          ) : (
            <div className="grid gap-3">
              {validContacts.map(([channel, value]) => {
                const Icon = CHANNEL_ICONS[channel] || MessageCircle;
                const href = getHref(channel, value);

                return (
                  <Button
                    key={channel}
                    variant="outline"
                    className="w-full justify-start h-auto py-3 px-4"
                    asChild
                  >
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5 mr-3 text-primary" />
                      <div className="flex flex-col items-start gap-0.5">
                        <span className="font-medium capitalize text-foreground">
                          {t(`contact.channel.${channel}`)}
                        </span>
                        <span className="text-sm text-muted-foreground font-normal break-all">
                          {value}
                        </span>
                      </div>
                    </Link>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
