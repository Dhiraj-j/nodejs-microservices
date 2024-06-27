import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import routes from "./routers/index.js";
app.use(routes);
app.get("/", (req, res) => {
  return res.json({ message: "Its working....." });
});
app.listen(PORT, () => console.log(`Listen at port : ${PORT}`));
