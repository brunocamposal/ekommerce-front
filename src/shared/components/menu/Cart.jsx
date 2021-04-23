import { useState } from 'react';
import { useCart } from '../../../providers/cart';
import { useOrders } from '../../../providers/orders';
import { useToken } from '../../../providers/authToken';

import {
  MenuItem,
  IconButton,
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  Badge,
} from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';

import {
  ProductImage,
  ProductPrice,
  RemoveButton,
  ProductQuantity,
  FinishedButton,
} from './styled';
import { useStyles } from './styles';

const Cart = () => {
  const [anchorCart, setAnchorCart] = useState(null);
  const { cart, deleteProduct } = useCart();
  const { createOrders } = useOrders();
  const { token } = useToken();


  const classes = useStyles();

  const handleCart = (e) => {
    setAnchorCart(e.currentTarget);
  };

  return (
    <>
      <IconButton
        aria-owns={anchorCart ? 'menu-list-grow' : null}
        aria-haspopup="true"
        onClick={handleCart}
        color="inherit"
      >
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Popper open={anchorCart} anchorEl={anchorCart} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.cart}>
              <ClickAwayListener onClickAway={() => setAnchorCart(false)}>
                <MenuList className={classes.menuCart}>
                  {cart.map(({ id, image, name, price }) => (
                    <MenuItem>
                      <ProductImage src={image} />
                      <p>
                        {name}
                        <br />
                        <div className={classes.flex}>
                          <ProductPrice> R$ {price} </ProductPrice>
                          <ProductQuantity> 1 qnt. </ProductQuantity>
                          <RemoveButton
                            size="small"
                            variant="contained"
                            disableRipple
                            color="secondary"
                            onClick={() => deleteProduct(id)}
                          >
                            remover
                          </RemoveButton>
                        </div>
                      </p>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
              <FinishedButton variant="contained" size="large" onClick={()=> createOrders(token, cart)} color="primary">
                Finalizar compra
              </FinishedButton>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Cart;
