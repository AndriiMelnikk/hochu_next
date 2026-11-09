'use client';

import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ExternalLink,
  FileX,
  MoreHorizontal,
  Plus,
} from 'lucide-react';
import { useClientPagination } from '@/shared/hooks/useClientPagination';
import type {
  AdminContentState,
  AdminPageStatus,
  IAdminContentItem as IAdminInfoPage,
  StaffPermission,
} from '@/entities/admin';
import { ContentEditorModal, PermissionGate } from '@/features/admin';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  EmptyState,
  Heading,
  Input,
  Pagination,
  SegmentedControl,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';

type Filter = 'all' | AdminPageStatus;
type SortKey = 'title' | 'updatedAt';

interface ContentCollectionProps {
  /** Префікс i18n-ключів: admin.content.pages | admin.content.blog */
  keyPrefix: string;
  permission: StaffPermission;
  items: AdminContentState['items'];
  actions: Pick<AdminContentState, 'create' | 'update' | 'remove' | 'duplicate' | 'setStatus'>;
  /** Публічна адреса елемента для «Відкрити на сайті». */
  publicPath: (locale: string, slug: string) => string;
}

export function ContentCollection({
  keyPrefix,
  permission,
  items: pages,
  actions: { create, update, remove, duplicate, setStatus },
  publicPath,
}: ContentCollectionProps) {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) =>
    i18n._(`${keyPrefix}.${id}`, values);

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<{ key: SortKey; dir: 'asc' | 'desc' }>({
    key: 'updatedAt',
    dir: 'desc',
  });
  // undefined — закрито, null — створення, об'єкт — редагування
  const [editing, setEditing] = useState<IAdminInfoPage | null | undefined>(undefined);
  const [deleting, setDeleting] = useState<IAdminInfoPage | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = pages.filter(
      (p) =>
        (filter === 'all' || p.status === filter) &&
        (!q || p.title.toLowerCase().includes(q) || p.slug.includes(q)),
    );
    const dir = sort.dir === 'asc' ? 1 : -1;
    return [...list].sort((a, b) => a[sort.key].localeCompare(b[sort.key]) * dir);
  }, [pages, query, filter, sort]);

  const { page, setPage, totalPages, pageItems } = useClientPagination(visible);

  const toggleSort = (key: SortKey) =>
    setSort((s) =>
      s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' },
    );

  const sortHead = (k: SortKey, label: string) => {
    const Icon = sort.key !== k ? ArrowUpDown : sort.dir === 'asc' ? ArrowUp : ArrowDown;
    return (
      <TableHead
        aria-sort={sort.key === k ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'}
      >
        <button
          type="button"
          className="inline-flex items-center gap-1 font-[inherit] hover:text-v2-primary"
          onClick={() => toggleSort(k)}
          aria-label={`${label}: ${t(k === 'title' ? 'sort.title' : 'sort.updated')}`}
        >
          {label}
          <Icon className="size-4" />
        </button>
      </TableHead>
    );
  };

  const otherSlugs = (current: IAdminInfoPage | null) =>
    pages.filter((p) => p.id !== current?.id).map((p) => p.slug);

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Heading level="title" as="h1">
            {t('title')}
          </Heading>
          <p className="mt-1 text-v2-muted">{t('description')}</p>
        </div>
        <PermissionGate permission={permission}>
          <Button onClick={() => setEditing(null)}>
            <Plus />
            {t('create')}
          </Button>
        </PermissionGate>
      </header>

      <div className="flex flex-wrap items-center gap-3">
        <div className="min-w-[240px] flex-1 sm:max-w-sm">
          <Input
            search
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search')}
            aria-label={t('search')}
          />
        </div>
        <SegmentedControl<Filter>
          value={filter}
          onValueChange={setFilter}
          options={[
            { value: 'all', label: t('filter.all') },
            { value: 'published', label: t('filter.published') },
            { value: 'draft', label: t('filter.draft') },
          ]}
        />
        <span className="text-sm text-v2-muted" aria-live="polite">
          {t('count', { count: visible.length })}
        </span>
      </div>

      <div className="space-y-4">
        {visible.length === 0 ? (
          <EmptyState icon={<FileX />} title={t('empty.title')}>
            {t('empty.hint')}
          </EmptyState>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {sortHead('title', t('table.title'))}
                <TableHead>{t('table.slug')}</TableHead>
                <TableHead>{t('table.status')}</TableHead>
                {sortHead('updatedAt', t('table.updated'))}
                <TableHead>{i18n._('admin.content.table.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pageItems.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.title}</TableCell>
                  <TableCell>/{p.slug}</TableCell>
                  <TableCell>
                    <Badge tone={p.status === 'published' ? 'success' : 'neutral'}>
                      {t(`status.${p.status}`)}
                    </Badge>
                  </TableCell>
                  <TableCell>{p.updatedAt}</TableCell>
                  <TableCell>
                    <PermissionGate permission={permission}>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setEditing(p)}>
                          {i18n._('admin.content.edit')}
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              shape="circle"
                              aria-label={t('action.more')}
                            >
                              <MoreHorizontal />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {p.status === 'published' && (
                              <DropdownMenuItem asChild>
                                <a
                                  href={publicPath(i18n.locale, p.slug)}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <ExternalLink />
                                  {t('action.view')}
                                </a>
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              onSelect={() => {
                                if (p.status === 'draft' && !p.content.trim()) {
                                  toast.error(t('error.publishNeedsContent'));
                                  return;
                                }
                                const next = p.status === 'published' ? 'draft' : 'published';
                                setStatus(p.id, next);
                                toast.success(
                                  t(next === 'published' ? 'toast.published' : 'toast.unpublished'),
                                );
                              }}
                            >
                              {p.status === 'published'
                                ? t('action.unpublish')
                                : t('action.publish')}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onSelect={() => {
                                duplicate(p.id);
                                toast.success(t('toast.duplicated'));
                              }}
                            >
                              {t('action.duplicate')}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-v2-danger"
                              onSelect={() => setDeleting(p)}
                            >
                              {t('action.delete')}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </PermissionGate>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {totalPages > 1 && (
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        )}
      </div>

      {editing !== undefined && (
        <ContentEditorModal
          key={editing?.id ?? 'new'}
          page={editing}
          existingSlugs={otherSlugs(editing)}
          keyPrefix={keyPrefix}
          onClose={() => setEditing(undefined)}
          onSubmit={(input) => {
            if (editing) {
              update(editing.id, input);
              toast.success(t('toast.updated'));
            } else {
              create(input);
              toast.success(t('toast.created'));
            }
            setEditing(undefined);
          }}
        />
      )}

      <AlertDialog open={!!deleting} onOpenChange={(o) => !o && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('delete.title')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('delete.description', { title: deleting?.title ?? '' })}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{i18n._('admin.content.cancel')}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (deleting) remove(deleting.id);
                setDeleting(null);
                toast.success(t('toast.deleted'));
              }}
            >
              {t('action.delete')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
