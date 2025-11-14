export type UserRole = "buyer" | "seller";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  unlockedAt?: Date;
}

export interface Level {
  level: number;
  title: string;
  minXP: number;
  badge: string;
  color: string;
}

// Рівні для продавців
export const sellerLevels: Level[] = [
  { level: 1, title: "Новачок", minXP: 0, badge: "🌱", color: "hsl(142 76% 36%)" },
  { level: 2, title: "Майстер", minXP: 100, badge: "🔨", color: "hsl(221 83% 53%)" },
  { level: 3, title: "Експерт", minXP: 500, badge: "⭐", color: "hsl(262 83% 58%)" },
  { level: 4, title: "Професіонал", minXP: 1500, badge: "💎", color: "hsl(198 93% 60%)" },
  { level: 5, title: "Легенда", minXP: 5000, badge: "👑", color: "hsl(43 96% 56%)" },
];

// Рівні для покупців
export const buyerLevels: Level[] = [
  { level: 1, title: "Початківець", minXP: 0, badge: "🎯", color: "hsl(142 76% 36%)" },
  { level: 2, title: "Активний", minXP: 50, badge: "🎪", color: "hsl(221 83% 53%)" },
  { level: 3, title: "Досвідчений", minXP: 200, badge: "🎨", color: "hsl(262 83% 58%)" },
  { level: 4, title: "Знавець", minXP: 1000, badge: "🏆", color: "hsl(198 93% 60%)" },
  { level: 5, title: "VIP", minXP: 3000, badge: "💫", color: "hsl(43 96% 56%)" },
];

// Досягнення для продавців
export const sellerAchievements: Achievement[] = [
  { id: "first_sale", name: "Перша угода", description: "Завершіть першу угоду", icon: "🎉", rarity: "common" },
  { id: "fast_responder", name: "Блискавична відповідь", description: "Відповідайте за 5 хв 10 разів", icon: "⚡", rarity: "rare" },
  { id: "perfect_rating", name: "Ідеальний рейтинг", description: "10 відгуків 5★ підряд", icon: "🌟", rarity: "epic" },
  { id: "marathon", name: "Марафонець", description: "30 угод за місяць", icon: "🏃", rarity: "legendary" },
  { id: "trusted_seller", name: "Надійний продавець", description: "100 завершених угод", icon: "🛡️", rarity: "legendary" },
  { id: "price_master", name: "Майстер цін", description: "50% пропозицій прийнято", icon: "💰", rarity: "rare" },
];

// Досягнення для покупців
export const buyerAchievements: Achievement[] = [
  { id: "first_request", name: "Перший запит", description: "Створіть перший запит", icon: "📝", rarity: "common" },
  { id: "deal_maker", name: "Переговорник", description: "Завершіть 10 угод", icon: "🤝", rarity: "rare" },
  { id: "reviewer", name: "Критик", description: "Залиште 20 відгуків", icon: "📋", rarity: "rare" },
  { id: "loyal_customer", name: "Постійний клієнт", description: "50 завершених угод", icon: "💳", rarity: "epic" },
  { id: "big_spender", name: "Великий покупець", description: "Витратили 100k+ грн", icon: "💎", rarity: "legendary" },
  { id: "explorer", name: "Дослідник", description: "Замовлення в 10+ категоріях", icon: "🗺️", rarity: "epic" },
];

export function calculateLevel(xp: number, role: UserRole): Level {
  const levels = role === "seller" ? sellerLevels : buyerLevels;
  return [...levels].reverse().find(level => xp >= level.minXP) || levels[0];
}

export function getProgressToNextLevel(xp: number, role: UserRole): number {
  const currentLevel = calculateLevel(xp, role);
  const levels = role === "seller" ? sellerLevels : buyerLevels;
  const nextLevel = levels.find(l => l.level === currentLevel.level + 1);
  
  if (!nextLevel) return 100;
  
  const progress = ((xp - currentLevel.minXP) / (nextLevel.minXP - currentLevel.minXP)) * 100;
  return Math.min(progress, 100);
}
