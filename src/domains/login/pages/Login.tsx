import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFields } from '../utils/Interfaces';
import { schema } from '../utils/YupSchema';
import { login } from '../utils/Requests';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFields) => {
    
    await login(data);
  };

  return (
    <div style={{ margin: '100px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
         error={errors.email}
          label="E-mail"
          placeholder="Digite seu e-mail"
          variant="outlined"
          {...register('email')}
       
          helperText={errors.email && 'O campo E-mail é obrigatório'}
        />
        <TextField
          error={errors.password}
          label="Senha"
          placeholder="Digite sua senha"
          variant="outlined"
          {...register('password')}
          helperText={errors.password && 'O campo Senha é obrigatório'}
        />
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
};
