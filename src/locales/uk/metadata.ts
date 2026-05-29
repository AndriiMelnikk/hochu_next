import type { Metadata } from 'next';
import { routes } from '@/app/router/routes';

export const defaultMetadata: Metadata = {
  title: 'Shukayu',
  description: 'Платформа для поєднання покупців і продавців',
};

export const routeMetadata: Record<keyof typeof routes, Partial<Metadata>> = {
  HOME: { title: 'Головна | Shukayu', description: 'Платформа для поєднання покупців і продавців' },
  ABOUT: { title: 'Про нас | Shukayu', description: 'Про платформу Shukayu' },
  ADMIN: { title: 'Адмінка | Shukayu', description: 'Адмінка для адміністраторів' },
  BLOG: { title: 'Блог | Shukayu', description: 'Блог для публікацій' },
  BLOG_ID: { title: 'Стаття | Shukayu', description: 'Стаття для блогу' },
  CONTACT: { title: 'Контакти | Shukayu', description: "Контакти для зв'язку" },
  CREATE: { title: 'Створити | Shukayu', description: 'Створити запит' },
  HOW_IT_WORKS: {
    title: 'Як це працює | Shukayu',
    description: 'Як це працює на платформі Shukayu',
  },
  LOGIN: { title: 'Вхід | Shukayu', description: 'Вхід на платформу Shukayu' },
  FORGOT_PASSWORD: {
    title: 'Відновлення пароля | Shukayu',
    description: 'Скидання пароля',
  },
  RESET_PASSWORD: {
    title: 'Новий пароль | Shukayu',
    description: 'Встановлення нового пароля',
  },
  PRICING: { title: 'Тарифи | Shukayu', description: 'Тарифи для користувачів' },
  PRIVACY: {
    title: 'Політика конфіденційності | Shukayu',
    description: 'Політика конфіденційності для користувачів',
  },
  PROFILE: { title: 'Профіль | Shukayu', description: 'Профіль користувача' },
  PROFILE_BY_ID: { title: 'Профіль | Shukayu', description: 'Профіль користувача' },
  PROPOSAL_ID: { title: 'Пропозиція | Shukayu', description: 'Пропозиція для запиту' },
  REGISTER: { title: 'Реєстрація | Shukayu', description: 'Реєстрація для користувача' },
  REQUEST_ID: { title: 'Запит | Shukayu', description: 'Запит для пропозиції' },
  SUPPORT: { title: 'Підтримка | Shukayu', description: 'Підтримка для користувачів' },
  TERMS: { title: 'Умови | Shukayu', description: 'Умови використання платформи Shukayu' },
  REQUEST: { title: 'Запит | Shukayu', description: 'Деталі запиту' },
  PROPOSAL: { title: 'Пропозиція | Shukayu', description: 'Деталі пропозиції' },
};
