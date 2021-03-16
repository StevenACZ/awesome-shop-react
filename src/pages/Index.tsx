// React
import React from 'react';
import ProductList from '../components/product-list/ProductList';

// Data
import { products } from '../data/products';

interface Props {}

const Index: React.FC<Props> = () => {
  return <ProductList products={products} />;
};

export default Index;
