import { Button, TextField } from "@mui/material";

export default function Signup() {
  return (
    <div className="App">
      <h2>App Name</h2>
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
        label="Enter your email"
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
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "10.5rem",
          left: "10.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "500px",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Create a password"
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

      <TextField
        id="outlined-textarea"
        label="Confirm password"
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
        label="Enter your address"
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
        label="Enter your City"
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
        label="Enter your State"
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "15.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          left: "50.5rem",
          width: "500px",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter your Zip Code"
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          color: "white",
          fontColor: "black",
          backgroundColor: "white",
          borderRadius: "10px",
          top: "10.5rem",
          left: "50.5rem",
          width: "500px",
        }}
      />
      <Button
        id="SignUp"
        variant="contained"
        href="/Home"
        sx={{
          backgroundColor: "#66FCF1",
          color: "black",
          position: "fixed",
          left: "32.2rem",
          top: "520px",
          width: "500px",
          height: "50px",
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}
