import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  menuIconToggle: {
    fontSize: '2rem',
    color: 'white',
  },
  list: {
    width: 250,
    backgroundColor: 'var(--primary-bg)',
    height: '100vh',
  },
  listItem: {
    color: 'white',
    paddingLeft: '25px',
  },
  listUserInfo: {
    color: 'white',
    padding: '15px',
  },
  appBar: {
    backgroundColor: 'var(--primary-bg)',
    color: 'white',
    boxShadow: '0px 0px 0px 0px',
  },
  logo: {
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menu: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menuCart: {
    marginBottom: '10px',
  },
  searchField: {
    margin: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '350px',
    [theme.breakpoints.down('md')]: {
      width: '150px',
    },
  },
  iconButton: {
    padding: 10,
  },
  cart: {
    padding: 4,
    width: '300px',
  },
  emptyCart: {
    textAlign: "center",
  }
}));
