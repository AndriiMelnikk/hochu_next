'use client';

import { useMemo, useState } from 'react';
import { useLingui } from '@lingui/react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { trafficAnalytics, type AnalyticsRange } from '@/entities/admin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shared/ui/table';
import { useCurrentLocale } from '@shared/ui/link';

const NUMBER_LOCALE = { uk: 'uk-UA', en: 'en-US' } as const;

function MetricBars({
  items,
  formatNumber,
  barClassName,
}: {
  items: { label: string; value: number }[];
  formatNumber: (value: number) => string;
  barClassName: string;
}) {
  const max = Math.max(...items.map((item) => item.value), 1);

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label} className="space-y-1.5">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium">{item.label}</span>
            <span className="text-muted-foreground tabular-nums">{formatNumber(item.value)}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full ${barClassName}`}
              style={{ width: `${Math.round((item.value / max) * 100)}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function TrafficAnalytics() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const locale = useCurrentLocale();
  const [range, setRange] = useState<AnalyticsRange>('30d');
  const data = trafficAnalytics;

  const series = useMemo(() => data.series[range], [data.series, range]);
  const formatNumber = (value: number) => value.toLocaleString(NUMBER_LOCALE[locale]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{t('admin.traffic.title')}</h2>
          <p className="text-sm text-muted-foreground">{t('admin.traffic.description')}</p>
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

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('admin.traffic.visitors')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatNumber(data.visitors)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('admin.traffic.pageviews')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatNumber(data.pageviews)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {t('admin.traffic.online')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data.onlineApprox}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('admin.traffic.trend')}</CardTitle>
          <CardDescription>{t('admin.traffic.trendDescription')}</CardDescription>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} width={40} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#E10600"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="pageviews"
                stroke="#1A1A1A"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('admin.traffic.sources')}</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricBars
              formatNumber={formatNumber}
              barClassName="bg-primary"
              items={data.sources.map((row) => ({ label: row.ref, value: row.visits }))}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('admin.traffic.devices')}</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricBars
              formatNumber={formatNumber}
              barClassName="bg-foreground"
              items={data.devices.map((row) => ({ label: row.device, value: row.visits }))}
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('admin.traffic.countries')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('admin.traffic.table.country')}</TableHead>
                  <TableHead className="text-right">{t('admin.traffic.table.visits')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.countries.map((row) => (
                  <TableRow key={row.country}>
                    <TableCell>{row.country}</TableCell>
                    <TableCell className="text-right">{formatNumber(row.visits)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('admin.traffic.topPaths')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('admin.traffic.table.path')}</TableHead>
                  <TableHead className="text-right">{t('admin.traffic.table.visits')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.topPaths.map((row) => (
                  <TableRow key={row.path}>
                    <TableCell className="font-medium">{row.path}</TableCell>
                    <TableCell className="text-right">{formatNumber(row.visits)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
