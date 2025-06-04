const express = require("express");
const router = express.Router();
const { apiGetCourses } = require("../controllers/coursesController");

router.get("/", apiGetCourses);

module.exports = router;