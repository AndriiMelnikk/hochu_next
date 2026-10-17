export interface ITelegramLinkStatus {
  linked: boolean;
  telegramChatId?: string | null;
  telegramUsername?: string | null;
  linkedAt?: string | null;
}

export interface ITelegramLinkToken {
  token: string;
  deepLink: string;
  expiresAt: string;
}
