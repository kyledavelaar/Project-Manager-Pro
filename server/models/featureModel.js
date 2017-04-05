const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let featureSchema = new Schema({
  title: { type: String, required: true },
  elapsed: { type: Number, default: 0 },
  duration: { type: Number, required: true },
  items: { type: Array, default: [] }
});

module.exports = mongoose.model('Feature', featureSchema);
