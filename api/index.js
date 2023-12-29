import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import express from "express";
import mongoose from "mongoose";
import employeeRoutes from "./routes/employee.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

mongoose
  .connect(
    "mongodb+srv://givan:givan@employees.yof4mmm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => console.log("💽 Database is Connected Successfully"))
  .catch((err) => console.log("Please Restart Server", err));

mongoose.connection.once("open", () => {
  app.listen(port, () => {
    console.log(`🚀 Live at http://localhost:${port}`);
  });
});

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Employee Management Server is Live!");
});
