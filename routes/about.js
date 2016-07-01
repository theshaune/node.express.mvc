/* Import node_modules */
var express = require('express');
var router  = express.Router();

/* Import Controller */
var about  = require('../controllers/about');


/** 
 * # Define routes
 */
router.get('/', about.index);
router.get('/team', about.team);


/* Export */
module.exports = router;