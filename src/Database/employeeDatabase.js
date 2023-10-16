const connection = require("../Connection/employeeDatabaseConnection");

var databaseCreate = connection.query(
  "CREATE DATABASE Employee_db",
  function (res) {
    try {
      if (res) {
        console.log("Database already exist");
      } else {
        console.log("Database Created");
      }
    } catch (err) {
      console.log("Error in Database Creation");
    }
  }
);

module.exports = databaseCreate;
