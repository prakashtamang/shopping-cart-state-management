import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";

const CartContext = createContext();

const getInitialState = () => {
  const savedCart = localStorage.getItem("shopping-cart");
  if (savedCart) {
    return { cart: JSON.parse(savedCart) };
  }
  return initialState;
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    getInitialState,
  );

  // Save cart to locaStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const cartItemCount = useMemo(() => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  }, [state.cart]);

  const subtotal = useMemo(() => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [state.cart]);

  const value = {
    cart: state.cart,
    dispatch,
    cartItemCount,
    subtotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
export default CartProvider;
