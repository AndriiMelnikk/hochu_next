'use client';

import { useMemo, useState } from 'react';
import { useLingui } from '@lingui/react';
import { CirclePlus } from 'lucide-react';

import { routes } from '@/app/router/routes';
import { useAuthStore } from '@/entities/auth/store/authStore';
import { useCategories } from '@/entities/category';
import { useRequests, type IRequest } from '@/entities/request';
import { RequestCard } from '@/features/requests';
import Link from '@/shared/ui/link';
import UserRequestsList from '@/widgets/app/UserRequestsList';
import {
  Button,
  Container,
  EmptyState,
  ErrorState,
  Heading,
  LoadingState,
  Pagination,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextLink,
} from '@/ui-v2';

function RequestRows({ category, pageSize }: { category?: string; pageSize: number }) {
  const { i18n } = useLingui();
  const [page, setPage] = useState(1);
  const params = useMemo(() => ({ page, pageSize, category }), [page, pageSize, category]);
  const { data, isLoading, isError } = useRequests(params);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState message={i18n._('request.list.requestsError')} />;
  const results = data?.results ?? [];
  if (results.length === 0) return <EmptyState>{i18n._('request.list.empty')}</EmptyState>;

  const totalPages = Math.max(1, Math.ceil((data?.count ?? 0) / pageSize));

  return (
    <div>
      {results.map((request) => (
        <RequestCard
          key={request._id}
          request={request as IRequest}
          categoryName={request.category.name}
          variant="row"
        />
      ))}
      {totalPages > 1 && (
        <Pagination
          className="mt-8"
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}

function CategoryRow({ id, title }: { id: string; title: string }) {
  const { i18n } = useLingui();
  const params = useMemo(() => ({ page: 1, pageSize: 3, category: id }), [id]);
  const { data } = useRequests(params);
  const results = data?.results ?? [];
  if (results.length === 0) return null;

  return (
    <section className="mb-10">
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <Heading level="h4" as="h2">
          {title}
        </Heading>
        <TextLink asChild>
          <Link href={`${routes.REQUEST}?category=${id}`}>{i18n._('home.feed.viewAll')}</Link>
        </TextLink>
      </div>
      <div>
        {results.map((request) => (
          <RequestCard
            key={request._id}
            request={request as IRequest}
            categoryName={request.category.name}
            variant="row"
          />
        ))}
      </div>
    </section>
  );
}

function ByCategory() {
  const { i18n } = useLingui();
  const { data: categories = [], isLoading } = useCategories();
  const top = useMemo(() => categories.filter((c) => !c.parentId).slice(0, 6), [categories]);

  if (isLoading) return <LoadingState />;
  if (top.length === 0) return <EmptyState>{i18n._('request.list.empty')}</EmptyState>;
  return (
    <div>
      {top.map((category) => (
        <CategoryRow key={category._id} id={category._id} title={category.title} />
      ))}
    </div>
  );
}

/** Головна для залогінених: стрічка запитів з вкладками (як Home в Upwork). */
export default function HomeFeed() {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);
  const user = useAuthStore((s) => s.user);
  if (!user) return null;

  const isBuyer = user.profile.type === 'buyer';
  const tabs = isBuyer ? ['mine', 'latest', 'categories'] : ['latest', 'categories'];

  return (
    <Container className="ui-v2">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Heading level="title" as="h1" className="mb-1">
            {t('home.feed.welcome', { name: user.profile.name })}
          </Heading>
          <p className="text-v2-muted">
            {isBuyer ? t('home.feed.subtitleBuyer') : t('home.feed.subtitleSeller')}
          </p>
        </div>
        {isBuyer && (
          <Button asChild>
            <Link href={routes.CREATE}>
              <CirclePlus />
              {t('common.nav.createRequest')}
            </Link>
          </Button>
        )}
      </div>

      <Tabs defaultValue={tabs[0]}>
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              {t(`home.feed.tab.${tab}`)}
            </TabsTrigger>
          ))}
        </TabsList>

        {isBuyer && (
          <TabsContent value="mine" className="pt-6">
            <UserRequestsList userId={user.profile._id} userType="buyer" />
          </TabsContent>
        )}
        <TabsContent value="latest" className="pt-6">
          <RequestRows pageSize={10} />
          <div className="mt-6">
            <TextLink asChild>
              <Link href={routes.REQUEST}>{t('home.feed.viewAll')}</Link>
            </TextLink>
          </div>
        </TabsContent>
        <TabsContent value="categories" className="pt-6">
          <ByCategory />
        </TabsContent>
      </Tabs>
    </Container>
  );
}
