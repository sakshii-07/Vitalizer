// // Import dependencies
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// // Initialize express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Hello, Express Boilerplate is running!");
// });

// // Example API route
// app.get("/api/data", (req, res) => {
//   res.json({ message: "This is sample API data" });
// });

// // Server listening
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
// });

// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory "database" (for demo purposes)
let users = [
  { id: 1, name: "Sakshi", age: 21 },
  { id: 2, name: "Akshay", age: 21 },
];

// ================= API ROUTES =================

// GET all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET a single user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST (create) a new user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) a user
app.put("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name || user.name;
  user.age = req.body.age || user.age;

  res.json(user);
});

// DELETE a user
app.delete("/api/users/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
});

// ==============================================

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
