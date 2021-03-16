// React
import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// Styles
import { ProductItemStyled, Top, Bottom } from './Styles';

// Intefaces
import { Product } from '../../../data/products';

const ProductItem: React.FC<Product> = ({ id, title, price, imageUrl }) => {
  return (
    <Link to={`/products/${id}`}>
      <ProductItemStyled>
        <Top>
          <img src={imageUrl} alt={title} />
        </Top>

        <Bottom>
          <p>{title}</p>
          <span>${price.toFixed(2)}</span>
        </Bottom>
      </ProductItemStyled>
    </Link>
  );
};

export default ProductItem;
