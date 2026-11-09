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
import { useCurrentLocale } from '@shared/ui/link';
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';

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
            <span className="text-v2-muted tabular-nums">{formatNumber(item.value)}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-v2-surface-subtle">
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
          <p className="text-sm text-v2-muted">{t('admin.traffic.description')}</p>
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
          <CardHead className="pb-2">
            <CardTitle className="text-sm font-medium text-v2-muted">
              {t('admin.traffic.visitors')}
            </CardTitle>
          </CardHead>
          <CardBody>
            <div className="text-3xl font-[550]">{formatNumber(data.visitors)}</div>
          </CardBody>
        </Card>
        <Card>
          <CardHead className="pb-2">
            <CardTitle className="text-sm font-medium text-v2-muted">
              {t('admin.traffic.pageviews')}
            </CardTitle>
          </CardHead>
          <CardBody>
            <div className="text-3xl font-[550]">{formatNumber(data.pageviews)}</div>
          </CardBody>
        </Card>
        <Card>
          <CardHead className="pb-2">
            <CardTitle className="text-sm font-medium text-v2-muted">
              {t('admin.traffic.online')}
            </CardTitle>
          </CardHead>
          <CardBody>
            <div className="text-3xl font-[550]">{data.onlineApprox}</div>
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHead>
          <CardTitle>{t('admin.traffic.trend')}</CardTitle>
          <CardDescription>{t('admin.traffic.trendDescription')}</CardDescription>
        </CardHead>
        <CardBody className="h-72">
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
        </CardBody>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHead>
            <CardTitle>{t('admin.traffic.sources')}</CardTitle>
          </CardHead>
          <CardBody>
            <MetricBars
              formatNumber={formatNumber}
              barClassName="bg-v2-primary"
              items={data.sources.map((row) => ({ label: row.ref, value: row.visits }))}
            />
          </CardBody>
        </Card>

        <Card>
          <CardHead>
            <CardTitle>{t('admin.traffic.devices')}</CardTitle>
          </CardHead>
          <CardBody>
            <MetricBars
              formatNumber={formatNumber}
              barClassName="bg-v2-ink"
              items={data.devices.map((row) => ({ label: row.device, value: row.visits }))}
            />
          </CardBody>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHead>
            <CardTitle>{t('admin.traffic.countries')}</CardTitle>
          </CardHead>
          <CardBody>
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
          </CardBody>
        </Card>

        <Card>
          <CardHead>
            <CardTitle>{t('admin.traffic.topPaths')}</CardTitle>
          </CardHead>
          <CardBody>
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
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
