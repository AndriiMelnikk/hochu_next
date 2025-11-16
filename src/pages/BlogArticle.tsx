import { useParams, Link } from "react-router-dom";
import Navbar from "@widgets/app/Header";
import Footer from "@widgets/app/Footer";
import { Card, CardContent } from "@shared/ui/card";
import { Badge } from "@shared/ui/badge";
import { Button } from "@shared/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";

const BlogArticle = () => {
  const { id } = useParams();

  // Макетні дані статті
  const article = {
    id,
    title: "Як створити ідеальний запит на послугу",
    category: "Поради покупцям",
    author: "Команда Hochu",
    date: "2024-03-15",
    readTime: "5 хв",
    image: "/placeholder.svg",
    content: `
      <h2>Вступ</h2>
      <p>Створення якісного запиту на послугу — це перший крок до успішного співробітництва з виконавцями. У цій статті ми розповімо, як правильно сформулювати ваші потреби, щоб отримати найкращі пропозиції.</p>

      <h2>1. Будьте конкретними</h2>
      <p>Чим детальніше ви опишете свої вимоги, тим точніші пропозиції отримаєте. Вкажіть:</p>
      <ul>
        <li>Точний обсяг робіт</li>
        <li>Бажані терміни виконання</li>
        <li>Технічні вимоги та специфікації</li>
        <li>Формат результату</li>
      </ul>

      <h2>2. Вкажіть бюджет</h2>
      <p>Прозоре зазначення бюджету допомагає виконавцям оцінити реалістичність проєкту та запропонувати адекватні умови. Не бійтеся вказувати діапазон, якщо точна сума ще не визначена.</p>

      <h2>3. Додайте візуальні матеріали</h2>
      <p>Фотографії, ескізи, приклади робіт — все це значно покращує розуміння вашого запиту. Зображення допомагають уникнути непорозумінь та забезпечують кращу комунікацію.</p>

      <h2>4. Опишіть контекст</h2>
      <p>Поясніть, для чого потрібна ця послуга, які цілі ви переслідуєте. Це допоможе виконавцям краще зрозуміти ваші потреби та запропонувати оптимальні рішення.</p>

      <h2>5. Вкажіть критерії оцінки</h2>
      <p>Що для вас найважливіше: швидкість, якість, ціна чи щось інше? Визначте пріоритети, щоб виконавці могли підготувати пропозиції, що відповідають вашим очікуванням.</p>

      <h2>Висновок</h2>
      <p>Якісний запит — це запорука успішного співробітництва. Витративши трохи часу на детальний опис ваших потреб, ви заощадите набагато більше часу на пошуки підходящого виконавця та уточнення деталей.</p>

      <h2>Корисні поради</h2>
      <ul>
        <li>Перевіряйте запит перед публікацією на наявність помилок</li>
        <li>Будьте відкриті до питань та уточнень</li>
        <li>Оперативно відповідайте на запитання виконавців</li>
        <li>Використовуйте систему рейтингів для вибору надійних виконавців</li>
      </ul>
    `,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад до блогу
          </Button>
        </Link>

        {/* Article Header */}
        <Card className="mb-8">
          <div className="relative h-96 w-full overflow-hidden rounded-t-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('uk-UA', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} читання</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Поділитися
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Схожі статті</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Link key={i} to={`/blog/${i + 1}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-2">Поради продавцям</Badge>
                    <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                      10 порад для успішних продавців
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Секрети створення привабливих пропозицій...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
