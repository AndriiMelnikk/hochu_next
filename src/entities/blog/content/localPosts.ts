import type { Locale } from '@/locales/config';
import type { ArticleSectionData } from '../utils/contentParser';

type LocalizedPost = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  sections: ArticleSectionData[];
};

export type LocalPost = {
  /** ЧПУ-ідентифікатор статті: /blog/{slug} */
  slug: string;
  image: string;
  author: string;
  date: string;
  updated?: string;
  content: Record<Locale, LocalizedPost>;
};

/**
 * Статті, що зберігаються в репозиторії (поряд зі статтями з API).
 * Перевага: повний контроль над SEO-текстом і стабільні URL.
 */
export const LOCAL_POSTS: LocalPost[] = [
  {
    slug: 'zapyt-khochu-kupyty-zamist-poshuku',
    image: '/images/platform-overview.jpg',
    author: 'Shukayu',
    date: '2026-10-28',
    content: {
      uk: {
        title: 'Чому вигідніше створити запит «хочу купити», ніж шукати товар самому',
        description:
          'Запит «хочу купити» економить години пошуку, змушує продавців конкурувати за вас і дає кращі умови: ціну, доставку, гарантію. Пояснюємо, як це працює.',
        category: 'Поради покупцям',
        readTime: '6 хв',
        sections: [
          {
            type: 'intro',
            content:
              'Звичний шлях покупця виглядає так: відкрити кілька маркетплейсів, прогорнути десятки оголошень, порівняти ціни, написати продавцям, дочекатися відповідей і зрозуміти, що половина товарів уже продана. На це легко витратити кілька вечорів. Є інший підхід — зворотний аукціон: ви один раз описуєте, що хочете купити, а продавці самі приходять до вас із пропозиціями. Розбираємо, чому це вигідніше для покупця.',
          },
          {
            type: 'tip',
            icon: 'Target',
            title: 'Економія часу: продавці шукають вас, а не ви їх',
            content:
              'Коли ви шукаєте самі, кожна година роботи — ваша. Коли ви створюєте запит, роботу виконують продавці: вони бачать, що вам потрібно, і надсилають готову пропозицію з ціною та умовами. Вам залишається лише порівняти відповіді в одному місці.',
            items: [
              'Один запит замість десятків вкладок і переписок у різних месенджерах.',
              'Пропозиції приходять від продавців, у яких товар справді є в наявності.',
              'Ви відповідаєте тоді, коли зручно вам, а не підлаштовуєтесь під графік продавців.',
            ],
          },
          {
            type: 'tip',
            icon: 'Wallet',
            title: 'Конкуренція продавців працює на вашу користь',
            content:
              'Коли кілька продавців відповідають на один запит, кожен розуміє, що покупець бачить і інші пропозиції. Тому вони змагаються не за увагу «всіх підряд», а за конкретного клієнта, який готовий купити. Найчастіше це означає нижчу ціну, ніж у звичайному оголошенні, бо продавець одразу пропонує найкращі умови, щоб не програти конкурентам.',
            items: [
              'Ви бачите кілька цін на той самий товар поруч і обираєте найвигіднішу.',
              'Продавцю вигідніше дати знижку, ніж втратити готового покупця.',
              'Бюджет у запиті задає орієнтир — продавці підлаштовуються під нього.',
            ],
          },
          {
            type: 'tip',
            icon: 'Star',
            title: 'Кращі умови — не лише ціна',
            content:
              'Конкуренція стосується не тільки суми. Продавці виграють покупця й іншими перевагами: швидкою доставкою, гарантією, можливістю перевірити товар, бонусами до покупки. У запиті ви можете одразу вказати, що для вас важливо, і отримувати пропозиції, які цьому відповідають.',
            items: [
              'Стан товару: новий чи вживаний — ви вказуєте це у запиті.',
              'Терміновість: продавці бачать, як швидко вам потрібен товар.',
              'Місто: пропозиції від продавців поруч або з доставкою по Україні.',
            ],
          },
          {
            type: 'info',
            icon: 'Info',
            title: 'Як це працює на Shukayu',
            content:
              'Ви безкоштовно створюєте запит: обираєте категорію, описуєте товар, вказуєте бюджет, місто й терміновість, за бажанням додаєте фото. Запит бачать продавці відповідної категорії та надсилають пропозиції з ціною й умовами. Ви порівнюєте їх, ставите уточнювальні питання, приймаєте найкращу й після угоди залишаєте відгук, який допомагає іншим покупцям.',
          },
          {
            type: 'tips-list',
            title: 'Як скласти запит, на який охоче відповідають',
            items: [
              'Пишіть конкретно: модель, розмір, колір, характеристики, які важливі.',
              'Вказуйте реалістичний бюджет — так ви отримаєте більше відповідей.',
              'Додайте фото або приклад товару, якщо описати словами складно.',
              'Зазначте місто та чи потрібна доставка.',
              'Відповідайте на питання продавців — активний покупець отримує кращі пропозиції.',
            ],
          },
          {
            type: 'info',
            icon: 'Lightbulb',
            title: 'Коли самостійний пошук усе ж має сенс',
            content:
              'Якщо потрібна дрібниця, яку можна купити в найближчому магазині за п’ять хвилин, запит не обов’язковий. Але для покупок, де ціна помітно відрізняється між продавцями — техніка, електроніка, меблі, авто- та будматеріали, — запит майже завжди економить і час, і гроші.',
          },
          {
            type: 'conclusion',
            content:
              'Запит «хочу купити» змінює роль покупця: замість того щоб бігати за продавцями, ви обираєте з тих, хто прийшов до вас сам. Це економія часу, реальна конкуренція за вашу покупку і кращі умови угоди. Спробуйте створити свій перший запит на Shukayu — це безкоштовно і займає кілька хвилин.',
          },
        ],
      },
      en: {
        title: 'Why posting a “want to buy” request beats searching on your own',
        description:
          'A “want to buy” request saves hours of searching, makes sellers compete for you and gets you better terms: price, delivery and warranty. Here is how it works.',
        category: 'Tips for buyers',
        readTime: '6 min',
        sections: [
          {
            type: 'intro',
            content:
              'The usual buyer journey looks like this: open several marketplaces, scroll through dozens of listings, compare prices, message sellers, wait for replies and discover that half of the items are already sold. That easily takes a few evenings. There is another approach — a reverse auction: you describe once what you want to buy, and sellers come to you with offers. Here is why it pays off for the buyer.',
          },
          {
            type: 'tip',
            icon: 'Target',
            title: 'Save time: sellers look for you, not the other way round',
            content:
              'When you search yourself, every hour of work is yours. When you post a request, sellers do the work: they see what you need and send a ready offer with price and terms. All you do is compare the replies in one place.',
            items: [
              'One request instead of dozens of tabs and chats in different messengers.',
              'Offers come from sellers who actually have the item in stock.',
              'You reply when it suits you instead of adapting to sellers’ schedules.',
            ],
          },
          {
            type: 'tip',
            icon: 'Wallet',
            title: 'Seller competition works in your favour',
            content:
              'When several sellers reply to one request, each knows the buyer sees the other offers too. They compete not for random attention but for a specific customer ready to buy. Most often that means a lower price than in a regular listing, because sellers lead with their best terms to avoid losing to competitors.',
            items: [
              'You see several prices for the same item side by side and pick the best one.',
              'A discount is cheaper for a seller than losing a ready buyer.',
              'The budget in your request sets the benchmark, and sellers adjust to it.',
            ],
          },
          {
            type: 'tip',
            icon: 'Star',
            title: 'Better terms, not just a better price',
            content:
              'Competition is not only about the amount. Sellers also win buyers with fast delivery, warranty, the option to inspect the item and purchase bonuses. In your request you can state upfront what matters to you and receive offers that match it.',
            items: [
              'Condition: new or used — you specify it in the request.',
              'Urgency: sellers see how soon you need the item.',
              'City: offers from nearby sellers or with delivery across Ukraine.',
            ],
          },
          {
            type: 'info',
            icon: 'Info',
            title: 'How it works on Shukayu',
            content:
              'You create a request for free: pick a category, describe the item, set your budget, city and urgency, and optionally add photos. Sellers in that category see the request and send offers with price and terms. You compare them, ask follow-up questions, accept the best one and leave a review after the deal to help other buyers.',
          },
          {
            type: 'tips-list',
            title: 'How to write a request sellers love to answer',
            items: [
              'Be specific: model, size, colour and the features that matter.',
              'Set a realistic budget — you will get more replies.',
              'Add a photo or an example if the item is hard to describe.',
              'Mention your city and whether you need delivery.',
              'Answer sellers’ questions — active buyers get better offers.',
            ],
          },
          {
            type: 'info',
            icon: 'Lightbulb',
            title: 'When searching yourself still makes sense',
            content:
              'If you need a small item you can grab in the nearest shop in five minutes, a request is optional. But for purchases where prices vary noticeably between sellers — appliances, electronics, furniture, auto parts and building materials — a request almost always saves both time and money.',
          },
          {
            type: 'conclusion',
            content:
              'A “want to buy” request changes the buyer’s role: instead of chasing sellers, you choose from those who came to you. That means saved time, real competition for your purchase and better deal terms. Try creating your first request on Shukayu — it is free and takes a few minutes.',
          },
        ],
      },
    },
  },
];
