import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import FormSuccess from './components/FormSuccess'
import Cart from './components/Cart'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './actions/loggedInActions'

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

       // Finds which component to render based on redux state
       let switchRender = () => {
           switch (state.renderer) {
               case 'LOGIN':
                return <LoginForm />
               case 'GALLERY':
                return <Gallery />
               case 'FORM SUCCESS':
                return <FormSuccess />
               case 'REGISTER':
                return <RegisterForm />
               case 'CART':
                return <Cart />
           }
       }

    return (
        <div>
            <Navbar />
            {switchRender()}
        </div>
    )
}

export default App
