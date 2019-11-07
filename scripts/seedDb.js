const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/urlShortener');

const urlSeed = [
  {
    url: "https://chriskelsey.net",
    code: 1
  }
];

db.Url
  .remove({})
  .then(() => db.Url.collection.insertMany(urlSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });