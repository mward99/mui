
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";



export default function Bank() {    

    const [transactionList, setTransactionList] = useState([]);
    const [Bank_Account_Bank_Account_Number, setAccountNum] = useState(0);
    const [Bank_Account_Account_Routing_Number, setRoutingNum] = useState(0);
    const [Bank_Account_User_User_ID, setUserID] = useState(0);
    const [Transaction_Amount, setTransAmount] = useState(0);
    const [Transaction_Description, setTransDesc] = useState("");
    const [userName, setUsername] = useState("")

    const getUserTransactions = () => {
      Axios.post("http://localhost:4000/getTransactions", {
        User_ID: Bank_Account_User_User_ID,
        accNum: Bank_Account_Bank_Account_Number,
      }).then((response) => {
        setTransactionList(response.data);
      });
    };

    const getUserID = () => {
      Axios.post("http://localhost:4000/getUserID", {
        Username: userName,
        Account_Number: Bank_Account_Bank_Account_Number,
      }).then((response) => {
        
          setUserID(response.data[0].User_ID);
        
        console.log(response.data[0].User_ID);
      });
    };

    function loadTrans(){
      getUserID()
      getUserTransactions()
    }

  return (
    <div className="App">
      return (
      <div>
        <h2>View your Transactions</h2>

        <table id="TransactionsTable">
          <thead>
            <tr>
              <th>Transaction Number</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactionList.map((val, key) => (
              <tr key={key}>
                <td>{val.Transaction_Num}</td>
                <td>{val.Transaction_Amount}</td>
                <td>{val.Transaction_Description}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
      <Button
        id="Account Info"
        variant="contained"
        onClick={loadTrans}
        sx={{
          backgroundColor: "#66FCF1",
          color: "black",
          position: "fixed",
          top: "20.5rem",
          left: "78.5rem",
          width: "200px",
          height: "50px",
        }}
      >
        LOAD TRANSACTIONS
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
          left: "78.5rem",
          width: "200px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your account Number"
        onChange={(event) => {
          setAccountNum(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "15.5rem",
          left: "78.5rem",
          width: "200px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
    </div>
  );
}

