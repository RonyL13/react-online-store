const express = require('express');
const router = express.Router();
const myRepository = require('../myRepository');
const path = require('path');

router.get('/products', async (req, res) => {
    const x = await myRepository.getProducts();
    res.send({x});
})

router.post('/create-user', async (req, res) => {
    const x = await myRepository.createUser(req.body);
    res.send({x})
})

router.post('/login-user', async (req, res) => {
    const x = await myRepository.userLogin(req.body);
    res.cookie('jwt', x.token, { httpOnly: true, maxAge: 200000000});
    res.send(x);
})

router.get('/red-t-shirt', (req, res) => {
    res.sendFile(path.join(__dirname+'/../product_photos/red-t-shirt.png'))
})

router.get('/white-t-shirt', (req, res) => {
    res.sendFile(path.join(__dirname+'/../product_photos/white-t-shirt.png'))
})

module.exports = router;