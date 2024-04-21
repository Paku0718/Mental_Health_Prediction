const express = require("express");
const router = express.Router();
const {
  MentalHealthFormInput,
  getMentalHealthData,
  getMentalState,
} = require("../controllers/mentalHealth.controller");

router.post("/:userId/mental-health", MentalHealthFormInput);
router.get("/:userId/mental-state", getMentalState); // Add this route

module.exports = router;
