const express = require('express');
const app = express();
const path = require('path')

app.use('/api', require('./init-router') )

const port = process.env.PORT || 8081
app.listen(port, function () {
    console.log(`The server is running with ${process.env.NODE_ENV} mode`); 
})