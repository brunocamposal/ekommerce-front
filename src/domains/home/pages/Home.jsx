import { Container, Message } from '../utils/styled';
import { CategoryDesktop, CategoryMobile } from '../components';

import Card from '../../../shared/components/card';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../utils/styles';
import { useProducts } from '../../../providers/products';

import { ProductModal } from '../../../shared/components/product-modal/ProductModal';
import { useState } from 'react';

export const HomePage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});

  const { products } = useProducts();

  const handleOpen = (name, image, price, description) => {
    setProduct({ name, image, price, description });
    setOpen(true);
  };



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
                      onClick={() =>
                        handleOpen(
                          product_data.name,
                          product_data.image,
                          product_data.price,
                          product_data.description
                        )
                      }
                    />
                  </Grid>
                ))
              )
              
              }
            </Grid>
          </div>
          <ProductModal
            open={open}
            handleClose={() => setOpen(false)}
            productTitle={product?.name}
            productImagePath={product?.image}
            productPrice={product?.price}
            productDescription={product?.description}
          />
        </Container>
      </div>
    </>
  );
};
