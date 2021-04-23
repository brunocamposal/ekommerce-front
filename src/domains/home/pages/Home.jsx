import { Container, Message } from '../utils/styled';
import { CategoryDesktop, CategoryMobile } from '../components';

import Card from '../../../shared/components/card';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../utils/styles';
import { useProducts } from '../../../providers/products';

export const HomePage = () => {
  const classes = useStyles();

  const { products } = useProducts();

  return (
    <>
      <div>
        <CategoryDesktop />
        <CategoryMobile />
        <Container>
          <h2> Produtos favoritos </h2>
          <div className={classes.gridProducts}>
            <Grid container spacing={3}>
              {products.length === 0 ? (
                <Message> Não existem produtos cadastrados </Message>
              ) : (
                products.map(({ product_data }, index) => (
                  <Grid item xs={12} sm={3} className={classes.gridColumn}>
                    <Card
                      key={index}
                      id={product_data.id}
                      name={product_data.name}
                      image={product_data.image}
                      price={product_data.price}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};
