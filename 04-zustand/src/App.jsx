import { products } from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useCartStore } from "./store/cartStore";
import "./App.css";

const App = () => {
  const cart = useCartStore((state) => state.cart);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
        <span className="cart-count">Cart Items: {cartItemCount}</span>
      </header>
      <main>
        <ProductList products={products} />
        <Cart />
      </main>
    </div>
  );
};

export default App;
