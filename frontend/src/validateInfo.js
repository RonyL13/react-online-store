export default function validateInfo(values) {
    let errors = {};

    if(values.username) {
        if(!values.username.trim()) {
            errors.username = "Username is required"
     }
    } else {
        errors.username = 'Username is required'
    }

    if(!values.email) {
        errors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password cannot be shorter than 6 characters'
    }

    if(!values.confirmpassword) {
        errors.confirmpassword = 'Must confirm password'
    } else if (values.password !== values.confirmpassword) {
        errors.confirmpassword = 'Passwords do not match'
    }

    return errors;
}