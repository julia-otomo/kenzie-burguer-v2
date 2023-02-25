import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { iUserLoginData } from '../../../Contexts/UserContext/interface';
import { useContext } from 'react';
import { UserContext } from '../../../Contexts/UserContext/UserContext';

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const LoginForm = () => {
  if (UserContext) {
    const {userLogin} = useContext(UserContext);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data: iUserLoginData) => {
    await 
  };

  return (
    <StyledForm>
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
