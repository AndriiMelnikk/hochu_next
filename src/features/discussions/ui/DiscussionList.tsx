import { DiscussionItem } from './DiscussionItem';

// Mock discussions data
const discussions = [
  {
    id: 1,
    user: {
      name: 'Олена Коваленко',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olena',
      role: 'seller',
    },
    replyTo: null,
    message: 'Чи потрібна діагностика перед ремонтом? Можу провести безкоштовно.',
    timestamp: '2 години тому',
  },
  {
    id: 2,
    user: {
      name: 'Андрій Шевченко',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andriy',
      role: 'buyer',
    },
    replyTo: 1,
    message: 'Так, це було б чудово! Коли можете провести діагностику?',
    timestamp: '1 годину тому',
  },
];

export const DiscussionList = () => {
  return (
    <div className="space-y-6 mb-6">
      {discussions.map((discussion) => (
        <div key={discussion.id} className="space-y-3">
          <DiscussionItem discussion={discussion} />
        </div>
      ))}
    </div>
  );
};
