/* Import node_modules */
var express = require('express');
var router = express.Router();

/**
 * Index
 */
exports.index = function(req, res, next){
  res.render('index', { title: 'Express Store Page' });
};


/**
 * Products
 */
exports.products = function(req, res, next){
  res.render('index', { title: 'Express Products Page' });
};