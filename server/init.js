const express = require('express');
const router = express.Router()

const mysql = require('mysql')
const dbConf = require('./db.conf.json')

module.exports = router.get('/init', function(req, res) {
    //res.send('init suss')
    
    const connection = mysql.createConnection(dbConf)
    
    connection.connect( function(err) {
        if (err) {
            res.sendStatus(404)
        }
    })
    
    connection.query('select * from cate', function (err, result) {
        if (err) {
            res.sendStatus(404)
        }
        
        res.send(result)
    });

    connection.end()
    
})