const express = require('express');
const router = express.Router()

const mysql = require('mysql')
const dbConf = require('./db.conf.json')

const mail = require('./mail')

module.exports = router.get('/init', function(req, res) {
    
    const connection = mysql.createConnection(dbConf)
    
    connection.connect( function(err) {
        if (err) {
            res.sendStatus(404)
            const mailHTML = `
                <h1>
                    資料庫連線 異常
                    異常檔案位置是: ${__dirname}/${__filename}
                </h1>
                ${err}
            `
            mail('louis830803@gmail.com', '佑春網站異常', mailHTML)
        }
    })
    
    connection.query('select * from cate', function (err, result) {
        if (err) {
            res.sendStatus(404)
            const mailHTML = `
                <h3>資料庫詢問 異常</h3>
                <h3>異常檔案位置是:</h3>
                <p>${__dirname}/${__filename}</p>
                <h3 style="margin-top:32px">錯誤訊息:</h3>
                <p>${err}</p>
            `
            mail('louis830803@gmail.com', '佑春網站異常', mailHTML)
        }
        
        res.send(result)
    });

    connection.end()
    
})