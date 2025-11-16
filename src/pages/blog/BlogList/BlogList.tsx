import Navbar from "@widgets/app/Header";
import Footer from "@widgets/app/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card";
import { Badge } from "@shared/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogList = () => {
  const articles = [
    {
      id: 1,
      title: "Як створити ідеальний запит на послугу",
      description: "Дізнайтеся, як правильно сформулювати запит, щоб отримати найкращі пропозиції від виконавців.",
      category: "Поради покупцям",
      author: "Команда Hochu",
      date: "2024-03-15",
      readTime: "5 хв",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "10 порад для успішних продавців",
      description: "Секрети створення привабливих пропозицій та збільшення конверсії замовлень.",
      category: "Поради продавцям",
      author: "Команда Hochu",
      date: "2024-03-12",
      readTime: "7 хв",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Система рейтингів та відгуків",
      description: "Як працює наша система оцінювання та чому важливо залишати відгуки.",
      category: "Платформа",
      author: "Команда Hochu",
      date: "2024-03-10",
      readTime: "4 хв",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Гейміфікація: Досягнення та рівні",
      description: "Дізнайтеся про систему досягнень, рівнів та нагород на платформі.",
      category: "Платформа",
      author: "Команда Hochu",
      date: "2024-03-08",
      readTime: "6 хв",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Безпека та захист угод",
      description: "Як ми забезпечуємо безпеку транзакцій та захист інтересів користувачів.",
      category: "Безпека",
      author: "Команда Hochu",
      date: "2024-03-05",
      readTime: "8 хв",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Ціноутворення: Як визначити справедливу ціну",
      description: "Практичні поради щодо визначення конкурентної та справедливої ціни за послуги.",
      category: "Поради продавцям",
      author: "Команда Hochu",
      date: "2024-03-01",
      readTime: "5 хв",
      image: "/placeholder.svg",
    },
  ];

  const categories = ["Всі статті", "Поради покупцям", "Поради продавцям", "Платформа", "Безпека"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Блог Hochu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Корисні статті, поради та новини про платформу
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Всі статті" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} to={`/blog/${article.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4">{article.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 line-clamp-2 hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="mb-4 line-clamp-3">
                    {article.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString('uk-UA')}
                      </span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="mt-4 flex items-center text-primary font-medium">
                    Читати далі
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
