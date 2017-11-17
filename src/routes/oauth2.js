var express = require('express');
var router  = express.Router();

var authController   = require('../controllers/auth');
var oauth2Controller = require('../controllers/oauth2');

// Create endpoint handlers for oauth2 authorize
router.get('/oauth2/authorize', authController.isAuthenticated, oauth2Controller.authorization)
router.post('/oauth2/authorize', authController.isAuthenticated, oauth2Controller.decision);
console.log("Router");
// Create endpoint handlers for oauth2 token
// router.post('/oauth2/token',  oauth2Controller.token); 

// AFTER ENTER LOGIN DETAIL THIS ROUTER WILL CALL  
router.post('/oauth2/token', oauth2Controller.token);   
// router.post('/oauth2/token', authController.isClientAuthenticated, oauth2Controller.token);   

module.exports = router;