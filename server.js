const express = require('express')
const app = express()

app.listen(3000, function () {
    console.log('Listening on 3000')
})

app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.sendFile('/workspaces/crud-express-mangodb' + '/index.html')
})
app.post('/quotes', (req, res) => {
    console.log('Hellooooooo!')
})
