var tagController = require('./../tag');


exports.getTags = function(req, res, next) {
	tagController.getTags(function(err, tags) {
        if (err) {
            res.status(500).json({
                message: 'Error',
                error: err,
                data: {}
            });
        } else {
            res.status(200).json({
                message: 'Successfully retrieved tags',
                data: tags
            });
        }
	});
};