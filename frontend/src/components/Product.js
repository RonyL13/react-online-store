import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { renderLogin } from '../actions/rendererActions';

const Product = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const addItemsToCart = () => {
        // Only allow a user to add to the cart if he's logged in
        if (state.isLoggedIn !== 'LOGGEDOUT') { 
            dispatch(addToCart(props.item))
        } else {
            dispatch(renderLogin())
        }
    }
    return (
        <div className="item">
            <div className="product-image-container">
                <img src={props.item.src} alt="some" />
            </div>
            <div>
                <p>{props.item.price}</p>
            </div>
            <div className="product-buttons-container">
                <button onClick={addItemsToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product
