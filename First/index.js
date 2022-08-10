console.log("My First Node File ");

const promptSync = require('prompt-sync');
//it will return an object
const prompt = promptSync();
//input from user
// let name = prompt("Enter your name: ");

// console.log(`Hello Handsome ${name}`);
// console.log("Hello " + name);


//Adding two numbers using prompt
//let x = prompt("Enter first number: ");
//let y = prompt("Enter first number: ");
//Adding to numbers and converting it to number using number
//console.log(Number(x) + Number(y));

//let input = "";
// console.log("Data Collection");
// while(true){
//     input = prompt("Enter data: ");
//     if(input == "exit")
//         break;
//         console.log(input);    
// }

const mysql = require('mysql');
/*
We are creating a connection object. We specify the settings of the database.
The object con gets all the information from the object from the createConnection
function.
*/
let con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'lex_node1'
})
//This is C in CRUD: create

// con.connect( function(err){
// 	/*
// 	The query function on the con object will send an SQL statement to the database.
// 	and it will handle the response. The first parameter of the function is the
// 	SQL statement and the second parameter is a function that will handle the
// 	response. If the query was executed without errors the result is in the result
// 	variable. If there were errors you can find them in the err variable.
// 	*/
// 	con.query( "INSERT INTO cars VALUES (1, 'Volvo', '240', 1985)", 
// 		function(err, result, fields){
// 			console.log(result);
// 		} )
// } );

/*
This is R in CRUD: read
*/
let readDb = () => {
	con.connect( function(err){
		con.query( "SELECT * FROM cars", 
			function(err, result, fields){
				console.log(result);
			}
		)
	} );
}
readDb();

/*
This is U in CRUD: update
*/
let updateDb = () => {
	con.connect( function(err){
		con.query( "UPDATE cars SET model = 'P90' WHERE id = 1", 
			function(err, result, fields){
				console.log(result);
			}
		)
	} );
}
//updateDb();

/*
This is D in CRUD: delete
*/
let deleteDb = () => {
	con.connect( function(err){
		con.query( "DELETE FROM cars WHERE id = 1", 
			function(err, result, fields){
				console.log(result);
			}
		)
	} );
}
deleteDb();


