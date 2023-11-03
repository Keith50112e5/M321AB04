const express = require("express");
const port = 3000;

const app = express();
const server = require("http").createServer(app);

app.use(express.json());

require("./websocket")(server);

app.use("/", require("./router"));

const listenOn = `
Express running on http://localhost:${port}/
WebSocket running on ws://localhost:${port}/`;
server.listen(port, () => console.log(listenOn));
