import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  IconButton,
  InputBase,
  Paper,
} from '@material-ui/core';

import { AccountCircle, ShoppingCart, Search } from '@material-ui/icons';
import DrawerComponent from '../drawer/Drawer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'var(--primary-bg)',
    color: 'white',
    boxShadow: '0px 0px 0px 0px',
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menu: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography>
            <div className={classes.logo}>
              <h2> Ekommerce </h2>
            </div>
          </Typography>
          {isMatch && (
            <>
              <DrawerComponent />
            </>
          )}
          <>
            <div className={classes.searchField}>
              <Paper component="form" className={classes.root}>
                <InputBase className={classes.input} placeholder="Search" />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
              </Paper>
            </div>
            <IconButton
              aria-owns={anchorEl ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={handleMenu}
              className={classes.menu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {/* logado */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={anchorEl}
              onClose={() => setAnchorEl(!anchorEl)}
            >
              <MenuItem
                onClick={() => {
                  history.push('/login');
                  setAnchorEl(!anchorEl);
                }}
              >
                Fazer Login
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push('/register');
                  setAnchorEl(!anchorEl);
                }}
              >
                Registrar-se
              </MenuItem>
            </Menu>

            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>
          </>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
