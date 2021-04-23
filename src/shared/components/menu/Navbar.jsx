import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  AppBar,
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

import { AccountCircle, Search } from '@material-ui/icons';
import DrawerComponent from './Drawer';
import Cart from './Cart';

import { useStyles } from './styles';
import { useToken } from '../../../providers/authToken';
import { useProducts } from '../../../providers/products/';
import { useSearchedProducts } from '../../../providers/searched-prodcuts/';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const history = useHistory();
  const { products } = useProducts();
  const { token, clearToken } = useToken();

  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleSearchChange = ({ target: { value } }) => {
    console.log(value);
    console.log(products);
   
  };

  return (
    <>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography>
            <div
              className={classes.logo}
              onClick={() => {
                history.push('/');
              }}
            >
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
                <InputBase
                  className={classes.input}
                  placeholder="Search"
                  onChange={handleSearchChange}
                />
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
              {token.length !== 0 ? (
                <>
                  <MenuItem
                    onClick={() => {
                      history.push('/my-orders');
                      setAnchorEl(!anchorEl);
                    }}
                  >
                    Minhas compras
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(!anchorEl);
                      clearToken()
                      window.location.reload();
                    }}
                  >
                      Sair
                  </MenuItem>
                </>
              ) : (
                <>
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
                </>
              )}
            </Menu>
            <Cart />
          </>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
