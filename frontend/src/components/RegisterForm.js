import useForm from '../customHooks/useForm';
import validator from '../validateInfo'
import { IconContext } from 'react-icons'
import { CgProfile } from 'react-icons/cg'
import '../styles/registerForm.css'

const RegisterForm = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validator);

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
