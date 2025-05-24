import { kafkaInstance } from "./kafka";
import { broadcastUserEvent } from "./../socket/socketServer";
const consumer = kafkaInstance.consumer({ groupId: "admin-group-test" });

export const startConsumer = async () => {
  await consumer.connect();
  console.log("consumer connected");
  await consumer.subscribe({ topic: "user-added-dev", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // @ts-ignore
      const user = JSON.parse(message.value.toString());
      console.log(
        `Event recvd:`,
        user,
        "partiton",
        partition,
        "topic-name ",
        topic
      );
    },
  });
};
