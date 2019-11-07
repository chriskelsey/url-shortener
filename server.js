//Import packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Express App - hardcoded port, but for scaling should be made dynamic
const app = express();
const PORT = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//Since there's only one route I just required it, instead of the routes directory via an index.js
require('./routes/urlRoutes')(app);

// Configure mongoose to connect to the Mongo DB
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/urlShortener', { useNewUrlParser: true });

//Make sure the server is running
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});