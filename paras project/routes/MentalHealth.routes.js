const express = require("express");
const router = express.Router();
const {
  MentalHealthFormInput,
  getMentalHealthData,
  getMentalState,
  getUserName, // Import the controller method for fetching the user name,
  GetAllReportByUserId,
  GetReportByUserIdAndReportId
} = require("../controllers/mentalHealth.controller");
const { PiNumberSeven } = require("react-icons/pi");
const { MongoDBStore } = require("connect-mongodb-session");

router.post("/:userId/mental-health", MentalHealthFormInput);
router.get("/:userId/mental-state", getMentalState);
router.get("/:userId/user-name", GetAllReportByUserId); // Define route for fetching user name
router.get("user/:userId/report/:reportId", GetReportByUserIdAndReportId); 

module.exports = router;

