import { AuthTokenProvider } from './authToken'
import { OrdersProvider } from './orders'
import { ProductsProvider } from './products'

const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <ProductsProvider>
        <OrdersProvider>
          {children}
        </OrdersProvider>
      </ProductsProvider>
    </AuthTokenProvider>
  )
}

export default Providers;