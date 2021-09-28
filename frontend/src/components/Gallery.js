import Product from './Product.js'

const Gallery = () => {

    let products = [
    {
        name: 'test',
        index: 1,
        price: 100,
        src: 'https://www.pngall.com/wp-content/uploads/10/Flip-Flops-PNG-Image.png'
    },
    {
        name: 'testier',
        index: 2,
        price: 100,
        src: 'https://www.pngall.com/wp-content/uploads/6/Sweater-PNG.png'
    }
]

    return (
        <div>
            {products.map(product => {
                return <Product key={product.index} item={product}/>
            })}
        </div>
    )
}

export default Gallery
