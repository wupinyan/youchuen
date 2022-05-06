const express = require('express');
const router = express.Router()

module.exports = router.get('/init', function(req, res) {
    res.send('init suss')
})