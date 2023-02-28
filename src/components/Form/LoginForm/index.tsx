import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { iUserLoginData } from '../../../Contexts/UserContext/@types';
import { UserContext } from '../../../Contexts/UserContext';

const schema = yup.object({
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data: iUserLoginData) => {
    await userLogin(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        label='Email'
        type='text'
        {...register('email')}
        errorMessage={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        {...register('password')}
        errorMessage={errors.password}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
