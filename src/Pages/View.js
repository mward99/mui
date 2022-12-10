import { Button } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";

function View() {
  const [itemList, setItemList] = useState([]);
  const [Item_Name] = useState("");
  const [Item_Description] = useState("");
  const [Item_Price] = useState(0);
  const [Item_Image] = useState();

  const getItems = () => {
    Axios.get("http://localhost:4000/item", {
      Item_Name: Item_Name,
      Item_Description: Item_Description,
      Item_Price: Item_Price,
      Item_Image: Item_Image,
    }).then((response) => {
      setItemList(response.data);
    });
  };
  const buyItem = () => {
    Axios.post("http://localhost:4000/shipping", {}).then(() => {
      console.log("success");
    });
  };

  window.onload = getItems;

  return (
    <div className="App">
      <h2>Your Order</h2>
      <div className="ViewOrder">
        <tbody id="TransactionTable">
          {itemList.map((val, key, img) => (
            <tr>
              <th>Name: {val.Item_Name}</th>
              <br></br>
              <th>Amount: {val.Item_Price}</th>
              <br></br>
              <th>Description: {val.Item_Description}</th>
              <br></br>
              <th>
                <img id="Tv1View" src="./Images/Tv1.jpg"></img>
              </th>
              <br></br>
            </tr>
          ))}
        </tbody>
      </div>

      <Button
        href="/BuyNow"
        onClick={buyItem}
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
        Buy Now
      </Button>
    </div>
  );
}

export default View;
