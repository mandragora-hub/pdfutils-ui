import "dotenv/config";

import express from "express";
import { join } from "path";
import cors from "cors";
import v1RouterFiles from "./v1/routes/files";
import v1RouterHealthCheck from "./v1/routes/healthcheck";
import helmet from "helmet";
import hpp from "hpp";
import { rateLimit } from "express-rate-limit";

const app = express();

const bodyOptions = { limit: "1mb" };
app.use(express.json(bodyOptions));
app.use(express.urlencoded({ ...bodyOptions, extended: false }));
app.use(express.static(join(__dirname, "../public")));

/* Security middleware configs */
app.use(cors());
app.use(helmet());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: "draft-7", // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
  legacyHeaders: false, // X-RateLimit-* headers
  // store: ... , // Use an external store for more precise rate limiting
});

// Setup routes
app.use("/api/v1/files", limiter, v1RouterFiles);
app.use("/api/v1/healthcheck", v1RouterHealthCheck);

// Not listen for connection  in test environment
if (process.env.NODE_ENV !== "test") {
  const server = app.listen(process.env.PORT, () => {
    console.log(
      `⚡️[server]: Server is running at ${process.env.BASE_URL}`
    );

    // Graceful Shutdown
    process.on("SIGTERM", () => {
      console.log("SIGTERM signal received: closing HTTP server");
      server.close(() => {
        console.log("HTTP server closed");
      });
    });
  });
}

export default app;
