/*
 * --------------------------------------------- *
 *                                               *
 *   London Prime - routes.js                    *
 *                                               *
 * --------------------------------------------- *
 */

// Modules ...
const express = require("express");
const router = express.Router();

// Home page ...
router.get("/", (req, res) => {
  res.render("index");
});

// About page ...
router.get("/about/", (req, res) => {
  res.render("about");
});

// Contact page ...
router.get("/contact/", (req, res) => {
  res.render("contact");
});

// Project pages ...
router.get("/developments/orbital-house/", (req, res) => {
  res.render("orbital-house");
});
router.get("/developments/gunter-grove-apartment-no-1/", (req, res) => {
  res.render("gunter-grove-1");
});
router.get("/developments/gunter-grove-apartment-no-2/", (req, res) => {
  res.render("gunter-grove-2");
});
router.get("/developments/burleigh-house", (req, res) => {
  res.render("burleigh-house");
});

module.exports = router;
