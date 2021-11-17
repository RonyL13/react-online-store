const cartReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
        let matchFound = state.find(product => product.item === action.payload.item && product.size === action.payload.size);
        console.log(matchFound);
        if (matchFound) {
            let matchIndexFound = state.findIndex(product => product.item === action.payload.item && product.size === action.payload.size);
            let newState = state.slice(0, state.length);
            matchFound.quantity++;

            newState.splice(matchIndexFound, 1, matchFound)
            return state = newState;
        } else {
            return state = [...state, {item: action.payload.item, size: action.payload.size, quantity: 1}];
        }

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