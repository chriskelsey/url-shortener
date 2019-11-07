const db = require("../models");
const path = require("path");

module.exports = function(app) {
  	// Load index page
	app.get("/", function(req, res) {
    	res.sendFile(path.join(__dirname, "../index.html"));
  	});

  	//trigger the url write
  	app.post('/newUrl', function(req,res) {
  		db.Url
  			.findOneAndUpdate(
  				{url: req.body.url},
  				req.body,
  				{upsert: true, new: true, runValidators: true})
  			.then(dbModel => res.json(dbModel))
  			.catch(err => res.status(422).json(err));
  	});

  	//Redirect the page when the url is loaded
	app.get("/*", function(req, res) {
    	const reqPath = req.path.substring(1, req.path.length);
    	console.log(reqPath);
    	db.Url
    		.findOne({_id: reqPath})
    		.then(dbModel => res.redirect(dbModel.url))
    		.catch(err => res.status(422).json(err));
  	});
};