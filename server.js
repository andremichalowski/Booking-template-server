import express from "express";
import { readdirSync } from "fs";
import { env } from "process";
import cors from "cors";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

app.use(cors());
app.use(morgan("dev"));

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
