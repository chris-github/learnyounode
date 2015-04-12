var http = require('http');
var bl = require('bl');

var responseCount = 0;
var results = [];

function printResults() {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(res) {
		res.pipe(bl(function (err, data) {
			if (err)
				console.error('Error:' + err.message);

			results[index] = data.toString();
			responseCount++;
			if (responseCount === 3) {
				printResults();
			}				
		}));
	});
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
}