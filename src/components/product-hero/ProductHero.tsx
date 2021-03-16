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
  Counter,
} from './Styles';

// Interfaces
import { Product } from '../../data/products';
import Button from '../button/Button';

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
          <Counter>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </Counter>

          <Button>Add to cart</Button>
        </AddToCart>
      </ProductDetail>
    </ProductHerosStyled>
  );
};

export default ProductHero;
