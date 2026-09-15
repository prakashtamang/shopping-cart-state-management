import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <section>
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
