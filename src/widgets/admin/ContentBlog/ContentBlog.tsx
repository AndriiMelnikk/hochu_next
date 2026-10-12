'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { adminBlogPosts, type IAdminBlogPost } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import { Badge } from '@shared/ui/badge';
import { Button } from '@shared/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shared/ui/dialog';
import { Input } from '@shared/ui/input';
import { Label } from '@shared/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shared/ui/table';

export function ContentBlog() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [items, setItems] = useState<IAdminBlogPost[]>(adminBlogPosts);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <div>
          <CardTitle>{t('admin.content.blog.title')}</CardTitle>
          <CardDescription>{t('admin.content.blog.description')}</CardDescription>
        </div>
        <PermissionGate permission="content.blog">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>{t('admin.content.create')}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('admin.content.blog.createTitle')}</DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="blog-title">{t('admin.content.blog.fieldTitle')}</Label>
                <Input
                  id="blog-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={t('admin.content.blog.fieldTitlePlaceholder')}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  {t('admin.content.cancel')}
                </Button>
                <Button
                  onClick={() => {
                    if (!title.trim()) return;
                    setItems((prev) => [
                      {
                        id: String(prev.length + 1),
                        title: title.trim(),
                        status: 'draft',
                        updatedAt: new Date().toISOString().slice(0, 10),
                      },
                      ...prev,
                    ]);
                    toast.success(t('admin.actions.saveSuccess'));
                    setTitle('');
                    setOpen(false);
                  }}
                >
                  {t('admin.content.save')}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </PermissionGate>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.content.blog.table.title')}</TableHead>
              <TableHead>{t('admin.content.blog.table.status')}</TableHead>
              <TableHead>{t('admin.content.blog.table.updated')}</TableHead>
              <TableHead>{t('admin.content.table.actions')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>
                  <Badge variant={post.status === 'published' ? 'success' : 'secondary'}>
                    {t(`admin.content.blog.status.${post.status}`)}
                  </Badge>
                </TableCell>
                <TableCell>{post.updatedAt}</TableCell>
                <TableCell>
                  <PermissionGate permission="content.blog">
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
