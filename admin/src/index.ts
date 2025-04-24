import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);

app.listen(4001, () => {
  console.log("Admin Started on prot 4001");
});

export { server }