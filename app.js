const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routers/productsRouter");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(productsRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("run", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
