import type { Messages } from '@lingui/core';

export const messages: Messages = {
  // Сторінка детальної пропозиції
  'proposal.detail.errorTitle': 'Помилка завантаження',
  'proposal.detail.errorDescription':
    'Не вдалося завантажити дані пропозиції. Спробуйте оновити сторінку пізніше.',
  'proposal.detail.errorRetry': 'Оновити сторінку',
  'proposal.detail.breadcrumb': 'Пропозиція #{id}',
  'proposal.detail.createdAt': 'Створено {date}',
  'proposal.detail.price': '{price} ₴',
  'proposal.detail.itemCondition.new': 'Нове',
  'proposal.detail.itemCondition.used': 'Вживане',

  'proposal.detail.images.title': 'Фотографії',
  'proposal.detail.images.alt': 'Фото {index}',

  'proposal.detail.description.title': 'Детальний опис',

  'proposal.detail.originalRequest.title': 'Оригінальний запит',
  'proposal.detail.originalRequest.budget': 'Бюджет: {min}-{max} ₴',
  'proposal.detail.originalRequest.views': '{count} переглядів',
  'proposal.detail.originalRequest.proposals': '{count} пропозицій',

  'proposal.detail.buyer.title': 'Замовник (Покупець)',
  'proposal.detail.buyer.locationUnknown': 'Місцезнаходження не вказано',
  'proposal.detail.buyer.ratingLabel': 'Рейтинг: ',
  'proposal.detail.buyer.reviewsCount': '({count} відгуків)',
  'proposal.detail.buyer.completedDeals': 'Завершено угод: ',
  'proposal.detail.buyer.memberSince': 'На платформі з {date} року',

  'proposal.detail.reviews.title': 'Відгуки про продавця',

  'proposal.detail.seller.title': 'Продавець',
  'proposal.detail.seller.locationUnknown': 'Місцезнаходження не вказано',
  'proposal.detail.seller.rating': 'Рейтинг',
  'proposal.detail.seller.completedDeals': 'Виконаних угод',
  'proposal.detail.seller.memberSince': 'На платформі з {date} року',

  'proposal.detail.actions.accept': 'Прийняти пропозицію',
  'proposal.detail.actions.message': 'Написати повідомлення',
  'proposal.detail.actions.reject': 'Відхилити',

  'proposal.detail.tip.title': 'Порада:',
  'proposal.detail.tip.text':
    "Обов'язково обговоріть всі деталі в чаті перед прийняттям рішення. Перевірте рейтинг та відгуки продавця.",

  'proposal.detail.stats.title': 'Статистика пропозиції',
  'proposal.detail.stats.views': 'Переглядів',
  'proposal.detail.stats.sellerReviews': 'Відгуків про продавця',
};
