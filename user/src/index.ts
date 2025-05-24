import express from "express";
const app = express();
import UserRoutes from "./routes/UserRoutes";
import { connectDB } from "./db/connection";
import { kafkaInstance } from "./broker/kafka";
import { connectProducer } from "./broker/producer";
async function startServer() {
  await connectDB();
  await connectProducer();
  console.log("Producer connected");
  app.listen(4000, () => {
    console.log("User service started on port 4000");
  });
  app.use(express.json())
  app.use(UserRoutes);
}

startServer().then((x) =>
  console.log("User service server started succesfully")
);
