//=============================================================================
// app.js v1.0.0
//=============================================================================

// Modules ...
const express = require('express')
let path = require("path")
const app = new express()
const port = 443
const open = require('open')
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.static(path.join(__dirname, "/node_modules")))

// App ...
app.set('view engine', 'ejs')
app.listen(port, () => {
    //open('http://localhost:' + port);
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