import { HomePage, LoginPage, RegisterPage, CartPage } from '../domains/';

export const routes = [
  { path: '/cart', name: 'Cart', page: CartPage },
  { path: '/login', name: 'Login', page: LoginPage },
  { path: '/register', name: 'Register', page: RegisterPage },
  { path: '/', name: 'Home', page: HomePage },
];
