const connection2 = require("../Connection/employeeDatabaseConnection");

var tableCreate = connection2.query(
  `CREATE TABLE IF NOT EXISTS contact_details (
        id INT NOT NULL AUTO_INCREMENT UNIQUE,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL UNIQUE,
        PRIMARY KEY (id)
      )`,
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Table Created Successfully");
    }
  }
);

module.exports = connection2