var fs = require('fs');
var path = require('path');


var readFile = function(filename, callback) {
    var filePath = path.join(__dirname, filename);
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) console.log(err);
        var json = JSON.parse(data);
        callback(err, json);
    });
};

module.exports = {
    readFile: readFile
};