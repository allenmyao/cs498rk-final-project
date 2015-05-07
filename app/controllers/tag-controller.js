var Data = require('./../data');
var loadTags = Data.loadTags;


exports.getTags = function(callback) {
	loadTags(callback);
};