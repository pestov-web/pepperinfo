export type VerificationToken = {
  identifier: string;
  expires: Date;
  token: string;
};

export type Account = {
  id: number;
  userId: number;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  id_token?: string | null;
  scope?: string | null;
  session_state?: string | null;
  token_type?: string | null;
};

export type Session = {
  id: number;
  userId: number;
  expires: Date;
  sessionToken: string;
};

export type User = {
  id: number;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
};
