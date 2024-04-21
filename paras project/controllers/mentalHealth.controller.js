const MentalHealth = require("../models/MentalHealth.model");

exports.MentalHealthFormInput = async (req, res) => {
  try {
    const { session_id, ...data } = req.body;
    const userId = req.params.userId; // Extracting user id from path parameter

    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const mentalHealth = new MentalHealth({
      session_id,
      userId, // Saving user id
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

    res.status(200).json({ mental_state: mentalHealthData.mental_state });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
