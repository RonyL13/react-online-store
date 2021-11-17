const isLoggedInReducer = (state = 'LOGGEDOUT', action) => {
    switch(action.type) {
        case 'LOGGEDIN':
        return state = action.payload

        case 'LOGGEDOUT':
        return state = 'LOGGEDOUT'

        default:
        return state
    }
}

export default isLoggedInReducer;