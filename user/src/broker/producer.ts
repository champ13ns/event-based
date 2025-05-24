import { kafkaInstance } from "./kafka";
import { Producer } from "kafkajs";

let producer: Producer;

async function connectProducer() {
  producer = kafkaInstance.producer();
  await producer.connect();
  console.log("Producer connected succesfully");
}

const produceUserAddEvent = async (user: any) => {
  try {
    // if (!producer) throw new Error("No Producer found");
    // await producer.send({
    //   topic: "user-added",
    //   messages: [
    //     {
    //       key: user?.id?.toString(),
    //       value: JSON.stringify(user),
    //     },
    //   ],
    // });

    if (!producer) throw new Error("Producer not connected");

    console.log("Sending message:", user); // Add this line
    await producer.send({
      topic: "user-added-dev",
      messages: [
        {
          value: JSON.stringify(user),
        },
      ],
    });
  } catch (error) {
    //@ts-ignore
    throw new Error(error);
  }
};

const produceUserDeleteEvent = async (user: any) => {
  await producer.send({
    topic: "user-deleted",
    messages: [{ value: JSON.stringify(user) }],
  });
};

export { produceUserAddEvent, produceUserDeleteEvent, connectProducer };
