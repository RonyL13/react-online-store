const express = require('express');
const router = express.Router();
const myRepository = require('../myRepository');

router.get('/', async (req, res) => {
    const x = await myRepository.createUser({name: 'something'});
    res.send({something: x})
})

module.exports = router;