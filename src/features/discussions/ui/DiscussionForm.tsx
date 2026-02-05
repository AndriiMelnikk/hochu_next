import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@shared/ui/button';
import { Textarea } from '@shared/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';

interface DiscussionFormProps {
  replyTo?: number | null;
  onCancelReply?: () => void;
  onSubmit: (text: string) => void;
}

export const DiscussionForm = ({ replyTo, onCancelReply, onSubmit }: DiscussionFormProps) => {
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
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-center justify-between">
          <span className="text-sm">Відповідь на повідомлення #{replyTo}</span>
          <Button type="button" variant="ghost" size="sm" onClick={onCancelReply} className="h-6">
            Скасувати
          </Button>
        </div>
      )}
      <div className="bg-muted/30 rounded-lg p-4 border border-border">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Current" />
            <AvatarFallback>Ви</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder={
                replyTo ? 'Напишіть вашу відповідь...' : 'Задайте питання або залишіть коментар...'
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="resize-none mb-2"
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Це публічне повідомлення. Всі учасники зможуть його побачити.
              </p>
              <Button type="submit" size="sm" disabled={!text.trim()} variant="gradient">
                <Send className="h-4 w-4 mr-2" />
                Надіслати
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
