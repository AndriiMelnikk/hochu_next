import type { Locale } from '@/locales/config';
import type { SeoTextBlock } from '@/widgets/app/SeoTextSection';

type PageKey = 'create' | 'contact' | 'support';

/** Серверні тексти сторінок (корисний контент для користувачів і пошуку) */
export const PAGE_COPY: Record<PageKey, Record<Locale, SeoTextBlock>> = {
  create: {
    uk: {
      title: 'Як створити запит, на який продавці охоче відповідають',
      sections: [
        {
          heading: 'Опишіть, що саме хочете купити',
          text: 'Вкажіть модель, розмір, колір, стан (новий чи вживаний) і характеристики, які для вас важливі. Чим конкретніший запит, тим точніші пропозиції ви отримаєте і тим менше уточнень знадобиться.',
        },
        {
          heading: 'Встановіть реалістичний бюджет',
          text: 'Бюджет — орієнтир для продавців. Якщо він близький до ринкової ціни, відповідей буде більше, а конкуренція між продавцями допоможе знизити ціну ще трохи.',
        },
        {
          heading: 'Додайте місто, терміновість і фото',
          text: 'Місто допомагає отримати пропозиції від продавців поруч або з доставкою. Терміновість показує, як швидко вам потрібен товар. Фото чи приклад знімають питання, якщо товар складно описати словами.',
        },
      ],
      faqTitle: 'Часті питання',
      faq: [
        {
          question: 'Скільки коштує створити запит?',
          answer: 'Нічого. Створення запиту і отримання пропозицій для покупця безкоштовні.',
        },
        {
          question: 'Скільки чекати на пропозиції?',
          answer:
            'Перші пропозиції часто надходять протягом доби. Залежить від категорії, бюджету і того, наскільки детально описано запит.',
        },
        {
          question: 'Чи зобов’язаний я купувати?',
          answer:
            'Ні. Ви порівнюєте пропозиції і приймаєте лише ту, що влаштовує, або закриваєте запит без покупки.',
        },
        {
          question: 'Чи можна змінити запит після публікації?',
          answer:
            'Так, ви можете відредагувати опис, бюджет чи фото, поки запит активний, або скасувати його.',
        },
      ],
    },
    en: {
      title: 'How to write a request sellers are happy to answer',
      sections: [
        {
          heading: 'Describe exactly what you want to buy',
          text: 'State the model, size, colour, condition (new or used) and the features that matter to you. The more specific the request, the more accurate the offers and the fewer follow-up questions you will need.',
        },
        {
          heading: 'Set a realistic budget',
          text: 'Your budget is a benchmark for sellers. If it is close to the market price you will get more replies, and competition between sellers will help push the price down further.',
        },
        {
          heading: 'Add your city, urgency and photos',
          text: 'Your city helps you get offers from nearby sellers or with delivery. Urgency shows how soon you need the item. A photo or an example removes doubts when an item is hard to describe.',
        },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          question: 'How much does it cost to post a request?',
          answer: 'Nothing. Posting a request and receiving offers is free for buyers.',
        },
        {
          question: 'How long until I get offers?',
          answer:
            'The first offers often arrive within a day. It depends on the category, budget and how detailed the request is.',
        },
        {
          question: 'Do I have to buy?',
          answer:
            'No. You compare offers and accept only the one that suits you, or close the request without buying.',
        },
        {
          question: 'Can I edit a request after posting it?',
          answer:
            'Yes, you can edit the description, budget or photos while the request is active, or cancel it.',
        },
      ],
    },
  },
  contact: {
    uk: {
      title: 'З якими питаннями до нас звертаються',
      sections: [
        {
          heading: 'Акаунт і профіль',
          text: 'Вхід, відновлення пароля, зміна профілю покупця чи продавця, налаштування контактів і сповіщень. Опишіть проблему та вкажіть email, з яким ви зареєстровані, — так ми швидше знайдемо ваш акаунт.',
        },
        {
          heading: 'Запити, пропозиції та модерація',
          text: 'Якщо запит або пропозиція не пройшли модерацію, не відображаються чи потрібно повідомити про порушення, додайте посилання на сторінку. Скарги на шахрайство розглядаємо в пріоритетному порядку.',
        },
        {
          heading: 'Співпраця та пропозиції',
          text: 'Пишіть, якщо ви продавець або компанія і хочете працювати з покупцями Shukayu, маєте ідею щодо покращення платформи чи пропозицію про партнерство. Ми читаємо кожне повідомлення і зазвичай відповідаємо протягом одного-двох робочих днів.',
        },
      ],
    },
    en: {
      title: 'What people contact us about',
      sections: [
        {
          heading: 'Account and profile',
          text: 'Signing in, password recovery, switching between buyer and seller profiles, contact and notification settings. Describe the issue and include the email you registered with so we can find your account faster.',
        },
        {
          heading: 'Requests, offers and moderation',
          text: 'If a request or offer did not pass moderation, is not displayed, or you want to report a violation, include a link to the page. Fraud reports are handled with priority.',
        },
        {
          heading: 'Partnerships and ideas',
          text: 'Get in touch if you are a seller or company that wants to work with Shukayu buyers, have an idea for improving the platform or a partnership proposal. We read every message and usually reply within one or two business days.',
        },
      ],
    },
  },
  support: {
    uk: {
      h1: 'Підтримка користувачів Shukayu',
      intro:
        'Тут зібрано відповіді на найчастіші питання покупців і продавців. Не знайшли відповідь — напишіть нам, і команда підтримки допоможе.',
      title: 'Як користуватися платформою',
      sections: [
        {
          heading: 'Для покупців',
          text: 'Створіть безкоштовний запит із описом товару, бюджетом і містом. Продавці надішлють пропозиції з ціною та умовами. Порівняйте їх, поставте уточнювальні питання, прийміть найкращу та після угоди залиште відгук.',
        },
        {
          heading: 'Для продавців',
          text: 'Переглядайте запити покупців у своїх категоріях і надсилайте пропозиції: ціну, терміни, доставку, гарантію. Заповнений профіль із контактами і відгуками підвищує довіру й шанс, що покупець обере саме вас.',
        },
        {
          heading: 'Безпека угод',
          text: 'Перевіряйте рейтинг і відгуки співрозмовника, не передавайте коди з SMS і дані картки, за можливості оглядайте товар перед оплатою. Про підозрілу поведінку повідомляйте через кнопку скарги або форму контактів.',
        },
      ],
    },
    en: {
      h1: 'Shukayu user support',
      intro:
        'Answers to the most common questions from buyers and sellers. Did not find what you need? Write to us and the support team will help.',
      title: 'How to use the platform',
      sections: [
        {
          heading: 'For buyers',
          text: 'Post a free request with the item description, budget and city. Sellers send offers with price and terms. Compare them, ask follow-up questions, accept the best one and leave a review after the deal.',
        },
        {
          heading: 'For sellers',
          text: 'Browse buyer requests in your categories and send offers: price, timing, delivery and warranty. A complete profile with contacts and reviews builds trust and raises the chance a buyer picks you.',
        },
        {
          heading: 'Deal safety',
          text: 'Check the other party’s rating and reviews, never share SMS codes or card details, and inspect the item before paying when possible. Report suspicious behaviour via the report button or the contact form.',
        },
      ],
    },
  },
};
