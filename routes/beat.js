app.get('/beat/:url', function(req, res){
	var url = decodeURIComponent(req.params.url);
	console.log(url);
	request.get({uri: url},function(err, response, content){
		console.log('beating @ ' + new Date());
		res.write("Beating");
		res.end();
	});
});