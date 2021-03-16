// React
import React from 'react';

// Styles
import { ProductItemStyled, Top, Bottom } from './Styles';

// Intefaces
import { Product } from '../../../data/products';

const ProductItem: React.FC<Product> = ({ title, price, imageUrl }) => {
  return (
    <ProductItemStyled>
      <Top>
        <img src={imageUrl} alt={title} />
      </Top>

      <Bottom>
        <p>{title}</p>
        <span>${price.toFixed(2)}</span>
      </Bottom>
    </ProductItemStyled>
  );
};

export default ProductItem;
