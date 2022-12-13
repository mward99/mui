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

app.post("/getBankAccountInfo", (req, res) => {
  const Username = req.body.Username;
  const Account_Number = req.body.Account_Number;
  db.query(
    "select Bank_Account_Number, Account_Routing_Number, Account_Balance, Account_Nickname, Account_Type, User_Username, User_User_ID from Bank_Account JOIN User on User_ID = User_User_ID where User_Username like ? and Bank_Account_Number like ?;",
    [
      Username,
      Account_Number,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/getTransactions", (req, res) => {
  const User_ID = req.body.User_ID;
  const accNum = req.body.accNum;
  db.query(
    "select Transaction_Num, Transaction_Amount, Transaction_Description from Transactions where Bank_Account_User_User_ID = ? and Bank_Account_Bank_Account_Number = ?;",
    [
      User_ID,
      accNum,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/getUserID", (req, res) => {
  const Username = req.body.Username;
  db.query(
    "select User_ID from User where User_Username = ?;",
    [
      Username,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/makeDeposit", (req, res) => {
  const User_ID = req.body.User_ID;
  const Account_Number = req.body.Account_Number;
  const Amount = req.body.Amount;
  const Routing_Number = req.body.Routing_Number;

  db.query(
    "update Bank_Account set Account_Balance = Account_Balance + ? where Bank_Account_Number = ? and User_User_ID = ?;",
    [
      Amount,
      Account_Number,
      User_ID,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/makeDepositTransaction", (req, res) => {
  const User_ID = req.body.User_ID;
  const Account_Number = req.body.Account_Number;
  const Amount = req.body.Amount;
  const Routing_Number = req.body.Routing_Number;

  db.query(
    "INSERT INTO Bank_Shopper.Transactions (Bank_Account_Bank_Account_Number, Bank_Account_Account_Routing_Number, Bank_Account_User_User_ID, Transaction_Amount, Transaction_Description) Values (?, ?, ?, ?, 'Deposit/Withdraw');",
    [
      Account_Number,
      Routing_Number,
      User_ID,
      Amount,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/transactions", (req, res) => {
  db.query("SELECT * FROM Transactions", (err, result) => {
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


