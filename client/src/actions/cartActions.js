export const addToCart = (item, itemSize) => {
    return {
        type: 'ADD_TO_CART',
        payload: {item, size: itemSize}
    }
}

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}

export const incrementQuantity = (index) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: index
    }
}




