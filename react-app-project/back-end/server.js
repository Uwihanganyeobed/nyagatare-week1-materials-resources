const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Update with your MySQL user
  password: "sun(123)", // Update with your MySQL password
  database: "testcrud",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get('/',async(req,res)=>{
   return res.json("Express is running");
});

// // CREATE - Add a new user
// app.post('/users', (req, res) => {
//    const { name, email, age } = req.body;
//    db.query(
//      'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
//      [name, email, age],
//      (err, results) => {
//        if (err) return res.status(500).json({ error: err.message });
//        res.status(201).json({ id: results.inserId, name, email, age });
//      }
//    );
//  });

// app.get('/users', async(req,res)=>{
//    db.query("SELECT * FROM users",(err,result)=>{
//       if(err){
//          return res.status(201).json({message: err.message})
//       }
//       return res.json(result);
//    })
// })

// CREATE - Add a new user
app.post('/users', (req, res) => {
   const { name, email, age } = req.body;
   db.query(
     'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
     [name, email, age],
     (err, results) => {
       if (err) return res.status(500).json({ error: err.message });
       res.status(201).json({ id: results.insertId, name, email, age });
     }
   );
 });
 
 // READ - Get all users
 app.get('/users', (req, res) => {
   db.query('SELECT * FROM users', (err, results) => {
     if (err) return res.status(500).json({ error: err.message });
     res.json(results);
   });
 });
 
//  GET USERS BY ID

app.get('/users/:id', (req, res) => {
   const { id } = req.params;
   db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
     if (err) return res.status(500).json({ error: err.message });
     if (results.length === 0) return res.status(404).json({ error: 'User not found' });
     res.json(results[0]);
   });
 });
  
 // UPDATE - Update a user by ID
 app.put('/users/:id', (req, res) => {
   const { id } = req.params;
   const { name, email, age } = req.body;
   db.query(
     'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?',
     [name, email, age, id],
     (err, results) => {
       if (err) return res.status(500).json({ error: err.message });
       res.json({ message: 'User updated successfully' });
     }
   );
 });
 
 // DELETE - Delete a user by ID
 app.delete('/users/:id', (req, res) => {
   const { id } = req.params;
   db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
     if (err) return res.status(500).json({ error: err.message });
     res.json({ message: 'User deleted successfully' });
   });
 });
 

app.listen(5000, async() => console.log("App is running on port 3000"));
