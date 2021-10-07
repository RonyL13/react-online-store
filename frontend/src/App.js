import { useState } from 'react';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import FormSuccess from './components/FormSuccess'
import { useSelector, useDispatch } from 'react-redux';
import { renderFormSuccess } from '../../frontend/src/actions/rendererActions'


import './app.css';

const App = () => {
    const dispatch = useDispatch();

    function submitLoginForm(values) {
        console.log('test');
    }

    function submitRegisterForm(values) {
         fetch('api/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(data => {
            if(data.x.err) {
                console.log(data.x.err);
            } else {
                dispatch(renderFormSuccess())
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    return (
        <div>
            <Navbar />
            {useSelector(state => state.renderer) === 'LOGIN' ? <LoginForm submitForm={submitLoginForm} /> : ''}
            {useSelector(state => state.renderer) === 'REGISTER' ? <RegisterForm submitForm={submitRegisterForm} /> : ''}
            {useSelector(state => state.renderer) === 'FORM_SUCCESS' ? <FormSuccess /> : ''}
            {useSelector(state => state.renderer) === 'GALLERY' ? <Gallery /> : ''}
        </div>
    )
}

export default App
