const isLoggedInReducer = (state = 'LOGGEDOUT', action) => {
    switch(action.type) {
        case 'LOGGEDIN':
        return state = 'LOGGEDIN'

        case 'LOGGEDOUT':
        return state = 'LOGGEDOUT'

        default:
        return state
    }
}

export default isLoggedInReducer;