import { CardOrder } from '../components/CardOrder'
import { PageContainer } from './styled'

export const MyOrdersPage = () => {
  return (
    <PageContainer >
      {orders &&
        orders.map(({ id, total_price, status, product_list }) =>
          <CardOrder
            key={id}
            id={id}
            total_price={total_price}
            status={status}
            product_list={product_list}
          />
        )}
    </PageContainer >
  );
};


const orders = [
  {
    "id": 7,
    "total_price": 497.0,
    "status": "REALIZADO",
    "comments": "no comments",
    "client_id": 3,
    "product_list": [
      1,
      4
    ]
  },
  {
    "id": 8,
    "total_price": 497.0,
    "status": "CANCELADO",
    "comments": "no comments",
    "client_id": 3,
    "product_list": [
      1,
      4
    ]
  },
  {
    "id": 8,
    "total_price": 497.0,
    "status": "ENTREGUE",
    "comments": "no comments",
    "client_id": 3,
    "product_list": [
      1,
      4
    ]
  }
]