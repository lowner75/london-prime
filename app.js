//=============================================================================
// app.js v1.0.0
//=============================================================================

// Modules ...
const express = require('express')
const app = new express()
const ejs = require('ejs')
const path = require('path')
const open = require('open')
app.use(express.static('public'))

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