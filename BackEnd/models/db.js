const mysql = require("mysql");
const dbConfig = require('../Config/dbConfig.js');
var connection = mysql.createPool(
   {
     host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
   // insecureAuth : true
  
 }
//process.env.DATABASE_URL
);

module.exports = connection;
