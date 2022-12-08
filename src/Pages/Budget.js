import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Axios from "axios";

function AddTransaction() {
  const [transactionList, setTransactionList] = useState([]);

  const getTransactions = () => {
    Axios.get("http://localhost:4000/transactions").then((response) => {
      setTransactionList(response.data);
    });
  };

  const deleteTransaction = (id) => {
    Axios.delete(`http://localhost:4000/delete/${id}`).then((response) => {
      setTransactionList(
        transactionList.filter((val) => {
          return val.id != id;
        })
      );
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
        <h2>Add your Transaction</h2>
        <tbody id="TransactionTable">
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th></th>
          </tr>

          {transactionList.map((val, key) => (
            <tr key={key}>
              <td>{val.username}</td>
              <td>{val.amount}</td>
              <td>{val.description}</td>

              <Button
                onClick={() => {
                  deleteTransaction(val.id);
                }}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </div>
      );
    </div>
  );
}
export default AddTransaction;
