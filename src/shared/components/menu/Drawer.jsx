import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Drawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useStyles } from './styles';

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Drawer
        anchor="left"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List class={classes.list} onClick={() => setOpenDrawer(false)}>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText className={classes.listUserInfo}>
                <h3>Olá, seja bem vindo!</h3>
              </ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => history.push('/login')}>
            <ListItemIcon>
              <ListItemText className={classes.listItem}>
                Fazer login
              </ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => history.push('/register')}>
            <ListItemIcon>
              <ListItemText className={classes.listItem}>
                Registrar-se
              </ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <Menu className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
