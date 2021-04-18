import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';

const CardOrder = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw', height: '100vh' }}>
      {orders &&
        orders.map(({ id, total_price, status, product_list }) => (
          <Container>
            <div className="order order-id">
              <p>Pedido {id}</p>
            </div>
            <div className="order order-status">
              <span className={status} >{status}</span>
            </div>
            <div className="order order-number-itens">
              <p>Quantidade de items</p>
              <p className="p-bold">{product_list.length}</p>
            </div>
            <div className="order order-price">
              <p>Valor</p>
              <p className="p-bold">R$ {total_price},00</p>
            </div>
            <div className="order order-itens">
              <Link to="">Ver pedido</Link>
            </div>
            <div className="order order-repeat">
              <Link to="">Pedir novamente</Link>
            </div>
          </Container >
        ))}
    </div >
  )
}

export default CardOrder;

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