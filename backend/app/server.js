const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

var cors = require("cors");

app.use(cors());

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bank_Shopper application." });
});

// // Route to get all posts
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM User", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});
// // Route for creating the post
app.post("/api/create", (req, res) => {
  const User_Email = req.body.User_Email;
  const User_Password = req.body.User_Password;

  console.log(User_Email, User_Password);

  db.query(
    "INSERT INTO User (User_Email, User_Password) VALUES (?,?)",
    [User_Email, User_Password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
