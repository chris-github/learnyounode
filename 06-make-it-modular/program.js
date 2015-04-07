var filter = require('./filtered_ls.js');
var dirPath = process.argv[2];
var ext = process.argv[3];

filter(dirPath, ext, function(err, filteredList) {
	if (err)
		return console.error('There was an error:' + err);

	filteredList.forEach(function(file) {
		console.log(file);
	});
});