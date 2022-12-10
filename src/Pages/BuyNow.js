import { Button } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";

function BuyNow() {
  const [TrackingInfo, setTrackingInfo] = useState([]);
  const [Tracking_Number] = useState(0);
  const [Purchase_Date] = useState(0);

  const getTracking = () => {
    Axios.get("http://localhost:4000/purchase", {
      Tracking_Number: Tracking_Number,
      Purchase_Date: Purchase_Date,
    }).then((response) => {
      setTrackingInfo(response.data);
    });
  };
  window.onload = getTracking;

  return (
    <div className="App">
      <h2>Your order has been completed!</h2>
      <div className="ViewOrder">
        <tbody id="TransactionTable">
          {TrackingInfo.map((val, key) => (
            <tr>
              <th>Tracking Number: {val.Tracking_Number}</th>
              <br></br>
              <th>Date of Purchase: {val.Purchase_Date}</th>
              <br></br>
            </tr>
          ))}
        </tbody>
      </div>

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
        Continue Shopping
      </Button>
    </div>
  );
}
export default BuyNow;
