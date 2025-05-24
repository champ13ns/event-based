import { Kafka } from "kafkajs";

const kafkaInstance = new Kafka({
  brokers: ["localhost:9092"],
});

export { kafkaInstance };
