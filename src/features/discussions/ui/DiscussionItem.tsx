import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import { Badge } from '@shared/ui/badge';

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
  return (
    <div className="flex items-start gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage src={discussion.user.avatar} />
        <AvatarFallback>{discussion.user.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 bg-muted/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{discussion.user.name}</span>
            <Badge
              variant={discussion.user.role === 'buyer' ? 'default' : 'secondary'}
              className="text-xs"
            >
              {discussion.user.role === 'buyer' ? 'Замовник' : 'Виконавець'}
            </Badge>
          </div>
          <span className="text-xs text-muted-foreground">{discussion.timestamp}</span>
        </div>
        <p className="text-sm">{discussion.message}</p>
      </div>
    </div>
  );
};
