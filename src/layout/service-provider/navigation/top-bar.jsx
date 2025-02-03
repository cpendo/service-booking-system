import { useTheme } from "@mui/material/styles";
import { AppBar } from "./styles";
import {
  ChevronLeft,
  ChevronRight,
  Notifications,
  PersonRounded,
  Settings,
  Logout,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  Menu,
  Avatar,
  Divider,
} from "@mui/material";

import PropTypes from "prop-types";
import { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import AvatarImg from "../../../assets/avatar.png";

const TopBar = ({
  open,
  handleDrawerClose,
  handleDrawerOpen,
  handleMobileDrawerToggle,
}) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      icon: <PersonRounded fontSize="small" />,
      text: "Profile",
      action: handleClose,
    },
    {
      icon: <Settings fontSize="small" />,
      text: "Settings",
      action: handleClose,
    },
    { icon: <Logout fontSize="small" />, text: "Log out", action: handleClose },
  ];

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {open ? (
            <IconButton
              color="inherit"
              aria-label="close drawer"
              onClick={handleDrawerClose}
              edge="start"
              sx={{
                marginRight: 5,
                width: 40,
                height: 40,
                display: { xs: "none", md: "block" },
              }}
            >
              {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                width: 40,
                height: 40,
                display: { xs: "none", md: "block" },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Drawer */}
          <IconButton
            color="inherit"
            aria-label="open mobile drawer"
            edge="start"
            onClick={handleMobileDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar
              alt="Avatar Image"
              src={AvatarImg}
              sx={{ width: 35, height: 35, objectFit: "contain" }}
            />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Avatar
                alt="Avatar Image"
                src={AvatarImg}
                sx={{ width: 30, height: 30, mr: 1 }}
              />
              <Typography fontWeight={500}>Username</Typography>
            </MenuItem>

            <Divider />
            {menuItems.map(({ icon, text, action }, index) => (
              <MenuItem key={index} onClick={action}>
                {icon}
                <Typography variant="subtitle1" sx={{ pl: 1 }}>
                  {text}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
  handleDrawerOpen: PropTypes.func,
  handleMobileDrawerToggle: PropTypes.func,
};

export default TopBar;
