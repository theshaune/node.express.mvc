/* Import node_modules */
var express = require('express');
var router = express.Router();

/**
 * Index
 */
exports.index = function(req, res, next){
  res.render('index', { title: 'Express About index.' });
};

/**
 * Team page
 */
exports.team = function(req, res, next){
  res.render('index', { title: 'Express About Team page.' });
};