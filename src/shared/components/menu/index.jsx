import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';

import Menu from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#3675D3',
    color: 'white',
    boxShadow: '0px 0px 0px 0px',
  },
  iconMenu: {
    display: 'none',
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
          <Typography variant="h6"> Ekommerce </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
