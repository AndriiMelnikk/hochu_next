'use client';

import { useMemo, useState } from 'react';
import { useLingui } from '@lingui/react';
import { useClientPagination } from '@/shared/hooks/useClientPagination';
import { moderationUsers, type IModerationUser } from '@/entities/admin';
import { BlockUserActions, PermissionGate } from '@/features/admin';
import {
  Pagination,
  Badge,
  Heading,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';

type Filter = 'all' | 'reported' | 'blocked';

export function ModerationUsers() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [items, setItems] = useState<IModerationUser[]>(moderationUsers);

  const filtered = useMemo(() => {
    let list = items;
    if (filter === 'reported') list = list.filter((u) => u.reports > 0);
    if (filter === 'blocked') list = list.filter((u) => u.status === 'blocked');
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
    );
  }, [filter, items, query]);
  const { page, setPage, totalPages, pageItems } = useClientPagination(filtered);

  return (
    <section className="space-y-6">
      <header>
        <Heading level="title" as="h1">
          {t('admin.users.title')}
        </Heading>
        <p className="mt-1 text-v2-muted">{t('admin.users.description')}</p>
      </header>
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <Input
              search
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('admin.users.searchPlaceholder')}
            />
          </div>
          <Select value={filter} onValueChange={(v) => setFilter(v as Filter)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('admin.users.filter.all')}</SelectItem>
              <SelectItem value="reported">{t('admin.users.filter.reported')}</SelectItem>
              <SelectItem value="blocked">{t('admin.users.filter.blocked')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <p className="text-base font-semibold">{t('admin.empty.title')}</p>
            <p className="mt-2 max-w-sm text-sm text-v2-muted">{t('admin.empty.users')}</p>
          </div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('admin.users.table.id')}</TableHead>
                  <TableHead>{t('admin.users.table.name')}</TableHead>
                  <TableHead>{t('admin.users.table.email')}</TableHead>
                  <TableHead>{t('admin.users.table.reports')}</TableHead>
                  <TableHead>{t('admin.users.table.reason')}</TableHead>
                  <TableHead>{t('admin.users.table.status')}</TableHead>
                  <TableHead>{t('admin.users.table.actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pageItems.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>#{user.id}</TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.reports}</TableCell>
                    <TableCell>{user.reason}</TableCell>
                    <TableCell>
                      <Badge tone={user.status === 'blocked' ? 'danger' : 'success'}>
                        {t(`admin.users.status.${user.status}`)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <PermissionGate permission="users.block">
                        <BlockUserActions
                          userName={user.name}
                          status={user.status}
                          onChanged={(next) =>
                            setItems((prev) =>
                              prev.map((item) =>
                                item.id === user.id ? { ...item, status: next } : item,
                              ),
                            )
                          }
                        />
                      </PermissionGate>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {totalPages > 1 && (
              <Pagination
                className="mt-4"
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
