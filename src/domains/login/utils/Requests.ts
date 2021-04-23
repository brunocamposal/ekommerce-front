import { axiosInstance } from '../../../shared/utils/AxiosDefault';
import { LoginFields } from './Interfaces';

export const login = async (data: LoginFields) => {

  const result = await axiosInstance.post('/api/login/', {
    username: data.email,
    password: data.password,
  });

  localStorage.setItem('token', result.data?.token);
  return result;

};
