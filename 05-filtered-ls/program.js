var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirPath, function(err, list) {
	list.forEach(function(file) {
		if (path.extname(file) ===  '.' + ext) {
			console.log(file);
		}
	});
});