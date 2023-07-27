import data from "../API/Data";
export default function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = data.filter((element) => {
        return element.id === action.payload;
      });
      return {
        ...state,
        cartItem: [...state.cartItem, ...newItem],
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
        (item)=> item.id ===action.payload
      ) 
      return{
        ...state,
        wishlistItem:[...state.wishlistItem,...wishlistProduct]
      }

    default:
      return {
        ...state,
      };
  }
}
