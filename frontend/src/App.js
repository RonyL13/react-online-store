import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import FormSuccess from './components/FormSuccess'
import Cart from './components/Cart'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../frontend/src/actions/loggedInActions'

import './app.css';

const App = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

        const authenticate = () => {
            fetch('api/authenticate', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               }
           })
           .then(response => response.json())
           .then(data => {
               if (data.isLoggedIn) {
                   dispatch(login(data))
               } else {
                dispatch(logout())
            }
           })
           .catch((err) => {
               console.log(err);
           })
       }
       authenticate();

    return (
        <div>
            <Navbar />
            {state.renderer === 'LOGIN' ? <LoginForm /> : ''}
            {state.renderer === 'REGISTER' ? <RegisterForm /> : ''}
            {state.renderer === 'FORM_SUCCESS' ? <FormSuccess /> : ''}
            {state.renderer === 'GALLERY' ? <Gallery /> : ''}
            {state.renderer === 'CART' ? <Cart /> : ''}
        </div>
    )
}

export default App
