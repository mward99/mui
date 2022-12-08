import { Button } from "@mui/material";

export default function Sell() {
  return (
    <div className="App">
      <h2
      style={{
        position: "fixed",
        left: "45.2rem",
        top: "5.7rem",
        width: "300px",
        fontSize: "large",
        }}>
          List an item
      </h2>
      <Button
        href=""
        id="PostListing"
        variant="contained"
        sx={{
          position: "fixed",
          left: "32.5rem",
          top: "600px",
          width: "500px",
        }}
      >
        POST LISTING
      </Button>
    </div>
  );
}
