import { cn } from '@/lib/utils';
import { Button } from '@/ui-v2';

interface CategoryFilterButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export const CategoryFilterButton = ({
  category,
  isSelected,
  onClick,
}: CategoryFilterButtonProps) => {
  return (
    <Button
      variant={isSelected ? 'primary' : 'outline'}
      size="sm"
      onClick={onClick}
      className={cn('rounded-full whitespace-nowrap flex-shrink-0')}
    >
      {category}
    </Button>
  );
};
