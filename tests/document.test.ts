import request from "supertest";
import app from "../src/server";

const documentUrl =
  "https://litterarum.onrender.com/api/v1/files/tratado-beccaria.pdf";

const expectObject = {
  metadata: {
    author: "Cesare Beccaria",
    creationDate: "2015-03-06T09:24:27.000Z",
    creator: "Adobe InDesign CS6 (Windows)",
    keywords: "Historia; Derecho; Delitos; Penas",
    modificationDate: "2015-03-06T09:36:53.000Z",
    producer: "Adobe PDF Library 10.0.1",
    subject: "Historia del Derecho, 32",
    title: "Tratado de los delitos y de las penas",
  },
  pages: 92,
  readTime: 10561800,
  wordCount: 35206,
};

describe("GET /api/v1/files/pdf", () => {
  it("should return the same metadata defined in dev enviroment", () => {
    const payload = {
      fileUrl: documentUrl,
    };
    return request(app)
      .post("/api/v1/files/pdf")
      .send(payload)
      .set("Content-Type", "application/json")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(expectObject);
      });
  });
});
