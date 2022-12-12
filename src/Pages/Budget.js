import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Axios from "axios";

function AddTransaction() {
  const [transactionList, setTransactionList] = useState([]);
  const [Bank_Account_Bank_Account_Number] = useState(0);
  const [Bank_Account_Account_Routing_Number] = useState(0);
  const [Bank_Account_User_User_ID] = useState(0);
  const [Transaction_Amount] = useState(0);
  const [Transaction_Description] = useState("");

  const getTransactions = () => {
    Axios.get("http://localhost:4000/transaction", {
      Bank_Account_Bank_Account_Number: Bank_Account_Bank_Account_Number,
      Bank_Account_Account_Routing_Number: Bank_Account_Account_Routing_Number,
      Bank_Account_User_User_ID: Bank_Account_User_User_ID,
      Transaction_Amount: Transaction_Amount,
      Transaction_Description: Transaction_Description,
    }).then((response) => {
      setTransactionList(response.data);
    });
  };

  return (
    <div className="App">
      <Button
        variant="contained"
        onClick={getTransactions}
        sx={{
          backgroundColor: "#66FCF1",
          position: "fixed",
          color: "black",
          left: "47rem",
          top: "100px",
          width: "250px",
        }}
      >
        Show Transaction
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#66FCF1",
          position: "fixed",
          color: "black",
          left: "77rem",
          top: "100px",
          width: "250px",
        }}
      >
        Export
      </Button>
      return (
      <div>
        <h2>View your transactions</h2>
        <tbody id="TransactionTable">
          {transactionList.map((val, key) => (
            <tr key={key}>
              <td>
                Bank Account Number: {val.Bank_Account_Bank_Account_Number}
              </td>
              <td>Routing Number:{val.Bank_Account_Account_Routing_Number}</td>
              <td>Transaction Amount: {val.Transaction_Amount}</td>
              <td>Item Purchased: {val.Transaction_Description}</td>
            </tr>
          ))}
        </tbody>
      </div>
      );
    </div>
  );
}
export default AddTransaction;
