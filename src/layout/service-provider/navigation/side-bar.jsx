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
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import PaymentsIcon from "@mui/icons-material/Payments";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: <DashboardIcon />, text: "Dashboard", route: "dashboard" },
  { icon: <CalendarMonthIcon />, text: "Appointments", route: "appointments" },
  {
    icon: <WorkIcon />,
    text: "Services",
    route: "services",
    // children: [
    //   {
    //     icon: <PostAddIcon />,
    //     text: "Add services",
    //     route: "services/add-services",
    //   },
    //   {
    //     icon: <NoteAltIcon />,
    //     text: "Manage services",
    //     route: "services/manage-services",
    //   },
    // ],
  },
  { icon: <GroupIcon />, text: "Clients", route: "clients" },
  { icon: <PaymentsIcon />, text: "Payments", route: "payments" },
];

const SideBar = ({ open, mobileOpen, handleMobileDrawerToggle }) => {
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
        {menuItems.map(({ icon, text, route }, index) => (
          <div key={index}>
            <ListItem disablePadding sx={{ display: "block",  }}>
              <Link to={route} relative="route">
                <ListItemButton
                  onClick={handleMobileDrawerToggle}
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
                      {
                        color: "black", 
                      },
                      open || mobileOpen
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                          
                    ]}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
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
