import * as Yup from 'yup';
export const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirmation:Yup.string()
  .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
});
