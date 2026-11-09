'use client';

import { useLingui } from '@lingui/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Card } from '@/ui-v2';
import { Info } from 'lucide-react';

export function StatusGuide() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <Card variant="muted" className="p-6">
      <h2 className="mb-2 flex items-center gap-2 text-lg font-[550]">
        <Info className="size-5 text-v2-primary" />
        {t('status.guide.title')}
      </h2>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="requests">
            <AccordionTrigger>{t('status.guide.request.title')}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <StatusItem
                  name={t('status.guide.request.pending.name')}
                  description={t('status.guide.request.pending.desc')}
                  nextStep={t('status.guide.request.pending.next')}
                  tone="neutral"
                />
                <StatusItem
                  name={t('status.guide.request.active.name')}
                  description={t('status.guide.request.active.desc')}
                  nextStep={t('status.guide.request.active.next')}
                  tone="info"
                />
                <StatusItem
                  name={t('status.guide.request.closed.name')}
                  description={t('status.guide.request.closed.desc')}
                  nextStep={t('status.guide.request.closed.next')}
                  tone="neutral"
                />
                <StatusItem
                  name={t('status.guide.request.completed.name')}
                  description={t('status.guide.request.completed.desc')}
                  nextStep={t('status.guide.request.completed.next')}
                  tone="success"
                />
                <StatusItem
                  name={t('status.guide.request.cancelled.name')}
                  description={t('status.guide.request.cancelled.desc')}
                  nextStep={t('status.guide.request.cancelled.next')}
                  tone="danger"
                />
                <StatusItem
                  name={t('status.guide.request.rejected.name')}
                  description={t('status.guide.request.rejected.desc')}
                  nextStep={t('status.guide.request.rejected.next')}
                  tone="danger"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="proposals">
            <AccordionTrigger>{t('status.guide.proposal.title')}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <StatusItem
                  name={t('status.guide.proposal.pending.name')}
                  description={t('status.guide.proposal.pending.desc')}
                  nextStep={t('status.guide.proposal.pending.next')}
                  tone="info"
                />
                <StatusItem
                  name={t('status.guide.proposal.accepted.name')}
                  description={t('status.guide.proposal.accepted.desc')}
                  nextStep={t('status.guide.proposal.accepted.next')}
                  tone="neutral"
                />
                <StatusItem
                  name={t('status.guide.proposal.completed.name')}
                  description={t('status.guide.proposal.completed.desc')}
                  nextStep={t('status.guide.proposal.completed.next')}
                  tone="success"
                />
                <StatusItem
                  name={t('status.guide.proposal.rejected.name')}
                  description={t('status.guide.proposal.rejected.desc')}
                  nextStep={t('status.guide.proposal.rejected.next')}
                  tone="danger"
                />
                <StatusItem
                  name={t('status.guide.proposal.withdrawn.name')}
                  description={t('status.guide.proposal.withdrawn.desc')}
                  nextStep={t('status.guide.proposal.withdrawn.next')}
                  tone="danger"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
}

function StatusItem({
  name,
  description,
  nextStep,
  tone,
}: {
  name: string;
  description: string;
  nextStep: string;
  tone: 'neutral' | 'info' | 'success' | 'danger';
}) {
  return (
    <div className="flex flex-col gap-1.5 border-l-2 border-v2-border pl-4">
      <div className="flex items-center gap-2">
        <Badge tone={tone}>{name}</Badge>
      </div>
      <p className="text-sm text-v2-ink">{description}</p>
      <p className="text-xs text-v2-muted font-medium italic">{nextStep}</p>
    </div>
  );
}
