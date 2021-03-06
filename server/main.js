const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

require("./data/database");
require("./models");
require("./routes")(app);

if (process.env.NODE_ENV === "production") {
  require("./config/prodClientPath")(app, express);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
