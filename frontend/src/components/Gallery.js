import Product from './Product.js'
import { useState, useEffect } from 'react';

const Gallery = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            console.log(data.x);
            setProducts(data.x)
        })
        .catch((err) => {
            console.log(err);
        })

    }, [])

    
 

    return (
        <div className='gallery'>
            {products.map(product => {
                return <Product key={product._id} item={product}/>
            })}
        </div>
    )
}

export default Gallery
