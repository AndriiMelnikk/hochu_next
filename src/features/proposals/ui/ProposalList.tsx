import { ProposalItem } from './ProposalItem';

// Mock proposals data (should come from API)
const mockProposals = [
  {
    id: 1,
    seller: {
      name: 'Олексій Шевченко',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oleksiy',
      rating: 4.9,
      reviewsCount: 47,
      completedDeals: 52,
    },
    price: 2500,
    title: 'Професійний ремонт MacBook з гарантією 6 місяців',
    description:
      'Маю 8 років досвіду ремонту техніки Apple. Використовую тільки оригінальні комплектуючі. Зроблю діагностику безкоштовно, заміню батарею, почищу від пилу та заміню термопасту. Гарантія на всі роботи 6 місяців.',
    deliveryTime: '2-3 дні',
    warranty: '6 місяців',
    createdAt: '10 хвилин тому',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1550041473-d296a1a8ec52?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1531297461136-82lw9z1w1w?w=800&auto=format&fit=crop&q=60',
    ],
  },
  {
    id: 2,
    seller: {
      name: 'Марина Коваль',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maryna',
      rating: 4.7,
      reviewsCount: 31,
      completedDeals: 38,
    },
    price: 2800,
    title: 'Якісний ремонт Apple техніки',
    description:
      'Сертифікований спеціаліст Apple. Можу виконати ремонт протягом дня при наявності комплектуючих. Використовую оригінальні батареї з гарантією якості.',
    deliveryTime: '1 день',
    warranty: '3 місяці',
    createdAt: '25 хвилин тому',
    images: [],
  },
];

interface ProposalListProps {
  requestId: string;
  onImageClick: (images: string[], index: number) => void;
}

export const ProposalList = ({ requestId, onImageClick }: ProposalListProps) => {
  // TODO: Use real data
  // const { data: proposals } = useProposals(requestId);

  return (
    <div className="space-y-4">
      {mockProposals.map((proposal) => (
        <ProposalItem key={proposal.id} proposal={proposal} onImageClick={onImageClick} />
      ))}
    </div>
  );
};
