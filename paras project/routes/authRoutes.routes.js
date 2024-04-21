const express = require('express');
const { register, login, logout,CheckSession } = require('../controllers/authController.controller');
const router = express.Router();

router.post('/register', (req, res) => {
    register(req, res);
});

router.post('/login', (req, res) => {
    login(req, res);
});

router.get('/check-session',CheckSession);

router.get('/logout', (req, res) => {
    logout(req, res);
});

module.exports = router;
