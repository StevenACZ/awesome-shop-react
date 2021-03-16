// React
import React, { useEffect, useState } from 'react';

// React Router
import { useParams } from 'react-router';

// Data & Interface
import { products, Product } from '../data/products';

interface Props {}

const ProductDetail: React.FC<Props> = () => {
  const params = useParams() as { productId: string };

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const prod = products.find((product) => product.id === params.productId);
    setProduct(prod);
  }, [params]);

  console.log(product);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
