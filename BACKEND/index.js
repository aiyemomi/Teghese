require("dotenv").config();
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./src/config/db");
const productRouter = require("./src/routes/product");
const userRouter = require("./src/routes/user");
const authRouter = require("./src/routes/auth");
const notFound = require("./src/middleware/notFound");
const errorHandler = require("./src/middleware/errorHandler");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static("uploads/images"));
app.use(cors());
app.use(compression());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);
app.use(notFound);
app.use(errorHandler);

connectDB();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
