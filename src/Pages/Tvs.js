import { Button, TextField } from "@mui/material";

export default function Tvs() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/Tvs"> Tv's </a>
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

      <table>
        <tr>
          <td>
            <img id="Tv1" src="./Images/Tv1.jpg"></img>
          </td>
          <td>
            <img id="Tv2" src="./Images/TV2.jpg"></img>
          </td>
          <td>
            <img id="Tv3" src="./Images/Tv3.jpg"></img>
          </td>
          <td>
            <img id="Tv4" src="./Images/Tv4.jpg"></img>
          </td>
          <td>
            <img id="Tv5" src="./Images/Tv5.jpg"></img>
          </td>
          <td>
            <img id="Tv6" src="./Images/Tv6.jpg"></img>
          </td>
        </tr>
      </table>
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
        href="/View"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "1.5rem",
          bottom: "300px",
          width: "2%",
        }}
        variant="contained"
      >
        View
      </Button>
      <Button
        href="/View"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "6.5rem",
          bottom: "300px",
          width: "10%",
        }}
        variant="contained"
      >
        Add to Cart
      </Button>
      <Button
        href="/View"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "1.5rem",
          bottom: "20px",
          width: "2%",
        }}
        variant="contained"
      >
        View
      </Button>
      <Button
        href="/View"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "6.5rem",
          bottom: "20px",
          width: "10%",
        }}
        variant="contained"
      >
        Add to Cart
      </Button>

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
      <Button
        href="/Signup"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "25.5rem",
          bottom: "300px",
          width: "10%",
        }}
        variant="contained"
      >
        Add to Cart
      </Button>
      <Button
        href="/View"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "20.5rem",
          bottom: "300px",
          width: "2%",
        }}
        variant="contained"
      >
        View
      </Button>
      <Button
        href="/Signup"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "25.5rem",
          bottom: "20px",
          width: "10%",
        }}
        variant="contained"
      >
        Add to Cart
      </Button>
      <Button
        href="/View"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "20.5rem",
          bottom: "20px",
          width: "2%",
        }}
        variant="contained"
      >
        View
      </Button>
      <Button
        href="/Signup"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "45.5rem",
          bottom: "20px",
          width: "10%",
        }}
        variant="contained"
      >
        Add to Cart
      </Button>
      <Button
        href="/View"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "40.5rem",
          bottom: "20px",
          width: "2%",
        }}
        variant="contained"
      >
        View
      </Button>
      <Button
        href="/Signup"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "45.5rem",
          bottom: "300px",
          width: "10%",
        }}
        variant="contained"
      >
        Add to Cart
      </Button>
      <Button
        href="/View"
        style={{
          backgroundColor: "#66FCF1",
          color: "#000000",
          position: "fixed",
          left: "40.5rem",
          bottom: "300px",
          width: "2%",
        }}
        variant="contained"
      >
        View
      </Button>
    </div>
  );
}
