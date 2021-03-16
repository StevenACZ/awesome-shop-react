// React
import React from 'react';

// Styles
import { ProductListStyled } from './Styles';

// Intefaces
import { Product } from '../../data/products';

// Components
import ProductItem from './product-item/ProductItem';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;
