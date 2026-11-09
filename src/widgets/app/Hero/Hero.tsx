'use client';

import { ArrowRight, CheckCircle2, MessageSquare, Search } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { Button, Card, Container, Heading } from '@/ui-v2';

const Hero = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const stats = [
    { icon: Search, key: 'createTime' },
    { icon: MessageSquare, key: 'proposals' },
    { icon: CheckCircle2, key: 'successRate' },
  ] as const;

  return (
    <section className="ui-v2 bg-v2-surface py-12 md:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-flex h-8 items-center rounded-v2-pill bg-v2-hover px-4 text-sm font-semibold text-v2-primary">
              {t('common.home.hero.badge')}
            </span>
            <Heading level="display" as="h1" className="mb-6 text-4xl leading-[1.1] md:text-[56px]">
              {t('common.home.hero.title.prefix')}{' '}
              <span className="text-v2-primary">{t('common.home.hero.title.emphasis')}</span>
            </Heading>
            <p className="mb-8 max-w-xl text-lg leading-7 text-v2-muted">
              {t('common.home.hero.subtitle')}
            </p>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="md" className="h-12 px-6 text-base">
                <Link href={routes.CREATE}>
                  {t('common.nav.createRequest')}
                  <ArrowRight className="!size-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="h-12 px-6 text-base">
                <Link href={routes.REQUEST}>{t('common.nav.viewRequests')}</Link>
              </Button>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-v2-muted">
              {(['free', 'fast', 'safe'] as const).map((k) => (
                <li key={k} className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-v2-primary" />
                  {t(`common.home.hero.benefit.${k}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, key }) => (
              <Card key={key} className="p-6">
                <Icon className="mb-3 size-8 text-v2-primary" />
                <div className="mb-1 text-3xl font-[550]">
                  {t(`common.home.hero.stats.${key}.value`)}
                </div>
                <div className="text-sm text-v2-muted">
                  {t(`common.home.hero.stats.${key}.label`)}
                </div>
              </Card>
            ))}
            <Card variant="flat" className="bg-v2-primary p-6 text-v2-on-primary">
              <div className="mb-1 text-3xl font-[550]">
                {t('common.home.hero.stats.users.value')}
              </div>
              <div className="text-sm opacity-90">{t('common.home.hero.stats.users.label')}</div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
