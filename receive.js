const amqp = require("amqplib/callback_api");

const channel = (queue) => (error1, channel) => {
  if (error1) throw error1;

  channel.assertQueue(queue, { durable: false });

  console.log(` [*] Waiting for messages in ${queue}. To exit press CTRL+C`);

  receiveMessage = (msg) => {
    const str = msg.content.toString();
    console.log(` [x] Received ${str}`);
  };

  channel.consume(queue, receiveMessage, { noAck: true });
};

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) throw error0;

  connection.createChannel(channel("hello"));
});
