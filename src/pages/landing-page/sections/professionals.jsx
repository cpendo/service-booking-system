import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Button,
} from "@mui/material";
import hairstylist from "../../../assets/lashes.jpg";
import warus from "../../../assets/errand.avif";
import shopping from "../../../assets/shopper.avif";

function Professionals() {
  const theme = useTheme();
  return (
    <Box sx={{ padding: "30px", backgroundColor: "#f9f4ef" }}>
      <Typography
        variant="h5"
        sx={{ marginBottom: theme.spacing(3), fontWeight: 600 }}
      >
        Top-Rated Professionals
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <img src={hairstylist} alt="Profile" style={{ width: "100%" }} />
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2">⭐⭐⭐⭐⭐</Typography>
              <Button variant="contained">Book Now</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <img src={warus} alt="Profile" style={{ width: "100%" }} />
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2">⭐⭐⭐⭐⭐</Typography>
              <Button variant="contained">Book Now</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <img src={shopping} alt="Profile" style={{ width: "100%" }} />
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2">⭐⭐⭐</Typography>
              <Button variant="contained">Book Now</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Professionals;
