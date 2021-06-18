const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/', authController.documentation);
router.post('/login', authController.auth);
router.post('/register', authController.store);

module.exports = router;