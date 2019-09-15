const mongoose = require("mongoose");
const keys = require("./../config/keys");

mongoose
  .connect(
    keys.DATABASE_URI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("MongoDB Connected")
  )
  .catch(err => console.error(err));
