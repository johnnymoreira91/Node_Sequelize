const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/auth');
const jwt = require('jsonwebtoken');
require('dotenv').config()

router.use(authMiddlewares);

// function verifyJWT(req, res, next){
//   const accessToken = req.headers.authorization['x-access-token'];
//   if (!accessToken) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
//   jwt.verify(accessToken, process.env.SECRET, function(err, decoded) {
//     if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
//     // se tudo estiver ok, salva no request para uso posterior
//     req.userId = decoded.id;
//     next();
//   });
// }

const userController = require('../controllers/userController');
const addressController = require('../controllers/addressController');
const insuranceController = require('../controllers/insuranceController');
const reportController = require('../controllers/reportController');
const historiesController = require('../controllers/historiesController');

// user routes
router.get('/', userController.index);
router.post('/', userController.store);
router.get('/addresses', addressController.allAddress);
router.get('/:user_id/addresses', addressController.getAddress);
router.post('/:user_id/addresses', addressController.store);
router.get('/:user_id/insurance', insuranceController.index);
router.post('/:user_id/insurance', insuranceController.store);
router.delete('/:user_id/insurance', insuranceController.delete);
router.delete('/:user_id', userController.delete);
router.get('/:user_id/histories', historiesController.index);
router.post('/:user_id/histories', historiesController.store);
// report user
router.get('/report', reportController.show);

module.exports = router;