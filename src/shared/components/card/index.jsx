import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { ProductPrice } from './styled';
import { useStyles } from './styles';
import { useCart } from '../../../providers/cart';

const MaterialCard = ({ id, image, name, price, onClick }) => {
  const classes = useStyles();
  const { setCart, cart } = useCart();

  const productData = {
    id,
    name,
    image,
    price,
  };

  return (
    <Card className={classes.card} >
      <CardMedia
        component="img"
        className={classes.media}
        height="170"
        image={image}
        title={name}
        onClick={onClick}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h3">
          {name}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <ProductPrice> R$ {price} </ProductPrice>
        <AddShoppingCartIcon
          className={classes.cartIcon}
          onClick={() => setCart([...cart, productData])}
        />
      </CardActions>
    </Card>
  );
};

export default MaterialCard;
