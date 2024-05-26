require("dotenv").config();
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const connectDB = require("./src/config/db");
const productRouter = require("./src/routes/product");
const userRouter = require("./src/routes/user");
const authRouter = require("./src/routes/auth");
const db = require("./src/routes/db");
const notFound = require("./src/middleware/notFound");
const errorHandler = require("./src/middleware/errorHandler");

const port = process.env.PORT;

const app = express();

const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors()); // Handle preflight requests
app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static("uploads/images"));
app.use(compression());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/db", db);

app.use(notFound);
app.use(errorHandler);

connectDB();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
