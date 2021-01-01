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
app.get("/developments/orbital-house/", (req, res) => {
    res.render("orbital-house");
});
app.get("/developments/gunter-grove-apartment-no-1/", (req, res) => {
    res.render("gunter-grove-1");
});
app.get("/developments/gunter-grove-apartment-no-2/", (req, res) => {
    res.render("gunter-grove-2");
});
app.get("/developments/burleigh-house", (req, res) => {
    res.render("burleigh-house");
});