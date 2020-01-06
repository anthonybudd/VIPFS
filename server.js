const express = require('express')

const app = express()
app.use(express.static('./build'))
app.get('/app.js', (req, res) => res.sendFile(__dirname + '/build/app.js'))
app.get('/app.css', (req, res) => res.sendFile(__dirname + '/build/app.css'))
app.get('/*', (req, res) => res.sendFile(__dirname + '/build/index.html'))

const PORT = process.env.APP_PORT || 8000
module.exports = app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
