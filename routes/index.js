'use strict';

let express = require('express');
let router = express.Router();
const indexController = require("../controllers/indexController");
const isAdmin = require('../middlewares/authentication');



router.get('/', indexController.getHomePage); // Route for rendering home page
router.get('/newAd', indexController.getNewAdPage); // Route for rendering new ad page
router.get('/login', indexController.getLoginPage); // Route for rendering login page
router.get('/adminPage', isAdmin, indexController.getAdminPage); // Route for rendering admin page, with authentication middleware
router.get('/success', indexController.getSuccessPage); // Route for rendering success page
router.get('*', indexController.getHomePage); //catch all routes to home page

module.exports = router;
