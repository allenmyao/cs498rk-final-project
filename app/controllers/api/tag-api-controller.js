var tagController = require('./../tag-controller');
var respond = require('./utils').respond;


exports.getTags = function(req, res, next) {
	tagController.getTags(function(err, tags, errorMessage) {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
        errorMessage = errorMessage || "Error encountered while retrieving tags.";
        respond(res, tags, err, errorMessage);
	});
};