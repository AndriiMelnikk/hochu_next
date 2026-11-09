'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { moderationReports, type IModerationReport } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardHead,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';

export function ModerationReports() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [items, setItems] = useState<IModerationReport[]>(moderationReports);
  const open = items.filter((i) => i.status === 'open');

  return (
    <Card>
      <CardHead>
        <CardTitle>{t('admin.reports.title')}</CardTitle>
        <CardDescription>{t('admin.reports.description')}</CardDescription>
      </CardHead>
      <CardBody>
        {open.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <p className="text-base font-semibold">{t('admin.empty.title')}</p>
            <p className="mt-2 max-w-sm text-sm text-v2-muted">{t('admin.empty.reports')}</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('admin.reports.table.id')}</TableHead>
                <TableHead>{t('admin.reports.table.target')}</TableHead>
                <TableHead>{t('admin.reports.table.reporter')}</TableHead>
                <TableHead>{t('admin.reports.table.reason')}</TableHead>
                <TableHead>{t('admin.reports.table.date')}</TableHead>
                <TableHead>{t('admin.reports.table.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {open.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>#{report.id}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Badge tone="neutral">{t(`admin.reports.target.${report.targetType}`)}</Badge>
                      <p className="text-sm font-medium">{report.targetLabel}</p>
                    </div>
                  </TableCell>
                  <TableCell>{report.reporter}</TableCell>
                  <TableCell>{report.reason}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>
                    <PermissionGate permission="moderation.reports">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setItems((prev) =>
                            prev.map((item) =>
                              item.id === report.id ? { ...item, status: 'resolved' } : item,
                            ),
                          );
                          toast.success(t('admin.actions.resolveSuccess'));
                        }}
                      >
                        {t('admin.reports.resolve')}
                      </Button>
                    </PermissionGate>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardBody>
    </Card>
  );
}
