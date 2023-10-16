const connection = require("../Connection/employeeDatabaseConnection");
var express = require("express");

var app = express();

app.post("/register-employee", async function (req, res) {
    try {
      const id = req.body.id;
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const primary_contact = req.body.primary_contact;
      const secondary_contact = req.body.secondary_contact;
      await connection.query("INSERT INTO employees values(?, ?, ?, ?, ?, ?) ",[id, name, email, phone, primary_contact, secondary_contact])
          res.json({statusCode:200, message: "Data Inserted Successfully" });
    } catch (err) {
      console.log(err);
    }
  });


  app.get('/employee-data', async function(req, res){
    try{
        await connection.query("SELECT * FROM employees", function(data){
            res.json({statusCode: 200, data})
        })
    }catch(err){
        console.log(err)
    }
  })
  
  app.get("/employee-list", async function(req, res) {
    try {
        const page = req.query.page
        const limit = req.query.limit

        const offset = (page - 1) * limit;

        const data = await connection.query("SELECT * FROM employees ORDER BY (id) limit=? offset=?", [limit, offset])
        const totalPageData = await connection.query("SELECT COUNT(*) as count FROM employees")
        const totalPage = Math.ceil(+totalPageData[0]?.count / limit)
        res.json({
            statusCode: 200,
            data,
            next_page: page < totalPage ? `${page + 1}` : null,
            previous_page: page > 1 ? `${page - 1}` : null
          });
    } catch (err) {
      console.log(err);
    }
  });
  
  app.put("/update-employee/:id", async function (req, res){
    try{

        const updatedId = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const primary_contact = req.body.primary_contact;
        const secondary_contact = req.body.secondary_contact;
      
        await connection.query(
          "UPDATE employees SET name=?, email=?, phone=?, primary_contact=?, secondary_contact=? WHERE id=?",
          [name, email, phone,  primary_contact, secondary_contact, updatedId]);
            res.json({statusCode: 200, message: "Data Updated Successfully"})
            
        }catch(err){
            console.log(err)
        }
    })
  
  app.delete("/delete-employee/:id", async function (req, res) {
    try{
        const id = req.params.id;
      
        await connection.query("DELETE FROM employees WHERE id=?", id)
        res.json({statusCode: 200, message: "Data Deleted Successfully"})

    }catch(err){
        console.log(err)
    }
  })

module.exports = app