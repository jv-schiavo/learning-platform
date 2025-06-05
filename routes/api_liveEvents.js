const express = require("express");
const router = express.Router();
const { apiGetLiveEvents } = require("../controllers/liveEventsController")

router.get("/", apiGetLiveEvents);

module.exports = router;