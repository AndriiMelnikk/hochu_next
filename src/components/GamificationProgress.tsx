import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  calculateLevel, 
  getProgressToNextLevel, 
  sellerAchievements, 
  buyerAchievements,
  type UserRole 
} from "@/types/gamification";

interface GamificationProgressProps {
  xp: number;
  role: UserRole;
  unlockedAchievements: string[];
}

export default function GamificationProgress({ xp, role, unlockedAchievements }: GamificationProgressProps) {
  const level = calculateLevel(xp, role);
  const progress = getProgressToNextLevel(xp, role);
  const achievements = role === "seller" ? sellerAchievements : buyerAchievements;
  
  const rarityColors = {
    common: "bg-slate-500",
    rare: "bg-blue-500",
    epic: "bg-purple-500",
    legendary: "bg-amber-500",
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Прогрес рівня */}
        <Card className="border-2" style={{ borderColor: level.color }}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{level.badge}</span>
                  {level.title}
                </CardTitle>
                <CardDescription>Рівень {level.level}</CardDescription>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {xp} XP
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Прогрес до наступного рівня</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Досягнення */}
        <Card>
          <CardHeader>
            <CardTitle>Досягнення</CardTitle>
            <CardDescription>
              Відкрито {unlockedAchievements.length} з {achievements.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement) => {
                const isUnlocked = unlockedAchievements.includes(achievement.id);
                return (
                  <Tooltip key={achievement.id}>
                    <TooltipTrigger asChild>
                      <div
                        className={`p-4 rounded-lg border-2 text-center transition-all ${
                          isUnlocked 
                            ? 'border-primary bg-primary/5 hover:bg-primary/10' 
                            : 'border-muted bg-muted/20 opacity-50 grayscale'
                        }`}
                      >
                        <div className="text-4xl mb-2">{achievement.icon}</div>
                        <div className="text-sm font-semibold mb-1">{achievement.name}</div>
                        <Badge variant="outline" className={rarityColors[achievement.rarity]}>
                          {achievement.rarity}
                        </Badge>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="font-bold">{achievement.name}</p>
                      <p className="text-sm">{achievement.description}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
