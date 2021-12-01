const cartReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            let adjustedState = [...state];
            let matchFound = adjustedState.find(product => product.item._id === action.payload.item._id && product.size === action.payload.size);
            if (matchFound) {
                matchFound.quantity++;
            } else {
                adjustedState.push({item: action.payload.item, size: action.payload.size, quantity: 1});
            }
        return adjustedState;

        case 'REMOVE_FROM_CART':
            return state = state.filter(item => item !== state[action.payload]);

        case 'INCREMENT_QUANTITY':
            let incrementedProduct = state.filter(product => product === state[action.payload]); // Grabbing the product whose quantity we're incrementing, This is an ARRAY containing the product we wish to increment
            incrementedProduct[0].quantity++ // incrementing the quantity
            
            let newState = state.slice(0, state.length) // Cloning our state
            newState.splice(action.payload, 1, incrementedProduct[0])
        return newState;

        default:
        return state
    }
}

export default cartReducer;