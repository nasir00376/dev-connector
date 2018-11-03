const express = require('express');
const router = express.Router();

const { register, users } = require('../controllers/user');

router.get('/', users);

// Routes
router.post('/register', register);

module.exports = router;