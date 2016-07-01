/* Import routes */
var about  = require('./about'),
    home   = require('./home'),
    store  = require('./store');

/* Define variables */   
var routes;


/* Setup routes */
function routes(app) {
  app.use('/', home);
  app.use('/about', about);
  app.use('/store', store);
}

module.exports = routes