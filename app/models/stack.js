var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookmarkUrlPairSchema = new Schema({
    bookmark_id: String,
    bookmark_url: String
});

var StackSchema = new Schema({
    owner_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#fff'
    },
    private: {
        type: Boolean,
        default: false
    },
    bookmarks: [BookmarkUrlPairSchema],
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

StackSchema.post('update', function() {
    console.log('stack updated');
    this.lastUpdated = Date.now();
});

// StackSchema.post('remove', function(stack) {
//     stack._id
// });

var StackModel = mongoose.model('Stack', StackSchema, 'stacks');

module.exports = StackModel;
