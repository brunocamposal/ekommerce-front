import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 210,
  },
  media: {
    objectFit: 'cover',
    cursor: "pointer",
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 10px',
  },
  cartIcon: {
    cursor: 'pointer',
  },
}));
