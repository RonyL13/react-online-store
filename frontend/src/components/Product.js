const Product = (props) => {
    return (
        <div className="item">
            <div className="product-image-container">
                <img src={props.item.src} alt="some" />
            </div>
            <div>
                <p>{props.item.price}</p>
            </div>
            <div className="product-buttons-container">
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product
