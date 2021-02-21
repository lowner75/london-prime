/*
 * --------------------------------------------- *
 *                                               *
 *   London Prime - app.js v1.0.0                *
 *                                               *
 * --------------------------------------------- *
*/

// Modules ...
const express = require('express')
const bodyParser = require("body-parser");
const path = require("path")

// Define routes ...
const routes = require("./routes/routes")

// Set up app...
const app = new express()

// Parse content-types: application/x-www-form-urlencoded / application/JSON ...
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Define static paths ...
app.use(express.static(path.join(__dirname, '/public')))
app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')))

// Use routes ...
app.use('/', routes)

// App listen ...
const port = 3000
app.listen(port, () => {
  console.log('App listening on http://localhost:' + port + '...')
})

// Set up view engine ...
app.locals.basedir = path.join(__dirname, "/")
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
