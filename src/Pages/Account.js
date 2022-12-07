import { Button } from "@mui/material";

export default function Account() {
  return (
    <div className="App">
      <h2>Choose to Add or Create Account</h2>

      <Button
        href="/CreateBankAccount"
        id="StartBudgeting"
        variant="contained"
        sx={{
          position: "fixed",
          left: "50.5rem",
          backgroundColor: "#66FCF1",
          color: "#000000",
          top: "200px",
          width: "500px",
        }}
      >
        Create Bank Account
      </Button>
      <Button
        href="/AddBankAccount"
        id="StartBudgeting"
        variant="contained"
        sx={{
          position: "fixed",
          left: "10.5rem",
          backgroundColor: "#66FCF1",
          color: "#000000",
          top: "200px",
          width: "500px",
        }}
      >
        Add Bank Account
      </Button>
    </div>
  );
}
