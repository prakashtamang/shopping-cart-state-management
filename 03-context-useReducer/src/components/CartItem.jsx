import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="quantity">
        <button
          onClick={() =>
            dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
          }
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() =>
            dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
          }
        >
          +
        </button>
      </div>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: item.id,
          })
        }
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
