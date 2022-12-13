import { Button, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ImageUploading from "react-images-uploading";

export default function Sell() {
  const [Item_Name, setItemName] = useState("");
  const [Item_Price, setItemPrice] = useState("");
  const [Item_Description, setItemDescription] = useState("");
  const [Item_Listed_Date, setItemListDate] = useState("");
  const [Category_Category_ID, setItemCategory] = useState("");
  const [Brand_Brand_ID, setItemBrand] = useState("");
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const createListing = () => {
    Axios.post("http://localhost:4000/Sell", {
      Item_Name: Item_Name,
      Item_Price: Item_Price,
      Item_Description: Item_Description,
      Item_Listed_Date: Item_Listed_Date,
      Category_Category_ID: Category_Category_ID,
      Brand_Brand_ID: Brand_Brand_ID,
    }).then(() => {
      console.log("Success");
    });
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <h2
        style={{
          position: "fixed",
          left: "45.2rem",
          top: "5.7rem",
          width: "300px",
          fontSize: "large",
        }}
      >
        List an item
      </h2>
      <TextField
        id="itemName"
        label="Enter the name of the item"
        onChange={(event) => {
          setItemName(event.target.value);
          var date = new Date();
          var dd = String(date.getDate()).padStart(2, "0");
          var mm = String(date.getMonth() + 1).padStart(2, "0");
          var yyyy = date.getFullYear();
          date = mm + "/" + dd + "/" + yyyy;
          setItemListDate(date);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "10.5rem",
          left: "10.5rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <TextField
        id="itemPrice"
        label="Enter the Price of the item"
        onChange={(event) => {
          setItemPrice(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "10.5rem",
          left: "50.5rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <TextField
        id="itemDescription"
        label="Enter a brief description of the item"
        onChange={(event) => {
          setItemDescription(event.target.value);
        }}
        placeholder=""
        multiline
        sx={{
          position: "fixed",
          top: "17.5rem",
          left: "10.5rem",
          width: "500px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: "white",
        }}
      />
      <Select
        onChange={(event) => {
          switch (event.target.textContent) {
            case "TV":
              setItemCategory(1);
              break;
            case "Console":
              setItemCategory(2);
              break;
            case "Phone":
              setItemCategory(3);
              break;
            case "Laptop":
              setItemCategory(4);
              break;
            case "Printer":
              setItemCategory(5);
              break;
            case "Headphones":
              setItemCategory(6);
              break;
            case "Charger":
              setItemCategory(7);
              break;
            case "PC":
              setItemCategory(8);
              break;
            case "Monitor":
              setItemCategory(9);
              break;
            case "Mouse":
              setItemCategory(10);
              break;
            case "Keyboard":
              setItemCategory(11);
              break;
          }
        }}
        sx={{
          position: "fixed",
          top: "14.5rem",
          left: "50.5rem",
          width: "500px",
          backgroundColor: "white",
        }}
        defaultValue="Item Category"
      >
        <Option value="TV">TV</Option>
        <Option value="Console">Console</Option>
        <Option value="Phone">Phone</Option>
        <Option value="Laptop">Laptop</Option>
        <Option value="Printer">Printer</Option>
        <Option value="Headphones">Headphones</Option>
        <Option value="Charger">Charger</Option>
        <Option value="PC">PC</Option>
        <Option value="Monitor">Monitor</Option>
        <Option value="Mouse">Mouse</Option>
        <Option value="Keyboard">Keyboard</Option>
      </Select>

      <Select
        onChange={(event) => {
          switch (event.target.textContent) {
            case "Samsung":
              setItemBrand(1);
              break;
            case "Sony":
              setItemBrand(2);
              break;
            case "Microsoft":
              setItemBrand(3);
              break;
            case "Lenovo":
              setItemBrand(4);
              break;
            case "Asus":
              setItemBrand(5);
              break;
            case "Roku":
              setItemBrand(6);
              break;
            case "HP":
              setItemBrand(7);
              break;
            case "Apple":
              setItemBrand(8);
              break;
            case "LG":
              setItemBrand(9);
              break;
            case "Google":
              setItemBrand(10);
              break;
          }
        }}
        sx={{
          position: "fixed",
          top: "17.5rem",
          left: "50.5rem",
          width: "500px",
          backgroundColor: "white",
        }}
        defaultValue="Item Brand"
      >
        <Option value="Samsung">Samsung</Option>
        <Option value="Sony">Sony</Option>
        <Option value="Microsoft">Microsoft</Option>
        <Option value="Lenovo">Lenovo</Option>
        <Option value="Asus">Asus</Option>
        <Option value="Roku">Roku</Option>
        <Option value="HP">HP</Option>
        <Option value="Apple">Apple</Option>
        <Option value="LG">LG</Option>
        <Option value="Google">Google</Option>
      </Select>

      <div className="Sell">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>

      <Button
        href="/Listings"
        id="Sell"
        variant="contained"
        onClick={createListing}
        sx={{
          position: "fixed",
          left: "32.5rem",
          top: "650px",
          width: "500px",
        }}
      >
        POST LISTING
      </Button>
    </div>
  );
}
