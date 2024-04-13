const mongoose = require('mongoose');

const mentalhealthSchema = new mongoose.Schema({
  _id: String,
  session_id: String,
  userId:String,
  'How are you feeling emotionally today?': Boolean,
  'Have you experienced any significant changes in your mood recently?': Boolean,
  'Are you able to sleep well at night?': Boolean,
  'Have you lost interest in activities you once enjoyed?': Boolean,
  'Do you find it difficult to concentrate or make decisions?': Boolean,
  'Have you experienced any significant stressors or traumas recently?': Boolean,
  'Do you have a support system or someone you can talk to when you\'re feeling down?': Boolean,
  'Have you noticed any changes in your appetite or eating habits?': Boolean,
  'How would you rate your overall level of energy and motivation?': Boolean,
  'Have you had any thoughts of harming yourself or others?': Boolean,
  'How do you cope with stress or difficult emotions?': Boolean,
  'Do you feel overwhelmed by responsibilities or obligations?': Boolean,
  'Have you sought professional help or therapy in the past?': Boolean,
  'Are you satisfied with your relationships and social connections?': Boolean,
  'Do you engage in activities or hobbies that promote relaxation and well-being?': Boolean,
  mental_state: String,
});

const MentalHealth = mongoose.model('MentalHealth', mentalhealthSchema);

module.exports=MentalHealth;