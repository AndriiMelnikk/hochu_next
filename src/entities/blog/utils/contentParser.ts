import type { LucideIcon } from 'lucide-react';
import {
  Target,
  DollarSign,
  Image as ImageIcon,
  FileText,
  Info,
  Lightbulb,
  CheckCircle,
  Star,
} from 'lucide-react';

// Типи для структури контенту (без React компонентів для серіалізації)
export type ArticleSectionData =
  | { type: 'intro'; content: string }
  | { type: 'tip'; title: string; content: string; items?: string[]; icon?: string }
  | { type: 'info'; title: string; content: string; icon?: string }
  | { type: 'conclusion'; content: string }
  | { type: 'tips-list'; title: string; items: string[] };

// Мапінг назв іконок до компонентів
const iconMap: Record<string, LucideIcon> = {
  Target,
  DollarSign,
  ImageIcon,
  FileText,
  Info,
  Lightbulb,
  CheckCircle,
  Star,
};

/**
 * Отримує компонент іконки за назвою
 */
export function getIconComponent(iconName?: string): LucideIcon | undefined {
  if (!iconName) return undefined;
  return iconMap[iconName];
}

/**
 * Конвертує JSON рядок з бекенду в структурований масив секцій
 */
export function parseContentToSections(content: string): ArticleSectionData[] {
  try {
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    // Fallback: якщо це старий формат (просто текст)
    return [{ type: 'intro', content: typeof parsed === 'string' ? parsed : content }];
  } catch {
    // Якщо не JSON, повертаємо як простий текст
    return [{ type: 'intro', content }];
  }
}

/**
 * Конвертує структурований масив секцій в JSON рядок для збереження на бекенді
 *
 * @example
 * ```ts
 * const sections: ArticleSectionData[] = [
 *   { type: 'intro', content: '...' },
 *   { type: 'tip', title: '...', content: '...', icon: 'Target' }
 * ];
 * const contentString = serializeSectionsToContent(sections);
 * // Тепер можна зберегти contentString в поле content статті
 * ```
 */
export function serializeSectionsToContent(sections: ArticleSectionData[]): string {
  return JSON.stringify(sections);
}

/**
 * Створює дефолтні секції для нової статті
 */
export function createDefaultSections(): ArticleSectionData[] {
  return [
    {
      type: 'intro',
      content:
        'Створення якісного запиту на послугу — це перший крок до успішного співробітництва з виконавцями. У цій статті ми розповімо, як правильно сформулювати ваші потреби, щоб отримати найкращі пропозиції.',
    },
    {
      type: 'tip',
      title: '1. Будьте конкретними',
      content: 'Чим детальніше ви опишете свої вимоги, тим точніші пропозиції отримаєте. Вкажіть:',
      items: [
        'Точний обсяг робіт',
        'Бажані терміни виконання',
        'Технічні вимоги та специфікації',
        'Формат результату',
      ],
      icon: 'Target',
    },
    {
      type: 'info',
      title: '2. Вкажіть бюджет',
      content:
        'Прозоре зазначення бюджету допомагає виконавцям оцінити реалістичність проєкту та запропонувати адекватні умови. Не бійтеся вказувати діапазон, якщо точна сума ще не визначена.',
      icon: 'DollarSign',
    },
    {
      type: 'info',
      title: '3. Додайте візуальні матеріали',
      content:
        'Фотографії, ескізи, приклади робіт — все це значно покращує розуміння вашого запиту. Зображення допомагають уникнути непорозумінь та забезпечують кращу комунікацію.',
      icon: 'ImageIcon',
    },
    {
      type: 'info',
      title: '4. Опишіть контекст',
      content:
        'Поясніть, для чого потрібна ця послуга, які цілі ви переслідуєте. Це допоможе виконавцям краще зрозуміти ваші потреби та запропонувати оптимальні рішення.',
      icon: 'FileText',
    },
    {
      type: 'tip',
      title: '5. Вкажіть критерії оцінки',
      content:
        'Що для вас найважливіше: швидкість, якість, ціна чи щось інше? Визначте пріоритети, щоб виконавці могли підготувати пропозиції, що відповідають вашим очікуванням.',
      icon: 'Info',
    },
    {
      type: 'conclusion',
      content:
        'Якісний запит — це запорука успішного співробітництва. Витративши трохи часу на детальний опис ваших потреб, ви заощадите набагато більше часу на пошуки підходящого виконавця та уточнення деталей.',
    },
    {
      type: 'tips-list',
      title: 'Корисні поради',
      items: [
        'Перевіряйте запит перед публікацією на наявність помилок',
        'Будьте відкриті до питань та уточнень',
        'Оперативно відповідайте на запитання виконавців',
        'Використовуйте систему рейтингів для вибору надійних виконавців',
      ],
    },
  ];
}
