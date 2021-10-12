import '../styles/registerForm.css'
import { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { renderFormSuccess } from '../actions/rendererActions'


const RegisterForm = () => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        username: '',
        password: '',
        confirmpassword: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            const submitRegisterForm = (values) => {
                fetch('api/create-user', {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(values)
               })
               .then(response => response.json())
               .then(data => {
                   if(data.x.err) {
                       console.log(data.x.err);
                   } else {
                       dispatch(renderFormSuccess())
                   }
               })
               .catch((err) => {
                   console.log(err);
               })
           }
           submitRegisterForm(values)
        }
    }, [errors])

        const validateInfo = (values) => {
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



    return (
        <div className="register-form-container">
            <form className ="register-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
            {/* <IconContext.Provider value={{ className: "profile-icon" }}>
                <div className="icon-container">
                    <CgProfile />
                </div>
            </IconContext.Provider> */}
                <div className="label-and-input-container">
                    <label htmlFor="">Name</label>
                    <input type="text" name="username" placeholder="Enter your username" value={values.username} onChange={handleChange} />
                    <div className="register-error-container">{errors.username ? errors.username : ''}</div>
                </div>
                <div className="label-and-input-container">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder="Enter your username" value={values.password} onChange={handleChange} />
                    <div className="register-error-container">{errors.password ? errors.password : ''}</div>
                </div>
                <div className="label-and-input-container">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirmpassword" placeholder="Enter your username" value={values.confirmpassword} onChange={handleChange} />
                    <div className="register-error-container">{errors.confirmpassword ? errors.confirmpassword : ''}</div>
                </div>
                <div className="label-and-input-container">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" placeholder="Enter your username" value={values.email} onChange={handleChange} />
                    <div className="register-error-container">{errors.email ? errors.email : ''}</div>
                </div>
                <div className="submit-button-container">
                    <button className="register-submit-btn" type="submit">Submit</button>
                </div>
                <div className="form-footer">
                    <p>Already have an account? Sign In</p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
