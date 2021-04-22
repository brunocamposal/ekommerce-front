import { createContext, useContext, useState } from 'react';
import { axiosInstance } from '../../shared/utils/AxiosDefault'
import { useEffect } from "react"

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([])

  const getOrders = () => {
    axiosInstance
      .get("/api/orders/", { headers: { Authorization: "Token afe4a82a7dd55998a60e2413d0ee56756ce095a8" } })
      .then((response) => setOrders(response.data))

  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <OrdersContext.Provider value={{ orders, getOrders }}>
      {children}
    </OrdersContext.Provider>
  )
}

export const useOrders = () => useContext(OrdersContext)

