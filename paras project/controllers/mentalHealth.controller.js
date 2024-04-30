const MentalHealth = require("../models/MentalHealth.model");
const { checkUserIdExists } = require("./util/User");

exports.getUserName = async (req, res) => {
  try {
    const userId = req.params.userId;
    const mentalHealthData = await MentalHealth.findOne(
      { userId },
      { userName: 1, _id: 0 }
    );

    if (!mentalHealthData) {
      return res.status(404).json({ message: "Mental health data not found" });
    }

    res.status(200).json(mentalHealthData);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.MentalHealthFormInput = async (req, res) => {
  try {
    const { session_id, userName, ...data } = req.body;
    const userId = req.params.userId; // Extracting user id from path parameter
    console.log(req.params.userId, "user id");
    if (!checkUserIdExists(userId)) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const mentalHealth = new MentalHealth({
      userId,
      userName,
      ...data,
    });
    await mentalHealth.save();
    res.status(201).json(mentalHealth);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getMentalHealthData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const mentalHealthData = await MentalHealth.findOne({ userId });

    if (!mentalHealthData) {
      return res.status(404).json({ message: "Mental health data not found" });
    }

    res.status(200).json(mentalHealthData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMentalState = async (req, res) => {
  try {
    const userId = req.params.userId;
    const mentalHealthData = await MentalHealth.findOne({ userId });

    if (!mentalHealthData) {
      return res.status(404).json({ message: "Mental health data not found" });
    }

    res.status(200).json({
      userName: mentalHealthData.userName,
      mental_state: mentalHealthData.mental_state,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
