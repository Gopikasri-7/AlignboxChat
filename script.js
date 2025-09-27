const socket = io();
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

fetch("/messages")
  .then(res => res.json())
  .then(data => {
    data.forEach(msg => {
      addMessage(msg.sender, msg.message, msg.created_at);
    });
  })
  .catch(err => console.error("Fetch error:", err));

function addMessage(sender, text, time) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  if (sender.toLowerCase() === "you") {
    msgDiv.classList.add("you");
  } else {
    msgDiv.classList.add("other");
  }
  msgDiv.innerHTML = `
    <div class="sender">${sender}</div>
    <div>${text}</div>
    <span class="timestamp">${new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
  `;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  const msg = { sender: "You", text };
  socket.emit("chatMessage", msg);
  input.value = "";
}

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

socket.on("message", msg => {
  addMessage(msg.sender, msg.text, msg.timestamp);
});
