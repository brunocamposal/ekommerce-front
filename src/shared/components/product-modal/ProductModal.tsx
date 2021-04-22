import { Modal } from '@material-ui/core';
import { ProductModalStyled } from '../../styles/ProductModalStyled';
import { AiOutlineClose } from 'react-icons/ai';
interface ProductModalProps {
  handleClose: () => void;
  productTitle: string;
  productImagePath: string;
  productDescription: string;
  productPrice: string;
  open: boolean;

  addToCart: () => void;
}

/**
 *
 * @param handleClose function that does the action of close modal,
 * @param open state of modal,
 * @param productTitle product title that was clicked,
 * @param productImagePath product image path of product image,
 * @param productDescription product description,
 * @param productPrice product price,
 * @param addToCart function that does the action of add item to cart
 *
 * @returns product modal with title image, description and price
 */
export const ProductModal = ({
  handleClose,
  open,
  productTitle,
  productImagePath,
  productDescription,
  productPrice,

  addToCart,
}: ProductModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="product-modal"
    >
      <ProductModalStyled>
        <header className="product-modal-header">
          <span className="product-modal-title">{productTitle}</span>
          <AiOutlineClose
            size="32"
            onClick={handleClose}
            className="product-modal-close"
          />
        </header>
        <img
          src={productImagePath}
          alt="product"
          className="product-modal-image"
        />

        <main className="product-modal-main">
          <span className="product-modal-description-title">Descrição</span>
          <p className="product-modal-description">{productDescription}</p>
        </main>
        <footer className="product-modal-footer">
          <span className="product-modal-price">R${productPrice}</span>
          <button className="product-modal-button" onClick={addToCart}>
            Adicionar ao carrinho
          </button>
        </footer>
      </ProductModalStyled>
    </Modal>
  );
};
