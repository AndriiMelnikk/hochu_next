import { JsonLd } from '@/shared/seo/JsonLd';
import { getFaqPageJsonLd, type FaqJsonLdItem } from '@/shared/seo/schemas';

export type SeoTextBlock = {
  title: string;
  /** Заголовок сторінки, якщо його немає у клієнтському контенті */
  h1?: string;
  intro?: string;
  sections: Array<{ heading: string; text: string }>;
  faqTitle?: string;
  faq?: FaqJsonLdItem[];
};

/** Серверний текстовий блок сторінки: пояснення + FAQ (з FAQPage JSON-LD). */
export function SeoTextSection({ block }: { block: SeoTextBlock }) {
  return (
    <section className="container mx-auto px-4 max-w-4xl py-12">
      {block.h1 && <h1 className="text-4xl md:text-5xl font-bold mb-4">{block.h1}</h1>}
      {block.intro && <p className="text-lg text-muted-foreground mb-8">{block.intro}</p>}
      <h2 className="text-2xl font-bold mb-6">{block.title}</h2>
      <div className="space-y-6">
        {block.sections.map((section) => (
          <div key={section.heading}>
            <h3 className="text-lg font-semibold mb-2">{section.heading}</h3>
            <p className="text-muted-foreground leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
      {block.faq && block.faq.length > 0 && (
        <>
          <JsonLd data={getFaqPageJsonLd(block.faq)} />
          <h2 className="text-2xl font-bold mt-12 mb-6">{block.faqTitle}</h2>
          <dl className="space-y-5">
            {block.faq.map((item) => (
              <div key={item.question}>
                <dt className="font-semibold mb-1">{item.question}</dt>
                <dd className="text-muted-foreground leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </>
      )}
    </section>
  );
}
