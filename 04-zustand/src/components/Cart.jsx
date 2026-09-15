import CartItem from "./CartItem";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <section className="cart">
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

          <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
};

export default Cart;
