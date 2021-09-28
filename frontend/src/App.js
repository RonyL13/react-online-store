import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import './app.css'

const App = () => {
    // const [pageState, setPageState] = useState('landing page')
    useEffect(() => {
        fetch('/api')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    
    return (
        <div>
            <Navbar />
            <Gallery />
        </div>
    )
}

export default App
