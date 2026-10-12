# Дизайн-система Shukayu

Інструкція для реалізації UI: токени, розміри, відступи, кольори, стани та універсальні компоненти.

**Не входить у цей файл:** які блоки стоять на яких сторінках. Це буде окремий документ композиції.

**Світла тема only.** Dark mode не специфікуємо на цьому етапі.

Орієнтир візуальної мови — принципи Upwork, не копія 1:1: світле полотно, багато повітря, білі картки з тонкою рамкою, CTA-пігулки, вузький лівий icon-rail у кабінеті.

Компоненти живуть у `src/shared/ui/`. Токени — CSS-змінні в `src/app/globals.css` (HSL без `hsl()`, як зараз).

Поведінка тих самих компонентів (коли який контроль, відкриття/закриття, клавіатура, списки, перемикачі) — у [`docs/UX_COMPONENTS.md`](UX_COMPONENTS.md).

---

## 1. Принципи

1. **Червоний = дія.** Primary використовується для головного CTA, активного стану навігації, посилань-дій і фокусу. Не фарбувати ним великі площини (хедер, фон сторінки, всю картку).
2. **Повітря важливіше за декорації.** Картки тримаються рамкою, не тінню. Тінь — лише у overlay (dropdown, modal, tooltip).
3. **Одна шкала відступів.** Заборонені «магічні» значення поза шкалою `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`.
4. **Контраст.** Білий текст на primary проходить WCAG AA (~4.9:1). Дрібний текст на білому — лише `foreground` або `muted-foreground`, ніколи світло-сірий `#999`.
5. **Destructive ≠ primary.** Помилка й видалення — темніший бордовий, щоб «Надіслати пропозицію» і «Видалити» не виглядали однаково.
6. **Кабінет і публічна частина ділять токени**, але різний shell (див. §6).

---

## 2. Колір

Бренд: яскравий червоний як «шукаю / дію». Нейтралі — майже монохром, щоб червоний читався як акцент, а не як «сайт увесь червоний».

У CSS записувати **HSL-канали**. Hex — для дизайну й перевірки.

### 2.1. Бренд (primary)

| Роль | Token | Hex | HSL (для `:root`) | Застосування |
|---|---|---|---|---|
| Primary | `--primary` | `#E10600` | `2 100% 44%` | Заповнені CTA, checked, активний nav |
| Hover | `--primary-hover` | `#C20500` | `2 100% 38%` | Hover/active filled кнопок |
| Pressed | `--primary-active` | `#A30400` | `2 100% 32%` | `:active`, pressed |
| Soft | `--primary-soft` | `#FFECEA` | `6 100% 96%` | Банери, tint-чіпи, selected row, icon-rail active bg |
| On-primary | `--primary-foreground` | `#FFFFFF` | `0 0% 100%` | Текст/іконка на primary |

Primary **не** використовувати як фон сторінки, хедер або великі секції. Максимальна заливка акцентом — банер `primary-soft` або кнопка.

### 2.2. Нейтралі

| Роль | Token | Hex | HSL | Застосування |
|---|---|---|---|---|
| Background | `--background` | `#FFFFFF` | `0 0% 100%` | Полотно сторінки |
| Foreground | `--foreground` | `#1A1A1A` | `0 0% 10%` | Заголовки, основний текст |
| Card | `--card` | `#FFFFFF` | `0 0% 100%` | Картки, панелі |
| Card fg | `--card-foreground` | `#1A1A1A` | `0 0% 10%` | Текст у картці |
| Popover | `--popover` | `#FFFFFF` | `0 0% 100%` | Dropdown, tooltip, command |
| Muted | `--muted` | `#F7F7F8` | `240 5% 97%` | Вторинні поверхні, skeleton, tabs track |
| Muted fg | `--muted-foreground` | `#6B6B6B` | `0 0% 42%` | Підписи, мета, placeholder |
| Border | `--border` | `#E6E6E6` | `0 0% 90%` | Рамки карток, ділителі |
| Input | `--input` | `#E6E6E6` | `0 0% 90%` | Рамка інпута в спокої |
| Secondary | `--secondary` | `#1A1A1A` | `0 0% 10%` | Рідкісна темна filled-кнопка |
| Secondary fg | `--secondary-foreground` | `#FFFFFF` | `0 0% 100%` | Текст на secondary |
| Accent | `--accent` | `#FFECEA` | `6 100% 96%` | Ghost hover, selected list item |
| Accent fg | `--accent-foreground` | `#A30400` | `2 100% 32%` | Текст на accent |
| Ring | `--ring` | `#E10600` | `2 100% 44%` | Focus ring |

Додаткові поверхні (не обов’язково CSS-змінні, але фіксовані hex):

| Роль | Hex | Застосування |
|---|---|---|
| Surface promo | `#FFF1F0` | Промо-банер у кабінеті (аналог м’ятного блока Upwork, але в червоній гамі) |
| Surface quiet | `#F3F4F8` | Другорядна промо-картка, «побічна» колонка |
| Overlay | `#1A1A1A` / 50% | Modal/sheet backdrop |

### 2.3. Семантика (не бренд)

Червоний зайнятий брендом — success/warning/info мають бути однозначні.

| Роль | Token | Hex | HSL | Soft bg |
|---|---|---|---|---|
| Success | `--success` | `#157A3C` | `143 70% 28%` | `#E8F6EE` (`145 45% 94%`) |
| Warning | `--warning` | `#C2410C` | `17 88% 40%` | `#FFF4E5` (`36 100% 95%`) |
| Destructive | `--destructive` | `#9F1C16` | `3 76% 35%` | `#FDECEC` (`6 80% 96%`) |
| Info | `--info` | `#1D4ED8` | `224 76% 48%` | `#E8EEFB` (`224 70% 95%`) |

Foreground на всіх семантичних filled — `#FFFFFF`.

**Правила:**

- Рейтинг, «оплата підтверджена», «виконано» → success.
- Валідація форми, видалення, небезпечне підтвердження → destructive.
- Посилання в тексті → primary, не info.
- Info — лише інформаційні банери / нейтральні системні повідомлення.

### 2.4. Градієнти й тіні

Градієнти **не** використовувати для кнопок (раніше був `gradient-primary`). Кнопка — плаский primary.

Допустимий hero-акцент (вузько, лендінг):

```css
--gradient-hero: linear-gradient(135deg, hsl(2 100% 44%) 0%, hsl(2 100% 38%) 55%, hsl(0 0% 10%) 100%);
```

Тіні:

| Token | Значення | Коли |
|---|---|---|
| `--shadow-sm` | `0 1px 2px hsl(0 0% 0% / 0.04)` | Майже не потрібна |
| `--shadow-md` | `0 8px 24px hsl(0 0% 0% / 0.08)` | Dropdown, popover, hover-card |
| `--shadow-lg` | `0 16px 40px hsl(0 0% 0% / 0.12)` | Modal, sheet |
| `--shadow-red` | `0 8px 20px -4px hsl(2 100% 44% / 0.28)` | Лише primary CTA `lg`/`xl` на лендінгу |

Картки й інпути — **без тіні**, лише `1px solid border`.

---

## 3. Типографіка

**Шрифт: [Manrope](https://fonts.google.com/specimen/Manrope)** (Google Fonts, `next/font/google`).

Чому не Inter: Inter виглядає як системний UI. Manrope — геометричний гротеск із м’якими закінченнями (пасує до pill-кнопок), повна кирилиця, нормальна читабельність довгих українських текстів (запити, пропозиції, профілі).

Підключення:

```ts
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
```

Fallback: `Manrope, ui-sans-serif, system-ui, sans-serif`.

Моноширинний (коди, ID, OTP): системний `ui-monospace, SFMono-Regular, Menlo, monospace`. Окремий display-шрифт не вводимо.

### 3.1. Шкала

| Стиль | Size | Line-height | Weight | Letter-spacing | Застосування |
|---|---|---|---|---|---|
| Display | 40px / `text-4xl` | 48px / 1.2 | 700 | `-0.02em` | H1 лендінгу. Мобільний: 32/40 |
| H1 | 32px / `text-3xl` | 40px / 1.25 | 700 | `-0.02em` | Заголовок сторінки кабінету, job title. Мобільний: 28/36 |
| H2 | 24px / `text-2xl` | 32px / 1.33 | 600 | `-0.015em` | Секції («Portfolio», «Skills») |
| H3 | 20px / `text-xl` | 28px / 1.4 | 600 | `-0.01em` | Заголовок картки лістингу |
| Body | 16px / `text-base` | 24px / 1.5 | 400 | `0` | Основний текст, описи |
| Body sm | 14px / `text-sm` | 20px / 1.43 | 400 | `0` | Мета, допоміжний текст, пункти списку |
| Caption | 12px / `text-xs` | 16px / 1.33 | 500 | `0.01em` | Бейджі, чіпи, timestamps, підписи інпутів-хінтів |
| Button | 14px | 20px | 600 | `0` | Усі кнопки крім `xl` |
| Button xl | 16px | 24px | 600 | `0` | Hero CTA |

Правила:

- Один H1 на сторінку.
- Параграфи в картках — Body sm (14/20), не 16, щоб щільність була як у лістингу Upwork.
- Заголовок картки не обрізати посередині слова; max 2 рядки + ellipsis.
- Числа, ціни, `$30.00/hr` — той самий Manrope, weight 600.

---

## 4. Відступи (spacing)

База **4px**. Дозволені значення:

`4, 8, 12, 16, 24, 32, 40, 48, 64`

| Token | px | Типове використання |
|---|---|---|
| `1` | 4 | Зазор іконка↔лейбл у чіпі, focus-ring offset |
| `2` | 8 | Gap у групі кнопок, padding чіпа, gap іконка↔текст кнопки |
| `3` | 12 | Внутрішній padding compact-карток, gap мета-рядка |
| `4` | 16 | Padding мобільного контенту, gap між полями форми |
| `6` | 24 | Padding картки desktop, padding секції, gap заголовок↔контент |
| `8` | 32 | Відступ між секціями всередині сторінки |
| `10` | 40 | Відступ між великими блоками кабінету |
| `12` | 48 | Відступ секцій лендінгу |
| `16` | 64 | Рідко: hero vertical rhythm |

### 4.1. Правила сусідства (як елементи стоять один до одного)

| Пара | Відступ |
|---|---|
| Іконка ↔ текст у кнопці / пункті меню | 8px |
| Лейбл ↔ інпут | 8px |
| Хінт / помилка під інпутом | 4px від інпута; колір помилки — destructive |
| Поле ↔ поле у формі | 16px |
| Група полів ↔ CTA форми | 24px |
| Кнопки в одній групі (Save / Cancel) | 8px; primary справа на desktop, на мобільному primary на всю ширину зверху |
| Заголовок секції ↔ контент секції | 16px (кабінет) / 24px (лендінг) |
| Секція ↔ секція | 32px, роздільник `1px border` на повну ширину колонки |
| Картка ↔ картка у списку | 16px (вертикальний стек) або 24px (сітка) |
| Чіпи в рядку | 8px gap, 8px row-gap; перенос дозволений |
| Аватар ↔ блок імені | 16px |
| Ім’я ↔ мета (локація, час) | 4px |
| Контент колонки ↔ край viewport | 24px desktop / 16px mobile |
| Контент ↔ icon-rail | 0 (rail має власний бордер); внутрішній padding контенту 24px |
| Listing-card внутрішні блоки (заголовок / опис / чіпи / футер) | 12px між блоками |
| Модалка: заголовок ↔ body | 16px; body ↔ footer | 24px |
| Toast іконка ↔ текст | 12px |

Не клеїти інтерактивні елементи ближче ніж **8px**. Hit-area не менше **36px** (мобілка — **44px**).

---

## 5. Радіуси, рамки, іконки

```css
--radius: 0.75rem; /* 12px — база карток */
```

| Елемент | Радіус | Як у Tailwind |
|---|---|---|
| Картка, банер, alert, table wrapper | 12–16px | `rounded-xl` (16) для listing-card; `rounded-lg` (12) для дрібних карток |
| Інпут, select, textarea, otp | 8px | `rounded-md` |
| Модалка / sheet desktop | 16px | `rounded-xl` |
| Чіп, badge, avatar, switch | 999px | `rounded-full` |
| Кнопка (всі варіанти, крім icon-square) | 999px | `rounded-full` — CTA-пігулки |
| Icon-only кнопка в тулбарі | 8px або full | full, якщо в парі з pill-кнопками |
| Checkbox / radio | 4px / full | checkbox `rounded-sm`, radio `rounded-full` |
| Tooltip / dropdown | 8px | `rounded-md` |
| Icon-rail item | 8px | `rounded-md` |

Рамка: **1px solid `border`**. Товстіші рамки заборонені, крім focus (`2px ring`).

Іконки: **Lucide**, stroke `1.75`–`2`.

| Контекст | Розмір |
|---|---|
| У кнопці sm / чіпі | 16px |
| У кнопці default, меню, мета | 20px |
| Icon-rail | 22px |
| Порожній стан / ілюстрація в картці вибору ролі | 40–48px |

---

## 6. Breakpoints і shell

| Token | Ширина | Поведінка |
|---|---|---|
| base | &lt; 640 | Одна колонка, gutters 16px, icon-rail ховається |
| `sm` | 640 | Ширші форми, дві кнопки в рядок якщо місця досить |
| `md` | 768 | Планшет: картки ще в одну колонку, мета може бути в рядок |
| `lg` | 1024 | З’являється icon-rail кабінету; listing = контент + права колонка ~320px |
| `xl` | 1280 | Комфортний кабінет |
| `2xl` | 1400 | Container max |

Контентна колонка: **max-width 1120px** для кабінету (лістинг + sidebar 320px = контент ~760–800).  
Публічний лендінг: container **max 1200px**, padding `24px` / `16px`.

### 6.1. Публічний shell (гостьовий)

- Верхній хедер висота **64px**, фон білий, нижній бордер `1px`.
- Логотип зліва, навігація текстом по центру-праворуч, CTA справа.
- На `&lt; md`: бургер 44×44, меню — sheet знизу або зправа (див. Sheet).
- `main` під хедером: `padding-top` не потрібен, якщо хедер у потоці; якщо `fixed` — компенсувати **64px**.

### 6.2. Кабінетний shell (icon-rail)

Як на скрінах Upwork: вертикальна смуга іконок зліва на всю висоту.

| Параметр | Desktop (`lg+`) | Mobile |
|---|---|---|
| Ширина rail | **64px** | Немає; **нижня навігація 56px** або burger + sheet |
| Фон | `--background` | `--background` |
| Рамка | `1px` справа | `1px` зверху у bottom nav |
| Логотип | 32×32 зверху, padding 16px | У хедері |
| Item | 40×40, центрування, радіус 8px | 44×44 |
| Gap між items | 8px | 0, розподіл space-around |
| Іконка спокій | `muted-foreground` | те саме |
| Іконка hover | `foreground`, bg `muted` | — |
| Іконка active | `primary`, bg `primary-soft` | `primary` |
| Профіль | аватар 32px внизу rail | внизу / у бургер-меню |

Контент кабінету: `padding: 24px` (16px mobile). Внутрішня сітка: основна колонка + optional right rail **300–320px**, gap **24px**. Права колонка на `&lt; lg` ховається під акордеон або йде вниз.

---

## 7. Рух і стани

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 180ms cubic-bezier(0.4, 0, 0.2, 1);
```

Анімувати: `color`, `background-color`, `border-color`, `box-shadow`, `opacity`, `transform`. Не анімувати `width`/`height` (виняток: accordion/collapsible — height як у Radix).

| Стан | Правило |
|---|---|
| Default | Токени компонента |
| Hover | Primary: фон `--primary-hover`. Outline: бордер primary, текст primary, фон `primary-soft`. Ghost: фон `accent`. Карта лістингу: бордер `#D4D4D4`, курсор pointer |
| Focus-visible | `outline: none`; `box-shadow: 0 0 0 2px #fff, 0 0 0 4px hsl(var(--ring))` (ring 2px + offset 2px) |
| Active / pressed | Primary → `--primary-active`; легке `scale(0.98)` лише на пігулках |
| Disabled | `opacity: 0.5`, `pointer-events: none`, курсор `not-allowed` |
| Loading | Кнопка disabled + спінер 16px; ширина кнопки не стрибає (резервувати місце) |
| Error (поле) | Бордер destructive, хінт 12px destructive, ring destructive якщо фокус |
| Selected | Фон `primary-soft`, текст `accent-foreground` або primary |

Hover на touch-пристроях не імітувати. `:hover` лише з `@media (hover: hover)`.

---

## 8. Компоненти

Нижче — універсальні правила. Композиція сторінок не описується.

### 8.1. Button

Варіанти: `default` (primary filled), `outline`, `secondary` (темна filled), `ghost`, `link`, `destructive`, `destructiveOutline`, `icon`.

Варіанти `gradient` / `hero` / `pill` як окремі кольори — прибрати. Усі кнопки **pill** (`rounded-full`). `hero` = `default` + size `xl` + опційний `--shadow-red`.

| Size | Висота | Padding X | Шрифт | Мін. ширина |
|---|---|---|---|---|
| `sm` | 36px | 16px | 14/600 | — |
| `default` | 40px | 20px | 14/600 | — |
| `lg` | 44px | 24px | 14/600 | — |
| `xl` | 48px | 32px | 16/600 | 160px на лендінгу |
| `icon` | 40×40 | 0 | — | 40 |
| `icon-sm` | 32×32 | 0 | — | 32 |

Іконка в кнопці: 16px (`sm`/`icon-sm`) або 20px. Gap 8px.

Primary не ставити два підряд: один primary на групу. На мобільному primary в футері форми — `width: 100%`, `lg`.

### 8.2. Input, Textarea, Select, City combobox, Cascading select

Спільні:

| | |
|---|---|
| Висота (single-line) | 40px (`h-10`) |
| Padding | 12px 16px |
| Радіус | 8px |
| Шрифт | 14px desktop, 16px на мобільному (анти-zoom iOS) |
| Бордер спокій | `input` |
| Hover | бордер `#D4D4D4` |
| Focus | ring primary, бордер primary |
| Placeholder | `muted-foreground` |

Textarea: min-height **96px**, ті самі padding/радіус, resize vertical.

Select trigger = як Input. Dropdown — popover (див. 8.11), max-height 320px, item height 36px, padding 8×12.

Label: 14px / 500 / foreground, відступ до поля 8px. Обов’язкове поле — `*` кольором destructive, без окремого слова.

### 8.3. Input OTP

Клітинка 40×40 (мобілка 44×44), радіус 8px, gap 8px, шрифт 18/600, tabular. Focus як у Input.

### 8.4. Checkbox, Radio, Switch

| | Checkbox | Radio | Switch |
|---|---|---|---|
| Розмір | 18×18 | 18×18 | 24×40 (track) |
| Радіус | 4px | full | full |
| Checked | bg + border primary, галочка біла | точка primary | track primary, thumb 20px білий |
| Відступ до лейбла | 8px | 8px | 12px |
| Висота рядка | 24px+ | 24px+ | 24px |

Hit-area розширювати лейблом (весь рядок клікабельний).

### 8.5. Label, Form

`Form` (RHF + Zod) наслідує відступи §4.1. Помилка — 12px, не стрибає layout: резерв min-height 16px під полем або aria live.

### 8.6. Card

Три щільності:

| | Padding | Радіус | Тінь |
|---|---|---|---|
| Default | 24px | 12px | немає |
| Compact | 16px | 12px | немає |
| Listing | 20px 24px | 16px | немає; hover бордер |

Заголовок картки — H3. Опис — body sm, `muted-foreground` якщо вторинний. Внутрішні частини: header / content / footer без подвійного padding (не 24+24). Footer відділений `1px border-top` + padding-top 16px, якщо є дії.

### 8.7. Listing-card (універсальна картка сутності)

Для запиту, пропозиції, вакансії, профілю в лістингу. Не прив’язана до конкретної сторінки.

Структура зверху вниз, gap **12px**:

1. Опційний рядок бейджів (ліворуч) + іконки дії (праворуч, ghost icon 32).
2. Заголовок H3, max 2 рядки.
3. Мета 14px muted: тип оплати, рівень, термін — роздільник `·` з пробілами.
4. Опис 14/20, max 3 рядки, ellipsis, лінк «more» primary 14/600 без underline до hover.
5. Рядок чіпів (скіли / категорії).
6. Футер 12–14px: статус оплати (success), рейтинг, spend, локація. Gap 16px між групами.

Картка клікабельна цілком. Вкладені кнопки (save, dislike) — `stopPropagation`, hit 32×32.

На мобільному футер переноситься, padding 16px.

### 8.8. Badge, Chip / Tag, Hero-badge

| | Badge | Chip (скіл, фільтр) |
|---|---|---|
| Висота | 20px | 28px |
| Padding | 0 8px | 0 12px |
| Шрифт | 12/500 | 13/500 |
| Радіус | full | full |
| Default | primary-soft + primary text **або** muted + foreground | фон `#F3F4F8`, текст foreground, без бордера |
| Success / warning / destructive | soft bg + семантичний текст | — |

Чіпи не є primary filled — інакше сторінка «кричить». Активний фільтр: бордер primary + текст primary + soft bg.

Hero-badge: той самий chip, можна з іконкою 16px, фон `primary-soft`.

### 8.9. Tabs, Toggle, Toggle group

Tabs як на скрінах (підкреслення, не «сегмент»):

- Висота рядка 44px, gap між табами 24px.
- Текст 14/600, спокій `muted-foreground`, active `foreground`.
- Active: нижній бордер **2px primary**, без фону-пігулки.
- Нижня лінія всього рядка `1px border`.
- Disabled + іконка lock 16px, opacity 0.5.

Сегментний контроль (view switcher) — Toggle group: висота 36px, радіус full на групі, item padding 12px, active bg white + shadow-sm всередині muted track. Не плутати з Tabs сторінки.

### 8.10. Avatar

| Size | px | Де |
|---|---|---|
| `xs` | 24 | Коментар, toast |
| `sm` | 32 | Icon-rail, хедер, мета картки |
| `md` | 40 | Список, меню |
| `lg` | 64 | Заголовок профілю |
| `xl` | 96 | Шапка публічного профілю |

Завжди `rounded-full`. Fallback: `muted` + іконка User 50% або ініціали 14/600. Онлайн-індикатор: 8px success, кільце 2px white, нижній правий край.

### 8.11. Tooltip, Hover-card, Popover, Dropdown, Context menu, Command, Menubar, Navigation menu

Спільне для overlay-меню:

- Фон `popover`, бордер 1px, радіус 8px, тінь `--shadow-md`.
- Padding списку 8px; item 36px, padding 8×12, радіус 6px.
- Hover/focus item: `accent`.
- Деструктор у меню: текст destructive, hover destructive-soft.
- Separator: 1px, margin 4px 8px.
- Offset від тригера: **8px**.
- Z-index: 50.

Tooltip: padding 6×10, шрифт 12/500, max-width 240px, delay 200ms. На скрінах Upwork tooltip темний — **у нас світлий** (єдина світла тема, не змішувати інверт).

Command (пошук у палітрі): поле зверху висота 40, без бордера знизу 1px, список як dropdown.

Navigation menu (публічний хедер): тригер як ghost, панель на всю ширину контейнера, padding 24px, колонки gap 32px.

### 8.12. Dialog, Alert-dialog, Sheet, Drawer

| | Dialog / Alert-dialog | Sheet | Drawer |
|---|---|---|---|
| Ширина | 512px (`max-w-lg`), на мобільному 100% − 32px | 400px з ребра; мобільний 100% | Мобільний bottom sheet |
| Padding | 24px | 24px | 24px + handle 32×4 muted, радіус full |
| Радіус | 16px | 0 на десктопі з ребра; 16px зверху на мобільному | 16px зверху |
| Backdrop | `#1A1A1A` 50% | те саме | те саме |
| Тінь | `--shadow-lg` | — | `--shadow-lg` |
| Close | 32×32 ghost, 16px від кута | те саме | свайп вниз |

Alert-dialog: title H3, текст body sm muted, футер gap 8px, destructive action — variant destructive, cancel — outline.

Не класти два діалоги один на один. Sheet для мобільної навігації й фільтрів.

### 8.13. Alert, Toast / Sonner / Toaster, Error, Loading

Alert: padding 16px, радіус 12px, бордер 1px семантичний, фон soft. Іконка 20px зліва, gap 12px. Закрити — ghost icon справа, якщо dismissible.

Промо-банер кабінету (Upgrade / Share): як alert, але фон `surface-promo` або `surface-quiet`, без іконки статусу, CTA link 14/600 primary.

Toast: низ-праворуч desktop (offset 24px), низ-центр mobile. Min-width 320, max 420. Padding 16px, радіус 12px, тінь md. Авто-закриття 5s. Не використовувати primary filled на всю плашку.

Error-блок сторінки: як Alert destructive, кнопка outline «Спробувати ще».

Loading: спінер 20px, колір primary, центр контейнера. Повноекранний — не блокувати layout хедера/rail. Skeleton: `muted`, радіус як у замінюваного елемента, pulse 1.2s.

### 8.14. Table

Wrapper: картка, радіус 12px, бордер, горизонтальний scroll на мобільному.

| | |
|---|---|
| Висота рядка | 48px |
| Header | 12/600, muted-foreground, uppercase вимкнений, фон `muted` |
| Cell padding | 12px 16px |
| Hover row | `muted` |
| Selected row | `primary-soft` |
| Бордер рядків | 1px `border` |

Не зебрити. Числа — align right.

### 8.15. Pagination, Universal pagination

Висота кнопок 36px, радіус full або 8px (однаково в усьому проєкті — **8px**, щоб не плутати з CTA). Active: outline primary. Gap 4px. Відступ від списку зверху **24px**, вирівнювання по центру або по правому краю таблиці.

### 8.16. Progress, Slider, Calendar, Carousel, Chart, Aspect-ratio

**Progress:** track висота 8px, радіус full, фон `muted`, fill primary. Відсоток caption справа 12px.

**Slider:** track 4px, thumb 16px білий + бордер 2px primary, hit 44px.

**Calendar:** клітинка 36×36, радіус 8px, selected — primary filled, range — primary-soft, today — бордер primary. Хедер місяця 14/600, стрілки icon 32.

**Carousel:** стрілки ghost icon 40 на краях, overlay. Dots 8px, active primary, gap 8px, знизу 16px. Gap слайдів 16px.

**Chart:** колірна серія: primary `#E10600`, foreground `#1A1A1A`, success `#157A3C`, info `#1D4ED8`, warning `#C2410C`, muted `#A3A3A3`. Сітка `#E6E6E6`. Легенда 12px. Не використовувати градієнт area з opacity &gt; 16%.

**Aspect-ratio:** для медіа в картках `16/9` (обкладинка), `1/1` (аватар/портфоліо thumb), `4/3` (галерея). Радіус як у батьківської картки, `overflow: hidden`.

### 8.17. Accordion, Collapsible, Resizable, Scroll-area, Separator, Breadcrumb

**Accordion / collapsible:** тригер висота 48px, 14/600, шеврон 16px rotate 180 на open, 180ms. Контент padding 0 0 16px. Не більше одного відкритого в FAQ, якщо не вказано інакше.

**Resizable:** handle 1px, hover 4px `border`, не primary.

**Scroll-area:** scrollbar 8px, thumb `#D4D4D4`, радіус full. Не overlay-scroll на desktop кабінеті (контент має стабільну ширину).

**Separator:** 1px `border`. Вертикальний у мета-рядку — 12px висоти, не full. Відступи 16px, якщо це секційний дільник.

**Breadcrumb:** 14px, роздільник `/` або chevron 12px muted. Поточна — foreground 500, лінки — muted hover primary. Відступ під хедером до H1: 16px.

### 8.18. Sidebar (shadcn) vs icon-rail

Повноширинний `Sidebar` (16rem) **не** є дефолтом кабінету. Дефолт — icon-rail 64px (§6.2).

Розгорнутий sidebar (налаштування, фільтри) — Sheet або колонка 280–320px, не другий rail. Якщо використовується `Sidebar` shadcn: collapsed ширина має бути **64px**, item 40×40, щоб збігтися з цим документом.

### 8.19. Link

Інлайн у тексті: primary, underline offset 2px, underline на hover. Навігація хедера: foreground, hover primary, без underline, 14/500. Не `:visited` фіолетовим.

### 8.20. Skeleton, Empty

Skeleton повторює форму контенту (рядок 12px радіус 4, картка як listing). Empty: іконка 40 muted, заголовок 16/600, текст 14 muted max 360px, одна outline-кнопка, gap 8 / 8 / 16.

---

## 9. Карта токенів → код

Замінити в `:root` (`src/app/globals.css`). Блок `.dark` на цьому етапі не оновлювати як робочу тему (можна залишити, але UI збираємо лише зі світлих токенів).

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 10%;

  --card: 0 0% 100%;
  --card-foreground: 0 0% 10%;

  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 10%;

  --primary: 2 100% 44%;
  --primary-foreground: 0 0% 100%;
  --primary-hover: 2 100% 38%;
  --primary-active: 2 100% 32%;
  --primary-soft: 6 100% 96%;

  --secondary: 0 0% 10%;
  --secondary-foreground: 0 0% 100%;

  --muted: 240 5% 97%;
  --muted-foreground: 0 0% 42%;

  --accent: 6 100% 96%;
  --accent-foreground: 2 100% 32%;

  --destructive: 3 76% 35%;
  --destructive-foreground: 0 0% 100%;

  --success: 143 70% 28%;
  --success-foreground: 0 0% 100%;

  --warning: 17 88% 40%;
  --warning-foreground: 0 0% 100%;

  --info: 224 76% 48%;
  --info-foreground: 0 0% 100%;

  --border: 0 0% 90%;
  --input: 0 0% 90%;
  --ring: 2 100% 44%;

  --radius: 0.75rem;

  --shadow-sm: 0 1px 2px hsl(0 0% 0% / 0.04);
  --shadow-md: 0 8px 24px hsl(0 0% 0% / 0.08);
  --shadow-lg: 0 16px 40px hsl(0 0% 0% / 0.12);
  --shadow-red: 0 8px 20px -4px hsl(2 100% 44% / 0.28);
}
```

Додати в `tailwind.config.ts` кольори `success`, `warning`, `info`, `primary-hover` / `primary-soft` за тим самим патерном, що `primary`. Тінь `blue` → `red`. Шрифт: `fontFamily.sans = ['Manrope', ...]`.

Кнопки: `rounded-full` у базовому `cva`, hover `bg-[hsl(var(--primary-hover))]` замість `bg-primary/90` (alpha на яскравому червоному дає брудний рожевий).

---

## 10. Що свідомо не змінюємо цим файлом

- Розклад блоків по маршрутах (`/`, `/request`, профіль, кабінет).
- Копірайт, іконки бренду Upwork, їхній зелений.
- Dark theme.
- Контентна стратегія SEO (див. `docs/SEO_TECHNICAL.md`).

Поведінка контролів: [`docs/UX_COMPONENTS.md`](UX_COMPONENTS.md).  
Композиція сторінок: [`docs/PAGE_COMPOSITION.md`](PAGE_COMPOSITION.md).
