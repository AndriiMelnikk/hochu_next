'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '@shared/ui/input';
import { Textarea } from '@shared/ui/textarea';
import { useToast } from '@shared/ui/use-toast';

import { useLingui } from '@lingui/react';

export default function ContactContent() {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, unknown>) => i18n._(id, values);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.success.title'),
      description: t('contact.success.description'),
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email'),
      value: 'support@hochu.com',
      link: 'mailto:support@hochu.com',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      value: '+380 (44) 123-45-67',
      link: 'tel:+380441234567',
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      value: t('contact.info.addressValue'),
      link: null,
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      {/* <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </>
              );

              return info.link ? (
                <a
                  key={index}
                  href={info.link}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary transition-all hover:shadow-xl text-center"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section> */}

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.form.nameLabel')}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('contact.form.namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.form.emailLabel')}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t('contact.form.subjectLabel')}
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.messageLabel')}
                </label>
                <Textarea
                  id="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              {/* <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                {t('contact.form.submit')}
              </Button> */}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-8 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border h-96">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Карта розташування</p>
              </div>
            </div>
          </div>
        </section> */}
    </div>
  );
}
