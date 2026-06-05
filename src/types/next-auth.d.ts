import type { IAuthResponse } from '@/entities/auth';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string;
    refreshToken?: string;
    backendAuth?: IAuthResponse;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    backendAuth?: IAuthResponse;
  }
}
