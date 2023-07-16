export default function filterReducer(state,action) {
 switch(action.type){
    case "SORT":
    return{
        productCompany:action.payload
    };
    case "SORT_BY_PRICE":
        return{
            sortBy:action.payload
        };

    case "SORT_BY_STOCK":
        return{
            fastdelivery:action.payload
        }

    default:
        return state
 }
}
