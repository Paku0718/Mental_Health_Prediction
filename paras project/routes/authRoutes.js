const express = require('express');
const { register, login, logout } = require('../controllers/authController');
const router = express.Router();

router.post('/register', (req, res) => {
    register(req, res);
});

router.post('/login', (req, res) => {
    login(req, res);
});

router.get('/logout', (req, res) => {
    logout(req, res);
});

module.exports = router;
