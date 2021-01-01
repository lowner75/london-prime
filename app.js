//=============================================================================
// app.js v1.0.0
//=============================================================================

// Modules ...
const express = require('express')
const app = new express()
const port = 4000
const open = require('open')
app.use(express.static('./'));
//app.use('./public', express.static('public'))

// App ...
app.set('view engine', 'ejs')
app.listen(port, () => {
    open('http://localhost:' + port);
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