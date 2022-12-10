import { Button, TextField } from "@mui/material";
import Axios from "axios";
import React, { useState } from "react";

function AddBankAccount() {
  const [Bank_Account_Number, setBank_Account_Number] = useState(0);
  const [Account_Routing_Number, setAccount_Routing_Number] = useState(0);
  const [Account_Balance, setAccount_Balance] = useState(0);
  const [Account_Nickname, setAccount_Nickname] = useState("");
  const [Account_Type, setAccount_Type] = useState("");

  const addBankAccount = () => {
    Axios.post("http://localhost:4000/CreateBankAccount", {
      Bank_Account_Number: Bank_Account_Number,
      Account_Routing_Number: Account_Routing_Number,
      Account_Balance: Account_Balance,
      Account_Nickname: Account_Nickname,
      Account_Type: Account_Type,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <TextField
        id="outlined-textarea"
        label="Enter your Account Number"
        onChange={(event) => {
          setBank_Account_Number(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "15.5rem",
          left: "32.2rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />

      <TextField
        type="number"
        sx={{
          position: "fixed",
          top: "10.5rem",
          left: "32.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
        label="Enter Your Balance"
        onChange={(event) => {
          setAccount_Balance(event.target.value);
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your Routing Number"
        onChange={(event) => {
          setAccount_Routing_Number(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "5.5rem",
          left: "32.2rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />

      <TextField
        id="outlined-textarea"
        label="Enter a Nick name"
        onChange={(event) => {
          setAccount_Nickname(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "15.5rem",
          left: "32.2rem",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "500px",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Savings or Checking"
        onChange={(event) => {
          setAccount_Type(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "20.5rem",
          left: "32.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
      />
      <Button
        id="SignUp"
        href="/Purchase"
        variant="contained"
        onClick={addBankAccount}
        sx={{
          backgroundColor: "#66FCF1",
          color: "black",
          position: "fixed",
          left: "32.2rem",
          top: "620px",
          width: "500px",
          height: "50px",
        }}
      >
        Add Account
      </Button>
    </div>
  );
}
export default AddBankAccount;
