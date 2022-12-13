import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";

function Listings(){
  const [listings, setListings] = useState([]);
  const [Item_Name] = useState("");
  const [Item_Price] = useState("");
  const [Item_Description] = useState("");

  const getListings = () => {
    Axios.get("http://localhost:4000/Listings", {
      Item_Name: Item_Name,
      Item_Price: Item_Price,
      Item_Description: Item_Description
    }).then((response) => {
      setListings(response.data);
    });
  };

  return (
    <div className="App">
      <Button
        variant="contained"
        onClick={getListings}
        sx={{
          backgroundColor: "#66FCF1",
          position: "fixed",
          color: "black",
          left: "47rem",
          top: "100px",
          width: "250px",
        }}
      >
        Show Listings
      </Button>
      return (
      <div>
        <h2>View your listings</h2>
        <table>
        <tbody id="ListingTable">
          {listings.map((val, key) => (
            <tr key={key}>
              <td>Item Name: {val.Item_Name}</td>
              <td>Item Price:{val.Item_Price}</td>
              <td>Item Description: {val.Item_Description}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      );
    </div>
  );
    
}
export default Listings;