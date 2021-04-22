import styled from 'styled-components';

export const ProductModalStyled = styled.div`
  width: 500px;
  height: 600px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  align-items: center;

  .product-modal-header {
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }

  .product-modal-title {
    font-size: 20px;
    font-weight: bold;
    color: #463f53;
  }

  .product-modal-image {
    width: 85%;
    border-radius: 5px;
    margin: 20px;
  }

  .product-modal-main {
    width: 85%;
    margin: 20px;
  }

  .product-modal-description-title {
    font-size: 20px;
    font-weight: bold;
    color: #463f53;
  }

  .product-modal-description {
    margin: 5px;
    font-size: 12px;
  }

  .product-modal-footer {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-modal-price {
    font-size: 24px;
    font-weight: bold;
    color: #3675d3;
  }

  .product-modal-button {
    width: 70%;
    height: 40px;
    border-radius: 5px;
    border-style: none;
    background-color: #3675d3;
    color: #f9f9f9;
    font-size: 16px;
    transition: 0.2s;
  }

  .product-modal-button:hover {
    background-color: #254c86;
    transition: 0.2s;
  }

  .product-modal-button:active {
    background-color: #3675d3;
    transition: 0.2s;
  }

  .product-modal-close {
    color: #463f53;
  }

  .product-modal-close:hover {
    color: #b23b3b;
  }

  .product-modal-close:active {
    color: #463f53;
  }
`;
