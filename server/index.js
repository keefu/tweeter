"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  //Pass the parameter db to DataHelpers
  const DataHelpers = require("./lib/data-helpers.js")(db);
  //Then pass the parameter DataHelpers to tweetsRoutes
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  //Since tweetsRoutes is used in app.use 
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

  process.on("SIGINT", function() {
    server.close();
    db.close();
  })
});