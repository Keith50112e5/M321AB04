const ws = require("ws");

const wssInit = (server) => new ws.Server({ server }).on("connection", onConn);

const onConn = (ws) => {
  jsonSend(ws, "OK");
  ws.on("message", onMsg(ws));
};

const onMsg = (ws) => (buffer) => jsonSend(ws, { msg: buffer.toString() });

const jsonSend = (ws, json) => ws.send(JSON.stringify(json));

module.exports = wssInit;
