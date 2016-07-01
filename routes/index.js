/* Import routes */
var aboutRoutes  = require('./about'),
    homeRoutes   = require('./home'),
    storeRoutes  = require('./store');

/* Define variables */   
var routes;


/* Setup routes */
function routes(app) {
  app.use('/', homeRoutes);
  app.use('/about', aboutRoutes);
  app.use('/store', storeRoutes);
}

module.exports = routes