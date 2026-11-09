'use client';

import { useMemo, useState } from 'react';
import { useLingui } from '@lingui/react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { productAnalytics, type AnalyticsRange } from '@/entities/admin';
import {
  Card,
  CardBody,
  CardDescription,
  CardHead,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui-v2';

const PIE_COLORS = ['#E10600', '#1A1A1A', '#6B6B6B', '#C20500'];

export function AnalyticsOverview() {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string>) => i18n._(id, values);
  const [range, setRange] = useState<AnalyticsRange>('30d');
  const { kpi, categories } = productAnalytics;

  const registrations = useMemo(() => productAnalytics.registrations[range], [range]);
  const maxRegistrations = Math.max(...registrations.map((point) => point.count), 1);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{t('admin.analytics.productTitle')}</h2>
          <p className="text-sm text-v2-muted">{t('admin.analytics.productDescription')}</p>
        </div>
        <Select value={range} onValueChange={(v) => setRange(v as AnalyticsRange)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">{t('admin.analytics.range.7d')}</SelectItem>
            <SelectItem value="30d">{t('admin.analytics.range.30d')}</SelectItem>
            <SelectItem value="90d">{t('admin.analytics.range.90d')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHead className="pb-2">
            <CardTitle className="text-sm font-medium text-v2-muted">
              {t('admin.analytics.totalUsers')}
            </CardTitle>
          </CardHead>
          <CardBody>
            <div className="text-3xl font-[550]">{kpi.totalUsers}</div>
            <p className="mt-1 text-sm text-v2-primary">
              {t('admin.analytics.growthMonth', { growth: kpi.growth })}
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardHead className="pb-2">
            <CardTitle className="text-sm font-medium text-v2-muted">
              {t('admin.analytics.activeRequests')}
            </CardTitle>
          </CardHead>
          <CardBody>
            <div className="text-3xl font-[550]">{kpi.activeRequests}</div>
            <p className="mt-1 text-sm text-v2-muted">{t('admin.analytics.needResponse')}</p>
          </CardBody>
        </Card>
        <Card>
          <CardHead className="pb-2">
            <CardTitle className="text-sm font-medium text-v2-muted">
              {t('admin.analytics.totalProposals')}
            </CardTitle>
          </CardHead>
          <CardBody>
            <div className="text-3xl font-[550]">{kpi.totalProposals}</div>
            <p className="mt-1 text-sm text-v2-muted">{t('admin.analytics.allTime')}</p>
          </CardBody>
        </Card>
        <Card>
          <CardHead className="pb-2">
            <CardTitle className="text-sm font-medium text-v2-muted">
              {t('admin.analytics.revenue')}
            </CardTitle>
          </CardHead>
          <CardBody>
            <div className="text-3xl font-[550]">
              {kpi.revenue} {t('admin.analytics.revenueCurrency')}
            </div>
            <p className="mt-1 text-sm text-v2-primary">
              {t('admin.analytics.growthMonth', { growth: kpi.growth })}
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHead>
            <CardTitle>{t('admin.analytics.userActivity')}</CardTitle>
            <CardDescription>{t('admin.analytics.registrations30d')}</CardDescription>
          </CardHead>
          <CardBody>
            <ul className="space-y-3">
              {registrations.map((point) => (
                <li key={point.date} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium">{point.date}</span>
                    <span className="text-v2-muted tabular-nums">{point.count}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-v2-surface-subtle">
                    <div
                      className="h-full rounded-full bg-v2-primary"
                      style={{
                        width: `${Math.round((point.count / maxRegistrations) * 100)}%`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHead>
            <CardTitle>{t('admin.analytics.categoryDistribution')}</CardTitle>
            <CardDescription>{t('admin.analytics.popularCategories')}</CardDescription>
          </CardHead>
          <CardBody className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categories} dataKey="value" nameKey="name" outerRadius={90}>
                  {categories.map((entry, index) => (
                    <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
