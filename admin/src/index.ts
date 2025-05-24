import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);
import { startConsumer } from "./kafka/consumer";
async function startServer() {
  app.use(express.json());
  startConsumer();

  app.listen(4001, () => {
    console.log("Admin Started on prot 4001");
  });
}

startServer();

export { server };
