import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductsPage = ({ products, addToCart }) => {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
