import { ImageResponse } from 'next/og';

/** PNG-логотип 512×512 для Organization JSON-LD (Google не підтримує .ico). */
export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1a1a2e',
        color: '#e63946',
        fontSize: 300,
        fontWeight: 700,
      }}
    >
      S
    </div>,
    { width: 512, height: 512 },
  );
}
