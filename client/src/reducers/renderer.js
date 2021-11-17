const rendererReducer = (state = 'HOME', action) => {
    switch(action.type) {
        case 'GALLERY':
        return state = 'GALLERY'

        case 'HOME':
        return state = 'HOME'

        case 'REGISTER':
        return state = 'REGISTER'

        case 'LOGIN':
            return state = 'LOGIN'
            
        case 'CART':
            return state = 'CART'

        case 'FORM_SUCCESS':
            return state = 'FORM_SUCCESS'

        default:
        return state
    }
}

export default rendererReducer;