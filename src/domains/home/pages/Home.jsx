import { FavoritesProducts } from '../utils/styled';
import { CategoryDesktop, CategoryMobile } from '../components';

import Card from '../../../shared/components/card';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../utils/styles';

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <CategoryDesktop />
        <CategoryMobile />
        <FavoritesProducts>
          <h2> Produtos favoritos </h2>
          <div className={classes.gridProducts}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Card />
              </Grid>
              <Grid item xs={2}>
                <Card />
              </Grid>
              <Grid item xs={2}>
                <Card />
              </Grid>
              <Grid item xs={2}>
                <Card />
              </Grid>
              <Grid item xs={2}>
                <Card />
              </Grid>
              <Grid item xs={2}>
                <Card />
              </Grid>
              <Grid item xs={2}>
                <Card />
              </Grid>
            </Grid>
          </div>
        </FavoritesProducts>
      </div>
    </>
  );
};
