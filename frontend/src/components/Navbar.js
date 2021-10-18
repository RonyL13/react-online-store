import { useSelector, useDispatch } from 'react-redux';
import { renderGallery, renderHome, renderRegister, renderLogin, renderCart } from '../actions/rendererActions'
import { logout } from '../actions/loggedInActions'
import '../styles/navbar.css'

import { IconContext } from 'react-icons'
import { BsFillCartFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const Navbar = () => {
    const state = useSelector(state => state)

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
                <div className="navbar-container">
                    <div className="navbar-center-container">
                    <div><button onClick={() => { dispatch(renderHome()) }}>Home</button></div>
                    <div><button onClick={() => { dispatch(renderGallery()) }}>Gallery</button></div>
                    <div><button>About</button></div>
                    <div><button>Contact</button></div>
                </div>

                    {state.isLoggedIn === 'LOGGEDOUT' ?
                        <div className="navbar-right-container">
                            <div><button onClick={() => { dispatch(renderRegister()) }}>Register</button></div>
                            <div><button onClick={() => { dispatch(renderLogin()) }}>Login</button></div>
                        </div> :
                            <div className="navbar-right-container">
                                <div className="cart-icon-container">
                                    <button onClick={() => { dispatch(renderCart()) }}>
                                        <IconContext.Provider value={{ className: "cart-icon" }}>
                                            <div className="icon-container">
                                                <BsFillCartFill />
                                            </div>
                                        </IconContext.Provider></button>
                                </div>

                                <div className="username-container">
                                    <button>
                                        <IconContext.Provider value={{ className: "profile-icon" }}>
                                            <CgProfile />
                                        </IconContext.Provider>
                                    </button>
                                </div>
                                <div className="logout-container">
                                    <button onClick={logoutUser}>Logout</button>
                                </div>
                            </div>
                    }
                </div>
            </nav>
            <img src="https://faeries.com.au/wp-content/themes/faerie-shop/img/element-art/purple-wave-bottom2.png" alt="" />
        </div>
    )
}

export default Navbar
