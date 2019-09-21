const express = require('express');
var app = express();
const http = require('https');
const hostname = 'localhost';
const port = 9080;
const server = https.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there");
});
// "/bye" => "Goodbye"
app.get("/bye/", function(req, res){
	res.send("Goodbye");
});
// "/dog" => "Meow"
app.get("/dog", function(req, res){
	res.send("Woof");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Tell express to listen
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server has started");
});
