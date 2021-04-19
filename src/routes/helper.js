import { HomePage, LoginPage, RegisterPage, CartPage, MyOrdersPage } from '../domains/';

export const routes = [
  { path: '/my-orders', name: 'MyOrders', page: MyOrdersPage },
  { path: '/cart', name: 'Cart', page: CartPage },
  { path: '/login', name: 'Login', page: LoginPage },
  { path: '/register', name: 'Register', page: RegisterPage },
  { path: '/', name: 'Home', page: HomePage },
];
