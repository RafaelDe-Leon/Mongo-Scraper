const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const headlineSchema = new Schema({
  headline: {
    type: String,
    requred: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

const Headline = mongoose.model('Headline', headlineSchema);

module.esports = Headline;
