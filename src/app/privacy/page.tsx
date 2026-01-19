import { Shield, Lock, Eye, UserCheck, Database } from 'lucide-react';
import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'PRIVACY');
}

export default function PrivacyPage() {
  const principles = [
    {
      icon: Shield,
      title: 'Захист даних',
      description: 'Ми використовуємо сучасні технології для захисту вашої інформації',
    },
    {
      icon: Lock,
      title: 'Конфіденційність',
      description: 'Ваші дані ніколи не передаються третім особам без вашої згоди',
    },
    {
      icon: Eye,
      title: 'Прозорість',
      description: 'Ви завжди знаєте, які дані ми збираємо та як їх використовуємо',
    },
    {
      icon: UserCheck,
      title: 'Контроль',
      description: 'Ви маєте повний контроль над своїми персональними даними',
    },
  ];

  const sections = [
    {
      title: '1. Які дані ми збираємо',
      content: [
        "Персональна інформація: ім'я, прізвище, email, номер телефону",
        'Інформація профілю: фотографія, опис, категорії послуг',
        'Дані про активність: запити, пропозиції, повідомлення, відгуки',
        'Технічна інформація: IP-адреса, тип браузера, операційна система',
        'Дані про платежі: історія транзакцій (без номерів карток)',
      ],
    },
    {
      title: '2. Як ми використовуємо ваші дані',
      content: [
        'Надання та покращення наших послуг',
        "Зв'язок з вами щодо вашого акаунту та замовлень",
        'Персоналізація вашого досвіду на платформі',
        'Забезпечення безпеки та запобігання шахрайству',
        'Аналіз та покращення роботи платформи',
        'Відправка важливих повідомлень та оновлень',
      ],
    },
    {
      title: '3. Розкриття інформації третім особам',
      content: [
        'Ми не продаємо ваші персональні дані третім особам',
        'Дані можуть бути передані іншим користувачам для виконання замовлень',
        'Використовуємо надійних партнерів для обробки платежів',
        'Можемо передати дані за вимогою законодавства',
        'Дані можуть бути передані при злитті або продажу компанії',
      ],
    },
    {
      title: '4. Захист ваших даних',
      content: [
        'Використовуємо SSL-шифрування для захисту передачі даних',
        'Регулярно проводимо аудит безпеки наших систем',
        'Обмежуємо доступ до персональних даних лише уповноваженим співробітникам',
        'Зберігаємо резервні копії для запобігання втрати даних',
        'Негайно повідомляємо про будь-які порушення безпеки',
      ],
    },
    {
      title: '5. Ваші права',
      content: [
        'Право на доступ до ваших персональних даних',
        'Право на виправлення неточних даних',
        'Право на видалення ваших даних (право на забуття)',
        'Право на обмеження обробки даних',
        'Право на переносимість даних',
        'Право на заперечення проти обробки даних',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Політика конфіденційності
            </h1>
            <p className="text-lg text-muted-foreground">Останнє оновлення: 14 листопада 2025</p>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наші принципи</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-12">
                У Hochu ми серйозно ставимося до захисту вашої конфіденційності. Ця політика
                пояснює, які дані ми збираємо, як їх використовуємо та захищаємо.
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-8 shadow-sm border border-border"
                  >
                    <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground leading-relaxed flex">
                          <span className="text-primary mr-3 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary" />
                  Контакт з питань конфіденційності
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Якщо у вас є питання щодо цієї політики конфіденційності або ви хочете
                  скористатися своїми правами, будь ласка, зв'яжіться з нами:
                </p>
                <p className="text-foreground font-medium">
                  Email: privacy@hochu.com
                  <br />
                  Адреса: вул. Хрещатик, 1, Київ, Україна
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
