const mysql = require("mysql");
const db = mysql.createConnection({
  host: "34.136.77.131",
  user: "root",
  password: "CSI3450!",
  database: "Bank_Shopper",
});

module.exports = db;
