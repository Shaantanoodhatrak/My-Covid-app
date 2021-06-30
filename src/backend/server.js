const db = require("../dbAll.json");
const db1 = require("../dbAll1.json");
const db2 = require("../dbAll2.json");

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const port = 3000;

// Define Express app settings
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set("title", "Covid App");

app.get("/", (req, res) => res.send("Welcome to My App !"));

app.get("/db", (req, res) => {
  res.status(200).json(db);
});

app.get("/db1", (req, res) => {
  res.status(200).json(db1);
});

app.get("/db2", (req, res) => {
  res.status(200).json(db2);
});
app.listen(port, () => console.log(`listening on port ${port}!`));
