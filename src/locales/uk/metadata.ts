import type { Metadata } from "next";
import { routes } from "@/app/router/routes";

export const defaultMetadata: Metadata = {
  title: "Hochu",
  description: "Платформа для поєднання покупців і продавців",
};

export const routeMetadata: Record<keyof typeof routes, Partial<Metadata>> = {
  HOME: { title: "Головна | Hochu", description: "Платформа для поєднання покупців і продавців" },
  ABOUT: { title: "Про нас | Hochu", description: "Про платформу Hochu" },
  ADMIN: { title: "Адмінка | Hochu", description: "Адмінка для адміністраторів" },
  BLOG: { title: "Блог | Hochu", description: "Блог для публікацій" },
  BLOG_ID: { title: "Стаття | Hochu", description: "Стаття для блогу" },
  BROWSE: { title: "Пошук | Hochu", description: "Пошук запитів" },
  CONTACT: { title: "Контакти | Hochu", description: "Контакти для зв'язку" },
  CREATE: { title: "Створити | Hochu", description: "Створити запит" },
  HOW_IT_WORKS: { title: "Як це працює | Hochu", description: "Як це працює на платформі Hochu" },
  LOGIN: { title: "Вхід | Hochu", description: "Вхід на платформу Hochu" },
  PRICING: { title: "Тарифи | Hochu", description: "Тарифи для користувачів" },
  PRIVACY: { title: "Політика конфіденційності | Hochu", description: "Політика конфіденційності для користувачів" },
  PROFILE: { title: "Профіль | Hochu", description: "Профіль користувача" },
  PROPOSAL_ID: { title: "Пропозиція | Hochu", description: "Пропозиція для запиту" },
  REGISTER: { title: "Реєстрація | Hochu", description: "Реєстрація для користувача" },
  REQUEST_ID: { title: "Запит | Hochu", description: "Запит для пропозиції" },
  SUPPORT: { title: "Підтримка | Hochu", description: "Підтримка для користувачів" },
  TERMS: { title: "Умови | Hochu", description: "Умови використання платформи Hochu" },
  REQUEST: { title: "Запит | Hochu", description: "Деталі запиту" },
  PROPOSAL: { title: "Пропозиція | Hochu", description: "Деталі пропозиції" },
};
