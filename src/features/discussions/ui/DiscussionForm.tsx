'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { Button, Textarea, Avatar } from '@/ui-v2';

interface DiscussionFormProps {
  replyTo?: number | null;
  onCancelReply?: () => void;
  onSubmit: (text: string) => void;
}

export const DiscussionForm = ({ replyTo, onCancelReply, onSubmit }: DiscussionFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {replyTo && (
        <div className="bg-v2-primary border border-v2-primary rounded-v2-lg p-3 flex items-center justify-between">
          <span className="text-sm">{t('discussion.form.replyTo', { id: replyTo })}</span>
          <Button type="button" variant="ghost" size="sm" onClick={onCancelReply} className="h-6">
            {t('discussion.form.cancel')}
          </Button>
        </div>
      )}
      <div className="bg-v2-surface-subtle rounded-v2-lg p-4 border border-v2-border">
        <div className="flex items-start gap-3">
          <Avatar
            size="md"
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Current"
            fallback={t('discussion.form.you').charAt(0)}
          />
          <div className="flex-1">
            <Textarea
              placeholder={
                replyTo
                  ? t('discussion.form.placeholderReply')
                  : t('discussion.form.placeholderQuestion')
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="resize-none mb-2"
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-v2-muted">{t('discussion.form.publicWarning')}</p>
              <Button type="submit" size="sm" disabled={!text.trim()}>
                <Send className="h-4 w-4 mr-2" />
                {t('discussion.form.submit')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
