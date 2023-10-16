const connection = require("../Connection/employeeDatabaseConnection");

var tableCreate = connection.query(
  `CREATE TABLE IF NOT EXISTS employees (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(255) NOT NULL UNIQUE,
        primary_contact INT REFERENCES contact_details(id),
        secondary_contact INT REFERENCES contact_details(id),
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
