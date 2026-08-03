import { notFound } from 'next/navigation';

// Catch-all для невідомих маршрутів усередині мовного сегмента:
// рендерить not-found.tsx з кореневого [locale] layout.
export default function CatchAllPage() {
  notFound();
}
