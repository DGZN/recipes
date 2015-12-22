var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Recipe = new Schema({
  name:   { type: String, required: true, unique: true },
  recipe: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Recipe', Recipe);
