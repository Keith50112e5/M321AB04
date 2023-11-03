const port = 3000;
const server = require("http").createServer(require("express")());

const wssInit = (server) => {
  const wss = new (require("ws").Server)({ server });
  wss.on("connection", onConn);
};

const onConn = (ws) => {
  jsonSend(ws, { conn: "ok" });
  ws.on("message", onMsg(ws));
};

const onMsg = (ws) => (buffer) => {
  const msg = buffer.toString();
  jsonSend(ws, { msg });
};

const jsonSend = (ws, json) => {
  const str = JSON.stringify(json);
  console.log(str);
  ws.send(str);
};

wssInit(server);

const listenOn = "Websocket server started on port " + port;
server.listen(port, () => console.log(listenOn));
