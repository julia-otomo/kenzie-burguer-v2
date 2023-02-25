/* eslint-disable no-console */
import { createContext, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  iUserContextValue,
  iUserProviderProps,
  iUserInformation,
  iUserRegisterData,
  iUserLoginData,
} from './interface';
import { api } from '../../Services/api';

export const UserContext = createContext({} as iUserContextValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUserInformation | null>(null);
  const navigate = useNavigate();

  const userRegister = async (data: iUserRegisterData) => {
    try {
      await api.post('/users', data);
      toast.success('Cadastro realizado com sucesso');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Email já cadastrado');
    }
  };

  const userLogin = async (data: iUserLoginData) => {
    try {
      const login = await api.post('/login', data);
      setUser(login.data.user);
      localStorage.setItem('@TOKEN', login.data.accessToken);
      localStorage.setItem('@USER', JSON.stringify(data));
      toast.success('Login realizado com sucesso');
      navigate('/shop');
    } catch (error) {
      console.log(error);
      toast.error('Email ou senha incorretos');
      localStorage.clear();
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser, userRegister, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
