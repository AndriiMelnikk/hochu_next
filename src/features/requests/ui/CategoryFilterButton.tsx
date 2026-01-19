import { Button } from '@shared/ui/button';
import { cn } from '@/lib/utils';

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
      variant={isSelected ? 'default' : 'outline'}
      size="sm"
      onClick={onClick}
      className={cn('rounded-full whitespace-nowrap flex-shrink-0')}
    >
      {category}
    </Button>
  );
};
