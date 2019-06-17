const  express = require('express');
const app = express();

const Cities = require("./models/cities.js");
db = require("./db.js");

const citiesRoute = require("./routes/api/cities");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.use("/api/cities", citiesRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
