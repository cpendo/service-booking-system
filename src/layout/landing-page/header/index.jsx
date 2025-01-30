import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Button} from "@mui/material";

function Header() {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        width: "100%",
        top: 0,
        borderBottom: `1px solid ${
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(0, 0, 0, 0.1)"
        }`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            <Button
              variant="outlined"
              sx={{ border: "none", borderRadius: "30px", padding: "10px" }}
            >
              Sign In
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
