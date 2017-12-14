const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.Promise = global.Promise
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/prospecting_db"
  {
    useMongoClient: true
  }
)

app.use(routes);

app.listen(PORT, function() {
  console.log(`API server listening on port ${PORT}`)
})
