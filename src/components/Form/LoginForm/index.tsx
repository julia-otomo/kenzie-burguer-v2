import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

interface iUserLoginData {
  name: string;
  password: string;
}

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLoginData>({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm>
      <Input
        label='Nome'
        id='name'
        type='text'
        {...register('name')}
        errorMessage='Nome incorreto'
      />
      <Input
        label='Senha'
        id='password'
        type='password'
        {...register('password')}
        errorMessage='Senha incorreta'
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
