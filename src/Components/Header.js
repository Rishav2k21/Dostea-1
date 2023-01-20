import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  var navlinks = document.getElementById("navlinks");
  const [show, setShow] = useState("false");
  function showmenu() {
    setShow("false");
  }
  function hidemenu() {
    setShow("false");
  }
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (history, path) => {
    if (history === path) return { color: "#800000" };
    else return { color: "#fff" };
  };
  return (
    <>
      <section className="home header" id="home">
        <nav>
          <a href="index.html">
            <img src="images/logo.jpg" alt="logo" />
          </a>
          <a href="index.html" style={{ textDecoration: "none" }}>
            <h1
              style={{ fontSize: "30px", color: " #5C2624" }}
              className="Dostea"
            >
              D
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "lighter",
                  color: "#5C2624",
                }}
              >
                OSTEA<sup>n</sup>
              </span>
            </h1>
          </a>
          {show && (
            <div className="nav-links" id="navlinks">
              <i
                className="fa fa-times"
                onclick={() => {
                  console.log("cross");
                  hidemenu();
                }}
              ></i>
              <ul>
                <li>
                  <Button
                    onClick={() => {
                      navigate("/");
                    }}
                    style={isActive(location.pathname, "/")}
                    variant=""
                    size="small"
                  >
                    <Typography variant="h5" fontSize={"30px"}>
                      Home
                    </Typography>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      navigate("/menu");
                    }}
                    style={isActive(location.pathname, "/menu")}
                    variant=""
                    size="small"
                  >
                    <Typography variant="h5" fontSize={"30px"}>
                      Menu
                    </Typography>
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      navigate("/about");
                    }}
                    style={isActive(location.pathname, "/about")}
                    variant=""
                    size="small"
                  >
                    <Typography variant="h5" fontSize={"30px"}>
                      About us
                    </Typography>
                  </Button>
                </li>
              </ul>
            </div>
          )}
          <i
            className="fa fa-bars"
            style={{ color: " #5C2624" }}
            onClick={() => {
              console.log("bars");
              showmenu();
            }}
          ></i>
        </nav>
      </section>
    </>
  );
}

// export default Header;
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
export default Header;
