const express = require("express");
const mongoose = require("mongoose");

const keys = require("../config/keys");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB connecting ..."))
  .catch(err => console.log(err));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(keys.port, () =>
  console.log(`server starting at port ${keys.port}`)
);
