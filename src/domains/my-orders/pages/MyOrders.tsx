import { CardOrder } from '../components/cardOrder/CardOrder'
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
    "product_list": [
      {
        "id": 1,
        "name": "Sprit",
        "category": "bebida",
        "image": "https://www.drogariaminasbrasil.com.br/media/product/61d/refrigerante-sprite-lata-350ml-123.jpg",
        "price": 10.5,
        "description": "refrigerante de cola",
        "amount": 76
      },
      {
        "id": 4,
        "name": "Coca cola",
        "category": "bebida",
        "image": "https://emporiokaminski.com.br/wp-content/uploads/2020/07/Refrigerante-Coca-Cola-2l.jpg",
        "price": 12.5,
        "description": "refrigerante de cola",
        "amount": 74
      },
      {
        "id": 6,
        "name": "Miojo",
        "category": "alimento",
        "image": "https://static.clubeextra.com.br/img/uploads/1/313/590313.png",
        "price": 2.5,
        "description": "refrigerante de cola",
        "amount": 74
      }
    ],
    "total_price": 197.0,
    "status": "CANCELADO",
    "comments": "no comments",
    "client_id": 3
  },
  {
    "id": 8,
    "product_list": [
      {
        "id": 1,
        "name": "coca cola",
        "category": "bebida",
        "image": "bebida.png",
        "price": 248.5,
        "description": "refrigerante de cola",
        "amount": 76
      },
      {
        "id": 4,
        "name": "coca cola",
        "category": "bebida",
        "image": "bebida.png",
        "price": 248.5,
        "description": "refrigerante de cola",
        "amount": 74
      }
    ],
    "total_price": 497.0,
    "status": "REALIZADO",
    "comments": "no comments",
    "client_id": 3
  }
]