import { TextField, Button, ThemeProvider } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthenticationImage from '../../../assets/undraw_authentication.svg';
import { useHistory, Link } from 'react-router-dom';
import { formTextFieldTheme } from '../../../shared/theme/theme';
import { RegisterFields } from '../utils/Interfaces';

import { PageStyled } from '../../../shared/styles/PageStyled';
import {
  FormContainerStyled,
  FormStyled,
} from '../../../shared/styles/FormStyled';
import { schema } from '../utils/YupSchema';
import { registerUser } from '../utils/Requests';
import { useState } from 'react';
import { AxiosError } from 'axios';

export const RegisterPage = () => {
  const [error, setError] = useState<string>('');
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterFields) => {
    setError('')
    try {
      await registerUser(data);
      history.push('/');
    } catch (err) {
      const error = (err as AxiosError);
      console.error('Failed on register user');
      
      if (error.response?.data?.username){
        setError(error.response?.data?.username?.[0])
      }


    }
  };

  return (
    <PageStyled>
      <FormContainerStyled>
        <img
          src={AuthenticationImage}
          alt="authentication"
          className="form-container-image"
        />
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastrar</h1>
          <ThemeProvider theme={formTextFieldTheme}>
            <TextField
              error={errors.name}
              size="small"
              className="form-text-field"
              label="Nome"
              placeholder="Digite seu nome"
              variant="outlined"
              {...register('name')}
              helperText={errors.email && 'O campo Nome é obrigatório'}
            ></TextField>
          </ThemeProvider>

          <ThemeProvider theme={formTextFieldTheme}>
            <TextField
              error={errors.email}
              size="small"
              className="form-text-field"
              label="E-mail"
              placeholder="Digite seu e-mail"
              variant="outlined"
              {...register('email')}
              helperText={errors.email && 'O campo E-mail é obrigatório'}
            />
          </ThemeProvider>

          <ThemeProvider theme={formTextFieldTheme}>
            <TextField
              error={errors.password}
              size="small"
              className="form-text-field"
              label="Senha"
              placeholder="Digite sua senha"
              variant="outlined"
              type="password"
              {...register('password')}
              helperText={errors.password && 'O campo Senha é obrigatório'}
            />
          </ThemeProvider>

          <ThemeProvider theme={formTextFieldTheme}>
            <TextField
              error={errors.passwordConfirmation}
              size="small"
              className="form-text-field"
              label="Repetir senha"
              placeholder="Digite sua senha novamente"
              variant="outlined"
              type="password"
              {...register('passwordConfirmation')}
              helperText={
                errors.passwordConfirmation && 'As senhas devem ser iguais'
              }
            ></TextField>
          </ThemeProvider>
          <p className="form-error">{error}</p>

          <Button variant="contained" type="submit" className="form-button">
            Entrar
          </Button>

          <p className="form-footter-text">
            Já tem uma conta?{' '}
            <Link to="/register" className="form-link">
              Entre aqui
            </Link>
          </p>
        </FormStyled>
      </FormContainerStyled>
    </PageStyled>
  );
};
