import DataBaseRepository from "../repositories/dataBaseRepository";
import { configDotenv } from "dotenv";
import UserService from "../services/userService";
import Encrypt from "../utils/ecrypt";
import IRole from "../schemas/role";

configDotenv();

const database = new DataBaseRepository(<string>process.env.MONGODB_URL);

const pass: string = Encrypt.hash("admin");

database.connect();

const admin = {
  username: "admin",
  email: "admin@mail.com",
  password: pass,
  role: IRole.ADMIN,
  address: "address",
  birthDay: "12",
  imageUrl: "http://test.com",
  createdBy: "admin",
  deletedBy: "admin",
  isDeleted: false,
};

const user1 = {
  username: "user",
  email: "user@mail.com",
  password: pass,
  role: IRole.STUDENT,
  address: "address",
  birthDay: "12",
  imageUrl: "http://test.com",
  createdBy: "user1",
  deletedBy: "user1",
  isDeleted: false,
};

const user2 = {
  username: "user2",
  email: "user2@mail.com",
  password: pass,
  role: IRole.STUDENT,
  address: "address",
  birthDay: "12",
  imageUrl: "http://test.com",
  createdBy: "user2",
  deletedBy: "user2",
  isDeleted: false,
};

const seeding = async (): Promise<void> => {
  const u1 = await UserService.create(admin);

  const u2 = await UserService.create(user1);

  const u3 = await UserService.create(user2);

  console.log([u1, u2, u3]);
};

seeding();
