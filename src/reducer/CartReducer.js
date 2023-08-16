import data from "../API/Data";
export default function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = data
        .filter((element) => element.id == action.payload)
        .map((element) => {
          return { ...element, quantity: 1 };
        });

      console.log(newItem);

      const wishListProduct = state.wishlistItem.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItem: [...state.cartItem, ...newItem],
        wishlistItem: wishListProduct,
      };

    case "REMOVE_FROM_CART":
      const removedItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cartItem: removedItem,
      };

    case "ADD_TO_WISHLIST":
      const wishlistProduct = state.cartItem.filter(
        (item) => item.id === action.payload
      );
      const cartProduct = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        wishlistItem: [...state.wishlistItem, ...wishlistProduct],
        cartItem: cartProduct,
      };

    case "REMOVE_FROM_WISHLIST":
      const removedProduct = state.wishlistItem.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        wishlistItem: removedProduct,
      };

    case "INCREASE_QUANTITY":
      let productIncreasedQuantity = state.cartItem.map((element) => {
        if (element.id == action.payload) {
          return { ...element, quantity: element.quantity + 1 };
        } else {
          return element;
        }
      });

      return {
        ...state,
        cartItem: productIncreasedQuantity,
      };

    case "DECREASE_QUANTITY":
      let productDecreaseQuantity = state.cartItem.map((element) => {
        let decreasedQuantity =
          element.quantity > 1 ? element.quantity - 1 : element.quantity;
        if (element.id == action.payload) {
          return { ...element, quantity: decreasedQuantity };
        } else {
          return element;
        }
      });

      return {
        ...state,
        cartItem: productDecreaseQuantity,
      };

    case "TOTAL_AMOUNTE":
      const productPricewithQuantity = state.cartItem.map((elem) => {
        return parseFloat(elem.price) * elem.quantity;
      });
      const totalPrice = productPricewithQuantity.reduce(
        (accumulator, currentValue) => {
          return (accumulator =
            parseFloat(accumulator) + parseFloat(currentValue));
        },
        0
      );

      return {
        ...state,
        totalamount: totalPrice,
      };

    default:
      return {
        ...state,
      };
  }
}
