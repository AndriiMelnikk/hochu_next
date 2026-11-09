'use client';

import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { adminInfoPages } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Heading,
} from '@/ui-v2';

export function ContentPages() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <section className="space-y-6">
      <header>
        <Heading level="title" as="h1">
          {t('admin.content.pages.title')}
        </Heading>
        <p className="mt-1 text-v2-muted">{t('admin.content.pages.description')}</p>
      </header>
      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.content.pages.table.title')}</TableHead>
              <TableHead>{t('admin.content.pages.table.slug')}</TableHead>
              <TableHead>{t('admin.content.pages.table.updated')}</TableHead>
              <TableHead>{t('admin.content.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adminInfoPages.map((page) => (
              <TableRow key={page.id}>
                <TableCell className="font-medium">{page.title}</TableCell>
                <TableCell>/{page.slug}</TableCell>
                <TableCell>{page.updatedAt}</TableCell>
                <TableCell>
                  <PermissionGate permission="content.pages">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toast.success(t('admin.actions.editMock'))}
                    >
                      {t('admin.content.edit')}
                    </Button>
                  </PermissionGate>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
