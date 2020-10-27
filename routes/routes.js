const express = require('express');
const router = express.Router();

//nav endpoints
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/tracks", (req, res) => {
  res.render("tracks");
});
router.get("/speakers", (req, res) => {
  res.render("speakers");
});
router.get("/schedule", (req, res) => {
  res.render("schedule");
});
router.get("/author-dashboard", (req, res) => {
  res.render("author-dashboard");
});
router.get("/committee", (req, res) => {
  res.render("committee");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;