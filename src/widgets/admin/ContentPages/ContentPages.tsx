'use client';

import { useAdminPagesStore } from '@/entities/admin';
import { ContentCollection } from '../ContentCollection';

export function ContentPages() {
  const { items, ...actions } = useAdminPagesStore();
  return (
    <ContentCollection
      keyPrefix="admin.content.pages"
      permission="content.pages"
      items={items}
      actions={actions}
      publicPath={(locale, slug) => `/${locale}/${slug}`}
    />
  );
}
