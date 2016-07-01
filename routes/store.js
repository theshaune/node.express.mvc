/* Import node_modules */
var express = require('express');
var router  = express.Router();

/* Import Controller */
var controller  = require('../controllers/store');


/** 
 * # Define routes
 */
router.get('/', controller.index);
router.get('/products', controller.products);


/* Export */
module.exports = router;