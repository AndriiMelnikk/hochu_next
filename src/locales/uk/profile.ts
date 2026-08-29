import type { Messages } from '@lingui/core';

export const messages: Messages = {
  // Profiles
  'profile.profiles.title': 'Мої профілі',
  'profile.profiles.description':
    'Перемикайтеся між профілями покупця та продавця. Поточний профіль визначає ваші права на платформі.',
  'profile.profiles.createBuyer': 'Створити профіль покупця',
  'profile.profiles.createSeller': 'Створити профіль продавця',
  'profile.profiles.switchSuccess': 'Профіль успішно перемкнено',
  'profile.profiles.switchError': 'Не вдалося перемкнути профіль',
  'profile.profiles.loadingError': 'Сталася помилка при завантаженні профілів',
  'profile.profiles.currentBadge': 'Поточний',
  'profile.profiles.stats': 'Рейтинг: {rating} • XP: {xp} • Угод: {deals}',
  'profile.type.buyer': 'Покупець',
  'profile.type.seller': 'Продавець',
  'profile.create.title.buyer': 'Створити профіль покупця',
  'profile.create.title.seller': 'Створити профіль продавця',
  'profile.create.description.buyer':
    'Ви зможете використовувати цей профіль для створення запитів та замовлення послуг.',
  'profile.create.description.seller':
    'Ви зможете використовувати цей профіль для надсилання пропозицій та виконання замовлень.',
  'profile.create.namePlaceholder': "Введіть ім'я",
  'profile.create.lastNameLabel': "Прізвище (необов'язково)",
  'profile.create.lastNamePlaceholder': 'Введіть прізвище',
  'profile.create.submit': 'Створити',
  'profile.create.submitting': 'Створення...',
  'profile.create.success': 'Профіль типу "{type}" створено',
  'profile.create.error': 'Не вдалося створити профіль',

  // Profile Header & Tabs
  'profile.header.verified': 'Верифікований',
  'profile.header.joined': 'На платформі з {date}',
  'profile.tabs.overview': 'Огляд',
  'profile.tabs.profiles': 'Профілі',
  'profile.tabs.reviews': 'Відгуки',
  'profile.tabs.settings': 'Налаштування',
  'profile.userNotFound': 'Користувача не знайдено',
  'profile.backToHome': 'На головну',
};
