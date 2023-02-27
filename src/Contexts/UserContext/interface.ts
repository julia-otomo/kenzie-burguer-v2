import { ReactNode } from 'react';

export interface iUserProviderProps {
  children: ReactNode;
}

export interface iUserInformation {
  id: string;
  name: string;
  email: string;
  password?: string;
  passwordConfirm?: string;
}

export interface iUserRegisterData {
  email: string;
  password: string;
  name: string;
}

export type iUserLoginData = Omit<iUserRegisterData, 'name'>;

export interface iUserContextValue {
  user: iUserInformation | null;
  setUser: React.Dispatch<React.SetStateAction<iUserInformation | null>>;
  userRegister: (data: iUserRegisterData) => Promise<void>;
  userLogin: (data: iUserLoginData) => Promise<void>;
  logout: () => void;
}
