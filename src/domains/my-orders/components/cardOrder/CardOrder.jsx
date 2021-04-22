import { Link } from 'react-router-dom';
import { Container } from './styled';
import ModalOrder from '../modalOrder/ModalOrder'

// interface props {
//   id: number;
//   total_price: number;
//   status: string;
//   product_list: Array<{}>;
//   products: Array<[]>
// }

export const CardOrder = ({ id, total_price, status, product_list }) => {
  return (
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
        <ModalOrder products={product_list} />
      </div>
      <div className="order order-repeat">
        <Link to="">Pedir novamente</Link>
      </div>
    </Container >
  )
}


