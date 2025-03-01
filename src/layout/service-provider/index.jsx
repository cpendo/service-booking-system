import { Outlet } from "react-router-dom";
import { useState } from "react";
import { CssBaseline, Box, Toolbar } from "@mui/material";

import TopBar from "./navigation/top-bar";
import SideBar from "./navigation/side-bar";

const ServiceProviderLayout = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
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
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar>
          <Outlet />
        </Toolbar>
      </Box>
    </Box>
  );
};

export default ServiceProviderLayout;
