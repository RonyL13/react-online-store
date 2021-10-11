export const addToCart = (items) => {
    return {
        type: 'ADD_TO_CART',
        payload: items
    }
}

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}




