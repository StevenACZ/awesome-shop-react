// React
import React from 'react';

// Styles
import {
  ProductHerosStyled,
  ProductDetail,
  ProductImage,
  Description,
  Price,
  Stock,
  AddToCart,
} from './Styles';

// Interfaces
import { Product } from '../../data/products';

const ProductHero: React.FC<Product> = ({
  title,
  description,
  price,
  imageUrl,
}) => {
  return (
    <ProductHerosStyled>
      <ProductImage>
        <img src={imageUrl} alt={title} />
      </ProductImage>
      <ProductDetail>
        <Description>
          <p>{title}</p>
          <span>{description}</span>
        </Description>
        <Price>
          <p>
            Price: <span>${price.toFixed(2)}</span>
          </p>
        </Price>
        <Stock>
          <p>
            Availability: <span>In stock</span>
          </p>
        </Stock>
        <AddToCart>
          <button>-</button>
          <span>1</span>
          <button>+</button>

          <button>Add to cart</button>
        </AddToCart>
      </ProductDetail>
    </ProductHerosStyled>
  );
};

export default ProductHero;
