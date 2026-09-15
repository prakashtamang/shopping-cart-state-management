import CartItem from "./CartItem";

const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
}) => {
  const subTotal = cart.reduce(
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
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}

          <h3>Subtotal: ${subTotal.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
};

export default Cart;
