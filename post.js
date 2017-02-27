//http and file system
var http = require("http");
var fs = require("fs");


//Create http server and port = 2000
http.createServer(function(req,res){
	
	//check the http method
	if(req.method === "GET"){
		//status code, data type of html
		res.writeHead(200,{"Content-Type":"text/html"});
		//File system  > read stream
		fs.createReadStream("./assest/form.html","UTF-8").pipe(res);
	}else if (req.method === "POST"){
		//variable to display post data
		var body ="";
		//adding "on" listener to collect form data
		req.on("data", function(block){
			body += block;

		});
		//on request end display that post data in html 
		//we can also store the same in database also
		req.on("end",function(){
			res.writeHead(200, {"Content-Type":"text/html"});
			res.end(`
				<!DOCTYPE html>
				<html>
					<title>Posted Data</title>
					<h1> Posted Data </h1>
					<p>${body}</p>
				</html>


			`);

		});


	}

}).listen(2000);

//Terminal notification that server started
console.log("Server started port 2000");
