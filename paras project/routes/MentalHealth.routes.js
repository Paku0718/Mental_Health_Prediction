const express = require("express");
const router = express.Router();
const {
  MentalHealthFormInput,
  getMentalHealthData,
  getMentalState,
  getUserName, // Import the controller method for fetching the user name
} = require("../controllers/mentalHealth.controller");
const { PiNumberSeven } = require("react-icons/pi");
const { MongoDBStore } = require("connect-mongodb-session");

router.post("/:userId/mental-health", MentalHealthFormInput);
router.get("/:userId/mental-state", getMentalState);
router.get("/:userId/user-name", getUserName); // Define route for fetching user name

module.exports = router;

