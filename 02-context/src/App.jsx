import { products } from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useCart } from "./context/CartContext";
import "./App.css";

const App = () => {
  const { cartItemCount } = useCart();
  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
        <span className="cart-count">Cart Item: {cartItemCount}</span>
      </header>
      <main>
        <ProductList products={products} />
        <Cart />
      </main>
    </div>
  );
};

export default App;
