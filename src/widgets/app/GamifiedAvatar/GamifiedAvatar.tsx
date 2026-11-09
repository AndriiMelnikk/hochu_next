import { calculateLevel, type UserRole } from '@/types/gamification';
import { Avatar, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui-v2';

interface GamifiedAvatarProps {
  src?: string;
  fallback: string;
  xp: number;
  role: UserRole;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLevel?: boolean;
  topAchievements?: string[]; // До 3 іконок досягнень
}

const sizeClasses = {
  sm: 'size-10',
  md: 'size-16',
  lg: 'size-24',
  xl: 'size-32',
};

const badgeSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg',
};

export default function GamifiedAvatar({
  src,
  fallback,
  xp,
  role,
  size = 'md',
  showLevel = true,
  topAchievements = [],
}: GamifiedAvatarProps) {
  const level = calculateLevel(xp, role);

  return (
    <TooltipProvider>
      <div className="relative inline-block">
        {/* Аватар з обводкою рівня */}
        <div
          className="rounded-full p-0.5 bg-gradient-to-br"
          style={{
            backgroundImage: `linear-gradient(135deg, ${level.color}, ${level.color}80)`,
          }}
        >
          <Avatar className={sizeClasses[size]} src={src} fallback={fallback.charAt(0)} />
        </div>

        {/* Бейдж рівня */}
        {showLevel && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full border-2 border-v2-surface"
                style={{ backgroundColor: level.color }}
              >
                <span className={`${badgeSizeClasses[size]} px-2 py-0.5 font-[550]`}>
                  {level.badge}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-[550]">{level.title}</p>
              <p className="text-xs">
                Рівень {level.level} • {xp} XP
              </p>
            </TooltipContent>
          </Tooltip>
        )}

        {/* Топ досягнення */}
        {topAchievements.length > 0 && (
          <div className="absolute -top-1 -right-1 flex gap-0.5">
            {topAchievements.slice(0, 3).map((achievement, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <span className="text-lg bg-v2-surface rounded-full border-2 border-v2-surface ">
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
