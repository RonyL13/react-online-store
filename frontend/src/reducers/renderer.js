const rendererReducer = (state = 'HOME_PAGE', action) => {
    switch(action.type) {
        case 'GALLERY':
        return state = 'GALLERY'

        case 'HOME':
        return state = 'HOME'

        default:
        return state
    }
}

export default rendererReducer;