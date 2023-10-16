var mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "root123",
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection Established");
  }
});

module.exports = connection
