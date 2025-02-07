require("dotenv").config();
const request = require("supertest");
const Hapi = require("@hapi/hapi");
const userRoutes = require("../routes/userRoutes");
const { sequelize, User } = require("../models/User");

let server;

beforeAll(async () => {
  server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });

  server.route(userRoutes);
  await server.initialize();
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("User api test", () => {
  test("It should create a new user", async () => {
    const res = await request(server.listener).post("/api/users").send({
      email: "test@test.com",
      password: "12345678",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("email", "test@test.com");
  });

  test("Should return error for missing fields", async () => {
    const res = await request(server.listener).post("/api/users").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
