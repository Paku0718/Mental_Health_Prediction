
const MentalHealth=require("../models/MentalHealth.model");

exports.MentalHealthFormInput = async (req, res) => {
    try {
        const { _id, session_id, ...data } = req.body;
        const userId = req.params.userId; // Extracting user id from path parameter
        const mentalHealth = new MentalHealth({
            _id,
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