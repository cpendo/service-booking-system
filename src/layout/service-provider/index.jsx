import { Outlet } from "react-router-dom";
import { useState } from "react";
import { CssBaseline, Box, Toolbar, useMediaQuery } from "@mui/material";

import TopBar from "./navigation/top-bar";
import SideBar from "./navigation/side-bar";

const ServiceProviderLayout = () => {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const isSmallScreen = useMediaQuery("(max-width: 800px)"); // Adjust breakpoint as needed
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* TopBar */}
      <TopBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />

      {/* SideBar */}
      <SideBar
        open={open}
        mobileOpen={mobileOpen}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 0,
          width: isSmallScreen
            ? "100vw"
            : open
            ? "calc(100vw - 240px)"
            : "calc(100vw - 70px)", // Adjust based on sidebar width
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default ServiceProviderLayout;
