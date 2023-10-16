var express = require("express");
let connection = require("./Connection/employeeDatabaseConnection");

require("./Database/employeeDatabase");
require("./Table/employeeTable");

require("./Table/contactTable");

const contactRoutes = require("./Routing/contactRouting");
const employeeRoutes = require("./Routing/employeeRouting");

let app = express();
app.use(express.json());


app.use('/contacts', contactRoutes)
app.use('/employees', employeeRoutes)  
  

app.listen(3000, () => {
  console.log("Server is running on port-3000");
});
