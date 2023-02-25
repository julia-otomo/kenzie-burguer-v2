import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { iUserRegisterData } from '../../../Contexts/UserContext/interface';
import { UserContext } from '../../../Contexts/UserContext/UserContext';

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
      'A senha deve contar pelo menos 1 número, 1 letra minúscula, 1 letra maiúscula, 1 caractere especial e deve possuir no mínimo 8 caracteres no total'
    ),
  passwordConfirm: yup
    .string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password')], 'As senhas devem ser idênticas'),
});

interface iUserRegisterForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegisterForm>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data: iUserRegisterData) => {
    await userRegister(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        label='Nome'
        type='text'
        {...register('name')}
        errorMessage={errors.name}
      />
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
      <Input
        label='Confirmar Senha'
        type='password'
        {...register('passwordConfirm')}
        errorMessage={errors.name}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
