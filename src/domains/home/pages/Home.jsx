import { Container } from '../utils/styled';
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
        <Container>
          <h2> Produtos favoritos </h2>
          <div className={classes.gridProducts}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3} className={classes.gridColumn} >
                <Card />
              </Grid>
              <Grid item xs={12} sm={3} className={classes.gridColumn}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={3} className={classes.gridColumn}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={3} className={classes.gridColumn}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={3} className={classes.gridColumn}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={3} className={classes.gridColumn}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={3} className={classes.gridColumn}>
                <Card />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};
