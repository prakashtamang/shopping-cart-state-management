import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shopping-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to locaStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }, [cart]);

  // Add Product
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Cart Item Count
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartItemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

export default CartProvider;
