import { Button } from "@mui/material";

export default function BuyNow() {
  return (
    <div className="App">
      <h2>Your order has been purchased!</h2>
      <div className="ViewOrder">
        <tbody id="TransactionTable">
          <tr>
            <th>Name:</th>
            <br></br>
            <th>Amount:</th>
            <br></br>
            <th>Ship to:</th>
            <br></br>
            <th>Tax:</th>
            <br></br>
            <th>Total:</th>
          </tr>
        </tbody>
      </div>

      <img src="./Images/pic.png"></img>

      <Button
        href="/Purchase"
        id="StartBudgeting"
        variant="contained"
        sx={{
          position: "fixed",
          backgroundColor: "#66FCF1",
          color: "#000000",
          left: "3.5rem",
          top: "600px",
          width: "500px",
        }}
      >
        Coninue Shopping
      </Button>
    </div>
  );
}
