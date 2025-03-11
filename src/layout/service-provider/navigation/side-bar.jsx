import { drawerWidth, Drawer, DrawerHeader, MobileDrawer } from "./styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoImg from "../../../assets/logo.png";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Collapse,
  MenuItem,
  Menu,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import PaymentsIcon from "@mui/icons-material/Payments";
import PostAddIcon from "@mui/icons-material/PostAdd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const menuItems = [
  { icon: <DashboardIcon />, text: "Dashboard" },
  { icon: <CalendarMonthIcon />, text: "Bookings" },
  {
    icon: <WorkIcon />,
    text: "Services",
    children: [
      { icon: <PostAddIcon />, text: "Add services" },
      { icon: <NoteAltIcon />, text: "Manage services" },
    ],
  },
  { icon: <GroupIcon />, text: "Clients" },
  { icon: <PaymentsIcon />, text: "Payments" },
];

const SideBar = ({ open, mobileOpen, handleMobileDrawerToggle }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Toggle open state for nested items
  const handleExpandClick = (text, event) => {
    setExpandedItems((prev) => {
      const isExpanding = !prev[text];

      // Set anchorEl only if opening the menu
      if (isExpanding) {
        setAnchorEl(event.currentTarget);
      } else {
        setAnchorEl(null);
      }

      return { ...prev, [text]: isExpanding };
    });
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!open && !mobileOpen) {
      setAnchorEl(null);
    }
  }, [open, mobileOpen]);

  const drawer = (
    <div>
      <DrawerHeader>
        <img
          src={LogoImg}
          alt=""
          style={{ width: "40px", height: "30px", objectFit: "contain" }}
        />
        {/* */}
        {open && (
          <Typography sx={{ pl: 1 }} fontWeight={700} variant="h6">
            Service Hub
          </Typography>
        )}
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map(({ icon, text, children }, index) => (
          <div key={index}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={(e) => children && handleExpandClick(text, e)}
                sx={[
                  { minHeight: 48, px: 2.5 },
                  open || mobileOpen
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open || mobileOpen
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open || mobileOpen
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
                {children &&
                  (open || mobileOpen) &&
                  (expandedItems[text] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>

            {/* Nested List */}
            {children && (open || mobileOpen) ? ( // Only collapse when menu is open
              <Collapse in={expandedItems[text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {children.map(({ icon, text }, childIndex) => (
                    <ListItem
                      key={childIndex}
                      disablePadding
                      sx={{ pl: open ? 4 : 2 }}
                    >
                      <ListItemButton sx={{ minHeight: 40 }}>
                        <ListItemIcon
                          sx={{ minWidth: 0, justifyContent: "center", mr: 2 }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            ) : (
              expandedItems[text] && (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {children.map(({ icon, text }, index) => (
                    <MenuItem
                      key={index}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {icon}
                      <Typography variant="subtitle1" sx={{ pl: 1 }}>
                        {text}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              )
            )}
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      //sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
        }}
        open={open}
      >
        {drawer}
      </Drawer>

      {/* Mobile */}
      <MobileDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleMobileDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: {
            xs: "block",
            md: "none",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          },
        }}
      >
        {drawer}
      </MobileDrawer>
    </Box>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool,
  mobileOpen: PropTypes.bool,
  handleMobileDrawerToggle: PropTypes.func,
};

export default SideBar;
