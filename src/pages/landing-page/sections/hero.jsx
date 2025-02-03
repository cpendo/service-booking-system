import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

function Hero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        animation: "fadeIn 1s",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Find & Book Trusted Services Instantly
      </Typography>
      <Typography variant="h6" sx={{ marginTop: theme.spacing(1) }}>
        From home cleaning to personal training, we've got experts for you!
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: theme.spacing(2),
        }}
      >
        <input
          type="text"
          placeholder="Search for a service..."
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: theme.spacing(1),
            width: "300px",
          }}
        />
        <Button variant="contained" color="primary">
          Find a Service
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
