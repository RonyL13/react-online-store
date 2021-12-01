import Product from './Product.js'
import Sidebar from './Sidebar.js'
import { useState, useEffect } from 'react';
import '../styles/gallery.css'

const Gallery = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.x)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])




    return (
        <div className="gallery-component">
            <div>
                <Sidebar />
            </div>
            <div className='gallery'>
                {products.map(product => {
                    return <Product key={product._id} item={product} />
                })}
            </div>
        </div>
    )
}

export default Gallery
