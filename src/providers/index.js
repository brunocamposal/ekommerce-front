import { AuthTokenProvider } from './authToken';
import { OrdersProvider } from './orders';
import { ProductsProvider } from './products';
import { CartProvider } from './cart';

const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <ProductsProvider>
        <OrdersProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </OrdersProvider>
      </ProductsProvider>
    </AuthTokenProvider>
  );
};

export default Providers;
