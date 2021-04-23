import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  height: 165px;
  padding: 2%;
  margin: 10px;
  font-size:16px;
  

  background: #F9F9F9;
  box-shadow: 0px 2px 4px #C6B7E1;

  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr;

  .order {
    text-align: center
  }

  .order-id  {
    text-align: left;
    color: #505050;

    p {
      font-weight: 400;
    }
  }

  .order-status {
    text-align: right;

    span {
      text-align: center;
      font-weight: bold;
      padding: 6px;
      border-radius: 3px;
      color: white;
    }

    .REALIZADO {
      background-color: #3675D3
    }

    .ENTREGUE {
      background-color: #6EAD2F;
    }

    .CANCELADO {
      background-color: #D14E4E;
    }
  }

  .order-number-itens  {
    text-align:center;
    color: #333333;

    p {
      padding-top: 3px;
    }
  }

  .order-price {
    p {
      padding-top: 3px;
    }
  }

  .order-itens {
    padding-top: 15px;
    
  }

  .order-repeat {
    padding-top: 15px;
  }

  .p-bold {
    font-weight: 600;
    font-size:16px;
  }

  @media (max-width: 600px) {
    padding: 3%;
    width: 90vw;
    height: 135px;
    font-size: 14px;

    .order-status {

      span {
        padding: 4px;
        font-weight: normal;
      }
    }
  }
`
export const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  font-weight: bold;
  font-size:16px;
  color: #3775D3;
`;