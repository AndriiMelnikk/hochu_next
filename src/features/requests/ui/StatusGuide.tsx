'use client';

import { useLingui } from '@lingui/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@shared/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card';
import { Badge } from '@shared/ui/badge';
import { Info } from 'lucide-react';

export function StatusGuide() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <Card className="bg-muted/30 border-dashed">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          {t('status.guide.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="requests">
            <AccordionTrigger className="text-base font-semibold">
              {t('status.guide.request.title')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <StatusItem
                  name={t('status.guide.request.pending.name')}
                  description={t('status.guide.request.pending.desc')}
                  nextStep={t('status.guide.request.pending.next')}
                  variant="outline"
                />
                <StatusItem
                  name={t('status.guide.request.active.name')}
                  description={t('status.guide.request.active.desc')}
                  nextStep={t('status.guide.request.active.next')}
                  variant="default"
                />
                <StatusItem
                  name={t('status.guide.request.closed.name')}
                  description={t('status.guide.request.closed.desc')}
                  nextStep={t('status.guide.request.closed.next')}
                  variant="secondary"
                />
                <StatusItem
                  name={t('status.guide.request.completed.name')}
                  description={t('status.guide.request.completed.desc')}
                  nextStep={t('status.guide.request.completed.next')}
                  variant="success"
                />
                <StatusItem
                  name={t('status.guide.request.cancelled.name')}
                  description={t('status.guide.request.cancelled.desc')}
                  nextStep={t('status.guide.request.cancelled.next')}
                  variant="destructive"
                />
                <StatusItem
                  name={t('status.guide.request.rejected.name')}
                  description={t('status.guide.request.rejected.desc')}
                  nextStep={t('status.guide.request.rejected.next')}
                  variant="destructive"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="proposals">
            <AccordionTrigger className="text-base font-semibold">
              {t('status.guide.proposal.title')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <StatusItem
                  name={t('status.guide.proposal.pending.name')}
                  description={t('status.guide.proposal.pending.desc')}
                  nextStep={t('status.guide.proposal.pending.next')}
                  variant="default"
                />
                <StatusItem
                  name={t('status.guide.proposal.accepted.name')}
                  description={t('status.guide.proposal.accepted.desc')}
                  nextStep={t('status.guide.proposal.accepted.next')}
                  variant="secondary"
                />
                <StatusItem
                  name={t('status.guide.proposal.completed.name')}
                  description={t('status.guide.proposal.completed.desc')}
                  nextStep={t('status.guide.proposal.completed.next')}
                  variant="success"
                />
                <StatusItem
                  name={t('status.guide.proposal.rejected.name')}
                  description={t('status.guide.proposal.rejected.desc')}
                  nextStep={t('status.guide.proposal.rejected.next')}
                  variant="destructive"
                />
                <StatusItem
                  name={t('status.guide.proposal.withdrawn.name')}
                  description={t('status.guide.proposal.withdrawn.desc')}
                  nextStep={t('status.guide.proposal.withdrawn.next')}
                  variant="destructive"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

function StatusItem({
  name,
  description,
  nextStep,
  variant,
}: {
  name: string;
  description: string;
  nextStep: string;
  variant: 'default' | 'secondary' | 'outline' | 'destructive' | 'success';
}) {
  return (
    <div className="flex flex-col gap-1.5 border-l-2 border-muted pl-4">
      <div className="flex items-center gap-2">
        <Badge variant={variant}>{name}</Badge>
      </div>
      <p className="text-sm text-foreground">{description}</p>
      <p className="text-xs text-muted-foreground font-medium italic">{nextStep}</p>
    </div>
  );
}
