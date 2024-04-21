const bcrypt = require('bcryptjs');
const User = require('../models/User.model');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  // Set up session or JWT token for authentication
  req.session.user = { id: user._id, username: user.username };
  res.status(200).json({ message: 'Login successful', userId: user._id, sessionId: req.sessionID });
};

exports.checkSession = async (req, res) => {
  if (req.session.user && req.session.user.id) {
    // Session exists, user is logged in
    res.status(200).json({ authenticated: true, userId: req.session.user.id });
  } else {
    // Session doesn't exist or expired, user is not logged in
    res.status(401).json({ authenticated: false });
  }
};



exports.logout = (req, res) => {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Error logging out' });
      }
      res.status(200).json({ message: 'Logged out successfully' });
    });
  } else {
    res.status(401).json({ message: 'Not logged in' });
  }
};
