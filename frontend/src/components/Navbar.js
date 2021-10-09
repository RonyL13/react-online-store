import { useSelector, useDispatch } from 'react-redux';
import { renderGallery, renderHome, renderRegister, renderLogin } from '../actions/rendererActions'
import { logout } from '../actions/loggedInActions'
import '../styles/navbar.css'

const Navbar = () => {
    const dispatch = useDispatch();

    const logoutUser = () => {
        fetch('api/logout-user')
            .catch((err) => {
                console.log(err);
            })
        dispatch(logout());
        dispatch(renderHome());
    }

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><button onClick={() => { dispatch(renderHome()) }}>Home</button></li>
                    <li><button onClick={() => { dispatch(renderGallery()) }}>Gallery</button></li>
                    <li><button onClick={() => { dispatch(renderRegister()) }}>Register</button></li>
                    {useSelector(state => state.isLoggedIn) === 'LOGGEDOUT' ?
                        <li><button onClick={() => { dispatch(renderLogin()) }}>Login</button></li> :
                        <li><button onClick={logoutUser}>Logout</button></li>}
                    <li><button></button></li>
                </ul>
            </nav>
            <img src="https://faeries.com.au/wp-content/themes/faerie-shop/img/element-art/purple-wave-bottom2.png" alt="" />
        </div>
    )
}

export default Navbar
