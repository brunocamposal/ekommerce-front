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

export const LoginPage = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFields) => {
    try {
      await login(data);
      history.push('/');
    } catch (err) {
      console.error(err)
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
          <Button variant="contained" type="submit" className="form-button">
            Entrar
          </Button>
          <p className="form-footter-text">
            Não tem cadastro?{' '}
            <Link to="/login" className="form-link">
              Crie sua conta aqui
            </Link>
          </p>
        </FormStyled>
      </FormContainerStyled>
    </PageStyled>
  );
};
