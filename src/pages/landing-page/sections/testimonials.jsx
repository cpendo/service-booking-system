import React from "react";
import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";

function Testimonials() {
  const theme = useTheme();
  return (
    <Box sx={{ padding: "30px", backgroundColor: "#fff" }}>
      <Typography
        variant="h5"
        sx={{ marginBottom: theme.spacing(3), fontWeight: 600 }}
      >
        What Our Customers Say
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body2">"Great service!" - Jane Doe</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Testimonials;
