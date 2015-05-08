var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookmarkSchema = new Schema({
    owner_id: {
        type: String,
        required: true
    },
    stack_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        default: false
    },
    tags: [{
        type: String
    }]
});

var BookmarkModel = mongoose.model('Bookmark', BookmarkSchema, 'bookmarks');

module.exports = BookmarkModel;