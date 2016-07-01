/* Import node_modules */
var express = require('express');
var router  = express.Router();

/* Import Controller */
var controller  = require('../controllers/home');


/** 
 * # Define routes
 */
router.get('/', controller.index);


/* Export */
module.exports = router;