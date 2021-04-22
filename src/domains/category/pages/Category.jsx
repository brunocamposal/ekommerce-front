import Card from '../../../shared/components/card';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';

import { useStyles } from '../utils/styles';
import { Container } from '../utils/styled';
import { formatName } from "../utils/formatName"


export const CategoryPage = () => {
  const classes = useStyles();
  const { name } = useParams();

  return (
    <>
      <Container>
        <h2> {formatName(name)} </h2>
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
    </>
  );
};
