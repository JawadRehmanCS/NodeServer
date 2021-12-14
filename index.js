const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const data = require("./sample.json");
const port = 8000;

const fileName = "sample.json";

app.options('*', cors());
app.use(cors());

app.use(express.json());

app.post("/", function (req, res) {

  console.log(req.body.eleKey);
  console.log(req.body.selector);

  data[req.body.eleKey] = req.body.selector;

  fs.writeFileSync(fileName, JSON.stringify(data, null, 2));

  res.send("OK");
});

app.listen(port, function(err){
  if(err)
  console.log("\nError in server setup\n");
  console.log("\nServer is listening on Port: "+port+"\n");
});
