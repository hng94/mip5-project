export interface AuthDTO {
  id: string | null;
  email: string | null;
  token: string | null;
}

export interface AuthInput {
  email: string;
  password: string;
}
