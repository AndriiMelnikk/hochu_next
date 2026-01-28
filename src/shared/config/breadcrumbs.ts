import { routes } from '@/app/router/routes';

export const breadcrumbLabels: Record<string, string> = {
  [routes.HOME]: 'Головна',
  [routes.REQUEST]: 'Запити',
  [routes.CREATE]: 'Створити',
  [routes.HOW_IT_WORKS]: 'Як це працює',
  [routes.BLOG]: 'Блог',
  [routes.PROFILE]: 'Профіль',
  [routes.LOGIN]: 'Увійти',
  [routes.REGISTER]: 'Реєстрація',
  [routes.PRICING]: 'Ціни',
  [routes.ABOUT]: 'Про нас',
  [routes.CONTACT]: 'Контакти',
  [routes.TERMS]: 'Умови використання',
  [routes.PRIVACY]: 'Політика конфіденційності',
  [routes.SUPPORT]: 'Підтримка',
  [routes.ADMIN]: 'Адміністратор',
  // Динамічні сегменти (базові шляхи для динамічних роутів)
  '/proposal': 'Пропозиція',
};
