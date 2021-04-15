import { axiosInstance } from '../../../shared/utils/AxiosDefault';
import { RegisterFields } from './Interfaces';

export const registerUser = async (data: RegisterFields) => {
  /**
   * @todo change username to email
   */
  try {
    await axiosInstance.post('/api/signup/', {
      username: data?.email,
      password: data?.password,
    });
  } catch (err) {
    console.error(err);
  }
};
