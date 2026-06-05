import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { cookies } from 'next/headers';
import type { IAuthResponse } from '@/entities/auth';
import { authResponseSchema } from '@/entities/auth/schemas/authSchema';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://hochu-nest.vercel.app';

async function exchangeGoogleToken(idToken: string): Promise<IAuthResponse> {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value ?? 'uk';

  const res = await fetch(`${apiBaseUrl}/api/auth/google`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': locale,
    },
    body: JSON.stringify({ token: idToken }),
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as {
      error?: { message?: string | string[] };
    };
    const rawMessage = data?.error?.message;
    const message = Array.isArray(rawMessage)
      ? rawMessage[0]
      : (rawMessage ?? 'Помилка авторизації');
    throw new Error(message);
  }

  return authResponseSchema.parse(await res.json());
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === 'google' && account.id_token) {
        const backendAuth = await exchangeGoogleToken(account.id_token);
        token.accessToken = backendAuth.access_token;
        token.refreshToken = backendAuth.refresh_token;
        token.backendAuth = backendAuth;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      session.refreshToken = token.refreshToken as string | undefined;
      session.backendAuth = token.backendAuth as IAuthResponse | undefined;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  trustHost: true,
});
