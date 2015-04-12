var http = require('http');

var responseCount = 0;
var results = [];

function printResults() {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(res) {
		res.setEncoding('utf8');

		var buff = '';
		res.on('data', function(chunk) {
			buff += chunk;
		});

		res.on('end', function() {
			results[index] = buff.toString();
			responseCount++;
			if (responseCount === 3) {
				printResults();
			}
		});

		res.on('error', function(err) {
			console.error("Error: " + err.message);
		});
	});
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
}