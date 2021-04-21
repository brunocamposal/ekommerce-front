import { TextField, Button, ThemeProvider } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFields } from '../utils/Interfaces';
import { schema } from '../utils/YupSchema';
import { login } from '../utils/Requests';
import ShoppingAppImage from '../../../assets/undraw_shopping_app.svg';
import { useHistory, Link } from 'react-router-dom';
import { formTextFieldTheme } from '../../../shared/theme/theme';
import { PageStyled } from '../../../shared/styles/PageStyled';
import {
  FormContainerStyled,
  FormStyled,
} from '../../../shared/styles/FormStyled';
import { useState } from 'react';

export const LoginPage = () => {
  const [error, setError] = useState<string>('');
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFields) => {
    setError('')
    try {
      await login(data);
      history.push('/');
    } catch (err) {
      console.error('Failed on login');
      setError('Email ou senha inválidas, tente novamente.')
    }
  };

  return (
    <PageStyled>
      <FormContainerStyled>
        <img
          src={ShoppingAppImage}
          alt="shopping-app"
          className="form-container-image"
        />
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <h1>Entrar</h1>
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
          <p className="form-error">{error}</p>
          <Button variant="contained" type="submit" className="form-button">
            Entrar
          </Button>
          <p className="form-footter-text">
            Não tem cadastro?
            <Link to="/register" className="form-link">
              Crie sua conta aqui
            </Link>
          </p>
        </FormStyled>
      </FormContainerStyled>
    </PageStyled>
  );
};
