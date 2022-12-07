import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Axios from "axios";

function AddTransaction() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");

  const [transactionList, setTransactionList] = useState([]);

  const addTransactions = () => {
    Axios.post("http://localhost:4000/create", {
      amount: amount,
      description: description,
      username: username,
    }).then(() => {
      console.log("success");
    });
  };

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
      <TextField
        type="number"
        sx={{
          position: "fixed",
          top: "17.5rem",
          left: "2.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
        label="Enter Your Amount"
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <TextField
        label="Enter your description"
        sx={{
          position: "fixed",
          top: "25.5rem",
          left: "2.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></TextField>
      <TextField
        sx={{
          position: "fixed",
          top: "10.5rem",
          left: "2.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
        label="Enter Your Name"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={addTransactions}
        sx={{
          backgroundColor: "#66FCF1",
          position: "fixed",
          color: "black",
          left: "9rem",
          top: "500px",
          width: "250px",
        }}
      >
        Add Transaction
      </Button>
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
