import { ArticleSectionData, getIconComponent } from '@/entities/blog/utils/contentParser';
import { cn } from '@/lib/utils';
import { Card, CardBody } from '@/ui-v2';

type Props = {
  section: ArticleSectionData;
};

export function ArticleSection({ section }: Props) {
  switch (section.type) {
    case 'intro':
    case 'conclusion':
      return (
        <div
          className={cn(
            'prose prose-slate max-w-none dark:prose-invert',
            section.type === 'conclusion' && 'mt-8 p-6 bg-v2-surface-subtle rounded-v2-lg',
          )}
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      );

    case 'tip':
    case 'info': {
      const Icon = getIconComponent(section.icon);
      return (
        <Card
          className={cn('my-6', section.type === 'tip' ? 'border-v2-primary' : 'border-v2-link')}
        >
          <CardBody className="p-6">
            <div className="flex items-start gap-4">
              {Icon && (
                <div
                  className={cn(
                    'p-2 rounded-full',
                    section.type === 'tip'
                      ? 'bg-v2-primary text-v2-primary'
                      : 'bg-v2-info-bg text-v2-link',
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <div className="text-v2-muted">{section.content}</div>
                {section.type === 'tip' && section.items && (
                  <ul className="list-disc list-inside mt-4 space-y-1 text-v2-muted">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      );
    }

    case 'tips-list':
      return (
        <div className="my-8">
          <h3 className="text-xl font-[550] mb-4">{section.title}</h3>
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-v2-surface rounded-v2-lg border">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-v2-primary text-xs font-[550] text-v2-primary">
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
