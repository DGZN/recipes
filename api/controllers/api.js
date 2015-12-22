
var express = require('express'),
     router = express.Router(),
         db = require('../db')

var User = require('../models/user');
var Recipe = require('../models/recipe');

router.get('/users', function(req, res, next) {
  User.find(function(err, users) {
    if (err)
      throw err;
    res.send(users);
  });
});

router.post('/recipes', function(req, res, next) {
  var recipe = new Recipe({
    name: req.body.name,
    recipe: req.body.recipe
  });
  recipe.save(function(err) {
    if (err)
      return console.log("!ERROR!", err)
  });
  res.send(recipe)
})

router.get('/recipes', function(req, res, next) {
  Recipe.find(function(err, recipes) {
    if (err)
      throw err;
    res.send(recipes);
  });
});


module.exports = router;
