'use client';

import { useAdminBlogStore } from '@/entities/admin';
import { ContentCollection } from '../ContentCollection';

export function ContentBlog() {
  const { items, ...actions } = useAdminBlogStore();
  return (
    <ContentCollection
      keyPrefix="admin.content.blog"
      permission="content.blog"
      items={items}
      actions={actions}
      publicPath={(locale, slug) => `/${locale}/blog/${slug}`}
    />
  );
}
