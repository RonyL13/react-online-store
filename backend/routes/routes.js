const express = require('express');
const router = express.Router();
const myRepository = require('../myRepository');
const path = require('path');
const jwt = require('jsonwebtoken')
const userModel = require('../models/user')


router.get('/products', async (req, res) => {
    const x = await myRepository.getProducts();
    res.send({x});
})

router.post('/authenticate', async (req, res) => {
    const token = req.cookies.jwt;
    
    // Check if json web token exists and is verified
    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
            if (err) {
                res.send({isLoggedIn: false});
            } else {
                console.log(decodedToken);
                res.send({isLoggedIn: true});
            }
        })
    } else {
            res.send({isLoggedIn: false});
        }
    }
)

router.post('/create-user', async (req, res) => {
    const x = await myRepository.createUser(req.body);
    res.send({x})
})

router.post('/login-user', async (req, res) => {
    const x = await myRepository.userLogin(req.body);
    res.cookie('jwt', x.token, { httpOnly: true, maxAge: 200000000});
    res.send(x);
})

router.get('/logout-user', (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 }); // Sets the json web token to an empty string and make it expire after 1 ms (essentially deleteing it)
    res.send({});
})

router.get('/red-t-shirt', (req, res) => {
    res.sendFile(path.join(__dirname+'/../product_photos/red-t-shirt.png'))
})

router.get('/white-t-shirt', (req, res) => {
    res.sendFile(path.join(__dirname+'/../product_photos/white-t-shirt.png'))
})

module.exports = router;