import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  rootDesktop: {
    margin: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  rootMobile: {
    margin: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },

    [theme.breakpoints.down('xl')]: {
      display: 'none',
    },

    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  gridImage: {
    objectFit: 'cover',
    height: '100%',
    cursor: "pointer",
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  gridProducts: {
    flexGrow: 1,
    marginTop: '25px',
    maxWidth: '100vw',
  },
  gridColumn: {
    display: "flex",
    justifyContent: "center",
  },
}));
