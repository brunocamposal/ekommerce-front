import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';

import Menu from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#3675D3',
    color: 'white',
    boxShadow: '0px 0px 0px 0px',
  },
  iconMenu: {
    marginLeft: -18,
    marginRight: 10,
  },
  flex: {
    flexGrow: 2,
  },
});

const TopBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <IconButton
            aria-label="app"
            color="inherit"
            className={classes.iconMenu}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.flex}>
            Ekommerce
          </Typography>

          <Button color="inherit">
            Login
          </Button>
          <Button color="inherit">
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
