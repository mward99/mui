import { Button } from "@mui/material";

export default function Budget() {
  return (
    <div className="App">
      <h2>App Name</h2>
      <p>Test</p>
      <h2 id="Secondheader">What you will get with UBudget</h2>
      <p id="Secondp">Test</p>
      <Button
        href="/AddTransaction"
        id="StartBudgeting"
        variant="contained"
        sx={{
          position: "fixed",
          left: "3.5rem",
          top: "600px",
          width: "500px",
        }}
      >
        START BUDGETING
      </Button>
    </div>
  );
}
