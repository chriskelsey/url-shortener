const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const URlSchema = new Schema({
  url: {
    type: String,
    required: true
  }
});

const Url = mongoose.model("Url", UrlSchema);

module.exports = Url;