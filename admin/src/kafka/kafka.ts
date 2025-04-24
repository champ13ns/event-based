import { Kafka } from "kafkajs";

const kafkaInstance = new Kafka({
  clientId: "admin-service",
  brokers: ["http://localhost:9092"],
});

export { kafkaInstance };
