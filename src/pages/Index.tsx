// React
import React from 'react';

// Data
import { products } from '../data/products';

// Components
import ProductList from '../components/product-list/ProductList';

interface Props {}

const Index: React.FC<Props> = () => {
  return <ProductList products={products} />;
};

export default Index;
