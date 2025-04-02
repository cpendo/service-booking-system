import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function LandingPageLayout() {
  return (
    <>
      <Header />
      <Box sx={{ width: "100vw", marginTop: "14px" }}>
        {" "}
        <Outlet />
      </Box>
    </>
  );
}

export default LandingPageLayout;
