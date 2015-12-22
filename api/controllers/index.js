var express = require('express');
var router = express.Router();

var Recipe = require('../models/recipe');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recipes', function(req, res, next) {
  Recipe.find(function(err, recipes) {
    if (err)
      throw err;
    res.render('recipes', { title: '::DGZN Recipes::', recipes:  recipes});
  });
});

router.get('/recipes/:id', function(req, res, next) {
  Recipe.findById(req.params.id, function (err, doc){
    if (err)
      return console.log("!ERROR!", err)
    res.render('recipe', { title: doc.name, recipe: doc.recipe });
  });
});


module.exports = router;
