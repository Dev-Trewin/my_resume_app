const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const cors=require('cors');
const db = require("../BackEnd/models/db.js");
const app=express();

var corsOptions={
    origin:"http://localhost:3001"
};

app.use(cors(corsOptions));

  require("../BackEnd/routes/messages.routes")(app);
  

  // set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
