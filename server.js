const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


// Configure mongoose to connect to the Mongo DB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/urlShortener', { useNewUrlParser: true });

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});