'use server';

import { revalidatePath } from 'next/cache';

/**
 * Скидає ISR-кеш публічних сторінок, що залежать від запитів, пропозицій,
 * профілів і відгуків. Викликається з клієнта після успішної мутації в API,
 * тож зміни видно одразу, а не після закінчення revalidate-інтервалу.
 */
export async function revalidatePublicContent(): Promise<void> {
  revalidatePath('/[locale]', 'page');
  revalidatePath('/[locale]/request/[id]', 'page');
  revalidatePath('/[locale]/profile/[id]', 'page');
  revalidatePath('/[locale]/categories', 'layout');
  revalidatePath('/sitemap.xml');
}
