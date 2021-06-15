const express = require('express')
const router = express.Router();

const userController = require('./controllers/userController');
const addressController = require('./controllers/addressController');

// user routes
router.get('/users', userController.index);
router.post('/users', userController.store);
router.get('/users/:user_id/addresses', addressController.getAddress);
router.post('/users/:user_id/addresses', addressController.store);

module.exports = router;