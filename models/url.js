const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  	code: {
  	type: Number,
  	required: true
  } 
});

const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;