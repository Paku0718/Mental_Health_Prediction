const mongoose = require("mongoose");

const mentalhealthSchema = new mongoose.Schema({
  session_id: String,
  userId: String,
  userName: String, // Added field for user's name
  "How are you feeling emotionally today?": Number,
  "Have you experienced any significant changes in your mood recently?": Number,
  "Are you able to sleep well at night?": Number,
  "Have you lost interest in activities you once enjoyed?": Number,
  "Do you find it difficult to concentrate or make decisions?": Number,
  "Have you experienced any significant stressors or traumas recently?": Number,
  "Do you have a support system or someone you can talk to when you're feeling down?":
    Number,
  "Have you noticed any changes in your appetite or eating habits?": Number,
  "How would you rate your overall level of energy and motivation?": Number,
  "Have you had any thoughts of harming yourself or others?": Number,
  "How do you cope with stress or difficult emotions?": Number,
  "Do you feel overwhelmed by responsibilities or obligations?": Number,
  "Have you sought professional help or therapy in the past?": Number,
  "Are you satisfied with your relationships and social connections?": Number,
  "Do you engage in activities or hobbies that promote relaxation and well-being?":
    Number,
  mental_state: String,
});

const MentalHealth = mongoose.model("MentalHealth", mentalhealthSchema);

module.exports = MentalHealth;
