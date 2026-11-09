'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { contactService, type IContactRequest } from '@entities/contact';
import { toast } from 'sonner';

import { useLingui } from '@lingui/react';
import { Button, Container, Input, PageHero, Textarea } from '@/ui-v2';

export default function ContactContent() {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, unknown>) => i18n._(id, values);

  const [formData, setFormData] = useState<IContactRequest>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      await contactService.submit(formData);
      toast.success(t('contact.success.title'), {
        description: t('contact.success.description'),
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      const friendlyMessage = (err as { friendlyMessage?: string }).friendlyMessage;
      toast.error(friendlyMessage || t('contact.error.default'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ui-v2">
      <Container className="py-6 md:py-8">
        <PageHero title={t('contact.title')} subtitle={t('contact.subtitle')} />

        {/* Contact Form */}
        <section className="mx-auto mb-8 mt-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-v2-surface rounded-v2-2xl p-8 md:p-12 border border-v2-border shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-[550] mb-6 text-center">{t('contact.form.title')}</h2>
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
                    minLength={2}
                    maxLength={255}
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    minLength={3}
                    maxLength={255}
                    disabled={isSubmitting}
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
                    minLength={10}
                    maxLength={5000}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
