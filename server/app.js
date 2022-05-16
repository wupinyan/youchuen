const express = require('express');
const app = express();
const path = require('path')

app.use('/api', require('./init-router') )

if (process.env.NODE_ENV === 'production') {
    app.use( express.static('dist') )
    app.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname,'../dist/index.html'))
    })
}

const port = process.env.PORT || 8081
app.listen(port, function () {
    console.log(`port ${port}. ${process.env.NODE_ENV} mode`); 
})