import { createContext, useContext, useState } from 'react';
import { axiosInstance } from '../../shared/utils/AxiosDefault'

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([])

  const getOrders = ({ token }) => {
    axiosInstance
      .get("/api/orders/", { headers: { Authorization: `Token ${token}` } })
      .then((response) => setOrders(response.data))
  }

  return (
    <OrdersContext.Provider value={{ orders, getOrders }}>
      {children}
    </OrdersContext.Provider>
  )
}

export const useOrders = () => useContext(OrdersContext)

