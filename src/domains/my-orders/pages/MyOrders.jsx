import {useEffect} from 'react';

import { CardOrder } from '../components/cardOrder/CardOrder';
import { PageContainer } from './styled';
import { useToken } from '../../../providers/authToken';
import { useOrders, getOrders } from '../../../providers/orders';

export const MyOrdersPage = () => {
  const { token} = useToken()
  const { orders, getOrders } = useOrders()

  useEffect(() => {
    getOrders(token)
  },[orders])

  return (
    <PageContainer >
      {orders &&
        orders.map(({ id, total_price, status, product_list, comments, client_id }) =>
          <CardOrder
            key={id}
            id={id}
            total_price={total_price}
            status={status}
            product_list={product_list}
            comments={comments}
            client_id={client_id}
          />
        )}
    </PageContainer >
  );
};

