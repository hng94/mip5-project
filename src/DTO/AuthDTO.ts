export interface AuthDTO {
  id: string;
  email: string;
  token: string;
}

export interface AuthInput {
  email: string;
  password: string;
}
