import { drawerWidth, Drawer, DrawerHeader, MobileDrawer } from "./styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
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

import PropTypes from "prop-types";

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
        {["Bookings", "Services", "Stats", "Reviews"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
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
