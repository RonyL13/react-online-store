const cartReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
        return state = [...state, {item: action.payload, quantity: 1}]

        case 'REMOVE_FROM_CART': 
        return state = state.filter(product => product.item._id !== action.payload)

        default:
        return state
    }
}

export default cartReducer;