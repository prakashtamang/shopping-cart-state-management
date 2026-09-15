import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, subtotal, dispatch } = useCart();
  return (
    <section className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>

        {cart.length > 0 && (
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Clear Cart
          </button>
        )}
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
};

export default Cart;
