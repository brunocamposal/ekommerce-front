import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const ProductImage = styled.img`
  background-size: cover;
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const ProductPrice = styled.h4`
  color: #37107b;
  margin-right: 15px;
`;

export const ProductQuantity = styled.p`
  margin-right: 10px;
`;


export const Container = styled.div`
  color: #505050;
  
  div {
    padding: 10px;
    margin: 1px; 

    display: flex;
    justify-content: space-around;
  }

`
export const ItemContainer = styled.div`
  background: #F9F9F9;
  box-shadow: 0px 0px 4px #C6B7E1;
  

`

export const ModalButton = styled.button`
  outline: none;
  border: none;
  background: none;
  font-weight: bold;
  font-size:16px;
  color: #3775D3;
`;