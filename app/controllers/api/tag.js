var tagController = require('./../tag');


exports.getTags = function(req, res, next) {
	tagController.getTags(function(tags) {
		res.json({
			message: typeof tags
		});
	});
};