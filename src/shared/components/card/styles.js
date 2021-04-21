import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 200,
    maxHeight: 480,
  },
  media: {
    objectFit: 'cover',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 10px',
  },
}));
