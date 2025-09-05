const crypto = require("node:crypto");
const WebSocket = require("ws");

class Message {
    content = "";
    sender_id = "";

    constructor() {
        this.sender_id = crypto.randomUUID();
    }

    sendMessageToChat(ws, message, chat_id) {
        this.content = message;

        const payload = {
            type: "chat_message",
            chat_id,
            sender_id: this.sender_id,
            content: this.content,
            timestamp: Date.now()
        };

        ws.send(JSON.stringify(payload));
    }
}

