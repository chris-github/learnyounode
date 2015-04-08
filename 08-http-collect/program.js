var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
	var buff = '';

	res.setEncoding('utf8');

	res.on('data', function(chunk){
		buff +=  chunk;
	});

	res.on('end', function(){
		console.log(buff.length);
		console.log(buff);
	});

	res.on('error', function(err){
		console.error('Error:' + err.message);
	});
});