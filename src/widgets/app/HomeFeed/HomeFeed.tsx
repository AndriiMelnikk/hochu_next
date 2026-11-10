'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import { useLingui } from '@lingui/react';
import { Bell, CheckCircle2, CirclePlus, SearchX, UserRound } from 'lucide-react';

import { routes } from '@/app/router/routes';
import { useAuthStore } from '@/entities/auth/store/authStore';
import { useCategories } from '@/entities/category';
import { useRequests, type IRequest } from '@/entities/request';
import { RequestCard, RequestFiltersSheet } from '@/features/requests';
import Link from '@/shared/ui/link';
import UserRequestsList from '@/widgets/app/UserRequestsList';
import {
  Button,
  Container,
  EmptyState,
  ErrorState,
  Heading,
  ListRow,
  ListRowGroup,
  LoadingState,
  Pagination,
  RowSkeleton,
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

  if (isLoading) return <RowSkeleton />;
  if (isError) return <ErrorState message={i18n._('request.list.requestsError')} />;
  const results = data?.results ?? [];
  if (results.length === 0)
    return (
      <EmptyState icon={<SearchX />} title={i18n._('request.list.emptyTitle')}>
        {i18n._('request.list.emptyHint')}
      </EmptyState>
    );

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

const ONBOARDING_KEY = 'shukayu:onboarding-dismissed';
const ONBOARDING_EVENT = 'shukayu:onboarding-change';

function subscribeOnboarding(cb: () => void) {
  window.addEventListener(ONBOARDING_EVENT, cb);
  return () => window.removeEventListener(ONBOARDING_EVENT, cb);
}
function getOnboardingHidden() {
  try {
    return localStorage.getItem(ONBOARDING_KEY) === '1';
  } catch {
    return false;
  }
}
function dismissOnboarding() {
  try {
    localStorage.setItem(ONBOARDING_KEY, '1');
  } catch {
    // сховище недоступне: просто сховаємо до перезавантаження
  }
  window.dispatchEvent(new Event(ONBOARDING_EVENT));
}

/** Чек-лист перших кроків для нових користувачів (приховується назавжди кнопкою). */
function Onboarding({ isBuyer }: { isBuyer: boolean; name: string }) {
  const { i18n } = useLingui();
  const hidden = useSyncExternalStore(subscribeOnboarding, getOnboardingHidden, () => true);
  if (hidden) return null;
  const prefix = isBuyer ? 'home.feed.onboardingStep' : 'home.feed.onboardingStepSeller';
  return (
    <section className="mb-8 rounded-v2-2xl border border-v2-border bg-v2-surface-subtle p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <Heading level="h4" as="h2">
          {i18n._('home.feed.onboardingTitle')}
        </Heading>
        <button
          type="button"
          aria-label={i18n._('common.close')}
          className="text-sm text-v2-muted hover:underline"
          onClick={dismissOnboarding}
        >
          ✕
        </button>
      </div>
      <ol className="grid gap-3 sm:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <li key={n} className="flex gap-3 text-sm text-v2-ink">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-v2-primary" />
            {i18n._(`${prefix}${n}`)}
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Головна для залогінених: стрічка запитів з вкладками (як Home в Upwork). */
export default function HomeFeed() {
  const { i18n } = useLingui();
  const [tab, setTab] = useState<string | null>(null);
  const [category, setCategory] = useState('');
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
          <Button asChild className="max-md:hidden">
            <Link href={routes.CREATE}>
              <CirclePlus />
              {t('common.nav.createRequest')}
            </Link>
          </Button>
        )}
      </div>

      {/* Швидкі посилання на мобільному (Upwork: My Proposals / My Profile / Dashboard) */}
      <ListRowGroup className="-mx-4 mb-6 md:hidden">
        {isBuyer && (
          <ListRow icon={<CirclePlus />} asChild>
            <Link href={routes.CREATE}>{t('home.feed.quick.create')}</Link>
          </ListRow>
        )}
        <ListRow icon={<Bell />} asChild>
          <Link href={routes.DASHBOARD_NOTIFICATIONS}>{t('home.feed.quick.notifications')}</Link>
        </ListRow>
        <ListRow icon={<UserRound />} asChild>
          <Link href={routes.DASHBOARD}>{t('home.feed.quick.dashboard')}</Link>
        </ListRow>
      </ListRowGroup>

      <Onboarding isBuyer={isBuyer} name={user.profile.name} />

      <Tabs value={tab ?? tabs[0]} onValueChange={setTab}>
        <TabsList className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
          <RequestRows pageSize={10} category={category || undefined} />
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

      {(tab ?? tabs[0]) === 'latest' && (
        <RequestFiltersSheet category={category} onApply={setCategory} />
      )}
    </Container>
  );
}
