import { createContext, useContext, useState } from 'react';
import { axiosInstance } from '../../shared/utils/AxiosDefault';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const getOrders = (token) => {
    axiosInstance
      .get('/api/orders/', { headers: { Authorization: `Token ${token}` } })
      .then((response) => setOrders(response.data));
  };

  const createOrders = (token, productData) => {
    const repeat_prod_id = productData.map((prod) => prod.id);

    const data = {
      product_list: repeat_prod_id,
    };

    axiosInstance
      .post('/api/orders/create_order/', data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <OrdersContext.Provider value={{ orders, getOrders, createOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);
