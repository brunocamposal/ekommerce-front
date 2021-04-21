import { HomePage, LoginPage, RegisterPage, CategoryPage  } from '../domains/';

export const routes = [
  { path: '/category/:name?', name: 'Category', page: CategoryPage },
  { path: '/login', name: 'Login', page: LoginPage },
  { path: '/register', name: 'Register', page: RegisterPage },
  { path: '/', name: 'Home', page: HomePage },
];
