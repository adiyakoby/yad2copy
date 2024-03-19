'use strict';

let express = require('express');
let router = express.Router();
const indexController = require("../controllers/indexController");
const isAdmin = require('../middlewares/authentication');



/* GET home page. */
router.get('/', indexController.getHomePage);
router.get('/newAd', indexController.getNewAdPage);
router.get('/login', indexController.getLoginPage);
router.get('/adminPage', isAdmin, indexController.getAdminPage);
router.get('/success', indexController.getSuccessPage);

module.exports = router;
