const express = require("express");
const router = express.Router();
const {
  MentalHealthFormInput,
} = require("../controllers/mentalHealth.controller");

router.post("/:userId/mental-health", MentalHealthFormInput);

module.exports = router;
