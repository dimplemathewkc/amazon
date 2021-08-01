// context api and redux are not the same thing but they use the same pattern of stpring the data globally 
export const initialState = {
    basket: [],
    user: null
}
// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        case "SET_USER":
        return {
            ...state,
            user: action.user
        }
        case 'REMOVE_FROM_BASKET': 
            const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.item.id
        );
            console.log(index)
            let newBasket = [...state.basket]
            if(index >= 0){
                newBasket.splice(index, 1);
            } else{
                console.warn(`Can't remove the product (id: ${action.id}) as it is not in the basket`)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
};
export default reducer