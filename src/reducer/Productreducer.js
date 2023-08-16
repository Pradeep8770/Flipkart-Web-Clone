export default function Productreducer(state, action) {
  switch (action.type) {
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}
