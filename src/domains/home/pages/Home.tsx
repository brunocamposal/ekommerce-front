import React, { useState } from 'react';

import { ProductModal } from '../../../shared/components/product-modal/ProductModal';

export const HomePage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const addToCart = () => {
    console.log('add to card')
  }

  return (
    <>
      <div>
        <button onClick={handleOpenModal}>Abrir modal</button>
        <ProductModal
          open={openModal}
          handleClose={handleCloseModal}
          productTitle="Produto exemplo"
          productDescription="DESCRIÇÃO DO PRODUTO BEM LONGA DESCRIÇÃO DO PRODUTO BEM LONGADESCRIÇÃO DO PRODUTO BEM LONGA DESCRIÇÃO DO PRODUTO BEM LONGADESCRIÇÃO DO PRODUTO BEM LONGADESCRIÇÃO DO PRODUTO BEM LONGADESCRIÇÃO DO PRODUTO BEM LONGADESCRIÇÃO DO PRODUTO BEM LONGADESCRIÇÃO DO PRODUTO BEM LONGAVDESCRIÇÃO DO PRODUTO BEM LONGA"
          productImagePath="https://belezaesaude.com/i/730/56/tomate.jpg"
          productPrice="2.30"
          addToCart={addToCart}
        ></ProductModal>
      </div>
    </>
  );
};
