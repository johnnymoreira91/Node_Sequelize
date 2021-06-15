const express = require('express')
const router = express.Router();

const userController = require('./controllers/userController');
const addressController = require('./controllers/addressController');
const authController = require('./controllers/authController');

// user routes
router.get('/users', userController.index);
router.post('/users', userController.store);
router.get('/users/addresses', addressController.allAddress);
router.get('/users/:user_id/addresses', addressController.getAddress);
router.post('/users/:user_id/addresses', addressController.store);

// login
router.post('/login', authController.auth)

module.exports = router;