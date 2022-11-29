const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv/config");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "CSI3450!",
  database: "Bank_Shopper",
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const User_Username = req.body.User_Username;
  const User_Email = req.body.User_Email;
  const User_Password = req.body.User_Password;
  const User_Zip = req.body.User_Zip;
  const User_State = req.body.User_State;
  const User_City = req.body.User_City;
  const User_Street_Address = req.body.User_Street_Address;

  db.query(
    "INSERT INTO User (User_Username,User_Email,User_Password,User_Zip,User_State,User_City,User_Street_Address) VALUES (?,?,?,?,?,?,?)",
    [
      User_Username,
      User_Email,
      User_Password,
      User_Zip,
      User_State,
      User_City,
      User_Street_Address,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
