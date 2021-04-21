import { axiosInstance } from '../../../shared/utils/AxiosDefault';
import { RegisterFields } from './Interfaces';

export const registerUser = async (data: RegisterFields) => {
  /**
   * @todo change username to email
   */
  try {
    await axiosInstance.post('/api/signup/', {
      first_name: data?.name,
      username: data?.email,
      password: data?.password,
      is_superuser: false,
      is_staff: false,
    });
  } catch (err) {
    console.error(err);
  }
};
