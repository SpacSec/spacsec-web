const express = require("express");
const router = express.Router();
const speakersData = require("../public/json/speakers-data");
//nav endpoints
router.get("/", (req, res) => {
  const success = "false";
  const page_name = "home";
  res.render("index", {
    page_name: page_name,
    success: success,
    speakersData: speakersData,
  });
});
router.get("/tracks", (req, res) => {
  const page_name = "tracks";
  res.render("tracks", { page_name: page_name });
});
router.get("/speakers", (req, res) => {
  const page_name = "speakers";
  res.render("speakers", { page_name: page_name, speakersData: speakersData });
});
router.get("/schedule", (req, res) => {
  const page_name = "schedule";
  res.render("schedule", { page_name: page_name });
});
router.get("/author-dashboard", (req, res) => {
  const page_name = "author-dashboard";
  res.render("author-dashboard", { page_name: page_name });
});
router.get("/committee", (req, res) => {
  const page_name = "committee";
  res.render("committee", { page_name: page_name });
});
router.get("/contact", (req, res) => {
  const page_name = "contact";
  res.render("contact", { page_name: page_name });
});
router.get("/register", (req, res) => {
  const page_name = "register";
  res.render("register", { page_name: page_name });
});
router.get("/credits", (req, res) => {
  const page_name = "credits";
  res.render("credits", { page_name: page_name });
});
//auth
router.get("/login", (req, res) => {
  const page_name = "login";
  res.render("auth/login", { page_name: page_name });
});

module.exports = router;
