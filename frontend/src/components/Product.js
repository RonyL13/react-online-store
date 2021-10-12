import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { renderLogin } from '../actions/rendererActions';
import { useState } from 'react'

const Product = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const [addButton, setAddButton] = useState(false)

    const showAddToCartBtn = () => {
        setAddButton(true)
    }
    const removeAddToCartBtn = () => {
        setAddButton(false)
    }

    const addItemsToCart = () => {
        // Only allow a user to add to the cart if he's logged in
        if (state.isLoggedIn !== 'LOGGEDOUT') { 
            dispatch(addToCart(props.item))
            console.log(props);
        } else {
            dispatch(renderLogin())
        }
    }
    return (
        <div className="item" onMouseEnter={showAddToCartBtn} onMouseLeave={removeAddToCartBtn}>
            <div className="product-image-container">
                <img src={props.item.src} alt="some" />
            </div>
            <div className="product-name-container">
                <p>{props.item.name}</p>
            </div>
            <div className="product-price-container">
                <p>{props.item.price}&#8362;</p>
            </div>
            {addButton ? <div className="product-buttons-container">
                <button onClick={addItemsToCart}>Add To Cart</button>
            </div> : ''}
        </div>
    )
}

export default Product
