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

const MaterialCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        height="170"
        image="https://abimapi.com.br/images/galeria/24-06-2020_1_1ffec0832cfc5a99abc9207aabe36600.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h3">
          Tomato
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <ProductPrice> R$ 13,50 </ProductPrice>
        <AddShoppingCartIcon className={classes.cartIcon} />
      </CardActions>
    </Card>
  );
};

export default MaterialCard;
