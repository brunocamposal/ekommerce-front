import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  MenuItem,
  IconButton,
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
} from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';

import { ProductImage, ProductPrice, ProductButton, ProductQuantity } from './styled';
import { useStyles } from './styles';

const Cart = () => {
  const [anchorCart, setAnchorCart] = useState(null);

  const history = useHistory();

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
        <ShoppingCart />
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
                <MenuList>
                  <MenuItem>
                    <ProductImage src="https://www.bambui.ifmg.edu.br/portal_padrao_joomla/joomla/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" />{' '}
                    <p>
                      Bolacha oreo
                      <br />
                      <div className={classes.flex}>
                        <ProductPrice> R$ 13,50 </ProductPrice>
                        <ProductQuantity> 1 qnt. </ProductQuantity>
                        <ProductButton size="small" variant="contained" disableRipple color="secondary">
                          remover
                        </ProductButton>
                      </div>
                    </p>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Cart;
