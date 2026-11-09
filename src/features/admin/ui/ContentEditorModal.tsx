'use client';

import { useMemo, useState } from 'react';
import { useLingui } from '@lingui/react';
import {
  isValidSlug,
  slugify,
  type AdminInfoPageInput,
  type AdminPageStatus,
  type IAdminInfoPage,
} from '@/entities/admin';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  SegmentedControl,
  Textarea,
} from '@/ui-v2';

const META_MAX = 160;

interface Props {
  /** null — створення нової сторінки. */
  page: IAdminInfoPage | null;
  existingSlugs: string[];
  onSubmit: (input: AdminInfoPageInput) => void;
  onClose: () => void;
  /** Префікс i18n-ключів (admin.content.pages | admin.content.blog). */
  keyPrefix?: string;
}

/** Форма створення/редагування. Монтується лише коли відкрита, тому стан завжди свіжий. */
export function ContentEditorModal({
  page,
  existingSlugs,
  onSubmit,
  onClose,
  keyPrefix = 'admin.content.pages',
}: Props) {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) =>
    i18n._(`${keyPrefix}.${id}`, values);

  const initial: AdminInfoPageInput = {
    title: page?.title ?? '',
    slug: page?.slug ?? '',
    status: page?.status ?? 'draft',
    content: page?.content ?? '',
    metaDescription: page?.metaDescription ?? '',
  };
  const [form, setForm] = useState<AdminInfoPageInput>(initial);
  // slug автогенерується з назви, доки його не змінили вручну (або це редагування)
  const [slugTouched, setSlugTouched] = useState(!!page);
  const [submitted, setSubmitted] = useState(false);
  const [confirmDiscard, setConfirmDiscard] = useState(false);

  const dirty = JSON.stringify(form) !== JSON.stringify(initial);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof AdminInfoPageInput, string>> = {};
    if (!form.title.trim()) e.title = t('error.titleRequired');
    if (!form.slug) e.slug = t('error.slugRequired');
    else if (!isValidSlug(form.slug)) e.slug = t('error.slugInvalid');
    else if (existingSlugs.includes(form.slug)) e.slug = t('error.slugTaken');
    if (form.metaDescription.length > META_MAX) e.metaDescription = t('error.metaTooLong');
    if (form.status === 'published' && !form.content.trim())
      e.content = t('error.publishNeedsContent');
    return e;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, existingSlugs, i18n.locale]);

  const show = (k: keyof AdminInfoPageInput) => (submitted ? errors[k] : undefined);

  const requestClose = () => (dirty ? setConfirmDiscard(true) : onClose());

  const submit = () => {
    setSubmitted(true);
    if (Object.keys(errors).length > 0) return;
    onSubmit({ ...form, title: form.title.trim(), content: form.content.trim() });
  };

  return (
    <>
      <Modal open onOpenChange={(o) => !o && requestClose()}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{page ? t('editTitle') : t('createTitle')}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form
              id="admin-page-form"
              noValidate
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="page-title">{t('field.title')}</Label>
                <Input
                  id="page-title"
                  value={form.title}
                  invalid={!!show('title')}
                  placeholder={t('field.titlePlaceholder')}
                  onChange={(e) => {
                    const title = e.target.value;
                    setForm((f) => ({
                      ...f,
                      title,
                      slug: slugTouched ? f.slug : slugify(title),
                    }));
                  }}
                />
                <FieldError message={show('title')} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="page-slug">{t('field.slug')}</Label>
                <Input
                  id="page-slug"
                  value={form.slug}
                  invalid={!!show('slug')}
                  onChange={(e) => {
                    setSlugTouched(true);
                    setForm((f) => ({ ...f, slug: e.target.value.toLowerCase() }));
                  }}
                />
                {show('slug') ? (
                  <FieldError message={show('slug')} />
                ) : (
                  <p className="text-xs text-v2-muted">
                    {t('field.slugHint', { slug: form.slug || '…' })}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="page-content">{t('field.content')}</Label>
                <Textarea
                  id="page-content"
                  className="min-h-[200px]"
                  value={form.content}
                  invalid={!!show('content')}
                  placeholder={t('field.contentPlaceholder')}
                  onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                />
                <FieldError message={show('content')} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="page-meta">{t('field.meta')}</Label>
                  <span
                    className={
                      form.metaDescription.length > META_MAX
                        ? 'text-xs text-v2-danger'
                        : 'text-xs text-v2-muted'
                    }
                  >
                    {t('field.metaCounter', { count: form.metaDescription.length })}
                  </span>
                </div>
                <Textarea
                  id="page-meta"
                  className="min-h-[80px]"
                  value={form.metaDescription}
                  invalid={!!show('metaDescription')}
                  onChange={(e) => setForm((f) => ({ ...f, metaDescription: e.target.value }))}
                />
                <FieldError message={show('metaDescription')} />
              </div>

              <div className="space-y-2">
                <Label>{t('field.status')}</Label>
                <div>
                  <SegmentedControl<AdminPageStatus>
                    value={form.status}
                    onValueChange={(status) => setForm((f) => ({ ...f, status }))}
                    options={[
                      { value: 'draft', label: t('status.draft') },
                      { value: 'published', label: t('status.published') },
                    ]}
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="outline" onClick={requestClose}>
              {i18n._('admin.content.cancel')}
            </Button>
            <Button type="submit" form="admin-page-form">
              {i18n._('admin.content.save')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <AlertDialog open={confirmDiscard} onOpenChange={setConfirmDiscard}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('discard.title')}</AlertDialogTitle>
            <AlertDialogDescription>{t('discard.description')}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('discard.keep')}</AlertDialogCancel>
            <AlertDialogAction onClick={onClose}>{t('discard.confirm')}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-xs text-v2-danger">
      {message}
    </p>
  );
}
