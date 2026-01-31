import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <div className="products">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
