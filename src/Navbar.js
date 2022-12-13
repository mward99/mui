import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
// import { slide as Menu } from "react-burger-menu";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar style={{ background: "#2E3B55" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Button href="/Home" color="inherit">
            HOME
          </Button>
          <Button href="/Budget" color="inherit">
            TRANSACTIONS
          </Button>
          <Button href="/Purchase" color="inherit">
            PURCHASE
          </Button>
          <Button href="/SavedItems" color="inherit">
            SAVED ITEMS
          </Button>
          <Button
            href="/Signup"
            style={{
              backgroundColor: "#66FCF1",
              color: "#000000",
              position: "fixed",
              left: "77rem",
            }}
            variant="contained"
          >
            SIGN UP
          </Button>
          <Button
            href="/Login"
            style={{
              backgroundColor: "#66FCF1",
              color: "#000000",
              position: "fixed",
              left: "85rem",
            }}
            variant="contained"
          >
            LOGIN
          </Button>
          <Avatar
            sx={{ position: "fixed", left: "92rem" }}
            src="/broken-image.jpg"
          />
        </Toolbar>
        {/* <Menu>
          <a className="menu-item" href="/about">
            Filter By
          </a>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "white",
                }}
              />
            }
            label="Date"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "white",
                }}
              />
            }
            label="Price"
          />
        </Menu> */}
      </AppBar>
    </Box>
  );
}

export default Navbar;
