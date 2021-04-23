import ModalOrder from '../modalOrder/ModalOrder'
import { useToken } from '../../../../providers/authToken'
import { axiosInstance } from '../../../../shared/utils/AxiosDefault'

import { Container, Button } from './styled';

const repeatOrder = (status, product_list, comments, client_id, token) => {
  const repeat_prod_id = product_list.map(prod => prod.id)

  const data = {
    "product_list": repeat_prod_id,
    "total_price": 0,
    "description": comments,
    "status": status,
    "client_id": client_id
  }

  axiosInstance
    .post('/api/orders/create_order/', data,
      { headers: { Authorization: `Token ${token}` } })
    .then((response) => console.log(response))

}

export const CardOrder = ({ id, total_price, status, product_list, comments, client_id }) => {
  const { token } = useToken()

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
        <Button
          onClick={() => repeatOrder(status, product_list, comments, client_id, token)}
        >
          Pedir novamente
          </Button>
      </div>
    </Container >
  )
}


