import { ArticleSectionData, getIconComponent } from "@/entities/blog/utils/contentParser";
import { Card, CardContent } from "@shared/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  section: ArticleSectionData;
};

export function ArticleSection({ section }: Props) {
  switch (section.type) {
    case "intro":
    case "conclusion":
      return (
        <div 
          className={cn(
            "prose prose-slate max-w-none dark:prose-invert",
            section.type === "conclusion" && "mt-8 p-6 bg-muted/50 rounded-lg"
          )}
          dangerouslySetInnerHTML={{ __html: section.content }} 
        />
      );

    case "tip":
    case "info": {
      const Icon = getIconComponent(section.icon);
      return (
        <Card className={cn("my-6", section.type === "tip" ? "border-primary/50" : "border-blue-500/50")}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {Icon && (
                <div className={cn(
                  "p-2 rounded-full", 
                  section.type === "tip" ? "bg-primary/10 text-primary" : "bg-blue-500/10 text-blue-500"
                )}>
                  <Icon className="h-6 w-6" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <div className="text-muted-foreground">{section.content}</div>
                {section.type === 'tip' && section.items && (
                  <ul className="list-disc list-inside mt-4 space-y-1 text-muted-foreground">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    case "tips-list":
      return (
        <div className="my-8">
          <h3 className="text-xl font-bold mb-4">{section.title}</h3>
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
      
    default:
      return null;
  }
}
