//=============================================================================
// app.js v1.0.0
//=============================================================================

// Modules ...
const express = require('express')
const app = express()
const path = require('path')
const open = require('open')
app.use(express.static('public'))

// App ...
app.listen(3000, () => {
    open('http://localhost:3000');
    console.log('App listening on port 3000.')
})

// Home ...
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

// About ...
app.get('/about/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

// Contact ...
app.get('/contact/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

// Projects - Orbital House ...
app.get('/developments/orbital-house/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'orbital-house.html'))
})

// Projects - Gunter Grove No. 1 ...
app.get('/developments/gunter-grove-no-1/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'gunter-grove-1.html'))
})

// Projects - Gunter Grove No. 2 ...
app.get('/developments/gunter-grove-no-2/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'gunter-grove-2.html'))
})

// Projects - Burleigh House ...
app.get('/developments/burleigh-house/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'burleigh-house.html'))
})