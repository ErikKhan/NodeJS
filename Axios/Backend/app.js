//Express and MariaDB

//Creating express Server
const express = require("express");
const server = express();
const cors = require('cors');

server.use(cors({ orgin: '*'}));
//Creating and Connecting to the database
const mysql = require("mysql");
//Connection
const con = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "",
    database: "lex_node1"
});
//Creating a first URL
//Getting data from the database
server.get("/", (req, res) => {
    console.log("inside /.")
    con.connect(function(){
        console.log("Inside connection:")
        con.query( "SELECT * FROM CARS", 
        function(err, result, fields){
            console.log(err);
            console.log("Inside query");
            res.send(result);        
        });
    });
    //res.send("This is the first Url /");
    //[{"id":2,"brand":"BMW","model":"5 SERIES","year":2010},
    //{"id":3,"brand":"AUDI","model":"A4","year":2012}]
});

server.listen( 8000, () =>{
    console.log("Server is listening on port 8000! ");
} );

server.get("/react", (req, res) => {
    res.send({ firstName: "John", lastName: "Connor" });
});



