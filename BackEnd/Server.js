const express = require("express");
const bodyParser = require("body-parser");
const cors=require('cors');
const db = require("../BackEnd/models/db.js");
const app=express();

var corsOptions={
    origin:"http://localhost:3001"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.connect((err)=> {
  
  if (err) {
    console.error('error connecting db: ' + err.stack);
    return;
  }

  console.log('connected to db as id ' + db.threadId);
});
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
  });

  require("../BackEnd/routes/messages.routes")(app);
  // set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
