const express = require('express');
const path = require("path");
//This is need to treat a body object to the req object like and object
//which means it can access through the body.
const bodyParser = require("body-parser");

let urlencodeParser = bodyParser.urlencoded({entended: false});

let server = express();

server.use(express.static("public"));

//it mean that the app is going to respond a get HTTP method
//req: It is request that comes from the browser.
//res: response. The response we are sending to the browser.
server.get("/", (req, res) => {
    res.send("The server is up and running. you are at /");
});

server.get("/aboutus", (req, res) =>{
    res.send("I am a software developer")
});
//We can also send objects
server.get("/objects", (req, res)=>{
    res.send({firtname: "James", lastname: "Bond", Movie: "Batman"});
});
server.get("/update", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/updateform.html"));
} );

server.post("/update", urlencodeParser, (req, res) => {
    console.log(req.body.firstName);
    res.send("Data sent from the form:" + req.body.firstName);
});
//act is web appication
//It will listen request from browser
//It will listen to two ports or door
//port- communction with outside world
//web server and web applicarion in one.
server.listen(8000, function(){ //localhost:8000
    console.log("The server is listening on port 8000.")
} );


//It is a default resource it is the index.html file