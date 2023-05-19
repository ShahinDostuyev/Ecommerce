import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Products", "Basket"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "purple",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Ecommerce
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="Products"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Products
              </Link>
            </Button>
            <Button
              key="Basket"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/basket"
                style={{ textDecoration: "none", color: "white" }}
              >
                Basket ({0})
              </Link>
            </Button>
          </Box>
          <Box sx={{display:"flex"}}>
            <Button
              key="Login"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </Button>
            <Button
                key="Register"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to="/register" style={{textDecoration:"none",color:"white"}}>Register</Link>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
