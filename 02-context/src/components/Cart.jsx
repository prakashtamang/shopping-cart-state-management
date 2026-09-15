import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, subtotal, clearCart } = useCart();
  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>

        {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </>
      )}

      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
