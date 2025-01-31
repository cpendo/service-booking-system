import * as React from "react";
import { useTheme, AppBar, Box, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleUserJoin = () => {
    navigate("/signup");
  };

  const handleProviderJoin = () => {
    navigate("/provider-register");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        top: 0,
        height: "64px",
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
            color="primary"
            sx={{
              border: "none",
              borderRadius: "30px",
              padding: "10px",
              textTransform: "none",
            }}
            onClick={handleUserJoin}
          >
            Join Us
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor: theme.palette.primary,
              borderRadius: "30px",
              padding: "10px",
              textTransform: "none",
            }}
            onClick={handleProviderJoin}
          >
            Become a Service Provider
          </Button>
        </Box>{" "}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
