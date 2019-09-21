var express = require('express');
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there");
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res){
	res.send("Goodbye");
});
// "/dog" => "Meow"

//Tell express to listen
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server has started");
});
