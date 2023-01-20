import * as React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
const pages = [{heading:"Home",nav:'/'}, {heading:"Menu",nav:'/menu'}, {heading:"About Us",nav:'/about'}, {heading:"Contact Us",nav:'#footer'}];

function ResponsiveAppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const isActive = (history, path) => {
    if (history === path) return { color: "#800000" };
    else return { color: "#fff" };
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#6F4E37" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            width={50}
            sx={{ height: "2rem" }}
            src="images/logo.jpg"
            alt="logo"
          />
          <Typography
            pl={2}
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dostean
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                {page.heading!=='Contact Us'?
                  <Button
                    onClick={() => {
                      navigate(page.nav);
                    }}
                    style={{color:isActive(location.pathname, page.nav).color==='#fff'?'black':'#800000'}}
                  >
                    <Typography>{page.heading}</Typography>
                  </Button>:<a href="#footer" style={{textDecoration:'none'}}><Button sx={{ my: 2, color: "black", display: "block" }}>Contact Us</Button></a>}
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h1"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontSize: 30,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dostean
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
           page.heading!=='Contact Us'?
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.nav);
                }}
                style={isActive(location.pathname, page.nav)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
               <Typography variant="h5">{page.heading}</Typography> 
              </Button>:<a href="#footer" style={{textDecoration:'none'}}><Button sx={{ my: 2, color: "white", display: "block" }}><Typography variant="h5">Contact Us</Typography> </Button></a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
