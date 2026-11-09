import {
  calculateLevel,
  getProgressToNextLevel,
  sellerAchievements,
  buyerAchievements,
  type UserRole,
} from '@/types/gamification';
import {
  ProgressBar,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Badge,
  Card,
  CardBody,
  CardDescription,
  CardHead,
  CardTitle,
} from '@/ui-v2';

interface GamificationProgressProps {
  xp: number;
  role: UserRole;
  unlockedAchievements: string[];
}

export default function GamificationProgress({
  xp,
  role,
  unlockedAchievements,
}: GamificationProgressProps) {
  const level = calculateLevel(xp, role);
  const progress = getProgressToNextLevel(xp, role);
  const achievements = role === 'seller' ? sellerAchievements : buyerAchievements;

  const rarityColors = {
    common: 'bg-slate-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-amber-500',
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Прогрес рівня */}
        <Card className="border-2" style={{ borderColor: level.color }}>
          <CardHead>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{level.badge}</span>
                  {level.title}
                </CardTitle>
                <CardDescription>Рівень {level.level}</CardDescription>
              </div>
              <Badge tone="neutral" className="text-lg px-3 py-1">
                {xp} XP
              </Badge>
            </div>
          </CardHead>
          <CardBody>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-v2-muted">
                <span>Прогрес до наступного рівня</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <ProgressBar value={progress} className="h-3 overflow-hidden rounded-v2-pill" />
            </div>
          </CardBody>
        </Card>

        {/* Досягнення */}
        <Card>
          <CardHead>
            <CardTitle>Досягнення</CardTitle>
            <CardDescription>
              Відкрито {unlockedAchievements.length} з {achievements.length}
            </CardDescription>
          </CardHead>
          <CardBody>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement) => {
                const isUnlocked = unlockedAchievements.includes(achievement.id);
                return (
                  <Tooltip key={achievement.id}>
                    <TooltipTrigger asChild>
                      <div
                        className={`p-4 rounded-v2-lg border-2 text-center transition-all ${
                          isUnlocked
                            ? 'border-v2-primary bg-v2-primary hover:bg-v2-primary'
                            : 'border-v2-border bg-v2-surface-subtle opacity-50 grayscale'
                        }`}
                      >
                        <div className="text-4xl mb-2">{achievement.icon}</div>
                        <div className="text-sm font-semibold mb-1">{achievement.name}</div>
                        <Badge tone="neutral" className={rarityColors[achievement.rarity]}>
                          {achievement.rarity}
                        </Badge>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="font-[550]">{achievement.name}</p>
                      <p className="text-sm">{achievement.description}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </div>
    </TooltipProvider>
  );
}
