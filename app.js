//=============================================================================
// app.js v1.0.0
//=============================================================================

// Modules ...
const express = require('express')
const app = new express()
const path = require('path')
const open = require('open')
app.use(express.static('public'))\
    // App ...
app.set('view engine', 'ejs')
app.listen(3000, () => {
    open('http://localhost:3000');
})

// Home ...
app.get('/', (req, res) => {
    res.render('index')
})

// About ...
app.get('/about/', (req, res) => {
    res.render('about')
})

// Contact ...
app.get('/contact/', (req, res) => {
    res.render('contact')
})

// Projects ...
app.get('/developments/orbital-house/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'orbital-house.html'))
})
app.get('/developments/gunter-grove-no-1/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'gunter-grove-1.html'))
})
app.get('/developments/gunter-grove-no-2/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'gunter-grove-2.html'))
})
app.get('/developments/burleigh-house/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'burleigh-house.html'))
})