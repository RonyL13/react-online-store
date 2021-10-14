import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { renderLogin } from '../actions/rendererActions';
import { useState } from 'react'

const Product = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const [addButton, setAddButton] = useState(false)
    const [sizesSelectionVisible, setSizesSelectionVisible] = useState(false)

    const showAddToCartBtn = () => {
        setAddButton(true)
    }
    const removeAddToCartBtn = () => {
        setAddButton(false)
    }

    const showSizesSelection = () => {
        setSizesSelectionVisible(true)
    }

    const addItemsToCart = (e) => {
        let size = e.target.innerText;
        
        // Only allow a user to add to the cart if he's logged in
        if (state.isLoggedIn !== 'LOGGEDOUT') {
            //    if (state.cart.find(current => current.item === props.item)) { // Check if product already exists in the cart
            dispatch(addToCart(props.item, size))
            //    }
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

            {/* Two ternary operated, one nested within the other. First one is checking whether or not the "addButton" state is true.
            If it is it checks whether or not the "sizeSelectionVisible" is true. According to the returns we render a different
            result within each product card in our gallery. */}
            {addButton ? 
                sizesSelectionVisible ? 
                <div className="product-sizes-container">
                    <div>
                        <h3>Select Size</h3>
                    </div>
                    <div className="sizes-container">
                        {props.item.sizes.map(size => {
                            return <button key ={size.size} onClick={addItemsToCart}>{size.size}</button>
                        })}
                    </div>
                </div> 
                : 
                <div className="product-buttons-container">
                    <button onClick={showSizesSelection}>Add To Cart</button> 
                </div> 
                : 
            ''}
        </div>
    )
}

export default Product
