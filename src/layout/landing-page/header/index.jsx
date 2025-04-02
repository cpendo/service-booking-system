import React, { useState } from "react";
import {
  useTheme,
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserJoin = () => {
    navigate("/signup");
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          ServiceHub
        </Typography>
      </Box>
      <Divider />
      {/* <List>
        {[
          "Home",
          "Services",
          "How It Works",
          "Professionals",
          "Testimonials",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <WorkIcon />
              ) : index === 2 ? (
                <InfoIcon />
              ) : index === 3 ? (
                <PeopleIcon />
              ) : (
                <StarIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            ServiceHub
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {/* {["Home", "Services", "How It Works", "Professionals"].map(
              (page) => (
                <Button
                  key={page}
                  sx={{
                    mx: 1,
                    color: "text.primary",
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                >
                  {page}
                </Button>
              )
            )} */}
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
            onClick={handleUserJoin}
          >
            JOIN US
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
export default Header;
