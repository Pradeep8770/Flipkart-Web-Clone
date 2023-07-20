export default function filterReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        productCompany: action.payload,
  
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "SORT_BY_STOCK":
      return {
        ...state,
        stock: action.payload,
      };

    case "FAST_DELIVRY":
      return{
        ...state,
        fastdelivery:action.payload
      }

    case "CLEAR_BRAND":
      // console.log(action.target.value)
      return {
        ...state,
        productCompany: "",
      };
    
    case "CLEAR_PRICE":
      return{
        ...state,
        sortBy:""
      }

    case "CLEAR_STOCK":
      return{
        ...state,
        stock:""
      }

    default:
      return state;
  }
}
