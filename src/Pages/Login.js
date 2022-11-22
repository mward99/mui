// import { Button, TextField } from "@mui/material";

// import Axios from "axios";

// function CreateLogin() {
//   const [Brand_ID, setBrand_ID] = useState("");
//   const [Brand_Name, setBrand_Name] = useState("");

//   const submitPost = () => {
//     Axios.post("http://localhost:8080/api/create", {
//       User_Email: User_Email,
//       User_Password: User_Password,
//     });

//     function Login() {
//       return (
//         <div className="App">
//           <h2>App Name</h2>
//           <h2
//             style={{
//               position: "fixed",
//               left: "72.2rem",
//               top: "5.7rem",
//               width: "300px",
//               fontSize: "large",
//             }}
//           >
//             Don't have an account?
//           </h2>
//           <Button
//             id="Login"
//             href="/Signup"
//             variant="contained"
//             sx={{
//               backgroundColor: "#66FCF1",
//               color: "black",
//               position: "fixed",
//               left: "85.2rem",
//               top: "100px",
//               width: "100px",
//               height: "30px",
//             }}
//           >
//             Signup
//           </Button>
//           <Button
//             onClick={submitPost}
//             href="/Home"
//             id="StartBudgeting"
//             variant="contained"
//             sx={{
//               position: "fixed",
//               left: "40rem",
//               top: "600px",
//               width: "250px",
//             }}
//           >
//             LOGIN
//           </Button>
//           <TextField
//             id="outlined-textarea"
//             label="Enter Your Username"
//             placeholder=""
//             multiline
//             onChange={(e) => {
//               setUser_Email(e.target.value);
//             }}
//             sx={{
//               position: "fixed",
//               top: "12.5rem",
//               left: "32.2rem",
//               borderRadius: "10px",
//               backgroundColor: "white",
//               width: "500px",
//             }}
//           />
//           <TextField
//             id="outlined-textarea"
//             label="Enter Your Password"
//             placeholder=""
//             multiline
//             onChange={(e) => {
//               setUser_Password(e.target.value);
//             }}
//             sx={{
//               position: "fixed",
//               top: "22.5rem",
//               left: "32.2rem",
//               borderRadius: "10px",
//               backgroundColor: "white",
//               width: "500px",
//             }}
//           />
//         </div>
//       );

import React, { useState } from "react";
import Axios from "axios";
import { Button, TextField } from "@mui/material";

export default function Login() {
  const [User_Email, setUser_Email] = useState("");
  const [User_Password, setUser_Password] = useState("");

  const submitPost = () => {
    Axios.post("http://localhost:8080/api/create", {
      User_Email: User_Email,
      User_Password: User_Password,
    });
  };

  return (
    <div className="App">
      <TextField
        sx={{
          position: "fixed",
          top: "12.5rem",
          left: "32.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
        label="Enter Your Username"
        onChange={(e) => {
          setUser_Email(e.target.value);
        }}
      />

      <TextField
        label="Enter Your Password"
        sx={{
          position: "fixed",
          top: "22.5rem",
          left: "32.2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
        }}
        onChange={(e) => {
          setUser_Password(e.target.value);
        }}
      ></TextField>
      <Button
        variant="contained"
        onClick={submitPost}
        sx={{
          backgroundColor: "#66FCF1",
          position: "fixed",
          color: "black",
          left: "40rem",
          top: "600px",
          width: "250px",
        }}
      >
        Submit Post
      </Button>
    </div>
  );
}
