type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Рендерить JSON-LD структуровані дані (Schema.org) */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
