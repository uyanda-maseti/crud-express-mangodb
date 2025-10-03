const express = require('express')
const app = express()

app.listen(3000, function () {
    console.log('Listening on 3000')
})

app.get('/', function (req, res) {
    res.sendFile('/workspaces/crud-express-mangodb' + '/index.html')
})
