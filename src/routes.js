const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const addressController = require('./controllers/addressController');
const authController = require('./controllers/authController');
const insuranceController = require('./controllers/insuranceController');

// user routes
router.get('/users', userController.index);
router.post('/users', userController.store);
router.get('/users/addresses', addressController.allAddress);
router.get('/users/:user_id/addresses', addressController.getAddress);
router.post('/users/:user_id/addresses', addressController.store);
router.get('/users/:user_id/insurance', insuranceController.index);
router.post('/users/:user_id/insurance', insuranceController.store);
router.delete('/users/:user_id/insurance', insuranceController.delete);

// login
router.post('/login', authController.auth)

module.exports = router;