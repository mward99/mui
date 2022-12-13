import { Button, TextField } from "@mui/material";

function CreateBankAccount() {
  return (
    <div className="App">
      <TextField
        id="outlined-textarea"
        label="Enter your ID Number"
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
        label="Enter your SSN"
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

      <Button
        id="SignUp"
        href="/Signup"
        variant="contained"
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
        Create Account
      </Button>
    </div>
  );
}
export default CreateBankAccount;
