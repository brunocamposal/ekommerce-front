import { HomePage, LoginPage, RegisterPage, MyOrdersPage, CategoryPage } from '../domains/';

export const routes = [
  { path: '/my-orders', name: 'MyOrders', page: MyOrdersPage },
  { path: '/category/:name?', name: 'Category', page: CategoryPage },
  { path: '/login', name: 'Login', page: LoginPage },
  { path: '/register', name: 'Register', page: RegisterPage },
  { path: '/', name: 'Home', page: HomePage },
];
