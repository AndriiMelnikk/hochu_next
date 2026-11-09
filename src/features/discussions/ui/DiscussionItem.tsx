'use client';

import { useLingui } from '@lingui/react';
import { Badge, Avatar } from '@/ui-v2';

interface DiscussionItemProps {
  discussion: {
    id: number;
    user: {
      name: string;
      avatar: string;
      role: string;
    };
    replyTo: number | null;
    message: string;
    timestamp: string;
  };
}

export const DiscussionItem = ({ discussion }: DiscussionItemProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  return (
    <div className="flex items-start gap-3">
      <Avatar
        size="md"
        src={discussion.user.avatar}
        fallback={String(discussion.user.name[0] ?? '').charAt(0)}
      />
      <div className="flex-1 bg-v2-surface-subtle rounded-v2-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{discussion.user.name}</span>
            <Badge tone={discussion.user.role === 'buyer' ? 'info' : 'neutral'} className="text-xs">
              {discussion.user.role === 'buyer'
                ? t('discussion.role.buyer')
                : t('discussion.role.seller')}
            </Badge>
          </div>
          <span className="text-xs text-v2-muted">{discussion.timestamp}</span>
        </div>
        <p className="text-sm">{discussion.message}</p>
      </div>
    </div>
  );
};
