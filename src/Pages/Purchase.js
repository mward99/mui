import { Button, TextField } from "@mui/material";
export default function Purchae() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/Tv's"> Tv's </a>
          </li>
          <li>
            <a href="/Consoles"> Consoles</a>
          </li>
          <li>
            <a href="/Phones"> Phones </a>
          </li>
          <li>
            <a href="/Laptops"> Laptops </a>
          </li>
          <li>
            <a href="/Printers"> Printers </a>
          </li>
          <li>
            <a href="/Headphones"> Headphones </a>
          </li>
          <li>
            <a href="/Chargers"> Chargers </a>
          </li>
          <li>
            <a href="/Laptops"> PC's </a>
          </li>
          <li>
            <a href="/Monitors"> Monitors </a>
          </li>
          <li>
            <a href="/Mouses"> Mouse's </a>
          </li>
          <li>
            <a href="/KeyBoards"> Keyboards </a>
          </li>
        </ul>
      </nav>
      <TextField
        id="outlined-textarea"
        label="Search"
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "7.5rem",
          left: "1.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "200px",
        }}
      />
      <TextField
        id="outlined-textarea"
        label="Select"
        select
        multiline
        sx={{
          position: "fixed",
          top: "7.5rem",
          left: "15.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          width: "200px",
        }}
      />
      <Button
        id="StartBudgeting"
        sx={{
          position: "fixed",
          right: "2.5rem",
          color: "Black",
          top: "8.5rem",
          width: "100px",
        }}
      >
        View All
      </Button>
    </div>
  );
}
