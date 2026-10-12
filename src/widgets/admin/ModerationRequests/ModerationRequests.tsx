'use client';

import { useMemo, useState } from 'react';
import { Eye, Search } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { moderationRequests, type IModerationRequest } from '@/entities/admin';
import { ApproveRejectActions, PermissionGate } from '@/features/admin';
import { Badge } from '@shared/ui/badge';
import { Button } from '@shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Input } from '@shared/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shared/ui/table';

export function ModerationRequests() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<IModerationRequest[]>(moderationRequests);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.filter((i) => i.status === 'pending');
    return items.filter(
      (i) =>
        i.status === 'pending' &&
        (i.title.toLowerCase().includes(q) || i.author.toLowerCase().includes(q)),
    );
  }, [items, query]);

  const resolve = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'approved' } : item)),
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('admin.requests.title')}</CardTitle>
        <CardDescription>{t('admin.requests.description')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('admin.requests.searchPlaceholder')}
            className="pl-10"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <p className="text-base font-semibold">{t('admin.empty.title')}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {t('admin.empty.requests')}
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('admin.requests.table.id')}</TableHead>
                <TableHead>{t('admin.requests.table.title')}</TableHead>
                <TableHead>{t('admin.requests.table.author')}</TableHead>
                <TableHead>{t('admin.requests.table.date')}</TableHead>
                <TableHead>{t('admin.requests.table.status')}</TableHead>
                <TableHead>{t('admin.requests.table.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>#{request.id}</TableCell>
                  <TableCell className="font-medium">{request.title}</TableCell>
                  <TableCell>{request.author}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{t('admin.requests.status.pending')}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" aria-label={t('admin.actions.view')}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <PermissionGate permission="moderation.requests">
                        <ApproveRejectActions
                          entityLabel={request.title}
                          onResolved={() => resolve(request.id)}
                        />
                      </PermissionGate>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
