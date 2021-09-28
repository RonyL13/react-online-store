const Product = (props) => {
    return (
        <div className="item">
            <img src={props.item.src} alt="some" />
            <p>{props.item.price}</p>
        </div>
    )
}

export default Product
