const amqp = require("amqplib/callback_api");

const channel = (queue) => (error1, channel) => {
  if (error1) throw error1;

  const msg = "Hello World!";

  channel.assertQueue(queue, { durable: false });
  channel.sendToQueue(queue, Buffer.from(msg));

  console.log(` [x] Sent ${msg}`);
};

const close = (connection) => () => {
  connection.close();
  process.exit(0);
};

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) throw error0;

  connection.createChannel(channel("hello"));

  setTimeout(close(connection), 500);
});
