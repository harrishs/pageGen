const express = require("express");
const router = express.Router();

const pageController = require("../controllers/page");

router.get("/", pageController.getPage);

module.exports = router;