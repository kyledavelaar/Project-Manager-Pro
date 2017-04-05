const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let itemSchema = new Schema({
  content: { type: String, required: true },
  complete: { type: Boolean, default: false },
  users: { type: String }
});

module.exports = mongoose.model('FeatureItem', itemSchema);