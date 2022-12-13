import { Button, TextField } from "@mui/material";
import Axios from "axios";
import React, { useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

function SignUp() {
  const [User_Username, setUserUsername] = useState("");
  const [User_Email, setUserEmail] = useState("");
  const [User_Password, setUserPassword] = useState("");
  const [User_Zip, setUserZip] = useState(0);
  const [User_State, setUserState] = useState("");
  const [User_City, setUserCity] = useState("");
  const [User_Street_Address, setUserStreetAddress] = useState("");
  const [User_FName, setUserFName] = useState("");
  const [User_LName, setUserLName] = useState("");
  const [User_Type, setUserType] = useState("");

  const addInfo = () => {
    Axios.post("http://localhost:4000/signup", {
      User_Type: User_Type,
      User_Password: User_Password,
      User_Username: User_Username,
      User_FName: User_FName,
      User_LName: User_LName,
      User_Email: User_Email,
      User_Street_Address: User_Street_Address,
      User_City: User_City,
      User_Zip: User_Zip,
      User_State: User_State,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <h2
        style={{
          position: "fixed",
          left: "72.2rem",
          top: "5.7rem",
          width: "300px",
          fontSize: "large",
        }}
      >
        Already have an account?
      </h2>
      <Button
        id="Login"
        href="/Login"
        variant="contained"
        sx={{
          backgroundColor: "#66FCF1",
          color: "black",
          position: "fixed",
          left: "85.2rem",
          top: "100px",
          width: "100px",
          height: "30px",
        }}
      >
        Login
      </Button>
      <TextField
        id="outlined-textarea"
        label="Enter your First name"
        onChange={(event) => {
          setUserFName(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "10.5rem",
          left: "10.5rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your Last name"
        onChange={(event) => {
          setUserLName(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "15.5rem",
          left: "10.5rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your username"
        onChange={(event) => {
          setUserUsername(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "20.5rem",
          left: "10.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "500px",
        }}
      />

      <TextField
        id="outlined-textarea"
        label="Enter your email"
        onChange={(event) => {
          setUserEmail(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "30.5rem",
          left: "10.5rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />

      <TextField
        id="outlined-textarea"
        label="Create a password"
        onChange={(event) => {
          setUserPassword(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "25.5rem",
          left: "10.5rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
      />
      {/* <h3 id="BorS">Select Buyer or Seller</h3>
      <FormGroup sx={{ position: "fixed", top: "11rem", right: "25.5rem" }}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => {
                setUserType(event.target.value);
              }}
            />
          }
          label="Buyer"
        />
      </FormGroup>
      <FormGroup sx={{ position: "fixed", top: "11rem", right: "20.5rem" }}>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => {
                setUserType(event.target.value);
              }}
            />
          }
          label="Seller"
        />
      </FormGroup> */}

      <Select
        onChange={(event) => {
          setUserType(event.target.value);
        }}
        sx={{
          position: "fixed",
          top: "10.5rem",
          left: "50.5rem",
          width: "500px",
          backgroundColor: "white",
        }}
        defaultValue="Account Type"
      >
        <Option value="Buyer">Buyer</Option>
        <Option value="Seller">Seller</Option>
        <Option value="Both">Both</Option>
      </Select>
      <TextField
        id="outlined-textarea"
        label="Enter your address"
        onChange={(event) => {
          setUserStreetAddress(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "30.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          left: "50.5rem",
          width: "500px",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your City"
        onChange={(event) => {
          setUserCity(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "25.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          left: "50.5rem",
          width: "500px",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your State"
        onChange={(event) => {
          setUserState(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "20.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          left: "50.5rem",
          width: "500px",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your Zip Code"
        onChange={(event) => {
          setUserZip(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          color: "white",
          fontColor: "black",
          backgroundColor: "white",
          borderRadius: "10px",
          top: "15.5rem",
          left: "50.5rem",
          width: "500px",
        }}
      />
      <Button
        id="SignUp"
        href="/Purchase"
        variant="contained"
        onClick={addInfo}
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
        Sign Up
      </Button>
    </div>
  );
}
export default SignUp;
