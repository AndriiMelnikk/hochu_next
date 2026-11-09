'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { adminBlogPosts, type IAdminBlogPost } from '@/entities/admin';
import { PermissionGate } from '@/features/admin';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardHead,
  CardTitle,
  Input,
  Label,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';

export function ContentBlog() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [items, setItems] = useState<IAdminBlogPost[]>(adminBlogPosts);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <Card>
      <CardHead className="flex flex-row items-start justify-between gap-4 space-y-0">
        <div>
          <CardTitle>{t('admin.content.blog.title')}</CardTitle>
          <CardDescription>{t('admin.content.blog.description')}</CardDescription>
        </div>
        <PermissionGate permission="content.blog">
          <Modal open={open} onOpenChange={setOpen}>
            <ModalTrigger asChild>
              <Button>{t('admin.content.create')}</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>{t('admin.content.blog.createTitle')}</ModalTitle>
              </ModalHeader>
              <div className="space-y-2">
                <Label htmlFor="blog-title">{t('admin.content.blog.fieldTitle')}</Label>
                <Input
                  id="blog-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={t('admin.content.blog.fieldTitlePlaceholder')}
                />
              </div>
              <ModalFooter>
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
              </ModalFooter>
            </ModalContent>
          </Modal>
        </PermissionGate>
      </CardHead>
      <CardBody>
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
                  <Badge tone={post.status === 'published' ? 'success' : 'neutral'}>
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
      </CardBody>
    </Card>
  );
}
