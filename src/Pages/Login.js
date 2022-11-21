import { Button, TextField } from "@mui/material";
export default function Login() {
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
        Don't have an account?
      </h2>
      <Button
        id="Login"
        href="/Signup"
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
        Signup
      </Button>
      <Button
        href="/Home"
        id="StartBudgeting"
        variant="contained"
        sx={{
          position: "fixed",
          left: "40rem",
          top: "600px",
          width: "250px",
        }}
      >
        LOGIN
      </Button>
      <TextField
        id="outlined-textarea"
        label="Enter Your Username"
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "12.5rem",
          left: "32.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Enter Your Password"
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "22.5rem",
          left: "32.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
      />
    </div>
  );
}
