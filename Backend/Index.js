const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const FLASK_BASE = "http://localhost:5000";

// Dummy users (optional)
let users = [
  { id: 1, name: "Sakshi", age: 21 },
  { id: 2, name: "Akshay", age: 21 },
];

/**
 * 🔹 SYMPTOMS — works fine
 */
app.get("/symptoms", async (req, res) => {
  try {
    const response = await fetch(`${FLASK_BASE}/symptoms`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("SYMPTOMS ERROR:", err);
    res.status(500).json({ message: "Symptoms fetch failed" });
  }
});


/**
 * 🔥🔥 FINAL FIXED DIAGNOSIS PROXY 🔥🔥
 * This is the ONLY correct way.
 */
app.get("/diagnosis", async (req, res) => {
  try {
    let ids = req.query.id;

    // Always convert to array
    if (!ids) return res.status(400).json({ error: "No ID provided" });
    if (!Array.isArray(ids)) ids = [ids];

    // ⭐⭐⭐ BRUTE-FORCE QUERY STRING ⭐⭐⭐
    const qs = ids.map(id => `id=${encodeURIComponent(id)}`).join("&");
    const url = `${FLASK_BASE}/diagnosis?${qs}`;

    console.log("➡️  PROXY CALL:", url);

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error("DIAGNOSIS PROXY ERROR:", err);
    res.status(500).json({ message: "Diagnosis fetch failed" });
  }
});


/**
 * 🔹 Disease Details proxy
 */
app.get("/details/:disease", async (req, res) => {
  try {
    const disease = encodeURIComponent(req.params.disease);
    const url = `${FLASK_BASE}/details/${disease}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error("DETAILS PROXY ERROR:", err);
    res.status(500).json({ message: "Details fetch failed" });
  }
});


/**
 * 🔹 Test route (optional)
 */
app.get("/api/getdata", async (req, res) => {
  try {
    const response = await fetch(`${FLASK_BASE}/symptoms`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error in /api/getdata" });
  }
});


/**
 * 🔹 User CRUD — unchanged
 */
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name || user.name;
  user.age = req.body.age || user.age;

  res.json(user);
});

app.delete("/api/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
});


app.get("/", (req, res) => {
  res.json({
    message: "Node proxy for Local Medical API",
    routes: {
      "/symptoms": "List symptoms",
      "/diagnosis?id=1&id=2": "Diagnosis",
      "/details/<disease>": "Disease details",
    },
  });
});

app.listen(3000, () => {
  console.log("🚀 Node proxy server running on port 3000");
});
