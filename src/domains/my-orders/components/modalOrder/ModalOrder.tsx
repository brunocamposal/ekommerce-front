import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ItemsContainer } from './styled'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const ModalOrder = () => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>

      <ItemsContainer>
        {order.product_list.map((item) => (
          <div>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span></span>
            <span>R$ {item.price}</span>
          </div>
        ))}
      </ItemsContainer>

    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        View products
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}

export default ModalOrder;

const order = {
  "id": 7,
  "product_list": [
    {
      "id": 1,
      "name": "coca cola",
      "category": "bebida",
      "image": "bebida.png",
      "price": 248.5,
      "description": "refrigerante de cola",
      "amount": 76
    },
    {
      "id": 4,
      "name": "coca cola",
      "category": "bebida",
      "image": "bebida.png",
      "price": 248.5,
      "description": "refrigerante de cola",
      "amount": 74
    }
  ],
  "total_price": 497.0,
  "status": "REALIZADO",
  "comments": "no comments",
  "client_id": 3
}