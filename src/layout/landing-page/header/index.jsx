import * as React from "react";
import { useTheme, AppBar, Box, Toolbar, Button } from "@mui/material";

function Header() {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        top: 0,
        height: "64px", // Adjust this if needed
      }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            flexDirection: "row",
            gap: 1,
            marginRight: 5,
          }}
        >
          <Button
            variant="outlined"
            sx={{ border: "none", borderRadius: "30px", padding: "10px" }}
          >
            Join Us
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.primary,
              borderRadius: "30px",
              padding: "10px",
            }}
          >
            Become a service Provider
          </Button>
        </Box>{" "}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
