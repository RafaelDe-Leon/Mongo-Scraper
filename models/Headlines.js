const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const headlineSchema = new Schema({
  headline: {
    type: String,
    requred: true,
    unique: { index: { unique: true } }
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

const Headline = mongoose.model('Headline', headlineSchema);

module.esports = Headline;
