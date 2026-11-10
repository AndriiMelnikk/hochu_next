'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { Lock } from 'lucide-react';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import { routes } from '@/app/router/routes';
import { Alert, AlertDescription, Button, Card, Container, Heading, Input, Label } from '@/ui-v2';

/** Дозволяємо лише внутрішні адреси адмінки, щоб не зробити open redirect. */
function safeReturnUrl(value: string | null): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return routes.ADMIN;
  const path = value.replace(/^\/(uk|en)(?=\/|$)/, '');
  return path.startsWith('/admin') && !path.startsWith('/admin/login') ? path : routes.ADMIN;
}

export function AdminLoginForm({ returnUrl }: { returnUrl: string | null }) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`admin.login.${id}`);
  const router = useLocalizedRouter();
  const queryClient = useQueryClient();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pending) return;
    if (!login.trim() || !password) {
      setError(t('error.required'));
      return;
    }
    setPending(true);
    setError(null);
    try {
      const res = await fetch('/api/admin-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login: login.trim(), password }),
      });
      if (res.ok) {
        // Прибираємо кеш попередньої сесії (профіль, ролі), щоб підтягнувся профіль нового входу
        queryClient.removeQueries({ queryKey: ['admin'] });
        router.replace(safeReturnUrl(returnUrl));
        router.refresh();
        return;
      }
      const code = ((await res.json().catch(() => ({}))) as { error?: string }).error;
      setError(
        code === 'too_many_attempts'
          ? t('error.tooMany')
          : code === 'not_configured'
            ? t('error.notConfigured')
            : t('error.invalid'),
      );
    } catch {
      setError(t('error.network'));
    } finally {
      setPending(false);
    }
  };

  return (
    <Container className="ui-v2">
      <div className="mx-auto max-w-md py-12">
        <Card className="p-8">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-v2-surface-subtle text-v2-primary">
              <Lock className="size-6" />
            </div>
            <Heading level="title" as="h1">
              {t('title')}
            </Heading>
            <p className="mt-1 text-v2-muted">{t('subtitle')}</p>
          </div>

          <form noValidate onSubmit={submit} className="space-y-5">
            {error && (
              <Alert tone="danger" role="alert">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="admin-login">{t('login')}</Label>
              <Input
                id="admin-login"
                autoComplete="username"
                autoFocus
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">{t('password')}</Label>
              <Input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={pending}>
              {pending ? t('pending') : t('submit')}
            </Button>
          </form>
        </Card>
      </div>
    </Container>
  );
}
