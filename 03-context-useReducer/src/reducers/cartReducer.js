export const initialState = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;

      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          ...state,

          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        };
      }

      return {
        ...state,

        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    }

    case "INCREASE_QUANTITY":
      return {
        ...state,

        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,

        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,

        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
