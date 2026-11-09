import type { Metadata } from 'next';
import { AdminLoginForm } from '@/features/admin/ui/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

type PageProps = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function AdminLoginPage({ searchParams }: PageProps) {
  const raw = (await searchParams).returnUrl;
  const returnUrl = Array.isArray(raw) ? raw[0] : raw;
  return <AdminLoginForm returnUrl={returnUrl ?? null} />;
}
