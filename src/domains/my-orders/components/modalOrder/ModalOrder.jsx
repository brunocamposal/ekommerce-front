import { useState } from 'react';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { MenuList, MenuItem } from '@material-ui/core';

import {
  ItemContainer,
  ProductImage,
  ProductPrice,
  ProductQuantity,
  ModalButton,
  Container
} from './styled';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: 'white',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 3),
  }
}));


const ModalOrder = ({ products }) => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Container>
        <div>
          <span >Produtos</span>
        </div>
        <MenuList className={classes.menuCart}>
          {products.map((item) => (
            <ItemContainer>
              <MenuItem>
                <ProductImage src={item.image} />{' '}
                <p>
                  <span>{item.name}</span>
                  <br />
                  <div >
                    <ProductPrice>R$ {item.price}</ProductPrice>
                    <ProductQuantity> 1 qnt. </ProductQuantity>

                  </div>
                </p>
              </MenuItem>
            </ItemContainer>
          ))}
        </MenuList>
      </Container>
    </div >
  );

  return (
    <div>
      <div className={classes.root}>
        <ModalButton color="primary" type="button" onClick={handleOpen}>
          Ver pedido
        </ModalButton>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}

export default ModalOrder;
