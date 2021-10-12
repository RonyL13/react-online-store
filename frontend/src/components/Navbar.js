import { useSelector, useDispatch } from 'react-redux';
import { renderGallery, renderHome, renderRegister, renderLogin, renderCart } from '../actions/rendererActions'
import { logout } from '../actions/loggedInActions'
import '../styles/navbar.css'

import { IconContext } from 'react-icons'
import { BsFillCartFill } from 'react-icons/bs'

const Navbar = () => {
    const state =  useSelector(state => state)

    const dispatch = useDispatch();

    const logoutUser = () => {
        fetch('api/logout-user')
            .catch((err) => {
                console.log(err);
            })
        dispatch(logout()); // change the isLoggedIn state 
        dispatch(renderHome()); // Return user to home page
    }

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><button onClick={() => { dispatch(renderHome()) }}>Home</button></li>
                    <li><button onClick={() => { dispatch(renderGallery()) }}>Gallery</button></li>
                    {state.isLoggedIn === 'LOGGEDOUT' ?
                        [<li><button onClick={() => { dispatch(renderRegister()) }}>Register</button></li>,
                        <li><button onClick={() => { dispatch(renderLogin()) }}>Login</button></li>] :
                        [<li><button onClick={() => { dispatch(renderCart()) }}>
                        <IconContext.Provider value={{ className: "cart-icon" }}>
                        <div className="icon-container">
                            <BsFillCartFill />
                        </div>
                        </IconContext.Provider></button></li>,                            <li>Welcome, {state.isLoggedIn}</li>,
                        <li><button onClick={logoutUser}>Logout</button></li>
                    ]}
                        
                </ul>
            </nav>
            <img src="https://faeries.com.au/wp-content/themes/faerie-shop/img/element-art/purple-wave-bottom2.png" alt="" />
        </div>
    )
}

export default Navbar
