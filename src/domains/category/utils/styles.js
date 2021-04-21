import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  gridProducts: {
    flexGrow: 1,
    marginTop: '15px',
    maxWidth: '100vw',
  },
  gridColumn: {
    display: "flex",
    justifyContent: "center",
  },
}));
