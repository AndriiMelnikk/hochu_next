import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import UiKitContent from './UiKitContent';

export const metadata: Metadata = {
  title: 'UI kit v2',
  robots: { index: false, follow: false },
};

// Вітрина компонентів ui-v2: лише для розробки (у production — 404, якщо не увімкнено явно).
export default function UiKitPage() {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_UI_KIT !== '1') {
    notFound();
  }
  return <UiKitContent />;
}
