import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import Counter from './Counter.js'
import '../styles/cart.css';

const Cart = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const removeItem = (e) => {
        let itemIndex = e.target.getAttribute('index')
        dispatch(removeFromCart(itemIndex))
    }

    return (
        <div className="cart-container">
            <div className="titles-container">
                <div className="description-container">
                    <h6>Description</h6>
                </div>
                <div className="size-quantity-container">
                    <div className="size-container">
                        <h6>Size</h6>
                    </div>
                    <div className="quantity-container">
                        <h6>Quantity</h6>
                    </div>
                </div>
                <div className="remove-price-container">
                    <div className="remove-container">
                        <h6>Remove</h6>
                    </div>
                    <div className="price-container">
                        <h6>Price</h6>
                    </div>
                </div>
               
            </div>
            <div className="items-container">
                {state.cart.map((product, index) => 
                    <div key={index} className="item-container">
                        <div className="item-description-container">
                            <img src={product.item.src} alt="" />
                            <p>{product.item.name}</p>
                        </div>
                        <div className="item-size-quantity-container">
                            <div className="item-size-container">
                                <p>{product.size}</p>
                            </div>
                            <div className="item-quantity-container">
                                <Counter index={state.cart.indexOf(product)}/>
                            </div>
                        </div>
                        <div className="item-remove-price-container">
                            <div className="item-remove-container">
                                <button index={state.cart.indexOf(product)} onClick={removeItem}>X</button>
                            </div>
                            <div className="item-price-container">
                                <p>{product.item.price * product.quantity} &#8362;</p>
                            </div>
                        </div>
                    </div>
                    )
                }
                <div className="cart-actions-container">
                    {/* <button>Checkout</button> */}
                </div>
            </div>
        </div>
    )
}

export default Cart
