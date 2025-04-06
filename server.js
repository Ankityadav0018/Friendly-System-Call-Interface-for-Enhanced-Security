const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Dummy user authentication
const users = { admin: "password" };

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

// Execute secure system call (runs C/C++ binary)
app.get("/execute", (req, res) => {
    exec("./secure_syscall", (error, stdout, stderr) => {
        if (error) {
            res.status(500).json({ error: stderr });
        } else {
            res.json({ message: stdout });
        }
    });
});

// Fetch logs
app.get("/logs", (req, res) => {
    fs.readFile("logs.txt", "utf8", (err, data) => {
        if (err) return res.status(500).json({ error: "Failed to fetch logs" });
        res.json({ logs: data });
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
