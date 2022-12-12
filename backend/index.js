const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv/config");

const db = mysql.createConnection({
  user: "root",
  host: "34.136.77.131",
  password: "CSI3450!",
  database: "Bank_Shopper",
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const User_Password = req.body.User_Password;
  const User_Username = req.body.User_Username;
  const User_FName = req.body.User_FName;
  const User_LName = req.body.User_LName;
  const User_Email = req.body.User_Email;
  const User_Street_Address = req.body.User_Street_Address;
  const User_City = req.body.User_City;
  const User_Zip = req.body.User_Zip;
  const User_State = req.body.User_State;
  const User_Type = req.body.User_Type;

  db.query(
    "INSERT INTO User (User_Password,User_Username,User_FName,User_LName,User_Email,User_Street_Address,User_City,User_Zip,User_State,User_Type) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      User_Password,
      User_Username,
      User_FName,
      User_LName,
      User_Email,
      User_Street_Address,
      User_City,
      User_Zip,
      User_State,
      User_Type,
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

app.post("/CreateBankAccount", (req, res) => {
  const Bank_Account_Number = req.body.Bank_Account_Number;
  const Account_Routing_Number = req.body.Account_Routing_Number;
  const User_User_ID = req.body.User_User_ID;
  const Account_Balance = req.body.Account_Balance;
  const Account_Nickname = req.body.Account_Nickname;
  const Account_Type = req.body.Account_Type;

  db.query(
    "INSERT INTO Bank_Account (Bank_Account_Number,Account_Routing_Number,User_User_ID,Account_Balance,Account_Nickname,Account_Type  ) VALUES (?,?,?,?,?,?)",
    [
      Bank_Account_Number,
      Account_Routing_Number,
      User_User_ID,
      Account_Balance,
      Account_Nickname,
      Account_Type,
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

app.post("/Sell", (req, res) => {
  const Item_Name = req.body.Item_Name;
  const Item_Description = req.body.Item_Description;
  const Item_Price = req.body.Item_Price;
  const Item_Listed_Date = req.body.Item_Listed_Date;
  const Category_Category_ID = req.body.Category_Category_ID;
  const Seller_User_User_ID = req.body.Seller_User_User_ID;
  const Brand_Brand_ID = req.body.Brand_Brand_ID;

  

  db.query(
    "INSERT INTO Item (Item_Name, Item_Description, Item_Price, Item_Listed_Date, Category_Category_ID, Seller_User_User_ID, Brand_Brand_ID) VALUES (?,?,?,?,?,?,?)",
    [
      Item_Name,
      Item_Description,
      Item_Price,
      Item_Listed_Date,
      Category_Category_ID,
      Seller_User_User_ID,
      Brand_Brand_ID
      
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


app.get("/Listings", (req, res) => {
  db.query("SELECT * FROM Bank_Shopper.Item WHERE User_ID = current user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
