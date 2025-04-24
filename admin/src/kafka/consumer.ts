import { kafkaInstance } from "./kafka";
import { broadcastUserEvent } from './../socket/socketServer'
const consumer = kafkaInstance.consumer({ groupId: "admin-group" });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-added", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        // @ts-ignore
      const user = JSON.parse(message.value.toString());
      console.log(`Event recvd:`, user);
        broadcastUserEvent(user);
    },
  });
};

startConsumer();
