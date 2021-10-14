export const addToCart = (items, itemSize) => {
    return {
        type: 'ADD_TO_CART',
        payload: {items, size: itemSize}
    }
}

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}




