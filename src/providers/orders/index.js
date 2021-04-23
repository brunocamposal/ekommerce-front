import { createContext, useContext, useState } from 'react';
import { axiosInstance } from '../../shared/utils/AxiosDefault';
import Swal from 'sweetalert2';

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);


  const getOrders = (token) => {
    axiosInstance
      .get('/api/orders/', { headers: { Authorization: `Token ${token}` } })
      .then((response) => setOrders(response.data));
  };

  const createOrders = (token, productData) => {
    if (token.length === 0) {
      Swal.fire('Você precisa estar logado para realizar o pedido');
    }

    const repeat_prod_id = productData.map((prod) => prod.id);

    const data = {
      product_list: repeat_prod_id,
    };

    axiosInstance
      .post('/api/orders/create_order/', data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Pedido criado com sucesso',
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.removeItem('cart');
      })
      .catch((error) => console.log(error));
  };

  return (
    <OrdersContext.Provider value={{ orders, getOrders, createOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);
