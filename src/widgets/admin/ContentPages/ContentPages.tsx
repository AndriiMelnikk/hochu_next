'use client';

import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { adminInfoPages } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import { Button } from '@shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shared/ui/table';

export function ContentPages() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('admin.content.pages.title')}</CardTitle>
        <CardDescription>{t('admin.content.pages.description')}</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
