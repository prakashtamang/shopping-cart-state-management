import { useCartStore } from "../store/cartStore";

const CartItem = ({ item }) => {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div className="quantity">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
