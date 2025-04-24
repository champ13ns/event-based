import express from "express";

import { kafkaInstance } from "../broker/kafka";
import {
  produceUserAddEvent,
  produceUserDeleteEvent,
} from "../broker/producer";

class UserController {
  private arr: any[] = [];

  async addUser(user: any) {
    this.arr.push(user);
    await produceUserAddEvent(user);
    return this.arr[this.arr.length - 1];
  }

  async deleteUser(index: any) {
    const user = this.arr[index];
    if (user) {
      this.arr.splice(index, 1);
      await produceUserDeleteEvent(user);
    }
    return user;
  }

  async usersList() {
    return this.arr;
  }
}

export { UserController };
