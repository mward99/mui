import React, { useState } from "react";
import Axios from "axios";
import { Button } from "@mui/material";

function Listings() {
  const [listings, setListings] = useState([]);
  const [Item_Name] = useState("");
  const [Item_Price] = useState("");
  const [Item_Description] = useState("");

  const getListings = () => {
    Axios.get("http://localhost:4000/Listings", {
      Item_Name: Item_Name,
      Item_Price: Item_Price,
      Item_Description: Item_Description,
    }).then((response) => {
      setListings(response.data);
    });
  };

  const deleteTransaction = (Item_Name) => {
    Axios.delete(`http://localhost:4000/delete/${Item_Name}`).then(
      (response) => {
        setListings(
          listings.filter((val) => {
            return val.Item_Name != Item_Name;
          })
        );
      }
    );
  };
  window.onload = getListings;

  return (
    <div className="App">
      return (
      <div>
        <h2>View your listings</h2>

        <table id="ListingTable">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Description</th>
              <th>Delte Items</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((val, key) => (
              <tr key={key}>
                <p>{val.Item_Name}</p>
                <td>{val.Item_Price}</td>
                <td>{val.Item_Description}</td>

                <td>
                  <Button
                    onClick={() => {
                      deleteTransaction(val.Item_Name);
                    }}
                  >
                    Delete
                  </Button>
                </td>
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
