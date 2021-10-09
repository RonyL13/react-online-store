import { useState } from "react";
import FormSuccess from './FormSuccess'
import { useDispatch } from 'react-redux';
import { renderFormSuccess } from '../actions/rendererActions'


const LoginForm = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch('api/login-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(data => {
            if (data.user) {
                dispatch(renderFormSuccess())
            } else {
                setErrors('Incorrect email or password');
            }
        })
        .catch((err) => {
            console.log(err);
        })
      }

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Sign In</h2>
                <div className="label-and-input-container">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" value={values.email} onChange={handleChange} />
                </div>
                <div className="label-and-input-container">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={values.password} onChange={handleChange} />
                </div>
                <div className="login-error-container">{errors}</div>
                <div className="submit-button-container">
                    <button type="Submit" className="login-submit-button">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
