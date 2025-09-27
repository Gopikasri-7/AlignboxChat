# 💬 Alignbox Chat

A simple **real-time chat application** built with **Node.js**, **Socket.io**, and **MySQL**.  
It allows multiple users to join a chat room, send messages instantly, and stores chat history in a database.

---

## 🚀 Features

- 📌 **Real-Time Messaging** – Messages appear instantly without page refresh
- 📌 **Multi-User Support** – Multiple clients can connect and chat together
- 📌 **Database Storage** – All messages are stored in **MySQL** for persistence
- 📌 **Lightweight UI** – Simple HTML + CSS front-end with a responsive layout
- 📌 **Server-Side with Node.js** – Handles connections and message broadcasting
- 📌 **Socket.io Integration** – Reliable, event-based communication

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| ⚡ **Node.js** | Backend server for handling requests |
| 🔗 **Socket.io** | Real-time communication between users |
| 🗄️ **MySQL** | Stores chat messages persistently |
| 🎨 **HTML/CSS** | Frontend user interface |
| 📜 **JavaScript** | Client-side logic & event handling |

---

## 📂 Project Structure

```
AlignboxChat/
├─ server.js          # Node.js + Socket.io server
├─ package.json       # Dependencies & scripts
├─ script.js          # Client-side JS for sockets
├─ style.css          # Basic styling
├─ index.html         # Chat UI
└─ db.sql             # MySQL database schema & table
```

---

## 🖥 How It Works

1. **Start the Server** – Run the Node.js server with Socket.io
2. **Open in Browser** – Open `index.html` in multiple browser windows
3. **Chat in Real-Time** – Type a message and see it broadcast instantly to all users
4. **Database Storage** – Every chat message gets saved into MySQL

---

## 🎯 Perfect For

| User Type | Use Case |
|-----------|----------|
| 👨‍💻 **Students** | Learning Socket.io + MySQL integration |
| 💼 **Beginners** | Building their first full-stack chat app |
| ⚡ **Developers** | Quick demo for real-time communication |
