export const login = (data) => {
    return {
        type: 'LOGGEDIN',
        payload: data.username
    }
}

export const logout = () => {
    return {
        type: 'LOGGEDOUT'
    }
}




