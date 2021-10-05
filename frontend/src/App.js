import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import './app.css';

const App = () => {

    
    return (
        <div>
            <Navbar />
            {useSelector(state => state.renderer) === 'GALLERY' ? <Gallery /> : ''};
        </div>
    )
}

export default App
