const connection = require("../Connection/employeeDatabaseConnection");
var express = require("express");

var app = express();

app.post("/register-contact", async function (req, res) {
    try {
      const id = req.body.id;
      const name = req.body.name;
      const phone = req.body.phone;
      await connection.query(
        "INSERT INTO contact_details values(?, ?, ?) ",
        [id, name, phone])
        res.json({statusCode:200, message:"Data inserted Successfully"});
    }catch (err) {
      console.log(err);
    }
  });
  
  app.get("/contact-list", async function (req, res) {
    try {
      await connection.query(
        "SELECT * FROM employee_db.contact_details")
          res.json({statusCode: 200, data: result});
    } catch (err) {
      console.log(err);
    }
  });
  
  app.put("/update-contact/:id", async function (req, res) {
    try{

        const updatedId = req.params.id;
        const name = req.body.name;
        const phone = req.body.phone;
      
        await connection.query(
          "UPDATE contact_details SET name=?, phone=? WHERE id=?",
          [name, phone, updatedId])
              res.json({statusCode:200, message: "Data Updated Successfully"});
        }catch(err){
            console.log(err)
        }
            });
      
      app.delete("/delete-contact/:id", async function(req, res) {
        try{
        const id = req.params.id;
      
        await connection.query("DELETE FROM contact_details WHERE id=?", id)
            res.json({statusCode:200, message: "Deleted Data Successfully"});
    }catch(err){
        console.log(err)
    }
  });

  module.exports = app;