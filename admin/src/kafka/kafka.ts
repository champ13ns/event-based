import { Kafka } from "kafkajs";

const kafkaInstance = new Kafka({
  clientId: "user-service",
  brokers: ["http://localhost:9092"],
});

export { kafkaInstance };
