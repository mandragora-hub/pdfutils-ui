import request from "supertest";
import app from "../src/server";


describe("GET /api/v1/healthcheck", () => {
  test("should return healthcheck status", async () => {
    const res = await request(app).get("/api/v1/healthcheck");
    expect(res.statusCode).toBe(200);
  });
});
