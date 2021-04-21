import { axiosInstance } from '../../../shared/utils/AxiosDefault';
import { RegisterFields } from './Interfaces';

export const registerUser = async (data: RegisterFields) => {
  await axiosInstance.post('/api/signup/', {
    first_name: data.name,
    username: data.email,
    password: data.password,
    is_superuser: false,
    is_staff: false,
  });

  const result = await axiosInstance.post('/api/login/', {
    username: data.email,
    password: data.password,
  });

  localStorage.setItem('token', result.data?.token);
};
