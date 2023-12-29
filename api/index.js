require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://givan:givan@employees.yof4mmm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => console.log("💽 Database is Connected Successfully"))
  .catch((err) => console.log("Please Restart Server", err));

app.listen(port, () => {
  console.log(`🚀 Live at http://localhost:${port}`);
});
