import { ImageResponse } from 'next/og';
import { isLocale } from '@/locales/config';

export const runtime = 'edge';

export const alt = 'Shukayu — платформа для покупців та продавців послуг';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpengraphImage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'uk';

  const subtitle =
    locale === 'uk'
      ? 'Платформа для покупців та продавців послуг'
      : 'Platform connecting buyers and sellers of services';

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #e63946 200%)',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          fontSize: 120,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          color: '#e63946',
        }}
      >
        Shukayu
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 40,
          color: '#f1f1f1',
          textAlign: 'center',
          maxWidth: 1000,
        }}
      >
        {subtitle}
      </div>
    </div>,
    size,
  );
}
