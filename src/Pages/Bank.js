
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";


export default function Bank() {
    const [account, setAccount] = useState("")
    const [userName, setUsername] = useState("")
    const [accountInfoList, setAccountInfoList] = useState([{"Bank_Account_Number":0,"Account_Routing_Number":0,"Account_Balance":0,"Account_Nickname":"","Account_Type":"","User_Username":"", "User_ID": -1}])
    const [amount, setAmount] = useState(0.0)

    const getAccountInfo = () => {
      Axios.post("http://localhost:4000/getBankAccountInfo", {
        Username: userName,
        Account_Number: account,
      }).then((response) => {
        if (response.data.length == 1){
          setAccountInfoList(response.data);
        } else {
          setAccountInfoList([{"Bank_Account_Number":0,"Account_Routing_Number":0,"Account_Balance":0,"Account_Nickname":"Error Processing request","Account_Type":"","User_Username":"", "User_ID": -1}])
        }
        console.log(response.data);
      });
    };

    const makeDeposit = () => {
      Axios.post("http://localhost:4000/makeDeposit", {
        Amount: amount,
        Account_Number: account,
        User_ID: accountInfoList[0].User_User_ID,
        Routing_Number: accountInfoList[0].Account_Routing_Number,

      }).then((response) => {
        console.log(response.data);
        getAccountInfo();
      });
    };

    const makeDepositTrans = () => {
      Axios.post("http://localhost:4000/makeDepositTransaction", {
        Amount: amount,
        Account_Number: account,
        User_ID: accountInfoList[0].User_User_ID,
        Routing_Number: accountInfoList[0].Account_Routing_Number,

      }).then((response) => {
        console.log(response.data);
        getAccountInfo();
      });
    };

    function makeDepositFun(){
      makeDeposit()
      makeDepositTrans()
    }

  return (
    <div className="App">
      <h2>Bank Account</h2>
      <div className="ViewOrder">
        <tbody id="TransactionTable">
          <tr id="Test">
            <tb>Account Name: {accountInfoList[0].Account_Nickname}</tb>
            <br></br>
            <br></br>
            <tb>Account Number: {accountInfoList[0].Bank_Account_Number}</tb>
            <br></br>
            <br></br>
            <tb>Routing Number: {accountInfoList[0].Account_Routing_Number}</tb>
            <br></br>
            <br></br>
            <tb>Account Type: {accountInfoList[0].Account_Type}</tb>
            <br></br>
            <br></br>
            <tb>Balance: ${accountInfoList[0].Account_Balance}</tb>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <tb>Make Deposit or Withdraw</tb>
            <br></br>

          </tr>
        </tbody>
        
      </div>
      

    <Button
        id="Account Info"
        variant="contained"
        onClick={getAccountInfo}
        sx={{
          backgroundColor: "#66FCF1",
          color: "black",
          position: "fixed",
          top: "20.5rem",
          left: "35.5rem",
          width: "500px",
          height: "50px",
        }}
      >
        Show account info
    </Button>
    <TextField
        id="outlined-textarea"
        label="Enter your username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "10.5rem",
          left: "35.5rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your account number"
        onChange={(event) => {
          setAccount(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "15.5rem",
          left: "35.5rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter amount to deposit or withdraw"
        onChange={(event) => {
          setAmount(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "35.5rem",
          left: "4.2rem",
          width: "350px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <Button
        id="Make Deposit"
        variant="contained"
        onClick={makeDepositFun}
        sx={{
          backgroundColor: "#66FCF1",
          color: "black",
          position: "fixed",
          top: "35.5rem",
          left: "30.2rem",
          width: "350px",
          height: "55px",
        }}
      >
        Make Deposit/Withdraw
    </Button>
    <Button
        id="SignUp"
        href="/BankTransaction"
        variant="contained"
        sx={{
          backgroundColor: "#66FCF1",
          color: "black",
          position: "fixed",
          top: "35.5rem",
          left: "55.2rem",
          width: "190px",
          height: "55px",
        }}
      >
        View Transactions
      </Button>
    </div>
  );
}
