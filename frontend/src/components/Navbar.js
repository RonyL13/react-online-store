import { useDispatch } from 'react-redux';
import { renderGallery, renderHome, renderRegister, renderLogin } from '../actions/rendererActions'

const Navbar = () => {
        const dispatch = useDispatch();

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><button onClick={() => {dispatch(renderHome())}}>Home</button></li>
                    <li><button onClick={() => {dispatch(renderGallery())}}>Gallery</button></li>
                    <li><button onClick={() => {dispatch(renderRegister())}}>Register</button></li>
                    <li><button onClick={() => {dispatch(renderLogin())}}>Login</button></li>
                    <li><button></button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
