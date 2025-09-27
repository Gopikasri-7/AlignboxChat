const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Narayana@17",
  database: "chatdb"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL Connected!");
});

app.get("/messages", (req, res) => {
  db.query("SELECT * FROM messages ORDER BY created_at ASC", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

io.on("connection", (socket) => {
  console.log("🟢 User connected");

  socket.on("chatMessage", (msg) => {
    const sql = "INSERT INTO messages (sender, message, created_at) VALUES (?, ?, NOW())";
    db.query(sql, [msg.sender, msg.text], (err) => {
      if (err) throw err;
      io.emit("message", { sender: msg.sender, text: msg.text, timestamp: new Date() });
    });
  });

  socket.on("disconnect", () => console.log("🔴 User disconnected"));
});

server.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
