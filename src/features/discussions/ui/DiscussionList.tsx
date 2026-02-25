import { DiscussionItem } from './DiscussionItem';

// Mock discussions data
const discussions = [];

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
