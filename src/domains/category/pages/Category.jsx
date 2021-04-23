import Card from '../../../shared/components/card';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';

import { useProducts } from '../../../providers/products';

import { CategoryDesktop, CategoryMobile } from '../../home/components';
import { Message } from '../../home/utils/styled';

import { useStyles } from '../utils/styles';
import { Container } from '../utils/styled';
import { formatName } from '../utils/formatName';

export const CategoryPage = () => {
  const classes = useStyles();
  const { name } = useParams();
  const { products } = useProducts();
  const categoryProducts = products.filter(({ product_data }) => product_data.category.toLowerCase() === name.toLowerCase())

  return (
    <>
      <div>
        <CategoryDesktop />
        <CategoryMobile />
        <Container>
          <h2> {formatName(name)} </h2>
          <div className={classes.gridProducts}>
            <Grid container spacing={3}>
              {categoryProducts.length === 0 ? (
                <Message> Não existem produtos cadastrados nessa categoria </Message>
              ) : (
                categoryProducts
                  .map(({ product_data }) => (
                    <Grid item xs={12} sm={3} className={classes.gridColumn}>
                      <Card
                        key={product_data.id}
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
