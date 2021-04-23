import ModalOrder from '../modalOrder/ModalOrder';
import { useToken } from '../../../../providers/authToken';
import { useOrders } from '../../../../providers/orders';

import { Container, Button } from './styled';

export const CardOrder = ({
  id,
  total_price,
  status,
  product_list,
}) => {
  const { token } = useToken();
  const { createOrders } = useOrders();

  return (
    <Container>
      <div className="order order-id">
        <p>Pedido {id}</p>
      </div>
      <div className="order order-status">
        <span className={status}>{status}</span>
      </div>
      <div className="order order-number-itens">
        <p>Quantidade de items</p>
        <p className="p-bold">{product_list.length}</p>
      </div>
      <div className="order order-price">
        <p>Valor</p>
        <p className="p-bold">R$ {total_price} </p>
      </div>
      <div className="order order-itens">
        <ModalOrder products={product_list} />
      </div>
      <div className="order order-repeat">
        <Button onClick={() => createOrders(token, product_list)}>
          Pedir novamente
        </Button>
      </div>
    </Container>
  );
};
