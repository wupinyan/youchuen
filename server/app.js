const express = require('express');
const app = express();

app.use('/api', require('./init-router') )

const port = process.env.PORT || 8081
app.listen(port, function () {
    console.log(`The server is running with ${process.env.NODE_ENV} mode`); 
})