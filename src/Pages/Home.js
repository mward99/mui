import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="App">
      <h2>Bank Shopper</h2>
      <img src="./Images/pic.png"></img>
      <p>
        The goal of the application is to combine banking and ecommerce into one
        platform for individual sellers and buyers. This application will
        provide a banking software where users create a bank account and are
        able to buy and sell electronics without having their banking
        information spread across multiple websites. Only private individuals
        will create listings to sell. A user can purchase an item through a bank
        account made on the platform or an outside bank. A database is essential
        for this application because it will store a wide variety of data
        pertaining to bank account information, user data, sale information, and
        inventory.
      </p>

      <Button
        href="/Account"
        id="StartBudgeting"
        variant="contained"
        sx={{
          position: "fixed",
          left: "10.5rem",
          backgroundColor: "#66FCF1",
          color: "#000000",
          top: "600px",
          width: "500px",
        }}
      >
        START HERE
      </Button>
    </div>
  );
}
