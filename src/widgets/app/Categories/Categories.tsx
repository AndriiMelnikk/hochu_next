'use client';

import { useMemo } from 'react';
import {
  Atom,
  Code2,
  Handshake,
  Headset,
  Landmark,
  PenTool,
  Palette,
  Scale,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import { useCategories } from '@/entities/category';
import Link from '@/shared/ui/link';
import { CategoryTile, Container, LoadingState, Section, SectionHeader, TextLink } from '@/ui-v2';

const ICONS: LucideIcon[] = [
  Atom,
  Code2,
  Palette,
  Handshake,
  PenTool,
  Headset,
  Landmark,
  Scale,
  Users,
  Wrench,
];

const Categories = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: categories = [], isLoading } = useCategories();
  const top = useMemo(() => categories.filter((c) => !c.parentId).slice(0, 10), [categories]);

  return (
    <Section>
      <Container>
        <SectionHeader
          title={t('common.home.categories.title')}
          action={
            <TextLink asChild>
              <Link href={routes.CATEGORIES}>{t('common.home.categories.viewAll')}</Link>
            </TextLink>
          }
        />
        {isLoading ? (
          <LoadingState />
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {top.map((c, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <CategoryTile key={c._id} asChild>
                  <Link href={routes.CATEGORY(c.slug)}>
                    <Icon className="size-9 text-v2-brand" strokeWidth={1.5} aria-hidden />
                    <span className="text-lg font-[450] leading-6 text-v2-ink">{c.title}</span>
                  </Link>
                </CategoryTile>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Categories;
