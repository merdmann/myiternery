const  express = require('express');
const app = express();

db = require("./db.js");

const citiesRoute = require("./routes/api/cities");
const searchRoute = require("./routes/api/search");
const tineraryRoute = require("./routes/api/tinerary.js");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.use("/api/cities", citiesRoute);
app.use("/api/search", searchRoute);
app.use("/api/tinerary", tineraryRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
