
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

function App() {
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

          <Button color="inherit">HOME</Button>
          <Button color="inherit">BUDGET</Button>
          <Button color="inherit">PURCHASE</Button>
          <Button color="inherit">SELL</Button>
          <Button
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
      </AppBar>
    </Box>
  );
}

export default App;
