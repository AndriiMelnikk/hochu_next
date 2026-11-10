import { AdminApiError } from '@/entities/admin';

type T = (id: string) => string;

const BY_CODE: Record<string, string> = {
  login_taken: 'admin.error.loginTaken',
  cannot_modify_self: 'admin.error.selfModify',
  last_admin: 'admin.error.lastAdmin',
  wrong_password: 'admin.error.wrongPassword',
};

/** Людське повідомлення про помилку адмін-API (без технічних деталей бекенду). */
export function getAdminErrorMessage(error: unknown, t: T): string {
  if (error instanceof AdminApiError) {
    const byCode = BY_CODE[error.message];
    if (byCode) return t(byCode);
    if (error.status === 403) return t('admin.error.forbidden');
    if (error.status === 404) return t('admin.error.notFound');
    if (error.status === 409) return t('admin.error.conflict');
    if (error.status === 400) return t('admin.error.invalid');
  }
  return t('admin.error.generic');
}
