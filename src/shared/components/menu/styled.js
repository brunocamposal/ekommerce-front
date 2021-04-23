import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const ProductImage = styled.img`
  background-size: cover;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const ProductPrice = styled.h4`
  color: #37107b;
  margin-right: 10px;
`;

export const ProductQuantity = styled.p`
  margin-right: 10px;
`;

export const RemoveButton = styled(Button)`
  width: 75px;
  height: 25px;
`;

export const FinishedButton = styled(Button)`
  width: 100%;
  height: 35px;
`;
