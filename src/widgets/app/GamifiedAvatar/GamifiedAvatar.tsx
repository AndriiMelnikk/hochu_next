import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar";
import { Badge } from "@shared/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@shared/ui/tooltip";
import { calculateLevel, type UserRole } from "@/types/gamification";

interface GamifiedAvatarProps {
  src?: string;
  fallback: string;
  xp: number;
  role: UserRole;
  size?: "sm" | "md" | "lg" | "xl";
  showLevel?: boolean;
  topAchievements?: string[]; // До 3 іконок досягнень
}

const sizeClasses = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-24 w-24",
  xl: "h-32 w-32",
};

const badgeSizeClasses = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

export default function GamifiedAvatar({ 
  src, 
  fallback, 
  xp, 
  role, 
  size = "md",
  showLevel = true,
  topAchievements = []
}: GamifiedAvatarProps) {
  const level = calculateLevel(xp, role);

  return (
    <TooltipProvider>
      <div className="relative inline-block">
        {/* Аватар з обводкою рівня */}
        <div 
          className="rounded-full p-0.5 bg-gradient-to-br"
          style={{ 
            backgroundImage: `linear-gradient(135deg, ${level.color}, ${level.color}80)`
          }}
        >
          <Avatar className={sizeClasses[size]}>
            <AvatarImage src={src} />
            <AvatarFallback className="text-2xl bg-gradient-primary text-white">
              {fallback}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Бейдж рівня */}
        {showLevel && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div 
                className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full border-2 border-background"
                style={{ backgroundColor: level.color }}
              >
                <span className={`${badgeSizeClasses[size]} px-2 py-0.5 font-bold`}>
                  {level.badge}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-bold">{level.title}</p>
              <p className="text-xs">Рівень {level.level} • {xp} XP</p>
            </TooltipContent>
          </Tooltip>
        )}

        {/* Топ досягнення */}
        {topAchievements.length > 0 && (
          <div className="absolute -top-1 -right-1 flex gap-0.5">
            {topAchievements.slice(0, 3).map((achievement, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <span className="text-lg bg-background rounded-full border-2 border-background shadow-lg">
                    {achievement}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Досягнення</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}

