const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const sessionMiddleware = require('./config/session');
const authRoutes = require('./routes/authRoutes.routes');
const mentalHealthRoutes = require('./routes/MentalHealth.routes');
const swaggerDocs =require('./config/swagger');
const cors = require('cors');

require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI. Please set in .env file.");
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

const app = express();

app.use(express.json());
app.use(morgan('dev')); // Log HTTP requests
app.use(sessionMiddleware); // Using session middleware
app.use(cors())

app.use('/auth', authRoutes); 
app.use('/',mentalHealthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  swaggerDocs(app,PORT); // Convert PORT to a number
});





